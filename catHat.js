/*
<style>body { min-height: 270px; border: solid red 3px; }</style>
<span id="cat" style="position: absolute; border: solid red 3px;">
<img src="img/cat.png">
<img src="img/hat.png" id="hat"
style="position: absolute; border: solid red 3px;">
</span>
*/
let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");
let angle = 0;
let lastTime = null;
function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 40 + 100) + "px";
  cat.style.left = (Math.cos(angle) * 200 + 270) + "px";
  hat.style.top = (Math.sin(angle) * 70 + 10) + "px";
  hat.style.left = (Math.cos(angle) * 70) + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

