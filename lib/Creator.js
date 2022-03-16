// Element Creator
// Lets you create html elements with one function call
const exports = (elType,attrib,styles,inner,children)=>{
  const el = document.createElement(elType);
  if (attrib)
    for (k in attrib)
      el.setAttribute(k,attrib[k]);
  if (styles)
    for (k in styles)
      el.style[k]=styles[k];
  if (inner)
    el.innerHTML = inner;
  if (children)
    for (k in children)
      el.appendChild(children[k]);
  return el;
}

// Export
if (typeof module !== 'undefined') module.exports = exports;
if (typeof _EXPORT_TO_WINDOW !== 'undefined' && typeof window !== 'undefined') window.GHEL = exports;
return exports;
