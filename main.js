function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    }
    function clear_canvas(){
        background("white");
    }
    function preload(){
        classifier =ml5.imageClassifier("DoodleNet")
    }
    function draw(){
        strokeWeight(15)
        stroke(0)
        if(mouseIsPressed){
            line(pmouseX,pmouseY,mouseX,mouseY)
        }
    }
    function classifyCanvas(){
        classifier.classify(canvas,gotResult)
    }
    
    