<?php

namespace App\Tenancy;

use Illuminate\Contracts\Cache\Factory;
use Illuminate\Routing\Route;
use Stancl\Tenancy\Contracts\Tenant;

use Stancl\Tenancy\Exceptions\TenantCouldNotBeIdentifiedByPathException;
use Stancl\Tenancy\Resolvers\PathTenantResolver;

class CustomPathTenantResolver extends PathTenantResolver
{

    public function resolveWithoutCache(...$args): Tenant
    {
        /** @var Route $route */
        $route = $args[0];

        if ($id = $route->parameter(static::$tenantParameterName)) {
            $route->forgetParameter(static::$tenantParameterName);

            if ($tenant = \App\Models\Tenant::where('tenant_domain', $id)->first()) {
                return $tenant;
            }
        }

        throw new TenantCouldNotBeIdentifiedByPathException($id);
    }
}
