<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class StaticsticType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Staticstic',
        'description' => 'Staticstic of shop'
    ];

    public function fields(): array
    {
        return [
            "day"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "Day staticstic",
                "resolve"=> function ($root, array $args) {
                    return $root-> day;
                }
            ],
            "orders"=> [
                "type"=> Type::nonNull(Type::int()),
                "description"=> "Orders staticstic",
                "resolve"=> function ($root, array $args) {
                    return $root-> orders;
                }
            ],
            "revenue"=> [
                "type"=> Type::nonNull(Type::int()),
                "description"=> "revenue staticstic",
                "resolve"=> function ($root, array $args) {
                    return $root-> revenue;
                }
            ],
            "access_times"=> [
                "type"=> Type::nonNull(Type::int()),
                "description"=> "access_times staticstic",
                "resolve"=> function ($root, array $args) {
                    return $root-> access_times;
                }
            ]
        ];
    }
}