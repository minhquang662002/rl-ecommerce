<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Models\ReviewProduct;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ReviewproductType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Reviewproduct',
        'description' => 'A type',
        'model'=> ReviewProduct::class
    ];

    public function fields(): array
    {
        return [    
            'id_product'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> id_product);
                }
            ],
            'id_user'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of user',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> id_user);
                }
            ],
            'content'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> content);
                }
            ],
            'image'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> image);
                }
            ],
            'timedl'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> timedl);
                }
            ],
            'timeup'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> timeup);
                }
            ],
            'avt_user'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> avt_user);
                }
            ],
            'user_name'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> user_name);
                }
            ],
            'rating'=> [
                'type'=> Type::nonNull(Type::float()),
                'description'=> 'rating product',
                'resolve'=> function($root, array $args) {
                    return $root-> rating;
                }
            ],
            'star'=> [
                'type'=> Type::nonNull(Type::int()),
                'description'=> 'star product',
                'resolve'=> function($root, array $args) {
                    return $root-> star;
                }
            ]
            
        ];
    }
}