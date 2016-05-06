var id=0;

function returning()
{
	$("#main").css("z-index","0");
	$("#returning").css("z-index","10");
}

function infopage()
{
	$("#main").css("z-index","0");
	$("#infopage").css("z-index","10");
}

function getid()
{
	id=document.getElementById("ID").value;
}



function login()
{
	id=document.getElementById("ID").value;
	window.location ="http://localhost:8080/index.php/?id="+id;
}