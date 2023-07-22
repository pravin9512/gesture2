https://teachablemachine.withgoogle.com/models/OVIxbJWZC/
prediction1=""

Webcam.set({
    width:350,
     height:300,
     image_format:"png",
     png_quality:100

});

cam=document.getElementById("webcam");

Webcam.attach(cam)

 function capture(){
    Webcam.snap(function (data_uri){
      document.getElementById("snap").innerHTML="<img id='capture_img' src="+data_uri+">" ;

    });
 }

 console.log("ml5 version=", ml5.version)
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lLlb5h16j/model.json",model_load)
 function model_load(){
    console.log(" model loaded successfully")
 }

 function speak(){
   var syn= window.speechSynthesis
   data1="prediction is "+prediction1;
 
   var utterthis=new SpeechSynthesisUtterance(data1)
   syn.speak(utterthis)
 }
function check(){
 img=document.getElementById("capture_img")
 classifier.classify(img,got_result)
 }

   function got_result(error,results){
if(error){
console.error(error)
}
else{
  console.log(results)
  document.getElementById("name1").innerHTML=results[0].label;
  prediction1=results[0].label;
  speak();
  if(results[0].label=="thumbs up"){
    document.getElementById("emoji1").innerHTML="&#128077"
  }
  if(results[0].label=="ok"){
    document.getElementById("emoji1").innerHTML="&#128076;"
  }
  if(results[0].label=="cheese"){
    document.getElementById("emoji1").innerHTML="&#9996;"
  }
}
   }