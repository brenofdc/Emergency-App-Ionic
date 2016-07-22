<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

$data = file_get_contents("php://input");
$objData = json_decode($data);


$dns = "mysql:host=mysql.hostinger.com.br;dbname=u554362051_emgy";
$user = 'u554362051_john';
$pass = '010894';

$counter = $objData->counter;
$token = $objData->token;

try {
	$con = new PDO($dns, $user, $pass);

	if(!$con){
		echo "Não foi possivel conectar com Banco de Dados!";
	}

	if ($token === "1f3d2gs3f2fg3as2fdg3re2t1we46er45" && isset($token)) {


	$query = $con->prepare('SELECT * FROM Hospital LIMIT '.$counter.', 6');

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id": "'.$result["id"].'",';
			$out .= '"nome": "'.$result["nome"].'",';
			$out .= '"endereco": "'.$result["endereco"].'",';
			$out .= '"num_pacientes": "'.$result["num_pacientes"].'",';
			$out .= '"nota": "'.$result["nota"].'"}';
		}
		$out .= "]";
		echo $out;

	}

} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
