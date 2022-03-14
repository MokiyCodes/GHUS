// ==UserScript==
// @name         RCCM
// @namespace    https://github.com/MokiyCodes
// @version      0.1.0
// @description  Require Conventional Commit Messages | GitHub
// @author       Mokiy
// @match        https://github.com/*
// @icon         https://img.mokiy.cc/cached/png?url=https://github.githubassets.com/favicons/favicon-dark.svg&width=4096&height=4096&density=8192
// @grant        none
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
      const v = y.value.split(': ');
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
        }
        y.value = v.join(': ');
      }
    }
  };
  setInterval(update, 100);
})();
