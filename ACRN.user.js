// ==UserScript==
// @name         ACRN
// @namespace    https://github.com/MokiyCodes
// @version      0.1.1
// @description  Automatically Confirm Repository Names
// @updateURL    https://mokiycodes.github.io/GHUS/ACRN.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/ACRN.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/ACRN.user.js
// @author       MokiyCodes
// @match        https://github.com/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// @antifeature  loop We run a constant loop for each GitHub tab.
// ==/UserScript==

setInterval(()=>{'use strict';document.querySelectorAll('.btn-danger.btn-block[type="submit"][disabled]').forEach(v=>v.removeAttribute('disabled'));document.querySelectorAll('input[aria-label^="Type in the name of the"]').forEach(v=>v.value=document.querySelector('[role="dialog"] .Box-footer p strong').innerText)document.querySelectorAll('details-dialog.Box.Box--overlay').forEach(v=>v.style.overflow="hidden")},1000);
