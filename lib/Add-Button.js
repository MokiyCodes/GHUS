// Copyright (c) 2022 MokiyCodes. Licensed under the AGPL-3.0-OR-LATER.
return (text,href)=>{
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
