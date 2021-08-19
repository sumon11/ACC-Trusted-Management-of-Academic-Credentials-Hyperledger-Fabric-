

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

	<div class="clear"><br><br><br><br>
	<div class = "row">
		<div class = "col-md-3"></div>
		<div class = "col-md-6">
			<a href="index.php" class="btn btn-primary">Certificates</a>&nbsp;&nbsp;
			<a href="all_student.php" class="btn btn-success">All Students</a>&nbsp;&nbsp;
			<a href="add_student.php" class="btn btn-info">Add Marks</a>&nbsp;&nbsp;
			<a href="all_student.php" class="btn btn-success">All Marks</a>&nbsp;&nbsp;
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-md-3"></div>
		<div class="col-md-6"><h4>Add New Student</h4></div>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class = "col-md-3"></div>
		<div class = "col-md-6">
			<form method="post" action="http://localhost:8080/api/addStudent" enctype="multipart/form-data">
				<input type="text" name="studentKey" placeholder="Key" class="form-control"><br>
				<input type="text" name="studentid" placeholder="Stuent ID" class="form-control"><br>
				<input type="text" name="name" placeholder="Student Name" class="form-control" id = "number1"><br>
				<input type="text" name="department" placeholder="Department" class="form-control" id = "number1"><br>
				<input type="text" name="semester" placeholder="Semester" class="form-control" id = "number1"><br>
				
				
				

				
			

				<input type="submit" name="" value="submit" class="btn btn-info">
				
			</form>
		</div>
		<div class = "col-md-3"></div>
	</div>
	


	
</body>
</html>
