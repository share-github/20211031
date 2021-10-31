"use strict";
const genbanekoImgPath = "resources/genba_nako_yoshi.png";

(() => {
    neko();
    yoshi();
})();

/**
 * 現場猫召喚
 */
function neko() {
    const genbanekoUrl = chrome.extension.getURL(genbanekoImgPath);
    const genbanekoHtml = `
        <div id="genbaneko" style="height:0; width:0;">
            <img src="${genbanekoUrl}" 
                style="
                    position: relative;
                    top: 0px;
                    left: 50px;
                    height: auto;
                    "
            >
        </div>`;
    document.querySelector("#main-panel > div.dashboard").insertAdjacentHTML("beforebegin", genbanekoHtml);
}

/**
 * 現場猫をクリックで消す
 */
function yoshi() {
    const genbaneko = document.querySelector('#genbaneko');
    genbaneko.addEventListener('click', () => {
        genbaneko.remove();
    });
}
