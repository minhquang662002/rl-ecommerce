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

class StaticsticQuery extends Query
{
    protected $attributes = [
        'name' => 'staticstic',
        'description' => 'get staticstic of specific shop'
    ];

    public function type(): Type
    {
        return Type::nonNull(Type::listOf(Type::nonNull(GraphQL::type("Staticstic"))));
    }

    public function args(): array
    {
        return [
            "id_user"=> [
                "name"=> "id_user",
                "type"=> Type::nonNull(Type::string())
            ],
            "id_shop"=> [
                "name"=> "id_shop",
                "type"=> Type::nonNull(Type::string())
            ]
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();
        if(isset($args['id_user'] ) && isset($args["id_shop"])) {
            return DB::table("staticstic_shop")->where("id_shop", $args['id_shop'])->where("id_user", $args["id_user"])->select("day", "orders", "revenue", "access_times")->orderBy("day", "desc")->limit(60)->get();
        }
        return [''];
    }
}