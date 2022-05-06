<?php

namespace App\GraphQL\Queries;

use App\Models\UserShop;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Query;

class UsersQuery extends Query
{
    protected $attributes = [
        'name' => 'user',
    ];
    /**
     * 
     *
     * @return Type
     */
    public function type(): Type
    {
        return Type::nonNull(Type::listOf(Type::nonNull(GraphQL::type('User'))));
    }

    public function args(): array
    {
        return [
            'id_user' => [
                'name' => 'id_user', 
                'type' => Type::string(),
            ]
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        if (isset($args['id_user'])) {
            return UserShop::where('id_user' , $args['id_user'])->get();
        }

        return UserShop::all();
    }
}