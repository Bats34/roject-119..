function preload() {
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup() {
    canvas=createCanvas(280,280);
    canvas.position(520,350);
    background("white");
    synth=window.speechSynthesis;
    canvas.mouseReleased(classifyr);
}
function classifyr() {
    classifier.classify(canvas,GotResult);
}
function draw() {
    stroke(0);
    strokeWeight(12);
    if(mouseIsPressed){
       line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function GotResult(error,results) {
if (error) {
console.error(error)
}else{
   console.log(results);
   document.getElementById("lab").innerHTML=" Label : "+results[0].label;
   document.getElementById("con").innerHTML="Confidence : "+Math.round(results[0].confidence)*100+"%";
   utterthis=new SpeechSynthesisUtterance(results[0].label);
   synth.speak(utterthis);

}

}
function clearCanvas() {
    background("white");
}
    
