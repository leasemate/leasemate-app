<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\SoftDeletes;

class ArchiveScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        // Determine the deleted_at column
        $deletedAtColumn = $model->getQualifiedDeletedAtColumn();

        // Check for 'archive' query parameter
        if (request()->has('archive') && request()->get('archive') == 1) {
            // Apply only trashed condition
            $builder->withoutGlobalScope(SoftDeletes::class)
                ->whereNotNull($deletedAtColumn);
        } else {
            // Default soft delete behavior: exclude trashed records
            $builder->whereNull($deletedAtColumn);
        }
    }
}
