// Copyright (c) 2022 MokiyCodes. Licensed under the AGPL-3.0-OR-LATER.
// Load using
// const addButton = (new Function(await (fetch('https://mokiycodes.github.io/GHUS/lib/Add-File-Button.js').then(v=>v.text()))))()
return (text, href, interval)=>{
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
    y2.setAttribute('target', '_blank');

    return y2;
  };
  Update();
  setInterval(Update, interval ?? 200);
};