<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\ShopOfUser;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class ShopOfUserQuery extends Query
{
    /**
     * name of query
     *
     * @var array
     */
    protected $attributes = [
        'name' => 'shopOfUser',
        'description' => 'A query',
        'middleware' => ['shopofusermiddleware'],
    ];
    /**
     * type of query
     *
     * @return Type
     */
    public function type(): Type
    {
        return Type::nonNull(Type::listOf(Type::nonNull(GraphQL::type("ShopOfUser"))));    
    }
    /**
     * agrument pass to query
     *
     * @return array
     */
    public function args(): array
    {
        return [
            'id_shop' => [
                'name'=> 'id_shop',
                'type' => Type::string(),
            ]
        ];
    }
    /**
     * resolver
     *
     * @param [type] $root
     * @param array $args
     * @param [type] $context
     * @param ResolveInfo $resolveInfo
     * @param Closure $getSelectFields
     * @return void
     */
    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();
        if(isset($args['id_shop'])) {
            return ShopOfUser::where("id_shop", $args['id_shop'])->get();
        }
        return null;
        
    }
}