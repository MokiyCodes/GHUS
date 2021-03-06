// ==UserScript==
// @name         SIP
// @namespace    https://github.com/MokiyCodes
// @version      0.2.0
// @description  See (File) In Pages
// @updateURL    https://mokiycodes.github.io/GHUS/SIP.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/SIP.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/SIP.user.js
// @author       MokiyCodes
// @match        https://github.com/[a-zA-Z\_\-\.]*/[a-zA-Z\_\-\.]*/tree/[a-zA-Z\_\-\.]*/*
// @match        https://github.com/[a-zA-Z\_\-\.]*/[a-zA-Z\_\-\.]*/blob/[a-zA-Z\_\-\.]*/*
// @match        https://github.com/*
// @match        https://mokiycodes.github.io/GHUS/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// @antifeature  loop We run a constant loop for each GitHub tab.
// ==/UserScript==

if (document.location.href.startsWith('https://mokiycodes.github.io/GHUS/download')) document.body.setAttribute('plugin-SIP',true);
(async ()=>{
    let cache = {};
    const addButton = (new Function(await (fetch('https://mokiycodes.github.io/GHUS/lib/Add-File-Button.js').then(v=>v.text()))))()
    setInterval(async ()=>{
        if (!document.querySelector('#raw-url')) return;
        let href = document.location.pathname.split('/');
        href.shift(); // empty string
        const user = href.shift();
        const repo = href.shift();
        href.shift(); // blob|tree
        const branch = href.shift();
        let file = href.join('/');
        file = file.endsWith('README.md') ? file.split('').reverse().join('').replace('dm.EMDAER','').split('').reverse().join('') : file;
        href = `https://${user}.github.io/${repo}/${file}?branch=${branch}&commit=${document.querySelector('a[href*="/commit/"]')?.getAttribute('href')?.split('/')?.pop() ?? 'unknown'}`;
        if (!cache[href]) {
            try{
                cache[href] = 2;
                cache[href] = (await fetch(href)).ok ? 1 : 2;
            }catch(e){
                cache[href] = 2;
            }
        }
        if (cache[href] === 1) addButton('Github Pages', href)
    },100)
})()
