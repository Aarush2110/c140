function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('Canvas');


	video = createCapture(VIDEO);
	video.size(800,400);
	video.hide();
	video.parent('game_console');
	

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }