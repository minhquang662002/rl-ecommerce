<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Models\Notification;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class NotificationType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Notification',
        'description' => 'A notification type',
        'model'=> Notification::class
    ];

    public function fields(): array
    {
        return [
            'user_id'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of notification',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> user_id);
                }
            ],
            'avatar_user'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'avatar of notification',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> avatar_user);
                }
            ],
            'content'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'avatar of notification',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> content);
                }
            ],
            'time'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'avatar of notification',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> time);
                }
            ],
            'username'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'avatar of notification',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> username);
                }
            ],
            'read'=> [
                'type'=> Type::nonNull(Type::boolean()),
                'description'=> 'avatar of notification',
                'resolve'=> function($root, array $args) {
                    return strtolower($root-> read);
                }
            ],
        ];
    }
}