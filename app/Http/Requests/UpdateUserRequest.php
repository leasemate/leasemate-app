<?php

namespace App\Http\Requests;

use App\Models\CentralUser;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $centralUser = CentralUser::where('email', $this->route('user')->email)->first();

        return [
            'name' => 'required',
            'email' => ['required', 'email', 'max:255', Rule::unique('mysql.users')->ignore($centralUser->id)],
            'position' => 'nullable',
            'user_roles' => 'required|array',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.email' => 'A valid email is required',
            'email.unique' => 'A user with that email already exists',
            'user_roles.required' => 'You must assign a role to this user.',
        ];
    }
}
