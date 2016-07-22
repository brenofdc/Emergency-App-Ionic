<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/html; charset=UTF-8");

    //formulário

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    // TRANSFORMA O S DADOS
    $nome = $objData->nome;
    $endereco = $objData->endereco;
    $num_pacientes = $objData->num_pacientes;
    $nota = $objData->nota;

    // LIMPA OS DADOS
    $nome = stripslashes($nome);
    $endereco = stripslashes($endereco);
    $num_pacientes = stripslashes($num_pacientes);
    $nota = stripslashes($nota);

    $nome = trim($nome);
    $endereco = trim($endereco);
    $num_pacientes = trim($num_pacientes);
    $nota= trim($nota);

    // INSERE OS DADOS
    $db = new PDO("mysql:host=mysql.hostinger.com.br;dbname=u554362051_emgy", "u554362051_john", "010894");


    if($db){
        $sql = "insert into Hospital values(NULL,'".$nome."','" .$endereco."','" .$num_pacientes."','" .$nota."')";
        $query = $db->prepare($sql);
        $query ->execute();
        echo "Os dados foram inseridos com sucesso. Obrigado e bem vindo!";
    }else{
        echo "Não foi possivel iserir os dados! Tente novamente mais tarde.";
    };
