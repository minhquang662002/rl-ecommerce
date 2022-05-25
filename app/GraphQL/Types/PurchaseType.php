<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class PurchaseType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Purchase',
        'description' => 'A purchase type'
    ];

    public function fields(): array
    {
        return [
            "id_product"=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id product of review',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> id_product);
                }
            ],
            "quantity"=> [
                "type"=> Type::nonNull(Type::int()),
                "description"=> "quantity product",
                "resolve"=> function($root, array $args){ 
                    return $root-> quantity;
                }
            ],
            "cost"=> [
                "type"=> Type::nonNull(Type::int()),
                "description"=> "cost product",
                "resolve"=> function($root, array $args){ 
                    return $root-> cost;
                }
            ],
            "id_seller"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "seller of product",
                "resolve"=> function($root, array $args){ 
                    return strtolower($root-> id_seller);
                }
            ],
            "state"=> [
                "type"=> Type::nonNull(Type::int()),
                "description"=> "state of product",
                "resolve"=> function($root, array $args){ 
                    return $root-> state;
                }
            ],
            "timeu"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "time up load of product",
                "resolve"=> function($root, array $args){ 
                    return strtolower($root-> timeu);
                }
            ],
            "title"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "title of product",
                "resolve"=> function($root, array $args){ 
                    return strtolower($root-> title);
                }
            ],
            "size"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "size of product",
                "resolve"=> function($root, array $args){ 
                    return strtolower($root-> size);
                }
            ],
            "imageindex"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "imgage of product",
                "resolve"=> function($root) {
                    return strtolower($root-> imageindex);
                }
            ],
            "id_shop"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "id shop",
                "resolve"=> function($root) {
                    return strtolower($root-> id_shop);
                }
            ],
            "name_shop"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "name of shop",
                "resolve"=> function($root) {
                    return strtolower($root-> name_shop);
                }
            ],
            "avatar_shop"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "avatar of of shop",
                "resolve"=> function($root) {
                    return strtolower($root-> avatar_shop);
                }
            ],
            "color"=> [
                "type"=> Type::nonNull(Type::string()),
                "description"=> "color of of shop",
                "resolve"=> function($root) {
                    return strtolower($root-> color);
                }
            ]
            
        ];
    }
}