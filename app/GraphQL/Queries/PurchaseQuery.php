<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\DB;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class PurchaseQuery extends Query
{
    protected $attributes = [
        'name' => 'purchase',
        'description' => 'A purchase query'
    ];

    public function type(): Type
    {
        return Type::nonNull(Type::listOf(Type::nonNull(GraphQL::type("Purchase"))));
    }

    public function args(): array
    {
        return [
            "id_user"=> [
                "name"=> "id_user",
                "type"=> Type::nonNull(Type::string())
            ],
            "type"=> [
                "name"=> "type",
                "type"=> Type::nonNull(Type::int())
            ],
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();
        if(isset($args["id_user"]) && isset($args["type"])) {
            return DB::table("order_product")->join("products", "order_product.id_product", "=", "products.id_product")->join("shop_of_users", "products.id_shop", "=", "shop_of_users.id_shop")->where("order_product.id_buyer", $args["id_user"])->where("order_product.state", $args["type"])-> select("order_product.size as size","order_product.quantity as quantity","order_product.id_product as id_product", "order_product.cost as cost","products.title as title", "imageindex", "order_product.id_buyer as id_buyer", "order_product.state as state", "order_product.timeu as timeu", "order_product.id_seller as id_seller", "products.id_shop as id_shop", "shop_of_users.name_shop as name_shop", "shop_of_users.avatar_shop as avatar_shop", "order_product.color as color")->get();
        }
        return [
            'The purchase works',
        ];
    }
}