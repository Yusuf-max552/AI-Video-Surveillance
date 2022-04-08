vid = "";
status = "";
function setup(){
    canvas = createCanvas(580, 350);
    canvas.center();
}
function preload(){
    vid = createVideo("video.mp4");
    vid.hide();
}
function draw(){
    image(vid, 0, 0, 580, 350);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Model is detecting objects";
}
function modelLoaded(){
    console.log("Model is loaded");
    status = true;
    vid.loop();
    vid.speed(1);
    vid.volume(0);
}