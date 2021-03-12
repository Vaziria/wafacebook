<?php

namespace App;

class Csv {
    public $fname;
    public $keys = ['id', 'user', 'msg', 'time'];
    public $data = [];
    public function __construct($fname){
        $this->fname = $fname;
        $this->data = [];
    }

    public function find($hash){

        foreach($this->data as $data){
            if($data['id'] == $hash){
                return true;
            }
        }


        return false;
    }

    public function add($data){
        $hash = $this->hash($data);

        if(count($this->data) == 0){
            $data['id'] = $hash;
            array_unshift($this->data, $data);

            return true;
        }

        if(!$this->find($hash)){
            $data['id'] = $hash;
            array_unshift($this->data, $data);
        }
        return true;

    }

    public function hash($data, $get = ['user', 'msg']){
        $test = '';
        foreach($data as $i => $value){
            if(in_array($i, $get)){
                $test .= $value;
            }
        }

        $test = md5($test);
        return substr($test, -6);
    }

    public function load(){
        if(!file_exists($this->fname)){
            return false;
        }
        $file = fopen($this->fname, "r");

        while (($data = fgetcsv($file, 9000, ",")) !== FALSE){
            $hasil = [];
            foreach($this->keys as $i => $key){
                $hasil[$key] = $data[$i];
            }

            array_unshift($this->data, $hasil);
        }

        fclose($file);
    }

    public function save(){
        $datas = $this->data;

        $fp = fopen($this->fname, 'w');

        foreach ($datas as $data) {
            $hasil = [];
            foreach($this->keys as $i => $key){
                array_push($hasil, $data[$key]);
            }
            fputcsv($fp, $hasil);
        }

        fclose($fp);

    }
}