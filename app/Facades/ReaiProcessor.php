<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class ReaiProcessor extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'reai_processor';
    }
}
