<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AssetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'address' => $this->address,
            'gross_leasable_area' => $this->gross_leasable_area,
            'asset_photo_url' => $this->asset_photo ? Storage::url($this->asset_photo) : null,
            'asset_photo' => $this->asset_photo ?? null,
            'photo_filename' => $this->photo_filename ?? null,
            'associates' => UserAssetResource::collection($this->whenLoaded('associates')),
        ];
    }
}
