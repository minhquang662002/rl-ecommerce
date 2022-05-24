<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Models\ShopOfUser;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ShopOfUserType extends GraphQLType
{
    protected $attributes = [
        'name' => 'ShopOfUser',
        'description' => 'A shop of user',
        'model'=> ShopOfUser::class,
    ];
    

    public function fields(): array
    {
        return [
            'id_shop' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The id of shop',
                'alias'=> 'id_shop',
            ],
            'name_shop'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'The name of shop',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> name_shop);
                }
            ],
            'quantity_shop'=> [
                'type'=> Type::nonNull(Type::int()),
                'description'=> 'The quantity of shop',
                'resolve'=> function ($root, array $args) {
                    return ($root-> quantity_shop);
                }
                
            ],
            'avatar_shop'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'The quantity of shop',
                'resolve'=> function ($root, array $args) {
                    return strtolower($root-> avatar_shop);
                }
                
            ],
            'follower'=> [
                'type'=> Type::nonNull(Type::int()),
                'description'=> 'The quantity of shop',
                'resolve'=> function ($root, array $args) {
                    return ($root-> follower);
                }
                
            ],
            'joined'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'The quantity of shop',
                'resolve'=> function ($root, array $args) {
                    return strtolower($root-> joined);
                }
                
            ],
            'review'=> [
                'type'=> Type::nonNull(Type::int()),
                'description'=> 'The quantity of shop',
                'resolve'=> function ($root, array $args) {
                    return ($root-> review);
                }
                
            ]

        ];
    }
}