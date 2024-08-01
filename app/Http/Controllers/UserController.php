<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserAssetResource;
use App\Models\Team;
use App\Models\User;
use App\Notifications\CreatePassword;
use Exception;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\PasswordBroker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //        $this->authorize('user read');

        return inertia()->render('Users/Index', [
            'users' => User::with('roles')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request, PasswordBroker $passwordBroker)
    {
        try {

            DB::beginTransaction();

            $user = User::create([
                ...$request->only('name', 'email', 'position'),
                'password' => bcrypt(Str::random()),
                'global_id' => explode('.', tenant('domain'))[0],
            ]);

            //            $user->syncRoles($request->user_roles);
            $user->syncRoles([1]);

            $user->ownedTeams()->save(Team::forceCreate([
                'user_id' => $user->id,
                'name' => explode(' ', $user->name, 2)[0] . "'s Team",
                'personal_team' => true,
            ]));

            DB::commit();

            session()->flash('success', $user->name . ' User created successfully');

        } catch (Exception $e) {
            DB::rollBack();
            session()->flash('error', $e->getMessage());

            return redirect()->back()->withInput();
        }

        return redirect()->route('users.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Users/Create', [
            'roles' => $this->getRoles(),
        ]);
    }

    protected function getRoles()
    {
        return Role::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia()->render('Users/Edit', [
            'user' => $user,
            'user_roles' => $user->roles->pluck('name')->toArray(),
            'roles' => $this->getRoles(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        try {

            DB::beginTransaction();

            if ($request->validated('email') !== $user->email &&
                $user instanceof MustVerifyEmail) {

                $this->updateVerifiedUser($user, [...$request->validated(), 'email_verified_at' => null]);
            } else {
                $user->update($request->validated());
            }

//            $user->syncRoles($request->user_roles);

            DB::commit();

            session()->flash('success', $user->name . ' User updated successfully');

        } catch (Exception $e) {
            DB::rollBack();
            session()->flash('error', $e->getMessage());

            return redirect()->back()->withInput();
        }

        return redirect()->route('users.index');
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param array<string, string> $input
     */
    protected function updateVerifiedUser(User $user, array $input): void
    {
        $user->update($input);

        $user->sendEmailVerificationNotification();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {

            $user->delete();

            session()->flash('success', $user->name . ' User deleted successfully');

        } catch (Exception $e) {
            session()->flash('error', $e->getMessage());
        }

        return redirect()->route('users.index');
    }

    public function resendInvitation(User $user)
    {
        try {
            $password_token = Password::broker()->createToken($user);
            $user->notify(new CreatePassword($password_token));

            session()->flash('success', 'Invitation resent successfully');

        } catch (Exception $e) {
            session()->flash('error', $e->getMessage());
        }

        return redirect()->route('users.index');
    }

    public function searchUsers()
    {
        $users = User::search(request('q'))->get();

        return response()->json(UserAssetResource::collection($users));
    }
}
