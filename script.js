const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function randomColor() {
  return `hsl(${Math.random()*360}, 80%, 60%)`;
}
function drawCircle(x,y,r,c){ ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=c; ctx.fill(); }

let alphaFade = 0.08;
function animate() {
  ctx.fillStyle = `rgba(0,0,0,${alphaFade})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<4;i++){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let r = Math.random()*60 + 10;
    drawCircle(x,y,r, randomColor());
  }

  requestAnimationFrame(animate);
}
animate();
