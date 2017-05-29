<?php


  //  SALAH KONSEP

  include 'db_connect.php';
    $id=$_GET['patient'];

    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $date_daily=$request->date_daily;
    }

    $date=date_create($date_daily);
    $year  = date_format($date, "Y");
    $month = date_format($date, "m");

    $query_count = mysqli_query($connect, "SELECT COUNT(id_daily_h) AS count FROM daily_health_data JOIN patients WHERE id_pat=id_patient && id_pat='$id' && date_daily LIKE '$year-$month-%' ORDER BY date_daily DESC");
    $count = mysqli_fetch_assoc($query_count);
    $count = $count['count'];

    $result_set = array();
    if($count){
      for ($i=0; $i < $count; $i++) {
            $query_select = mysqli_query($connect, "SELECT name_patient, date_daily, tension_sistol, tension_diastol, sleep_duration, daily_description, comment,  FROM patients P JOIN daily_health_data D JOIN comments C WHERE P.id_patient=D.id_pat AND D.id_daily_h=C.id_daily_h AND D.id_pat='$id' ORDER BY C.date_time DESC");
            if(mysqli_num_rows($query_user)){
                for ($j=0; $j <= $i; $j++) {
                    $result = mysqli_fetch_assoc($query_select);
                }
                $result_set[$i]=$result;
            }
            else{
                $query_select2 = mysqli_query($connect, "SELECT * FROM daily_health_data WHERE id_pat='$id' ORDER BY date_daily DESC");
                for ($j=0; $j <= $i; $j++) {
                    $result = mysqli_fetch_assoc($query_select);
                }
                $result_set[$i]=$result;
            }
      }
      $data =array(
          'message' => "Get Data Daily Health And Comments Succses",
          'data' => $result_set,
          'status' => "200"
        );
    }
    else{
      $data =array(
          'message' => "Get Data Daily Health Failed",
          'status' => "404"
        );
    }




      echo json_encode($data);
?>
