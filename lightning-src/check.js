// ---------- Answer checking (pure) ----------
const SUP = {"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","⁻":"-"};
function baseNorm(s){
  s = String(s).toLowerCase().trim();
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, m => "^" + [...m].map(c=>SUP[c]).join(""));
  s = s.replace(/[−–—]/g,"-").replace(/[×·]/g,"*").replace(/÷/g,"/");
  s = s.replace(/sqrt/g,"√").replace(/\bpi\b|pi/g,"π");
  s = s.replace(/degrees|degree|deg|°/g,"").replace(/cm\^?[23]?/g,"");
  s = s.replace(/\s+/g,"");
  s = s.replace(/^[a-z]=/,"");           // x=8  → 8
  return s;
}
function parseNum(s){
  s = baseNorm(s).replace(/,/g,".");
  if(s==="") return NaN;
  let m = s.match(/^(-?)\(?(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)\)?$/);
  if(m){ const v = parseFloat(m[2])/parseFloat(m[3]); return m[1]?-v:v; }
  m = s.match(/^-?\d*\.?\d+$/) || s.match(/^-?\d+\.$/);
  if(m) return parseFloat(s);
  if(/^-?\d+(\.\d+)?%$/.test(s)) return parseFloat(s)/100;
  return NaN;
}
function sameNum(a,b){ return isFinite(a)&&isFinite(b)&&Math.abs(a-b)<1e-9*Math.max(1,Math.abs(b)); }
function splitMulti(s){
  return String(s).toLowerCase().replace(/(?:±|\+\/?-)\s*(\d+(?:[.,]\d+)?)/g,"$1;-$1").replace(/\b(or|and|of|en)\b/g,";").split(/[;,&]|\s{2,}|\s+(?=[a-z]?=)/).map(t=>t.trim()).filter(Boolean);
}
function checkAnswer(item, input){
  if(item.kind==="num") return sameNum(parseNum(input), parseNum(item.a));
  if(item.kind==="expr"){
    const v = baseNorm(input).replace(/\*/g,"");
    return item.acc.some(a => baseNorm(a).replace(/\*/g,"")===v);
  }
  if(item.kind==="multi"){
    const parts = splitMulti(input).map(parseNum);
    if(parts.some(p=>!isFinite(p))) return false;
    const want = item.a.map(parseNum);
    const got = [...new Set(parts.map(p=>Math.round(p*1e9)/1e9))];
    return got.length===want.length && want.every(w=>got.some(g=>sameNum(g,w)));
  }
  return false;
}
function partialMulti(item,input){
  if(item.kind!=="multi") return false;
  const parts = splitMulti(input).map(parseNum).filter(isFinite);
  return parts.length===1 && item.a.some(w=>sameNum(parts[0],parseNum(w)));
}
