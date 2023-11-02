<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class ZepApi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'zep_api';
    }
}
