<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Queue\InteractsWithQueue;
use Stancl\Tenancy\Contracts\SyncMaster;
use Stancl\Tenancy\Events\SyncedResourceChangedInForeignDatabase;
use Stancl\Tenancy\Events\SyncedResourceSaved;
use Stancl\Tenancy\Listeners\UpdateSyncedResource;

class CustomUpdateSyncedResource extends UpdateSyncedResource
{

//    public function handle(SyncedResourceSaved $event)
//    {
//        $syncedAttributes = $event->model->only($event->model->getSyncedAttributeNames());
//
//        $changedSyncedAttributes = array_intersect(array_keys($event->model->getChanges()), $event->model->getSyncedAttributeNames());
//        if(empty($changedSyncedAttributes)) {
//            return;
//        }
//
//        // We update the central record only if the event comes from tenant context.
//        if ($event->tenant) {
//            $tenants = $this->updateResourceInCentralDatabaseAndGetTenants($event, $syncedAttributes);
//        } else {
//            $tenants = $this->getTenantsForCentralModel($event->model);
//        }
//
//        $this->updateResourceInTenantDatabases($tenants, $event, $syncedAttributes);
//    }


    protected function updateResourceInCentralDatabaseAndGetTenants($event, $syncedAttributes)
    {
        /** @var Model|SyncMaster $centralModel */
        $centralModel = $event->model->getCentralModelName()
            ::where($event->model->getGlobalIdentifierKeyName(), $event->model->getGlobalIdentifierKey())
            ->first();

        // We disable events for this call, to avoid triggering this event & listener again.
        $event->model->getCentralModelName()::withoutEvents(function () use (&$centralModel, $syncedAttributes, $event) {
            if ($centralModel) {
                $centralModel->update($syncedAttributes);
                event(new SyncedResourceChangedInForeignDatabase($event->model, null));
            } else {
                // If the resource doesn't exist at all in the central DB,we create
                // the record with all attributes, not just the synced ones.
                $insertAttributes = [
                    ...$syncedAttributes,
                    ...[$event->model->getGlobalIdentifierKeyName() => $event->model->getAttribute($event->model->getGlobalIdentifierKeyName())]
                ];
                $centralModel = $event->model->getCentralModelName()::create($insertAttributes);
                event(new SyncedResourceChangedInForeignDatabase($event->model, null));
            }
        });

        // If the model was just created, the mapping of the tenant to the user likely doesn't exist, so we create it.
        $currentTenantMapping = function ($model) use ($event) {
            return ((string) $model->pivot->tenant_id) === ((string) $event->tenant->getTenantKey());
        };

        $mappingExists = $centralModel->tenants->contains($currentTenantMapping);

        if (! $mappingExists) {
            // Here we should call TenantPivot, but we call general Pivot, so that this works
            // even if people use their own pivot model that is not based on our TenantPivot
            Pivot::withoutEvents(function () use ($centralModel, $event) {
                $centralModel->tenants()->attach($event->tenant->getTenantKey());
            });
        }

        return $centralModel->tenants->filter(function ($model) use ($currentTenantMapping) {
            // Remove the mapping for the current tenant.
            return ! $currentTenantMapping($model);
        });
    }
}
