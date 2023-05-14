var pause = undefined;
var play = undefined;
var video = undefined;
var canvas = undefined;
var tapesound = undefined;
var staticsound = undefined;

function endstatic()
{
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor = "black";

    staticsound.pause();
}

function videoloop()
{
		if (video && !video.paused && !video.ended) {
				context.drawImage(video, 0, 0, canvas.width, canvas.height);
				requestAnimationFrame(videoloop);
		}
}

function startvid()
{
	canvas.style.display = "inline";
	video.play();
}

function playoff()
{
	play.style.display = "none";
}

function startsound()
{
	tapesound.play();
}

function onplay(e)
{
	pause.style.display = "none";
	play.style.display = "inline";

	setTimeout(playoff, 7000);
	setTimeout(startvid, 5000);
	setTimeout(endstatic, 2000);
	setTimeout(startsound, 1000);
}

function reset()
{
	pause.style.display = "inline";
	play.style.display = "none";
	canvas.style.display = "none";

	video.currentTime = 0;
	video.pause();

	tapesound.currentTime = 0;
	tapesound.pause();

    staticsound.play();

	var string = "./assets/tiled static.gif";
	document.body.style.backgroundImage = "url('" + string + "')";
	document.body.style.backgroundColor = "white";
}

window.onload = function()
{
	pause = document.getElementById("pause");
	play = document.getElementById("play");
	console.log("load successed");
	pause.onclick = onplay;

    staticsound = document.getElementById("static");
    staticsound.loop = true;
    staticsound.muted = false;

	tapesound = document.createElement("audio");
	tapesound.src = "./assets/tapefeed.mp3";
	tapesound.pause();
    // staticsound.pause();

	video = document.createElement("video");
	video.src = "https://cdn.discordapp.com/attachments/633748571237253147/831032978200985653/obama_ytpmv_2020.mp4";
	video.pause();
	video.addEventListener('play',function(){
		videoloop();
	},false);
	video.addEventListener('ended',function(){
		reset();
	},false);

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	canvas.width = canvas.clientWidth - 400;
	canvas.height = canvas.clientHeight;

	context.clearRect(0, 0, canvas.width, canvas.height);
}
