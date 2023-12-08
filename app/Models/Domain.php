<?php

namespace App\Models;


use Stancl\Tenancy\Database\Models\Domain as BaseDomain;


class Domain extends BaseDomain
{

//    public static function booted()
//    {
//        static::creating(function ($domain) {
//            $domain->domain = $domain->domain.'.'.config('tenancy.central_domains')[0];
//        });
//    }

}
