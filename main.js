$(document).ready(function(){
	var reset = false;
	var buzzer = $("#buzzer")[0];
	function countdown(input1, input2){
		var interval = setInterval(function(){
			if(reset == true){
				clearInterval(interval);
			}
			timer = input1.split(":");
			minutes = parseInt(timer[0], 10);
			seconds = parseInt(timer[1], 10);
			--seconds;
			minutes = (seconds < 0) ? --minutes : minutes;
			seconds = (seconds < 0) ? 59 : seconds;
			seconds = (seconds < 10) ? '0' + seconds : seconds;
			$(".time").html(minutes + ':' + seconds);
			if(minutes == 0 && seconds == 0){
				buzzer.play();
				countdown1(input2);
				clearInterval(interval);
			}
			input1 = minutes + ':' + seconds;
		}, 1000);
	}
	function countdown1(input2){
		var interval1 = setInterval(function(){
			if (reset == true){
				clearInterval(interval1);
			}
			timer = input2.split(":");
			minutes = parseInt(timer[0], 10);
			seconds = parseInt(timer[1], 10);
			--seconds;
			minutes = (seconds < 0) ? --minutes : minutes;
			seconds = (seconds < 0) ? 59 : seconds;
			seconds = (seconds < 10) ? '0' + seconds : seconds;
			$(".time").html(minutes + ':' + seconds);
			if(minutes == 0 && seconds == 0){
				buzzer.play();
				clearInterval(interval1);
			}
			input2 = minutes + ':' + seconds;
		}, 1000);
	}
	$(".arrow1").on('click', function(){
		var sessionTime = $(".session").html();
		sessionTime = sessionTime.split(":");
		if(sessionTime[0] > 0){
			sessionTime[0] -= 1;
			sessionTime = sessionTime[0] + ":" + sessionTime[1];
			$(".session").html(sessionTime);
			$(".time").html(sessionTime);
		}
	});
	$(".arrow2").on('click', function(){
		var sessionTime = $(".session").html();
		sessionTime = sessionTime.split(":");
		sessionTime[0]++;
		sessionTime = sessionTime[0] + ":" + sessionTime[1];
		$(".session").html(sessionTime);
		$(".time").html(sessionTime);
	});
	$(".arrow3").on('click', function(){
		var sessionTime = $(".break").html();
		sessionTime = sessionTime.split(":");
		if(sessionTime[0] > 5){
			sessionTime[0] -= 5;
			sessionTime = sessionTime[0] + ":" + sessionTime[1];
			$(".break").html(sessionTime);
		}
	});
	$(".arrow4").on('click', function(){
		var sessionTime = $(".break").html();
		sessionTime = sessionTime.split(":");
		sessionTime[0] = Number(sessionTime[0]) + 5;
		sessionTime = sessionTime[0] + ":" + sessionTime[1];
		$(".break").html(sessionTime);
	});
	$(".start").on('click', function(){
		reset = false;
		$(".sessiontime").fadeOut();
		$(".breaktime").fadeOut();
		$(".start").fadeOut();
		$(".reset").animate({ opacity: '1'},{ duration: 3000});
		$(".timer").animate({ bottom: '300px'});
		var count = $(".time").html();
		var breakTime = $(".break").html();
		countdown(count, breakTime);
	});
	$(".reset").on('click', function(){
		$(".start").fadeIn();
		$(".breaktime").fadeIn();
		$(".sessiontime").fadeIn();
		$(".reset").animate({opacity: '0'});
		reset = true;
	});
});