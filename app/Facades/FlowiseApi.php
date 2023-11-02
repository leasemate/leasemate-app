<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class FlowiseApi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'flowise_api';
    }
}
