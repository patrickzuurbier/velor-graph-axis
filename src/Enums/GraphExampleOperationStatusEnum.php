<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Enums;

enum GraphExampleOperationStatusEnum
{
    case PUBLISHED;
    case EXISTS;
    case REMOVED;
    case MISSING;
    case MODIFIED;
    case SOURCE_MISSING;
}
