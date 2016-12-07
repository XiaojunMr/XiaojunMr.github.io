<?php
	// header("Content-Type: text/plain;charset=utf-8"); 
	header("Content-Type: application/json;charset=utf-8"); 
	header('Access-Control-Allow-Origin:*'); 
	header('Access-Control-Allow-Methods:POST,GET'); 
	
	$username = $_GET["username"];
	$password = $_GET["password"];
	$remember = $_GET["remember"];
	if(empty($username) || empty($password) || empty($remember)){
		echo "请求参数有错误，请检查";
	}
	date_default_timezone_set('PRC');
	$data = array(
		array("name"=>"lixj","age"=>22,"职位"=>"html5实习生","password"=>"000000"),
		array("name"=>"anhui","age"=>1800,"职位"=>"地址","password"=>"000000"),
		array("name"=>"lishuai","age"=>23,"职位"=>"html5实习生","password"=>"000000")
	);

	foreach ($data as $key => $value) {
		if($value["name"] == $username && $value["password"] == $password){
			$resulte = '{"msg":true}';
			break;
		}else{
			$resulte = '{"msg":false}';
		}
	}
	setcookie("username",$username,time());
	echo $resulte;
	echo date("Y-m-d H:i:s",time());
	echo date('Y-m-d H:i:s',time() + 100),date('Y-m-d H:i:s',time());
?>