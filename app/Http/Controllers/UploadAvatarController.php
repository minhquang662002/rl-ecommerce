<?php

namespace App\Http\Controllers;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class UploadAvatarController extends Controller
{
    /**
     * 
     */
    private const folder_path= 'laravel';
    /**
     * set path
     *
     * @param [type] $path
     * @return void
     */
    public static function path($path) {
        return pathinfo($path, PATHINFO_FILENAME);
    }
    /**
     * Undocumented function
     *
     * @param [type] $image
     * @param [type] $filename
     * @return void
     */
    public static function upload($image, $filename) {
        $newFilename= str_replace(' ','_', $filename);
        $public_id= date('Y-m-d_His').'_'.$newFilename;
        $result= Cloudinary::upload($image, [
            "public_id"=> self::path($public_id),
            "folder"=>  self::folder_path,
        ])->getSecurePath();
        return $result;
    } 
    /**
     * Undocumented function
     *
     * @param [type] $path
     * @return void
     */
    public static function delete($path) {
        $public_id= self::folder_path.'/'.self::path($path);
        return Cloudinary::destroy($public_id);
    }
    /**
     * Undocumented function
     *
     * @param [type] $path
     * @param [type] $image
     * @param [type] $public_id
     * @return void
     */
    public static function replace($path, $image, $public_id) {
        self::delete($path);
        
    }
    
}