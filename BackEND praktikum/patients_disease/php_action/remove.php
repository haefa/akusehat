<?php
require_once 'db_connect.php';

if($_POST) {
  $id_history = $_POST['id_history'];

  $sql = "UPDATE patients_disease SET active = 2 where id_history = {$id_history}";
  if($connect->query($sql) === TRUE) {
    echo "<p>Successfully removed!</p>";
    echo "<a href='../index.php'><button type='button'>Back</button></a>";
  } else {
    echo "Error updating record : ".$connect->error;
  }
  $connect->close();
}
 ?>
