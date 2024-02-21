<?php

namespace App\Http\Requests;

use App\Rules\ValidDomain;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterTenantRequest extends FormRequest
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
        return [
            'company_name' => 'required|string|max:255',
            'domain' => ['required', 'string', 'max:255', 'unique:domains', new ValidDomain],
            'name' => 'required|string|max:255',
            'email' => 'required|unique:users|string|email|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }

    public function prepareForValidation()
    {
        $this->merge([
            'domain' => strtolower($this->domain).'.'.config('tenancy.central_domains')[0],
        ]);
    }
}
