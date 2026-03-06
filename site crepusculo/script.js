// BOTÃO ENTRAR NA HISTÓRIA
function entrarHistoria(){
document.querySelector("#historia").scrollIntoView({
behavior:"smooth"
});
}


// RESUMO DO LIVRO
function mostrarResumo(){

let resumo = document.getElementById("resumo");

if(resumo.innerText === ""){

resumo.innerText =
"Eclipse é o terceiro livro da saga Crepúsculo. Bella precisa lidar com seus sentimentos por Edward e Jacob enquanto um exército de vampiros recém-criados ameaça a cidade. Vampiros e lobos se unem para proteger Bella.";

}else{

resumo.innerText = "";

}

}

function abrirLivro(){

let livro = document.getElementById("livro")

livro.classList.toggle("ativo")

}


// PERSONAGENS
function personagem(nome){

let texto = "";
let imagem = "";

if(nome === "bella"){
imagem = "img/bella.jpg";
texto = "Bella Swan é uma jovem humana que se muda para a cidade de Forks. Lá ela conhece Edward Cullen e sua vida muda completamente. Bella vive um conflito entre seu amor profundo por Edward e sua forte amizade com Jacob, precisando decidir qual caminho seguir e qual mundo ela quer fazer parte.";
}

if(nome === "edward"){
imagem = "img/edward.jpg";
texto = "Edward Cullen é um vampiro da família Cullen que possui a habilidade de ler mentes. Apesar de sua natureza vampírica, ele tenta viver de forma pacífica ao lado de sua família. Edward é extremamente protetor com Bella e faria qualquer coisa para mantê-la segura, mesmo que isso signifique abrir mão de seus próprios desejos.";
}

if(nome === "jacob"){
imagem = "img/jacob.jpg";
texto = "Jacob Black é um membro da tribo Quileute que se transforma em lobisomem para proteger sua comunidade dos vampiros. Ele é leal, impulsivo e possui um forte vínculo com Bella. Jacob representa o mundo humano e caloroso, sendo um grande amigo e também um rival de Edward.";
}

document.getElementById("imagemPersonagem").src = imagem;
escreverTexto(texto);

/* MOSTRAR AREA */
document.querySelector(".areaPersonagem").style.display = "flex";

}

// TEAM EDWARD
function teamEdward(){

document.getElementById("imagemTime").src = "img/vampiro.png";

document.getElementById("resultadoTeam").innerText =
"Edward representa o amor eterno e o mundo dos vampiros.";

document.body.classList.remove("loboTema");
document.body.classList.add("vampiroTema");

}


// TEAM JACOB
function teamJacob(){

document.getElementById("imagemTime").src = "img/lobo.png";

document.getElementById("resultadoTeam").innerText =
"Jacob representa o calor humano e o mundo dos lobisomens.";

document.body.classList.remove("vampiroTema");
document.body.classList.add("loboTema");

}


// MENU SCROLL SUAVE
document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

let id = this.getAttribute('href');

document.querySelector(id).scrollIntoView({
behavior:"smooth"
});

});

});


// ANIMAÇÃO DAS SEÇÕES
const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

const topoTela = window.innerHeight * 0.8;

secoes.forEach(secao => {

const posicao = secao.getBoundingClientRect().top;

if(posicao < topoTela){

secao.style.opacity = "1";
secao.style.transform = "translateY(0)";

}

});

});


// BATALHA
let poderVampiro = 0;
let poderLobo = 0;

function atacarVampiro(){

poderVampiro += 10;

document.getElementById("barraVampiro").style.width = poderVampiro + "%";

efeitoTremor();
efeitoAtaque();

verificarBatalha();

}

function atacarLobo(){

poderLobo += 10;

document.getElementById("barraLobo").style.width = poderLobo + "%";

efeitoTremor();
efeitoAtaque();

verificarBatalha();

}


// EFEITO TREMOR
function efeitoTremor(){

document.body.classList.add("tremor");

setTimeout(()=>{
document.body.classList.remove("tremor");
},300);

}


// VERIFICAR VENCEDOR
function verificarBatalha(){

if(poderVampiro >= 100){

document.getElementById("resultadoBatalha").innerText =
"Os vampiros venceram a batalha!";

}

if(poderLobo >= 100){

document.getElementById("resultadoBatalha").innerText =
"Os lobos venceram a batalha!";

}

}


// CURSOR DE SANGUE
document.addEventListener("mousemove", function(e){

let drop = document.createElement("div");

drop.classList.add("blood-drop");

drop.style.left = e.clientX + "px";
drop.style.top = e.clientY + "px";

document.body.appendChild(drop);

setTimeout(()=>{
drop.remove();
},800);

});

// modo claro ou escuro 
let temaAtual = "vampiro";

function trocarTema(){

let botao = document.getElementById("modoTema");
let video = document.getElementById("videoFundo");

if(temaAtual === "vampiro"){

document.body.classList.remove("temaVampiro");
document.body.classList.add("temaLobo");

botao.innerText = "🐺";

video.src = "video/temalobo.mp4"; // vídeo do lobo

temaAtual = "lobo";

}else{

document.body.classList.remove("temaLobo");
document.body.classList.add("temaVampiro");

botao.innerText = "🧛";

video.src = "video/temavampiro.mp4"; // vídeo do vampiro

temaAtual = "vampiro";

}

}

function efeitoAtaque(){

let area = document.getElementById("efeitosBatalha");

let x = window.innerWidth/2;
let y = window.innerHeight/2;

/* explosão */
let boom = document.createElement("div");
boom.classList.add("explosao");
boom.innerText = "⚡";
boom.style.left = x + "px";
boom.style.top = y + "px";

area.appendChild(boom);

/* dano */
let dano = document.createElement("div");
dano.classList.add("dano");
dano.innerText = "-" + Math.floor(Math.random()*20+10);
dano.style.left = x + "px";
dano.style.top = y + "px";

area.appendChild(dano);

/* partículas */

for(let i=0;i<10;i++){

let p = document.createElement("div");
p.classList.add("particula");

p.style.left = x + "px";
p.style.top = y + "px";

p.style.transform =
"translate("+(Math.random()*100-50)+"px,"+
(Math.random()*100-50)+"px)";

area.appendChild(p);

setTimeout(()=>{
p.remove();
},800);

}

setTimeout(()=>{
boom.remove();
dano.remove();
},800);

}

function escreverTexto(texto){

let i = 0;
let area = document.getElementById("infoPersonagem");
area.innerHTML = "";

let intervalo = setInterval(function(){

area.innerHTML += texto.charAt(i);
i++;

if(i >= texto.length){
clearInterval(intervalo);
}

},25);

}

function escolherEdward(){

let img = document.getElementById("imagemTime");
let texto = document.getElementById("textoTime");

img.src = "img/vampiro.png";
img.style.display = "block";

texto.innerText = "Os vampiros da família Cullen tentam viver em paz entre os humanos, alimentando-se apenas de animais. Edward Cullen luta constantemente contra sua natureza para proteger Bella e manter sua família segura.";

document.body.classList.remove("loboTema");
document.body.classList.add("vampiroTema");

}


function escolherJacob(){

let img = document.getElementById("imagemTime");
let texto = document.getElementById("textoTime");

img.src = "img/lobo.png";
img.style.display = "block";

texto.innerText = "A alcateia Quileute protege a cidade de Forks dos vampiros. Jacob Black é um dos lobisomens mais fortes e faria qualquer coisa para proteger Bella e sua tribo.";

document.body.classList.remove("vampiroTema");
document.body.classList.add("loboTema");

}