
var axiom="+FF-"
var sentence=axiom
var temp=""
var rules=[]
var len=20
var scaleSlider
// var angle=PI/2
function setup() {
createCanvas(windowWidth,windowHeight)
// frameRate(1)
  rules[0]={a:"F", b:"-F+F"}
    // rules[1]={a:"-", b:"F+F+F-"}

  scaleSlider=createSlider(0.0001,2,1,0.0001)
  scaleSlider.position(70,10)
  button=createButton("generate")
  button.mousePressed(sentencee)
  button.position(20,50)
}

function draw() {
    background(0)
    textSize(15)
    fill(255);
    noStroke()
    text("SCALE:",0,20);
    translate(width/2,height/2)
    scl=scaleSlider.value();
    scale(scl)

render(sentence)
}

function render(sent){

    stroke(255)
  for(i=0;i<sent.length;i++){
     if(sent.charAt(i)=="F"){
       strokeWeight(5)
       line(0,0,0,-len)
       translate(0,-len)
     }
      if(sent.charAt(i)=="+"){

        rotate(PI/2)
      }
       if(sent.charAt(i)=="-"){

         rotate(PI/2)
       }
       if(sent.charAt(i)=="["){

         push();
       }
       if(sent.charAt(i)=="]"){

         pop()
       }
  }
}

function sentencee(){
  temp=""
  for(i=0;i<sentence.length;i++){
    found=0
    for(j=0;j<rules.length;j++){
       if(sentence.charAt(i)==rules[j].a){
         temp+=rules[j].b
         found=1
       }
       if(!found){
          temp+=sentence.charAt(i)
       }
    }
  }
  sentence=temp;
  console.log(sentence);

}
