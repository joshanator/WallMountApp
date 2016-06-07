function select() {
	$(".layout").removeClass("selected");
	$(this).addClass("selected");
}

var step = 1;

function page(direc) {
	step += direc;
	if(step == 3)
		construct();
	if(step < 1) step = 1;
	if(step > 2) step = 2;
	
	$(".open").css("left", (-1 * direc * 100) + "%");
	$(".open").removeClass("open");
	$(".step" + step).addClass("open")
	
	if(step == 2)
		step2();
}


window.onload = function() {
	$(".layout").on("click", select);
}

function selectionBox(num) {
	return "<div class='card' style='background-color:white; width:500px; margin-left:auto; margin-right:auto;'> <select> <option value='calendar.html'>Calendar</option> <option value='weather.html'>Weather</option> <option value='time.html'>Time</option> </select></div>"
}


function step2() {
	$("div.step2").html("");
	for(var i = 0; i < $(".layout.selected").data("num"); i++)
		$("div.step2").append(selectionBox(i));
}

function construct() {
	var num  = $(".layout.selected").attr("id");
	var output = layout[num - 1][0] ;
	for(var i = 0; i < layoutProp[num].num; i++) {
		output += $("select")[i].selected + layout[num - 1][i + 1];
	}
	console.log(output);
	localStorage.setItem("WallMountPage", output);
	//$.post(construct.php, {page: output});
}


var layoutProp = [
	{
		num: "4",
		width:["50%", "50%", "50%", "50%"],
		height:["50%", "50%", "50%", "50%"]
	},
	{
		num: "3",
		width:["50%", "50%", "100%"],
		height:["50%", "50%", "50%"]
	},
	{
		num: "2",
		width:["50%", "50%"],
		height:["100%", "100%"]
	},
	{
		num: "3",
		width:["33%", "33%", "33%", "33%"],
		height:["100%", "100%", "100%"]
	}
]

var layout = [
	[
		"FirstPART(",
		")SecondPART(",
		")ThirdPART(",
		")fourthPART(",
		")fithPart"
	],
	[
		
	],
	[
		
	],
	[
		
	]
]


