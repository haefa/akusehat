<?php
    include 'db_connect.php';
    $id = $_GET['doctor'];

    $query_check = mysqli_query($connect, "SELECT * FROM doctors WHERE id_doctor='$id'");

    if(mysqli_num_rows($query_check)){
      $data =array(
          'message' => "Send Profile Picture Doctors Succses",
          'status' => "200"
      );
    }
    else{
      $data =array(
          'message' => "Send Profile Picture Doctors Failed",
          'status' => "404"
      );
    }

    echo json_encode($data);

?>
