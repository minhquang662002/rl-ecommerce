<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Models\Comment;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class CommentType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Comment',
        'description' => 'A type',
        'model'=> Comment::class,
    ];

    public function fields(): array
    {
        return [
            'id_comment'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->id_comment);   
                }
            ],
            'id_user'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'id user of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->id_user);   
                }
            ],
            'content'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'content of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->content);   
                }
            ],
            'type_comment'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'type comment of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->type_comment);   
                }
            ],
            'timedl'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'time dl of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->timedl);   
                }
            ],
            'timeup'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'time up of comment',
                'resolve'=> function($root, array $args) {
                    return (int)($root->timeup);   
                }
            ],
            'avt_user'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'avt user  of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->avt_user);   
                }
            ],
            'user_name'=> [
                'type'=> Type::nonNull(Type::string()),
                'description'=> 'user name of comment',
                'resolve'=> function($root, array $args) {
                    return strtolower($root->user_name);   
                }
            ],
            
        ];
    }
}