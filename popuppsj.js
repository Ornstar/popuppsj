(() => {
"use strict";

/* ================= CONFIG ================= */

const BTN1_URL = "https://urlpsjshorten.com/whatsapp-official";
const BTN2_URL = "https://urlpsjshorten.com/pasjackpot";
const BTN3_URL = "https://urlpsjshorten.com/pasjackpot";
const BTN4_URL = "https://urlpsjshorten.com/apk-pasjackpot";

const BANNER_URL = "https://i.postimg.cc/7ZMnJvYH/psjmtpgacor-(1).avif";

/* ================= STYLE ================= */

function injectStyle(){

if(document.getElementById("popup_gold_fix_hot")) return;

const style = document.createElement("style");
style.id = "popup_gold_fix_hot";

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
width:360px;
max-width:92vw;
background:linear-gradient(180deg,#050505,#111);
border-radius:20px;
overflow:hidden;
box-shadow:0 20px 60px rgba(0,0,0,.9);
}

/* BANNER */
#popup_final .banner{
position:relative;
overflow:hidden;
}

#popup_final .banner img{
width:100%;
display:block;
}

#popup_final .banner::after{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,.4),transparent);
animation:shineGold 6s ease-in-out infinite;
}

/* GRID */
#popup_final .buttons{
padding:18px;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

/* 🔥 WRAPPER (INI PENTING) */
#popup_final .btnWrap{
position:relative;
}

/* 🔥 BUTTON */
#popup_final .btn{
position:relative;
overflow:hidden;

display:flex;
align-items:center;
justify-content:center;

height:42px;

background:linear-gradient(
180deg,
#fff4b0 0%,
#ffd54f 25%,
#ffbf00 45%,
#d88c00 70%,
#8a5a00 100%
);

border-radius:40px;

font-size:11px;
font-weight:900;
color:#2b1a00;

border:1px solid #ffcc66;

box-shadow:
inset 0 2px 0 rgba(255,255,255,.8),
inset 0 -3px 6px rgba(0,0,0,.4),
0 6px 14px rgba(0,0,0,.7);
}

/* KILAU */
#popup_final .btn::before{
content:"";
position:absolute;
top:-40%;
left:-120%;
width:120%;
height:180%;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);
transform:skewX(-25deg);
animation:shineGold 3.5s infinite;
}

/* 🔥 HOT (SEKARANG DI WRAPPER) */
#popup_final .hot{
position:absolute;
top:-6px;
right:-4px;

background:#ff2d2d;
color:#fff;
font-size:8px;
padding:3px 6px;

border-radius:6px;

z-index:10;

box-shadow:0 0 8px rgba(255,0,0,.7);

animation:hotPop 1s infinite;
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
text-align:center;
}

`;

document.head.appendChild(style);
}

/* ================= HTML ================= */

function buildHTML(){
return `
<div class="card">

<div class="banner">
<img src="${BANNER_URL}">
</div>

<div class="buttons">

<div class="btnWrap">
<a class="btn" href="${BTN1_URL}" target="_blank">HUBUNGI KAMI</a>
</div>

<div class="btnWrap">
<a class="btn" href="${BTN2_URL}" target="_blank">LINK ANTI NAWALA</a>
</div>

<div class="btnWrap">
<span class="hot">NEW+HOT</span>
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

/* INIT */

function init(){

injectStyle();

const wrap=document.createElement("div");
wrap.id="popup_final";
wrap.innerHTML=buildHTML();

document.body.appendChild(wrap);

document.getElementById("closeBtn").onclick=()=>wrap.remove();

}

document.addEventListener("DOMContentLoaded",()=>{
setTimeout(init,500);
});

})();
