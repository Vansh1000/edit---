noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;




function setup(){
canvas = createCanvas(550, 550);
canvas.position(560, 150);
video = createCapture(VIDEO);
video.size(550, 550);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("posenet is initialised (no one will read this)")
}


function gotPoses(results){
if(results.lenght > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x -" + noseX + "nose y -" + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWrist - rightWrist);

    console.log("leftwrist -" + leftWristX + "rightWrist - " + rightWristX + "difference" + difference);

}
}


function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML = "Width and height of the square will be" + difference + "px";
    textSize(difference);
    fill("#f90093");
    stroke("#f9009");
     text("peter", 50, 400);
    }



