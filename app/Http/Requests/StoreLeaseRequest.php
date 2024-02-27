<?php

namespace App\Http\Requests;


use App\Rules\UniqueLeaseFilename;
use Illuminate\Foundation\Http\FormRequest;

class StoreLeaseRequest extends FormRequest
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
            'lease_document' => [
                'required',
                'optional',
                'file',
                'mimes:pdf',
                'max:51200',
                new UniqueLeaseFilename()
            ],
        ];
    }

    public function messages(): array
    {
        return ['lease_document.max' => 'The upload file must not be great than 50MB'];
    }
}
