// ---------- Generator per level ----------
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const frac=(n,d)=>`\\frac{${n}}{${d}}`;
const sgn=b=>b<0?`${b}`:`+${b}`;
const TPL={ // templates: [level, fn]
  classic:[
    [1,()=>{const a=R(2,20),b=R(2,9),c=R(2,9);return{tex:`${a}+${b}\\times ${c}`,a:a+b*c};}],
    [1,()=>{const b=R(2,6),c=R(2,6),a=b*R(2,8);return{tex:`${a}\\div ${b}\\times ${c}`,a:a/b*c};}],
    [1,()=>{const b=R(2,9),c=R(2,9),a=b*c+R(1,20);return{tex:`${a}-${b}\\times ${c}`,a:a-b*c};}],
    [1,()=>{const a=R(2,9),b=R(2,9),c=R(2,6);return{tex:`(${a}+${b})\\times ${c}`,a:(a+b)*c};}],
    [1,()=>{const a=R(2,9),b=R(2,4),c=R(2,9);return{tex:`${c}+${a}^${b}`,a:c+a**b};}],
    [1,()=>{const c=R(1,8),b=c+R(1,8),a=b+R(2,20);return{tex:`${a}-(${b}-${c})`,a:a-(b-c)};}],
    [2,()=>{const a=R(2,12),b=R(2,5),c=R(1,9),d=R(1,9);return{tex:`${a}-${b}(${c}-${d})`,a:a-b*(c-d)};}],
    [2,()=>{const a=R(2,9),b=R(1,9);return pick([{tex:`-${a}^2+${b}`,a:-a*a+b},{tex:`(-${a})^2-${b}`,a:a*a-b}]);}],
    [2,()=>{const [p,q,r]=pick([[3,4,5],[6,8,10],[5,12,13],[8,6,10],[9,12,15]]);return{tex:`\\sqrt{${p*p}+${q*q}}`,a:r};}],
    [2,()=>{const n=R(2,9),d=pick([2,3,4,5]);return{tex:`${n}\\div ${frac(1,d)}`,a:n*d};}],
    [2,()=>{const p=pick([10,20,25,50,75]),q=pick([20,40,60,80,120]);return{tex:`${p}\\%\\text{ of }${q}`,a:p*q/100};}],
    [2,()=>{const a=pick([0.2,0.3,0.4,0.5]),b=pick([0.2,0.3,0.4,0.6]);return{tex:`${a}\\times ${b}`,a:+(a*b).toFixed(4)};}],
    [2,()=>{const a=R(4,15);return{tex:`\\sqrt{${a*a}}-\\sqrt{${(a+1)**2}}`,a:-1};}],
    [3,()=>{const b=pick([2,3,10]);let m,n,e;do{m=R(-4,4);n=R(-4,4);e=m+n;}while(e<0||e>4||m>=0&&n>=0);return{tex:`${b}^{${m}}\\times ${b}^{${n}}`,a:b**e};}],
    [3,()=>{const a=R(11,40);return{tex:`${a}^2-${a-1}^2`,a:2*a-1};}],
    [3,()=>{const n=R(4,12);return{tex:`\\frac{${n}!}{${n-1}!}`,a:n};}],
    [3,()=>{const b=pick([2,3,5,10]),k=R(1,4);return{tex:`\\log_{${b}} ${b**k}`,a:k};}],
    [3,()=>{const b=pick([2,3,4,5]),k=pick([2,3]);return{tex:`\\left(\\frac{1}{${b}}\\right)^{-${k}}`,a:b**k};}],
    [3,()=>{const [n,k,a]=pick([[8,"\\frac{2}{3}",4],[27,"\\frac{2}{3}",9],[16,"\\frac{3}{4}",8],[125,"\\frac{1}{3}",5],[32,"\\frac{2}{5}",4]]);return{tex:`${n}^{${k}}`,a};}],
  ],
  equations:[
    [1,()=>{const x=R(0,12),a=R(2,7),b=R(1,15);return{tex:`${a}x+${b}=${a*x+b}`,a:x};}],
    [1,()=>{const x=R(1,12),a=R(2,7),b=R(2,7);return{tex:`${a}x+${b}x=${(a+b)*x}`,a:x};}],
    [1,()=>{const x=R(1,15),b=R(1,15);return{tex:`${x+b}=x+${b}`,a:x};}],
    [2,()=>{const x=R(-9,9),a=pick([-2,-3,-4,-5,2,3]),b=R(-9,9);return{tex:`${a}x${sgn(b)}=${a*x+b}`,a:x};}],
    [2,()=>{const x=R(-6,9),a=R(2,6),c=a+R(1,4),b=R(-9,9),d=a*x+b-c*x;return{tex:`${a}x${sgn(b)}=${c}x${sgn(d)}`,a:x};}],
    [2,()=>{const d=pick([2,3,4,5]),n=pick([1,2,3]);const x=d*R(1,6);return{tex:`\\frac{${n}x}{${d}}=${n*x/d}`,a:x};}],
    [2,()=>{const n=R(2,12);return{tex:`x^2=${n*n}`,kind:"multi",a:[n,-n]};}],
    [3,()=>{const a=R(1,6),k=R(1,5);return{tex:`(x+${a})^2=${k*k}`,kind:"multi",a:[k-a,-k-a]};}],
    [3,()=>{const k=R(2,5),c=R(2,6);return{tex:`${c}\\left|x\\right|=${c*k}`,kind:"multi",a:[k,-k]};}],
    [3,()=>{const k=R(-4,4)||2;return{tex:`x^3=${k**3}`,a:k};}],
    [3,()=>{const b=pick([2,3,5]),k=R(1,4),a=R(1,4);return{tex:`${b}^{x-${a}}=${b**k}`,a:k+a};}],
  ],
  bigger:[
    [1,()=>{const a=R(1,6),b=R(1,6);return[`${a}^2+${b}^2`,`(${a}+${b})^2`,a*a+b*b,(a+b)**2];}],
    [1,()=>{const b=R(2,4),c=R(2,4),a=b*c*R(1,4);return[`${a}\\div ${b}\\times ${c}`,`${a}\\div(${b}\\times ${c})`,a/b*c,a/(b*c)];}],
    [1,()=>{const a=R(2,9),b=R(2,9),c=R(2,9);return[`${a}+${b}\\times ${c}`,`(${a}+${b})\\times ${c}`,a+b*c,(a+b)*c];}],
    [2,()=>{const [a,b]=pick([[9,16],[36,64],[25,144],[9,40],[64,225]]);return[`\\sqrt{${a}+${b}}`,`\\sqrt{${a}}+\\sqrt{${b}}`,Math.sqrt(a+b),Math.sqrt(a)+Math.sqrt(b)];}],
    [2,()=>{const [a,b]=pick([[2,5],[3,4],[2,6],[3,5],[4,5]]);return[`${a}^${b}`,`${b}^${a}`,a**b,b**a];}],
    [2,()=>{const a=pick([1.1,1.2,0.9,1.5,0.5]),b=pick([0.9,0.8,1.1,2]);return[`${a}+${b}`,`${a}\\times ${b}`,+(a+b).toFixed(4),+(a*b).toFixed(4)];}],
    [2,()=>{const a=R(2,6);return[`-${a}^2`,`(-${a})^2`,-a*a,a*a];}],
    [3,()=>{const [a,b]=pick([[2,3],[2,5],[3,4],[3,5]]);return[`${a}^{-${b}}`,`${b}^{-${a}}`,a**-b,b**-a];}],
    [3,()=>{const a=R(2,5);return[`-\\left(-${a}^2\\right)`,`-(-${a})^2`,a*a,-a*a];}],
    [3,()=>{const n=R(3,6);return[`${n}!`,`${n}^3`,[1,1,2,6,24,120,720][n],n**3];}],
  ],
  next:[
    [1,()=>{const a=R(1,20),d=pick([2,3,4,5,10]);return[0,1,2,3,4].map(i=>a+d*i);}],
    [1,()=>{const a=R(40,80),d=pick([3,4,5,6]);return[0,1,2,3,4].map(i=>a-d*i);}],
    [2,()=>{const a=pick([1,2,3]),r=pick([2,3,-2]);return[0,1,2,3,4].map(i=>a*r**i);}],
    [2,()=>{const a=R(1,4);return[0,1,2,3,4].map(i=>(a+i)**2);}],
    [2,()=>{const a=R(1,5);let v=a;const s=[v];for(let i=1;i<5;i++){v+=i;s.push(v);}return s;}],
    [3,()=>{let x=R(1,3),y=R(1,4);const s=[x,y];while(s.length<5){[x,y]=[y,x+y];s.push(y);}return s;}],
    [3,()=>{const a=R(1,3);return[0,1,2,3,4].map(i=>(a+i)**3);}],
    [3,()=>{const a=R(1,3),r=-3;return[0,1,2,3,4].map(i=>a*r**i);}],
  ],
};
function genOne(type,level){
  const tl=TPL[type]; let opts=tl.filter(t=>t[0]===level);
  if(!opts.length) opts=tl.filter(t=>Math.abs(t[0]-level)===1);
  const o=pick(opts)[1]();
  if(type==="bigger"){
    let [x,y,vx,vy]=o; if(vx===vy) return genOne(type,level);
    if(Math.random()<.5){[x,y]=[y,x];[vx,vy]=[vy,vx];}
    const fmt=v=>Number.isInteger(v)?String(v):String(+v.toFixed(4));
    return{type,practice:true,level,x,y,kind:"choice",a:vx>vy?"x":"y",vx:fmt(vx),vy:fmt(vy)};
  }
  if(type==="next"){
    const hole=pick([1,2,3,4]);
    return{type,practice:true,level,kind:"num",seq:o.map((v,i)=>i===hole?"?":String(v)),a:String(o[hole])};
  }
  const out=Object.assign({type,practice:true,level,kind:"num"},o);
  out.a=Array.isArray(out.a)?out.a.map(String):String(out.a);
  return out;
}
const GENTYPES=Object.keys(TPL);
function generate(type,level){ return genOne(type,level); }
