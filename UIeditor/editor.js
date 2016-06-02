function select() {
	$(".layout").removeClass("selected");
	$(this).addClass("selected");
}

var step = 1;

function page(direc) {
	step += direc;
	
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
	return "<div style='background-color:white; width:" + layoutProp[$(".layout.active").data("num")].width[num] + "; height:" + layoutProp[$(".layout.active").data("num")].height[num] + "'><select> <option value='calendar'>Calendar</option> <option value='weather'>Weather</option> <option value='time'>Time</option> </select></div>"
}


function step2() {
	for(var i = 0; i < $(".layout.active").data("num"); i++)
		$(".step2").append(selectionBox(i));
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