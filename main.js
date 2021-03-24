Webcam.set({
    height:300 ,
    width:350 ,
    image_format:'png' ,
    png_quality:90
});

camera = document.getElementById("live");
Webcam.attach(camera);

function snap(){
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="cap_img" src="'+data_url+'">'
    });
}

console.log("Ml5 Version:-" , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LEM7t9dZ3/model.json',loaded);

function loaded(){
    console.log("Model Loaded!!");
}