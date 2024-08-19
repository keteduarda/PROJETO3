let cor;
let circuloY;
let circuloX;


function setup() {
  createCanvas(400, 400);
  background( "#76CDD8");
  cor=color(random(0,255),random(0,255),random(0,255));
  circuloX=[0,0,0];
  circuloY=[random(height),random(height), random(height) ]



            }

function draw() {
  for(let quantos in circuloX){
 circle(circuloX,[quantos],circuloY[quantos],50);
    
    circuloX[quantos]+= random (0,3);
    circuloY[quantos]+=random(-3,3);
    
             
  }
  
  fill(cor);
  

 if (mouseIsPressed){ cor=color(random(0,255),random(0,255),random(0,255),random(0,100));    } 
  
  if(circuloX[quantos]>=width){};
}  
