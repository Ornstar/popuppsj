(() => {
  "use strict";

  /* ================= CONFIG ================= */
  const BTN1_URL = "https://urlpsjshorten.com/whatsapp-official";
  const BTN2_URL = "https://urlpsjshorten.com/pasjackpot";
  const BTN3_URL = "https://urlpsjshorten.com/pasjackpot";
  const BTN4_URL = "https://urlpsjshorten.com/apk-pasjackpot";

  const BANNER_URL = "https://i.postimg.cc/7ZMnJvYH/psjmtpgacor-(1).avif";

  /* ================= STYLE ================= */
  function injectStyle() {
    if (document.getElementById("popup_gold_fix_hot")) return;

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

      /* OVERLAY / WRAP */
      #popup_final{
        position:fixed !important;
        top:50% !important;
        left:50% !important;
        transform:translate(-50%,-50%) !important;
        z-index:999999 !important;
        font-family:Arial,sans-serif !important;
        animation:floatSoft 6s ease-in-out infinite;
      }

      /* CARD */
      #popup_final .card{
        width:360px !important;
        max-width:92vw !important;
        background:linear-gradient(180deg,#050505,#111) !important;
        border-radius:20px !important;
        overflow:hidden !important;
        box-shadow:0 20px 60px rgba(0,0,0,.9) !important;
      }

      /* BANNER */
      #popup_final .banner{
        position:relative !important;
        overflow:hidden !important;
        line-height:0 !important;
      }

      #popup_final .banner img{
        display:block !important;
        width:100% !important;
        height:auto !important;
        max-width:100% !important;
        max-height:none !important;
        object-fit:contain !important;
        aspect-ratio:auto !important;
        border:0 !important;
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
        pointer-events:none;
      }

      /* GRID */
      #popup_final .buttons{
        padding:18px !important;
        display:grid !important;
        grid-template-columns:1fr 1fr !important;
        gap:12px !important;
        box-sizing:border-box !important;
      }

      /* WRAPPER */
      #popup_final .btnWrap{
        position:relative !important;
      }

      /* BUTTON */
      #popup_final .btn{
        position:relative !important;
        overflow:hidden !important;
        display:flex !important;
        align-items:center !important;
        justify-content:center !important;
        height:42px !important;
        background:linear-gradient(
          180deg,
          #fff4b0 0%,
          #ffd54f 25%,
          #ffbf00 45%,
          #d88c00 70%,
          #8a5a00 100%
        ) !important;
        border-radius:40px !important;
        font-size:11px !important;
        font-weight:900 !important;
        color:#2b1a00 !important;
        border:1px solid #ffcc66 !important;
        box-shadow:
          inset 0 2px 0 rgba(255,255,255,.8),
          inset 0 -3px 6px rgba(0,0,0,.4),
          0 6px 14px rgba(0,0,0,.7) !important;
        text-decoration:none !important;
        box-sizing:border-box !important;
      }

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

      /* HOT LABEL */
      #popup_final .hot{
        position:absolute !important;
        top:-6px !important;
        right:-4px !important;
        background:#ff2d2d !important;
        color:#fff !important;
        font-size:8px !important;
        padding:3px 6px !important;
        border-radius:6px !important;
        z-index:10 !important;
        box-shadow:0 0 8px rgba(255,0,0,.7) !important;
        animation:hotPop 1s infinite;
      }

      /* CLOSE */
      #popup_final .close{
        grid-column:span 2 !important;
        background:#111 !important;
        color:#aaa !important;
        border:1px solid #222 !important;
        padding:11px !important;
        border-radius:40px !important;
        cursor:pointer !important;
        font-size:11px !important;
        text-align:center !important;
        box-sizing:border-box !important;
      }
    `;

    document.head.appendChild(style);
  }

  /* ================= HTML ================= */
  function buildHTML() {
    return `
      <div class="card">
        <div class="banner">
          <img src="${BANNER_URL}" alt="Popup Banner">
        </div>

        <div class="buttons">
          <div class="btnWrap">
            <a class="btn" href="${BTN1_URL}" target="_blank" rel="noopener noreferrer">HUBUNGI KAMI</a>
          </div>

          <div class="btnWrap">
            <a class="btn" href="${BTN2_URL}" target="_blank" rel="noopener noreferrer">LINK ANTI NAWALA</a>
          </div>

          <div class="btnWrap">
            <span class="hot">NEW+HOT</span>
            <a class="btn" href="${BTN3_URL}" target="_blank" rel="noopener noreferrer">AMBIL BONUS</a>
          </div>

          <div class="btnWrap">
            <a class="btn" href="${BTN4_URL}" target="_blank" rel="noopener noreferrer">APK GRATIS</a>
          </div>

          <button class="close" id="closeBtn" type="button">TUTUP</button>
        </div>
      </div>
    `;
  }

  /* ================= INIT ================= */
  function init() {
    injectStyle();

    const old = document.getElementById("popup_final");
    if (old) old.remove();

    const wrap = document.createElement("div");
    wrap.id = "popup_final";
    wrap.innerHTML = buildHTML();

    document.body.appendChild(wrap);

    document.getElementById("closeBtn").onclick = () => wrap.remove();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(init, 500);
  });
})();
