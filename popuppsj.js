(() => {
"use strict";

/* ================= FILTER ================= */
const url = location.href.toLowerCase();
if (!(url.includes("home") || url.endsWith("/"))) return;

/* ================= CONFIG ================= */
const BTN = [
"https://urlpsjshorten.com/whatsapp-official",
"https://urlpsjshorten.com/pasjackpot",
"https://urlpsjshorten.com/telegram-official",
"https://urlpsjshorten.com/apk-pasjackpot"
];

const SLIDES = [
"http://plcl.me/images/3v4bN.jpg",
"http://plcl.me/images/zdCqv.jpg"
];

/* ================= STYLE ================= */
if (!document.getElementById("popup_psj")) {
const s = document.createElement("style");
s.id = "popup_psj";
s.textContent = `
#psj_overlay{
position:fixed;inset:0;
background:rgba(0,0,0,.6);
z-index:9998;
opacity:0;
transition:.3s;
}
#psj_overlay.show{opacity:1}

#psj_popup{
position:fixed;
top:50%;left:50%;
transform:translate(-50%,-50%) scale(.8);
opacity:0;
z-index:9999;
transition:.4s cubic-bezier(.22,1,.36,1);
font-family:Arial;
}
#psj_popup.show{
opacity:1;
transform:translate(-50%,-50%) scale(1);
}

#psj_popup .card{
width:360px;max-width:92vw;
background:#000;
border-radius:20px;
overflow:hidden;
border:1px solid gold;
box-shadow:0 20px 60px rgba(0,0,0,.9);
}

.banner{aspect-ratio:1;overflow:hidden}
.slides{display:flex;height:100%;transition:.5s}
.slides img{
width:100%;height:100%;
object-fit:contain;flex-shrink:0
}

.buttons{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;padding:15px
}
.btn{
display:flex;align-items:center;justify-content:center;
height:42px;border-radius:40px;
font-size:11px;font-weight:bold;
background:gold;color:#000;text-decoration:none;
}

.close{
position:absolute;
bottom:-25px;left:50%;
transform:translateX(-50%);
width:50px;height:50px;
border-radius:50%;
background:red;color:#fff;
display:flex;align-items:center;justify-content:center;
cursor:pointer;
}
`;
document.head.appendChild(s);
}

/* ================= HTML ================= */
const popup = document.createElement("div");
popup.id = "psj_popup";

popup.innerHTML = `
<div class="card">
<div class="banner">
<div class="slides">
${SLIDES.map(s=>`<img src="${s}">`).join("")}
</div>
</div>

<div class="buttons">
<a class="btn" href="${BTN[0]}" target="_blank">WHATSAPP</a>
<a class="btn" href="${BTN[1]}" target="_blank">LINK</a>
<a class="btn" href="${BTN[2]}" target="_blank">TELEGRAM</a>
<a class="btn" href="${BTN[3]}" target="_blank">APK</a>
</div>

<div class="close">✕</div>
</div>
`;

const overlay = document.createElement("div");
overlay.id = "psj_overlay";

/* ================= INIT ================= */
window.addEventListener("load", () => {

setTimeout(() => {
document.body.append(overlay, popup);

setTimeout(()=>{
popup.classList.add("show");
overlay.classList.add("show");
},50);

/* close */
const close = () => {
popup.style.opacity = "0";
overlay.style.opacity = "0";
setTimeout(()=>{ popup.remove(); overlay.remove(); },300);
};

popup.querySelector(".close").onclick = close;
overlay.onclick = close;

/* slider */
let i=0;
const slides = popup.querySelector(".slides");
setInterval(()=>{
i = (i+1) % SLIDES.length;
slides.style.transform = `translateX(-${i*100}%)`;
},2500);

},800);

});

})();
