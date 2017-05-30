<?php
    include 'db_connect.php';
    $id = $_GET['patient'];

    $query_check = mysqli_query($connect, "SELECT * FROM patients WHERE id_patient='$id'");

    if(mysqli_num_rows($query_check)){
      $data =array(
          'message' => "Send Profile Picture Patients Succses",
          'status' => "200"
      );
    }
    else{
      $data =array(
          'message' => "Send Profile Picture Patients Failed",
          'status' => "404"
      );
    }

    echo json_encode($data);

?>
