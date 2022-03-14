// ==UserScript==
// @name         ACRN
// @namespace    https://github.com/MokiyCodes
// @version      0.1.0
// @description  Automatically Confirm Repository Names
// @author       MokiyCodes
// @match        https://github.com/*/*
// @match        https://github.com/*/*/settings
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// ==/UserScript==

setInterval(()=>{'use strict';document.querySelectorAll('.btn-danger.btn-block[type="submit"][disabled]').forEach(v=>v.removeAttribute('disabled'));document.querySelectorAll('input[aria-label^="Type in the name of the"]').forEach(v=>v.value=document.querySelector('[role="dialog"] .Box-footer p strong').innerText)document.querySelectorAll('details-dialog.Box.Box--overlay').forEach(v=>v.style.overflow="hidden")},1000);
