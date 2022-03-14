// ==UserScript==
// @name         All GHUS Scripts
// @namespace    https://github.com/MokiyCodes
// @version      0.1.0
// @description  Automatically Confirm Repository Names
// @updateURL    https://mokiycodes.github.io/GHUS/download/all.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/download/all.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/download/all.user.js
// @author       MokiyCodes
// @match        https://github.com/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// ==/UserScript==
(['ACRN','AUS','DL','RCCM','SIP']).forEach(async script=>{
  eval(await (await fetch(`https://mokiycodes.github.io/GHUS/${script}.user.js`)).text())
})
