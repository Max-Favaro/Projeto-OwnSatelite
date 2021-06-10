var box3D = document.querySelector(".box3D");
var container = document.querySelector(".container");
var marca = document.querySelector(".marca");
var sneaker = document.querySelector(".sneaker img");
var descricao = document.querySelector(".info");

container.addEventListener("mousemove", (e) => {
var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
box3D.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
box3D.style.transition = "none";

marca.style.transform = "translateZ(250px)";
sneaker.style.transform = "translateZ(200px) rotateZ(30deg)";
descricao.style.transform = "translateZ(125px)";
});

container.addEventListener("mouseleave", (e) => {
box3D.style.transition = "all 0.5s ease";
box3D.style.transform = `rotateY(0deg) rotateX(0deg)`;
  
marca.style.transform = "translateZ(0px)";
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
descricao.style.transform = "translateZ(0px)";
});

function thx(){
  alert("Obrigado por acessar minha pagina");
}