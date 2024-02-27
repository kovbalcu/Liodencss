// ==UserScript==
// @name         chatszar
// @namespace    http://tampermonkey.net/
// @version      2024-02-27
// @description  try to take over the world!
// @author       BALA
// @match        https://www.lioden.com/territory.php?id=390220
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lioden.com
// @grant        none
// ==/UserScript==

(function() {
  setTimeout(() =>{
    var iframediv = document.getElementById("fraSidebarChat");
    if (!iframediv) return;
  
    var chatiframe = iframediv.querySelector("iframe");
    if (!chatiframe) return;
  
    var iframeContent = chatiframe.contentDocument || chatiframe.contentWindow.document;
    var cmp = iframeContent.getElementById("chatMessagePinned");
    if (!cmp) return;
  
    cmp.style.background = "linear-gradient(90deg, transparent 75%, #98c9a3 90%)";
  }, 1500);  
})();