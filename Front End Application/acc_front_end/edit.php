

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
	$uriSegments = explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

	$var = file_get_contents('http://localhost:5000/editfile/'.$uriSegments[3]);
	$final = json_decode($var,true);
	$data = $final['response'];
	$finalData = json_decode($data,true);

	$fileId = $uriSegments[3];
	if($finalData){
		$fileName = $finalData['filename'];
		$fileImage = $finalData['fileimage'];
	}


	 ?>

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
			<form method="post" action="http://localhost:5000/updatefile" enctype="multipart/form-data">
				<input type="hidden" name="fileid" value="<?= $fileId;?>">
				<input type="text" name="fileoldname" placeholder="File Name" class="form-control" value="<?= $fileName;?>"><br>
				<!-- <input type="text" name="fileImage" placeholder="File Image" class="form-control" id = "number1" value="<?= $fileImage;?>"><br> -->
				
				<input type = "file" name = "file"><br>

				
			

				<input type="submit" name="" value="submit" class="btn btn-info">
				
			</form>
		</div>
		<div class = "col-md-3"></div>
	</div>
	


	
</body>
</html>
