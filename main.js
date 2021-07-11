Webcam.set
({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: '90'
});

camera = document.getElementById("webcam");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>"
    });
}

console.log("ml5_version", ml5.version);

clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BhKWKiNPu/model.json")