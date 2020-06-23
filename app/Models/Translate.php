<?php
namespace App\Models;
use App;
use Illuminate\Database\Eloquent\Model;
use App\Models\Lang;

class Translate extends Model {

    public function getTranslate($field, $current_lang = null){
        $langs = Lang::all();
        $pieces = explode("@|;", $this->$field);
        if(count($pieces) == 1)
            //dd($attributes[$key]);
            return $this->$field;
        //dd($pieces);
        //dd(count($pieces));
        /*if(count($pieces) < (count($langs)-1)){
            return $this->$field;
        }*/
        if(!$current_lang){
            $current_lang = App::getLocale();
        }
        $field = $this->getLangsParts($langs, $pieces, $current_lang);
        return $field;
    }

    public function getAttributeTranslate($key, $current_lang = null){
        $langs = Lang::all();
        $articleArray =  $this->toArray();
       // dd($articleArray['attributes']);
        $attributes = json_decode($articleArray['attributes'], true);
        //dd($attributes);
        if(isset($attributes[$key]) AND $attributes[$key]) {
            $pieces = explode("@|;", $attributes[$key]);
            //dd($pieces);
            if (count($pieces) == 1)
                //dd($attributes[$key]);
                return $attributes[$key];
            if (!$current_lang) {
                $current_lang = App::getLocale();
            }

            $field = $this->getLangsParts($langs, $pieces, $current_lang);
            //dd($field);
            return $field;
        }
        return false;
    }
    public function getLangsParts($data, $parts, $var_lang, $part = null){
        foreach($data as $key => $item){
            if($var_lang == $item['lang'] && isset($parts[$key]) && $parts[$key]){
                $part = $parts[$key];
                //dd($part);
            }
        }
        return $part;
    }
}