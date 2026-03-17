(() => {
"use strict";

/* ================= CONFIG ================= */

const BTN1_URL = "https://urlpsjshorten.com/whatsapp-official";
const BTN2_URL = "https://urlpsjshorten.com/pasjackpot";
const BTN3_URL = "https://urlpsjshorten.com/pasjackpot";
const BTN4_URL = "https://urlpsjshorten.com/apk-pasjackpot";

/* 🔥 SLIDER GAMBAR (UPDATED 3 IMAGE) */
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

@keyframes shineGold{
0%{transform:translateX(-120%);opacity:0}
50%{opacity:.8}
100%{transform:translateX(120%);opacity:0}
}

@keyframes hotPop{
0%{transform:scale(1)}
50%{transform:scale(1.2)}
100%{transform:scale(1)}
}

@keyframes sparkFloat{
0%{transform:translateY(0);opacity:.2;}
50%{transform:translateY(-15px);opacity:.8;}
100%{transform:translateY(-30px);opacity:0;}
}

/* OVERLAY */
#popup_final{
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:999999;
font-family:Arial;
animation:floatSoft 6s ease-in-out infinite;
}

/* CARD */
#popup_final .card{
position:relative;
width:360px;
max-width:92vw;
background:linear-gradient(180deg,#050505,#111);
border-radius:20px;
overflow:hidden;
box-shadow:0 20px 60px rgba(0,0,0,.9);
}

/* SLIDER */
#popup_final .banner{
position:relative;
width:100%;
overflow:hidden;
}

#popup_final .slides{
display:flex;
transition:transform .6s ease;
}

#popup_final .slides img{
width:100%;
flex-shrink:0;
display:block;
object-fit:cover;
}

/* GRID */
#popup_final .buttons{
padding:18px;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

/* BUTTON */
#popup_final .btn{
display:flex;
align-items:center;
justify-content:center;
height:42px;
background:linear-gradient(180deg,#fff4b0,#ffbf00,#8a5a00);
border-radius:40px;
font-size:11px;
font-weight:900;
color:#2b1a00;
border:1px solid #ffcc66;
}

/* HOT */
#popup_final .hot{
position:absolute;
top:-6px;
right:-4px;
background:#ff2d2d;
color:#fff;
font-size:8px;
padding:3px 6px;
border-radius:6px;
animation:hotPop 1s infinite;
}

#popup_final .btnWrap{
position:relative;
}

/* CLOSE */
#popup_final .close{
grid-column:span 2;
background:#111;
color:#aaa;
border:1px solid #222;
padding:11px;
border-radius:40px;
cursor:pointer;
font-size:11px;
}

`;

document.head.appendChild(style);
}

/* ================= HTML ================= */

function buildHTML(){

const slidesHTML = SLIDES.map(src => `<img src="${src}">`).join("");

return `
<div class="card">

<div class="banner">
<div class="slides">${slidesHTML}</div>
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

/* SLIDER */
const slides = wrap.querySelector(".slides");
let index = 0;

setInterval(()=>{
index = (index + 1) % SLIDES.length;
slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

document.getElementById("closeBtn").onclick=()=>wrap.remove();

}

document.addEventListener("DOMContentLoaded",()=>{
setTimeout(init,500);
});

})();
