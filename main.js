Party_On_My_Mind=""
badtameez_dil=""
rightwristX=0
rightwristY=0
leftwristX=0
leftwristY=0


function preload(){
    Party_On_My_Mind=loadSound("Party On My Mind - Race 2 - Saif Ali, John, Deeepika, Jacqueline & Amisha - Pritam - Honey Singh.mp3")
    badtameez=loadSound("Badtameez Dil Full Song HD Yeh Jawaani Hai Deewani - PRITAM - Ranbir Kapoor, Deepika Padukone.mp3")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

    poseNET=ml5.poseNet(video,modelloaded)
    poseNET.on("pose",gotpose)
}
function modelloaded(){
    console.log("modelloaded")
}

function gotpose(result){
   
    if(result.length>0){
        console.log(result)
        leftwristX=result[0].pose.leftWrist.x
        leftwristY=result[0].pose.leftWrist.y
        console.log("leftwrist_x ="+leftwristX+"lefterist_y="+leftwristY )
        rightwristX=result[0].pose.rightWrist.x
        rightwristY=result[0].pose.rightWrist.y
        console.log("rightwrist_x ="+rightwristX+"righterist_y="+rightwristY )
    }
}
function draw(){
    image(video,0,0,500,500)
}
