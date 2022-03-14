// Copyright (c) 2022 MokiyCodes. Licensed under the AGPL-3.0-OR-LATER.
// Load using
// const addButton = (new Function(await (fetch('https://mokiycodes.github.io/GHUS/lib/Add-File-Button.js').then(v=>v.text()))))()
return (text, href)=>{
  const Update = ()=>{
    const y = document.querySelector('.BtnGroup #raw-url');
    let y2 = document.querySelector(`[ghus-button="${text}"]`);
    if (!y2) {
      if (y) {
        y2 = y.cloneNode();

        y2.setAttribute('ghus-button', text);
        y2.innerText = text;

        y.parentElement.appendChild(y2);
      } else return;
    };

    y2.setAttribute('href', href);
    if (href.startsWith('http')) y2.setAttribute('target', '_blank');
    else y2.removeAttribute('target')

    return y2;
  };
  return Update();
};
