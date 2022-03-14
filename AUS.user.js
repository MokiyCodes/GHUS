// ==UserScript==
// @name         AUS
// @namespace    https://github.com/MokiyCodes
// @version      0.1.0
// @description  Add UserScript/UserStyle | Adds a Add UserScript button to .user.js Github links
// @updateURL    https://mokiycodes.github.io/GHUS/AUS.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/AUS.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/AUS.user.js
// @author       MokiyCodes
// @match        https://github.com/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-end
// @antifeature  loop We run a constant loop for each GitHub tab.
// ==/UserScript==

(async ()=>{
    const addButton = (new Function(await (fetch('https://mokiycodes.github.io/GHUS/lib/Add-File-Button.js').then(v=>v.text()))))()
    setInterval(()=>{
        let href = document.location.pathname.split('/');
        const _h = href[href.length-1].toLowerCase()
        if (!(_h.endsWith('.user.js') || _h.endsWith('.style.css'))) return;
        href.shift(); // empty string
        const user = href.shift();
        const repo = href.shift();
        href.shift(); // blob|tree
        const branch = href.shift();
        const file = href.join('/');
        href = `javascript:(()=>{const Window = window.open('https://github.com/${user}/${repo}/raw/${branch}/${file}?commit=${document.querySelector('a[href*="/commit/"]')?.getAttribute('href')?.split('/')?.pop() ?? 'unknown'}');setTimeout(()=>Window.close(),500);})();`;
        addButton(file.endsWith('.user.js') ? 'Add UserScript' : 'Add UserStyle', href, 100)
    },100)
})()
