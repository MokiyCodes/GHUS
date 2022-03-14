// ==UserScript==
// @name         SIP
// @namespace    https://github.com/MokiyCodes
// @version      0.1.1
// @description  See (File) In Pages | Assumes current branch is in github pages
// @updateURL    https://mokiycodes.github.io/GHUS/SIP.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/SIP.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/SIP.user.js
// @author       MokiyCodes
// @match        https://github.com/[a-zA-Z\_\-\.]*/[a-zA-Z\_\-\.]*/tree/[a-zA-Z\_\-\.]*/*
// @match        https://github.com/[a-zA-Z\_\-\.]*/[a-zA-Z\_\-\.]*/blob/[a-zA-Z\_\-\.]*/*
// @match        https://github.com/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// @antifeature  loop We run a constant loop for each GitHub tab.
// ==/UserScript==

setInterval(()=>{
    const y = document.querySelector('.BtnGroup #raw-url');
    let y2 = document.querySelector('#SIP-Button');
    if (!y2) {
        if (y) {
            y2 = y.cloneNode();

            y2.setAttribute('id', 'SIP-Button');
            y2.innerText = 'See File in Github Pages';

            y.parentElement.appendChild(y2);
        } else return;
    };

    let href = y.getAttribute('href').split('/');
    href.shift(); // empty string
    const user = href.shift();
    const repo = href.shift();
    href.shift(); // blob|tree
    const branch = href.shift();
    const file = href.join('/');
    href = `https://${user}.github.io/${repo}/${file}?branch=${branch}&commit=${document.querySelector('a[href*="/commit/"]')?.getAttribute('href')?.split('/')?.pop() ?? 'unknown'}`;
    y2.setAttribute('href', href);
    y2.setAttribute('target', '_blank');
},100);
