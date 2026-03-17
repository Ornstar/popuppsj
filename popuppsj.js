(() => {
"use strict";

/* ================= CONFIG ================= */

const BTN1_URL = "https://urlpsjshorten.com/whatsapp-official";
const BTN2_URL = "https://urlpsjshorten.com/pasjackpot";
const BTN3_URL = "https://urlpsjshorten.com/grouptelegrampasjackpot";
const BTN4_URL = "https://urlpsjshorten.com/apk-pasjackpot";

const SLIDES = [
"https://i.postimg.cc/7ZMnJvYH/psjmtpgacor-(1).avif",
"https://i.postimg.cc/PJ6nMwV9/PSJ035-Square.jpg",
"https://i.postimg.cc/L6VyYSgW/PSJ033-Square.jpg"
];

/* ================= STYLE ================= */

function injectStyle(){

if(document.getElementById("popup_spark_real")) return;

const style = document.createElement("style");
style.id = "popup_spark_real";

style.textContent = `

@keyframes floatSoft{
0%{transform:translate(-50%,-50%) translateY(0)}
50%{transform:translate(-50%,-50%) translateY(-3px)}
100%{transform:translate(-50%,-50%) translateY(0)}
}

@keyframes shineMove{
0%{left:-120%}
100%{left:120%}
}

@keyframes sparkMove{
0%{transform:translateY(0);opacity:.3;}
100%{transform:translateY(-20px);opacity:0;}
}

/* POPUP */
#popup_final{
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:999999;
font-family:Arial;
animation:floatSoft 6s ease-in-out infinite;
}

#popup_final .card{
width:360px;
max-width:92vw;
background:#111;
border-radius:20px;
overflow:hidden;
box-shadow:0 20px 60px rgba(0,0,0,.9);
}

/* ===== SLIDER ===== */

#popup_final .banner{position:relative;overflow:hidden;}

#popup_final .slides{
display:flex;
transition:transform .6s ease;
}

#popup_final .slides img{
width:100%;
flex-shrink:0;
object-fit:cover;
transition:transform 4s ease;
}

#popup_final .slides img.active{
transform:scale(1.08);
}

/* ARROW */
#popup_final .arrow{
position:absolute;
top:50%;
transform:translateY(-50%);
background:rgba(0,0,0,.5);
color:#fff;
border:none;
width:30px;
height:30px;
border-radius:50%;
cursor:pointer;
z-index:5;
}

#popup_final .left{left:8px;}
#popup_final .right{right:8px;}

/* DOT */
#popup_final .dots{
position:absolute;
bottom:8px;
width:100%;
text-align:center;
}

#popup_final .dot{
display:inline-block;
width:6px;
height:6px;
margin:0 3px;
background:#aaa;
border-radius:50%;
opacity:.5;
}

#popup_final .dot.active{
background:#ffd54f;
opacity:1;
}

/* ===== BUTTON GOLD ===== */

#popup_final .buttons{
padding:18px;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

#popup_final .btnWrap{position:relative;}

/* BUTTON NORMAL */
#popup_final .btn,
#popup_final .close{
position:relative;
overflow:hidden;

display:flex;
align-items:center;
justify-content:center;

height:44px;

background:linear-gradient(180deg,#fff8c4,#ffd54f,#ffb300,#8a5a00);
border-radius:40px;

font-size:12px;
font-weight:900;
letter-spacing:.5px;

color:#3a2400;

text-decoration:none;

/* 3D TEXT */
text-shadow:
0 1px 0 #fff6b0,
0 2px 0 #e6b800,
0 3px 4px rgba(0,0,0,.6);

/* GLOW */
box-shadow:
inset 0 2px 0 rgba(255,255,255,.9),
inset 0 -3px 6px rgba(0,0,0,.5),
0 0 12px rgba(255,200,50,.4),
0 8px 18px rgba(0,0,0,.8);

border:1px solid #ffcc66;
cursor:pointer;
}

/* ✅ KHUSUS TUTUP MEMANJANG */
#popup_final .close{
grid-column:span 2;
}

/* SHINE */
#popup_final .btn::before,
#popup_final .close::before{
content:"";
position:absolute;
top:-50%;
left:-120%;
width:120%;
height:200%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,.9),transparent);
transform:skewX(-25deg);
animation:shineMove 3s infinite;
pointer-events:none;
}

/* 🔥 SPARK */
#popup_final .close::after{
content:"";
position:absolute;
inset:0;

background:
radial-gradient(2px 2px at 20% 70%, rgba(255,200,80,.9), transparent),
radial-gradient(2px 2px at 60% 40%, rgba(255,150,50,.8), transparent),
radial-gradient(1.5px 1.5px at 80% 60%, rgba(255,220,120,.9), transparent),
radial-gradient(2px 2px at 30% 30%, rgba(255,140,40,.8), transparent);

animation:sparkMove 2s linear infinite;
pointer-events:none;
}

/* HOT */
#popup_final .hot{
position:absolute;
top:-8px;
right:-6px;
background:#ff2d2d;
color:#fff;
font-size:9px;
font-weight:bold;
padding:4px 7px;
border-radius:6px;
z-index:999;
animation:pulse 1s infinite;
}

@keyframes pulse{
0%{transform:scale(1)}
50%{transform:scale(1.2)}
100%{transform:scale(1)}
}

`;

document.head.appendChild(style);
}

/* ================= HTML ================= */

function buildHTML(){

const slidesHTML = SLIDES.map((src,i)=>`<img src="${src}" class="${i===0?'active':''}">`).join("");
const dotsHTML = SLIDES.map((_,i)=>`<span class="dot ${i===0?'active':''}"></span>`).join("");

return `
<div class="card">

<div class="banner">
<button class="arrow left">&#10094;</button>
<button class="arrow right">&#10095;</button>
<div class="slides">${slidesHTML}</div>
<div class="dots">${dotsHTML}</div>
</div>

<div class="buttons">

<div class="btnWrap">
<a class="btn" href="${BTN1_URL}" target="_blank">HUBUNGI KAMI</a>
</div>

<div class="btnWrap">
<a class="btn" href="${BTN2_URL}" target="_blank">LINK ANTI NAWALA</a>
</div>

<div class="btnWrap">
<span class="hot">HOT</span>
<a class="btn" href="${BTN3_URL}" target="_blank">AMBIL BONUS</a>
</div>

<div class="btnWrap">
<a class="btn" href="${BTN4_URL}" target="_blank">APK GRATIS</a>
</div>

<button class="close" id="closeBtn">TUTUP</button>

</div>
</div>
`;
}

/* ================= INIT ================= */

function init(){

injectStyle();

const wrap=document.createElement("div");
wrap.id="popup_final";
wrap.innerHTML=buildHTML();
document.body.appendChild(wrap);

const slides = wrap.querySelector(".slides");
const images = wrap.querySelectorAll(".slides img");
const dots = wrap.querySelectorAll(".dot");

let index = 0;
let interval;

function updateSlider(){
slides.style.transform = `translateX(-${index * 100}%)`;
images.forEach(img=>img.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));
images[index].classList.add("active");
dots[index].classList.add("active");
}

function startAuto(){
interval = setInterval(()=>{
index = (index + 1) % SLIDES.length;
updateSlider();
},3000);
}

function stopAuto(){
clearInterval(interval);
}

wrap.querySelector(".left").onclick=()=>{
index = (index - 1 + SLIDES.length) % SLIDES.length;
updateSlider();
};

wrap.querySelector(".right").onclick=()=>{
index = (index + 1) % SLIDES.length;
updateSlider();
};

wrap.querySelector(".banner").onmouseenter = stopAuto;
wrap.querySelector(".banner").onmouseleave = startAuto;

startAuto();

document.getElementById("closeBtn").onclick=()=>wrap.remove();

}

document.addEventListener("DOMContentLoaded",()=>{
setTimeout(init,500);
});

})();
