<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\Notification;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;

class NotificationMutation extends Mutation
{
    protected $attributes = [
        'name' => 'notification',
        'description' => 'A mutation of notification'
    ];

    public function type(): Type
    {
        return Type::listOf(Type::nonNull(GraphQL::type("Notification")));
    }

    public function args(): array
    {
        return [
            'user_id' => [
                'name'=> 'user_id',
                'type' => Type::string(),
            ],
            'avatar_user' => [
                'name'=> 'avatar_user',
                'type' => Type::string(),
            ],
            'content' => [
                'name'=> 'content',
                'type' => Type::string(),
            ],
            'read' => [
                'name'=> 'read',
                'type' => Type::boolean(),
            ],
            'time' => [
                'name'=> 'time',
                'type' => Type::string(),
            ],
            'user_name' => [
                'name'=> 'user_name',
                'type' => Type::string(),
            ]
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();
        return Notification::insert([
            'user_id'=> $args['user_id'],
            'avatar_user'=> $args['avatar_user'],
            'content'=> $args['content'],
            'read'=> $args['read'],
            'time'=> $args['time'],
            'user_name'=> $args['user_name'],
        ]);
    }
}