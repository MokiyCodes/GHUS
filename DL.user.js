// ==UserScript==
// @name         DL
// @namespace    https://github.com/MokiyCodes
// @version      0.1.1
// @description  Download File
// @updateURL    https://mokiycodes.github.io/GHUS/DL.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/DL.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/DL.user.js
// @author       MokiyCodes
// @match        https://github.com/*
// @match        https://mokiycodes.github.io/GHUS/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// @antifeature  loop We run a constant loop for each GitHub tab.
// ==/UserScript==

if (document.location.href.startsWith('https://mokiycodes.github.io/GHUS/download')) document.body.setAttribute('plugin-DL',true);
(async ()=>{
    let cache = {};
    const addButton = (new Function(await (fetch('https://mokiycodes.github.io/GHUS/lib/Add-File-Button.js').then(v=>v.text()))))();
    const urlToBlob = (new Function(await (fetch('https://gist.githubusercontent.com/MokiyCodes/b46739444780b2499317919f9c23a5c2/raw/urltoblob.js').then(v=>v.text()))))();
    setInterval(async ()=>{
        const rurl = document.querySelector('#raw-url');
        if (!rurl) return;
        if (rurl.innerText === 'Download') rurl.remove();
        let href = document.location.pathname.split('/');
        href.shift(); // empty string
        const user = href.shift();
        const repo = href.shift();
        href.shift(); // blob|tree
        const branch = href.shift();
        const file = href.join('/');
        href = `https://github.com/${user}/${repo}/raw/${branch}/${file}`;
        if (cache[href]) return;
        const b = addButton('Download', 'javascript:void(0)');
        if (b.getAttribute('hasEvent')) return;
        b.addEventListener('click', async ()=>{
            b.setAttribute('disabled','1')
            b.innerText = 'Downloading...';
            const blob = cache[href] === 'none' ? await urlToBlob(href) : cache[href];
            cache[href] = blob;

            const anchor = document.createElement("a");
            anchor.href = blob;
            const fileName = file.split('/').pop().split('?').shift().split('#').shift();
            anchor.setAttribute('download',fileName)

            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();

            b.innerText = 'Download';
            b.removeAttribute('disabled');
        });
        b.setAttribute('hasEvent','1');
        cache[href]='none';
    },250);
})();
