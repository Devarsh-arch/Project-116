noseX= "";
noseY= "";
function preload(){
    mustache_image= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas= createCanvas(600, 400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(600, 400);
    video.hide();
    video.center()

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
}
function modelLoaded(){
    console.log("poseNet Is Working");
}
function draw(){
    image(mustache_image, noseY, noseX, 60, 40);
    image(video, 0, 0, 600, 400);
}
function takesnapshot(){
    save('Project.png');
}