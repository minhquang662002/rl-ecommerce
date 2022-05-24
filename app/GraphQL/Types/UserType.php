<?php

namespace App\GraphQL\Types;

use App\Models\UserShop;
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'User',
        'description'   => 'A user',
        // Note: only necessary if you use `SelectFields`
        'model'         => UserShop::class,
    ];

    public function fields(): array
    {
        return [
            'id_user' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The id of the user',
                // Use 'alias', if the database column is different from the type name.
                // This is supported for discrete values as well as relations.
                // - you can also use `DB::raw()` to solve more complex issues
                // - or a callback returning the value (string or `DB::raw()` result)
                'alias' => 'user_id',
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user',
                'resolve' => function ($root, array $args) {
                    // If you want to resolve the field yourself,
                    // it can be done here
                    return strtolower($root->email);
                }
            ],
            'phonenumber'=> [
                'type' => Type::string(),
                'description'=> 'The phonenumber of user',
                'resolve'=> function ($root, array $args) {
                    // Log::emergency($root);
                    // log::emergency(array $args);
                    return strtolower($root-> phone_number);
                }
            ],
            'gender'=> [
                'type' => Type::string(),
                'description'=> "The gender of user",
                'resolve'=> function ($root, array $args) {
                    return $root-> gender;
                }
            ],
            // Uses the 'getIsMeAttribute' function on our custom User model
            'isMe' => [
                'type' => Type::boolean(),
                'description' => 'True, if the queried user is the current user',
                'selectable' => false, // Does not try to query this from the database
            ],
            'fullname'=> [
                'type'=> Type::string(),
                'description'=> 'The fullname of user',
                'resolve'=> function ($root, array $args) {
                    return $root-> fullname;
                }
            ],
            'date_of_birth'=> [
                'type'=> Type::int(),
                'description'=> "The date of birth user",
                'resolve'=> function ($root, array $args) {
                    return $root-> date_of_birth;
                }
            ],
            'month_of_birth'=> [
                'type'=> Type::int(),
                'description'=> "The month of birth user",
                'resolve'=> function ($root, array $args) {
                    return $root-> month_of_birth;
                }
            ],
            'year_of_birth'=> [
                'type'=> Type::int(),
                'description'=> "The year of birth user",
                'resolve'=> function ($root, array $args) {
                    return $root-> year_of_birth;
                }
            ],
        ];
    }

    // You can also resolve a field by declaring a method in the class
    // with the following format resolve[FIELD_NAME]Field()
    protected function resolveEmailField($root, array $args)
    {
        return strtolower($root->email);
    }
}