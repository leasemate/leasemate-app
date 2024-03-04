<?php

namespace App\Http\Requests;

use App\Rules\UniqueAmendmentFilename;
use Illuminate\Foundation\Http\FormRequest;

class StoreAmendmentRequest extends FormRequest
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
            'lease_amendment' => [
                'required',
                'file',
                'mimes:pdf',
                'max:51200',
                new UniqueAmendmentFilename()
            ],
        ];
    }

    public function messages(): array
    {
        return ['lease_amendment.max' => 'The upload file must not be great than 50MB'];
    }
}
