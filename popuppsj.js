(() => {
"use strict";

/* ================= MODE ================= */
const TEST_MODE = false;

/* ================= FILTER (HOME ONLY) ================= */

const currentURL = window.location.href.toLowerCase();

// 🔥 hanya jalan di HOME
if (!TEST_MODE) {
  const isHome = currentURL.includes("home") || currentURL.endsWith("/");
  if (!isHome) return;
}


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

if(document.getElementById("popup_home_only")) return;

const style = document.createElement("style");
style.id = "popup_home_only";

style.textContent = `

@keyframes pulse{
0%{transform:scale(1)}
50%{transform:scale(1.2)}
100%{transform:scale(1)}
}

@keyframes shineMove{
0%{left:-120%}
100%{left:120%}
}

@keyframes sparkMove{
0%{transform:translateY(0);opacity:.5;}
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
}

/* CARD */
#popup_final .card{
width:360px;
max-width:92vw;
background:#111;
border-radius:20px;
overflow:hidden;
}

/* BANNER */
#popup_final .banner{
aspect-ratio:4/4;
overflow:hidden;
position:relative;
}

#popup_final .slides{
display:flex;
height:100%;
transition:transform .5s ease;
}

#popup_final .slides img{
width:100%;
height:100%;
object-fit:contain;
flex-shrink:0;
}

/* BUTTONS */
#popup_final .buttons{
padding:16px;
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
}

/* BUTTON */
#popup_final .btn,
#popup_final .close{
position:relative;
display:flex;
align-items:center;
justify-content:center;
height:42px;
border-radius:40px;
font-size:11px;
font-weight:900;
color:#3a2400;
text-decoration:none;

background:linear-gradient(180deg,#fff8c4,#ffd54f,#ffb300,#8a5a00);

border:1px solid #ffcc66;
cursor:pointer;
overflow:hidden;
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
animation:shineMove 3s infinite;
}

/* TUTUP */
#popup_final .close{
grid-column:span 2;
background:linear-gradient(180deg,#fff9c4,#ffe082,#ffca28,#ff8f00);
}

/* SPARK */
#popup_final .close::after{
content:"";
position:absolute;
inset:0;
background:
radial-gradient(2px 2px at 20% 70%, rgba(255,200,80,.9), transparent),
radial-gradient(2px 2px at 60% 40%, rgba(255,150,50,.8), transparent);
animation:sparkMove 2s linear infinite;
}

/* HOT */
#popup_final .btnWrap{
position:relative;
}

#popup_final .hot{
position:absolute;
top:-10px;
right:-6px;
background:red;
color:#fff;
font-size:9px;
padding:4px 6px;
border-radius:6px;
z-index:9999;
animation:pulse 1s infinite;
}

`;

document.head.appendChild(style);
}

/* ================= HTML ================= */

function buildHTML(){

const slidesHTML = SLIDES.map((s)=>`<img src="${s}">`).join("");

return `
<div class="card">

<div class="banner">
<div class="slides">${slidesHTML}</div>
</div>

<div class="buttons">

<a class="btn" href="${BTN1_URL}" target="_blank">HUBUNGI KAMI</a>
<a class="btn" href="${BTN2_URL}" target="_blank">LINK ANTI NAWALA</a>

<div class="btnWrap">
<span class="hot">HOT</span>
<a class="btn" href="${BTN3_URL}" target="_blank">AMBIL BONUS</a>
</div>

<a class="btn" href="${BTN4_URL}" target="_blank">APK GRATIS</a>

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
slides.style.transform = `translateX(-${index*100}%)`;
},3000);

/* CLOSE */
document.getElementById("closeBtn").onclick=()=>wrap.remove();

}

/* 🔥 DELAY BIAR SMOOTH */
document.addEventListener("DOMContentLoaded",()=>{
setTimeout(init,800);
});

})();
