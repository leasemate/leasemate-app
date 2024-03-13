<?php

namespace App\Http\Requests;

use App\Rules\UniqueFileName;
use Illuminate\Foundation\Http\FormRequest;

class StoreFileUploadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'upload_file' => [
                'required',
                'file',
                'mimes:pdf,jpg,jpeg,png,xls,xlsx',
                'max:51200',
                new UniqueFileName,
            ],
        ];
    }

    public function messages(): array
    {
        return ['upload_file.max' => 'The upload file must not be great than 50MB'];
    }
}
