<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Contracts;

use App\Services\Graphs\Contracts\GraphInterface;

interface LineGraphInterface extends GraphInterface
{
    public const string TYPE = 'axis.line';
}
