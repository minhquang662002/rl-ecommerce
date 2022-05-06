<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\Comment;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;

class CommentQuery extends Query
{
    protected $attributes = [
        'name' => 'comment',
        'description' => 'A query comment',
    ];

    public function type(): Type
    {
        return Type::listOf(Type::nonNull(GraphQL::type("Comment")));
    }

    public function args(): array
    {
        return [
            'id_comment'=> [
                'name'=> 'id_comment',
                'type'=> Type::nonNull(Type::string())
            ],
            'page'=> [
                'name'=> 'page',
                'type'=> Type::nonNull(Type::int())
            ]
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        return Comment::where("id_comment", $args['id_comment'])-> orderBy("timem", "DESC")->limit(10)->offset(($args['page'] - 1) * 10)-> get();
    }
}