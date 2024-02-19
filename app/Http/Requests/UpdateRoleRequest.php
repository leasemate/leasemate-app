<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

class UpdateRoleRequest extends FormRequest
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
    public function rules(Role $role): array
    {
        return [
            'name' => [
                'required',
                Rule::unique('roles')->ignore($this->route('role', $page.props.tenant_domain)->id)
            ],
            'role_permissions' => 'required|array',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'A role name is required',
            'name.unique' => 'A role with that name already exists',
            'role_permissions.required' => 'At least one permission is required',
        ];
    }
}
