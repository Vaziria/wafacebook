<?php
ini_set("auto_detect_line_endings", "1");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('memory_limit', '536870912');
error_reporting(E_ALL);

require_once './vendor/autoload.php';

use App\Csv;

$json = file_get_contents('php://input');
$datas = json_decode($json, true);

$csv = new Csv('bambank.csv');
$csv->load();


foreach($datas as $data){
    $csv->add($data);
}

// print_r($csv->data);

$csv->save();