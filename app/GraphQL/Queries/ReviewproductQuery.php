<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\ReviewProduct;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\GraphQL;
use Rebing\GraphQL\Support\Facades\GraphQL as FacadesGraphQL;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class ReviewproductQuery extends Query
{
    protected $attributes = [
        'name' => 'reviewproduct',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return Type::listOf(Type::nonNull(FacadesGraphQL::type("Reviewproduct")));
    }

    public function args(): array
    {
        return [
            'id_product'=> [
                'name'=> 'id_product',
                'type'=> Type::string()
            ],
            'page'=> [
                'name'=> 'page',
                'type'=> Type::int()
            ]
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        return ReviewProduct::where("id_product", $args['id_product'])->orderBy("timem", "DESC")-> limit(1)-> offSet(($args['page'] - 1)* 1 )-> get();
    }
}