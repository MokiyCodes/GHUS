// ==UserScript==
// @name         RCCM
// @namespace    https://github.com/MokiyCodes
// @version      0.1.1
// @description  Require Conventional Commit Messages | GitHub
// @updateURL    https://mokiycodes.github.io/GHUS/RCCM.user.js
// @downloadURL  https://mokiycodes.github.io/GHUS/RCCM.user.js
// @supportURL   https://github.com/MokiyCodes/GHUS/issues
// @source       https://github.com/MokiyCodes/GHUS/blob/main/RCCM.user.js
// @author       MokiyCodes
// @match        https://github.com/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
// @run-at       document-body
// @antifeature  loop We run a constant loop for each GitHub tab.
// ==/UserScript==

'use strict';
(()=>{
  const update = ()=>{
    const y = document.querySelector('#commit-summary-input');
    if (y) {
      y.setAttribute('reqiured', true);
      const z = document.querySelector('#submit-file');
      let condition = y.value.length > 7 && y.value.includes(': ');
      if (condition) {
        const split = y.value.split(': ');
        if (split.length < 2)
          condition = false;
        else if (split.shift().length < 3)
          condition = false;
        else
          condition = split.join(': ').length > 5;
      }
      if (z) {
        (condition ? ()=>z.removeAttribute('disabled') : ()=>z.setAttribute('disabled', true))();
        z.innerHTML = condition ? 'Commit' : 'Please enter a commit message';
      }
      const _v = y.value.split(':')
      if (_v.length===2 && _v[1] === '') _v[1] = ' '
      const v = _v.join(':').split(': ');
      if (v.length > 1) {
        v[0] = v[0].toLowerCase();
        switch (v[0]) {
          case 'f':
            v[0] = 'fix';
            break;
          case 'fi':
            v[0] = 'fix';
            break;
          case 'fe':
            v[0] = 'feat';
            break;
          case 'd':
            v[0] = 'docs';
            break;
          case 'c':
            v[0] = 'chore';
            break;
          case 'r':
            v[0] = 'refactor';
            break;
        }
        y.value = v.join(': ');
      }
    }
  };
  setInterval(update, 100);
})();
