

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
	<div class="row">
		<div class="col-md-3"></div>
		<div class="col-md-6"><h4>Add New File</h4></div>
		<div class="col-md-3"><a href="index.php" class="btn btn-primary">All Records</a></div>
	</div>
	<hr>
	<div class="row">
		<div class = "col-md-3"></div>
		<div class = "col-md-6">
			<form method="post" action="http://localhost:8080/api/addcar" enctype="multipart/form-data">
				<input type="text" name="fKey" placeholder="Key" class="form-control"><br>
				<input type="text" name="carid" placeholder="Stuent ID" class="form-control"><br>
				<input type="text" name="num1" placeholder="Student Name" class="form-control" id = "number1"><br>
				
				
				<input type = "file" name = "file"><br>

				
			

				<input type="submit" name="" value="submit" class="btn btn-info">
				
			</form>
		</div>
		<div class = "col-md-3"></div>
	</div>
	


	
</body>
</html>
