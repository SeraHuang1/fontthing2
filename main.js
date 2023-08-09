function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100)

    canvas = createCanvas(550, 500);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose' ,gotPoses);
}

function draw(){
    background('#D8F9FF')
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}