<?php

include("dbConnection.php");

$getContent = stripslashes(file_get_contents("php://input"));
$data = json_decode($getContent);
$name = $data->name;
$email = $data->email;
$password = $data->pass;

$sql = "INSERT INTO student(name, email,password) VALUES ('$name', '$email','$password')";

if(!empty($name) && !empty($email) && !empty($password)){
    if($conn->query($sql) == TRUE){
        echo "Student saved sucessfully";
    }
    else{
        echo "Unable to save student";
    }
}
else{
    echo "Fill all fields";
}
?>