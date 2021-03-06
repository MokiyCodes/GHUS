// ==UserScript==
// @name         All GHUS Scripts
// @namespace    https://github.com/MokiyCodes
// @version      0.1.0
// @description  Automatically Confirm Repository Names
// @updateURL    https://mokiycodes.github.io/GHUS/all.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/all.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/download/all.user.js
// @author       MokiyCodes
// @match        https://github.com/*
// @match        https://mokiycodes.github.io/GHUS/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// @antifeature  broken Broken for some scripts
// @antifeature  slow Slower than using individual scripts
// @feature      updates Always keeps GHUS scripts at the latest version
// ==/UserScript==
fetch('https://github.com/MokiyCodes/GHUS/raw/main/download/list.json').then(v=>v.json()).then(v=>v.forEach(async script=>{
  eval(await (await fetch(`https://github.com/MokiyCodes/GHUS/raw/main/${script}.user.js`)).text())
}))
