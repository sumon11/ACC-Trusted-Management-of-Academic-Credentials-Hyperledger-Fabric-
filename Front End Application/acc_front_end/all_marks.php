

<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

	<?php

	$var = file_get_contents('http://localhost:8080/api/queryAllMarks');
	$final = json_decode($var,true);
	$data = $final['response'];
	$finalData = json_decode($data,true);
	
?>
<div class="clear"><br><br><br><br>
	<div class = "row">
		<div class = "col-md-3"></div>
		<div class = "col-md-6">
			<a href="index.php" class="btn btn-primary">Certificates</a>&nbsp;&nbsp;
			<a href="add_student.php" class="btn btn-success">Add Students</a>&nbsp;&nbsp;
			<a href="add_marks.php" class="btn btn-info">Add Marks</a>&nbsp;&nbsp;
			<a href="all_marks.php" class="btn btn-success">All Marks</a>&nbsp;&nbsp;
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-md-2"></div>
		<div class="col-md-6"><h4>All Result</h4></div>
		</div>
	</div>
	<div class="row">
		<div class = "col-md-2"></div>
		<div class = "col-md-7">
			<table class="table table-bordered table-striped table-hover">
				<thead>
					<th>Key</th>
					<th>Student ID</th>
					<th>Theory</th>
					<th>Practical</th>
				
					
					
					
					
				</thead>
				<tbody>
					<?php foreach($finalData as $val){
						$record = $val['Record'];
						?>
						<tr>
							<td><?= $val['Key'];?></td>
							<td><?= $record['studentid'];?></td>
							<td><?= $record['sessional'];?></td>
							<td><?= $record['practical'];?></td>
							
							
						
						</tr>
					<?php }?>
				</tbody>
			</table>
		</div>
		<div class = "col-md-3"></div>
	</div>

</body>
</html>
