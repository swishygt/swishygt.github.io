const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = [];

for(let i=0;i<600;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2,
        speed:Math.random()*2+0.3

    });

}

function draw(){

    ctx.fillStyle="#03050d";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // blue glow

    let glow=ctx.createRadialGradient(
        canvas.width*.8,
        canvas.height*.2,
        0,
        canvas.width*.8,
        canvas.height*.2,
        500
    );

    glow.addColorStop(0,"rgba(50,120,255,.25)");
    glow.addColorStop(1,"transparent");

    ctx.fillStyle=glow;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    for(let s of stars){

        ctx.beginPath();
        ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
        ctx.fill();

        s.y+=s.speed;

        if(s.y>canvas.height){

            s.y=0;
            s.x=Math.random()*canvas.width;

        }

    }

    requestAnimationFrame(draw);

}

draw();

window.addEventListener("resize",()=>{

canvas.width=innerWidth;
canvas.height=innerHeight;

});
