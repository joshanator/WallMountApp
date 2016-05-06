<link type="text/css" rel="stylesheet" href="/style.css"/>
<script src="/jquery.js"></script>
<script src="/script.js"></script>
<?php
    $db = mysqli_connect('localhost','WebApp','1000001870','WallMount');
	
	if ($db->connect_errno) {
    echo "Connect failed: %s\n" . $db->connect_error;
	}

	if(isset($_GET['id']))
	{
		$id = $_GET['id'];
		
		 $result = mysqli_query($db, 
     	"CALL dbo.VERIFY(" . $id . ")") or die("Query fail: " . mysqli_error());
		
		echo $result;
		
		if($result=="1")
		{
			echo '<style> #infopage{z-index:10;}</style>';
		}
		else
		{
			echo '<style> #main{z-index:10;}</style>';
		}
	}
	else
	{
		echo '<style> #main{z-index:10;}</style>';
	}
	mysqli_close($db);
?>

<html>
<head>
  <meta charset="utf-8">
</head>

	
<body>

<div id="main" class="info">

	<button>New User</button>
	<button onclick="returning()">Returning</button> 
	
</div>	
	

<div id="returning" class="info">
	Enter ID 
	</br>
	<input id="ID">
	<button onclick="login(); ">Submit</button>
</div>

<div id="infopage" class="info">
	Edit settings
	</br>
	Calender 
	<input type="checkbox" value="true" class="calender">
	</br>
	Weather
	<input type="checkbox" value="true" class="weather">
	</br>
</div>

	
	
	
	
</body>
</html>