// ---------- Game ----------
const FORMATS=[
  {id:"classic",name:"Classic",gen:true},{id:"equations",name:"Equations",gen:true},
  {id:"geometry",name:"Geometry",gen:false},{id:"bigger",name:"Which is bigger?",gen:true},
  {id:"correct",name:"Which is correct?",gen:false,allInOnly:true},{id:"next",name:"What's next?",gen:true},
];
const SECS=[3,5,10,15], ROUNDOPTS=[5,10,15,20];
const $=id=>document.getElementById(id);
const store={get(k,d){try{const v=localStorage.getItem("btl:"+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{localStorage.setItem("btl:"+k,JSON.stringify(v));}catch(e){}}};
let ROUNDS=ROUNDOPTS.includes(store.get("rounds",10))?store.get("rounds",10):10;
let level=[1,2,3].includes(store.get("level",1))?store.get("level",1):1;
let picked=new Set(store.get("picked",[]).filter(id=>id!=="correct")); // empty = All in
let game=null, timers=[];
let secs=SECS.includes(store.get("secs",3))?store.get("secs",3):3;
let classMode=!!store.get("class",false);
const DAILY_SECS=5, DAILY_LEVELS=[1,1,2,2,3];
// ----- sound (synthesised, no files) -----
let soundOn=store.get("sound",true), actx=null;
function ac(){ if(!soundOn) return null; try{ if(!actx) actx=new (window.AudioContext||window.webkitAudioContext)(); if(actx.state==="suspended") actx.resume(); }catch(e){ return null; } return actx; }
function tone(freq,dur,type="sine",vol=.12,at=0,slideTo){
  const a=ac(); if(!a) return; const t=a.currentTime+at;
  const o=a.createOscillator(), g=a.createGain(); o.type=type; o.frequency.setValueAtTime(freq,t);
  if(slideTo) o.frequency.exponentialRampToValueAtTime(slideTo,t+dur);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.01); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t+dur+.05);
}
function noise(dur,filterType,freq,vol,at=0,decay=dur){
  const a=ac(); if(!a) return; const t=a.currentTime+at;
  const buf=a.createBuffer(1,Math.floor(a.sampleRate*dur),a.sampleRate), d=buf.getChannelData(0);
  for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
  const src=a.createBufferSource(); src.buffer=buf; const f=a.createBiquadFilter(); f.type=filterType; f.frequency.value=freq;
  const g=a.createGain(); g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(0.0001,t+decay);
  src.connect(f).connect(g).connect(a.destination); src.start(t);
}
// Pixabay sounds, decoded once; synthesised fallback if decoding fails
const BUF={}; let buffersLoading=null;
function loadBuffers(){
  const a=ac(); if(!a||buffersLoading) return; 
  buffersLoading=Promise.all(Object.entries(SOUNDS).map(async([k,uri])=>{
    try{ const bin=atob(uri.split(",")[1]); const u8=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) u8[i]=bin.charCodeAt(i);
      BUF[k]=await new Promise((res,rej)=>a.decodeAudioData(u8.buffer,res,rej)); }catch(e){}
  }));
}
function play(k,vol=1){
  const a=ac(); if(!a||!BUF[k]) return false;
  const src=a.createBufferSource(); src.buffer=BUF[k]; const g=a.createGain(); g.gain.value=vol;
  src.connect(g).connect(a.destination); src.start(); return true;
}
const SFX={
  tick(last){ if(!play("tick",.9)) tone(last?1320:880,.07,"square",.06); },
  thunder(){ if(!play("thunder",1)){ noise(.18,"highpass",1800,.5); noise(2.2,"lowpass",420,.9,.05,2.1); tone(70,1.4,"sine",.25,.05,38); } },
  win(){ if(!play("win",.9)) [660,880,1320].forEach((f,i)=>tone(f,.16,"triangle",.12,i*.09)); },
  wrong(){ if(!play("wrong",.9)){ tone(330,.18,"triangle",.12,0); tone(220,.3,"triangle",.12,.16); } },
  tap(){ tone(1000,.04,"sine",.05); },
  end(){ if(!play("end",.9)) [1568,2093,2637,3136].forEach((f,i)=>tone(f,.25,"sine",.06,i*.07)); },
};
function syncSound(){ document.querySelectorAll(".snd").forEach(b=>b.setAttribute("aria-pressed",soundOn)); }
document.querySelectorAll(".snd").forEach(b=>b.onclick=()=>{ soundOn=!soundOn; store.set("sound",soundOn); syncSound(); if(soundOn){ SFX.tap(); loadBuffers(); } });
syncSound();


// ----- math rendering -----
function texFallback(t){
  return t.replace(/\\left|\\right|\\;|\\,/g,"").replace(/\\t?frac\{([^{}]*)\}\{([^{}]*)\}/g,"($1)/($2)").replace(/\\sqrt\[3\]\{([^{}]*)\}/g,"∛($1)")
   .replace(/\\sqrt\{([^{}]*)\}/g,"√($1)").replace(/\\times/g,"×").replace(/\\div/g,"÷").replace(/\\pi/g,"π").replace(/\\geq/g,"≥")
   .replace(/\\text\{([^{}]*)\}/g,"$1").replace(/\\%/g,"%").replace(/\\log_(\w)/g,"log$1 ").replace(/\^\{([^{}]*)\}/g,"^($1)").replace(/[{}]/g,"")
   .replace(/\^\((-?\d+)\)|\^(-?\d)/g,(m,a,b)=>[...(a??b)].map(c=>({"-":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"})[c]).join("")).replace(/-/g,"−");
}
let mjReady=null;
function mathEl(tex,cls="math"){const d=document.createElement("div");d.className=cls;d.dataset.tex=tex;d.textContent=texFallback(tex);return d;}
async function typeset(root){
  const els=[...root.querySelectorAll("[data-tex]")];
  if(!els.length) return;
  const ok = await mjReady;
  if(!ok) return;
  for(const el of els){
    try{ const node=await MathJax.tex2svgPromise(el.dataset.tex,{display:!el.closest(".rlist,.sol")}); el.textContent=""; el.appendChild(node); }catch(e){}
  }
}
mjReady=new Promise(res=>{
  const t=setTimeout(()=>res(false),8000);
  window.MathJax={svg:{fontCache:"local"},startup:{typeset:false,ready(){MathJax.startup.defaultReady();try{document.head.appendChild(MathJax.svgStylesheet());}catch(e){}clearTimeout(t);res(true);}}};
  const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg.js";s.async=true;s.onerror=()=>{clearTimeout(t);res(false);};
  document.head.appendChild(s);
});

// ----- home -----
function poolFor(id){return CHALLENGES.filter(c=>c.type===id&&c.level===level);}
function available(id){return poolFor(id).length>0||FORMATS.find(f=>f.id===id).gen;}
function activeFormats(){
  const ids=picked.size?[...picked]:FORMATS.map(f=>f.id);
  return ids.filter(available);
}
function renderHome(){
  const rg=$("roundsSeg"); rg.innerHTML="";
  ROUNDOPTS.forEach(r=>{const b=document.createElement("button");b.type="button";b.textContent=r;b.setAttribute("aria-pressed",r===ROUNDS);b.onclick=()=>{ROUNDS=r;store.set("rounds",r);renderHome();};rg.appendChild(b);});
  $("startTxt").textContent="Start";
  const sg=$("secsSeg"); sg.innerHTML="";
  SECS.forEach(s=>{const b=document.createElement("button");b.type="button";b.textContent=s+" s";b.setAttribute("aria-pressed",s===secs);b.onclick=()=>{secs=s;store.set("secs",s);renderHome();};sg.appendChild(b);});
  const lg=$("levelSeg"); lg.innerHTML="";
  LEVELS.forEach(L=>{const b=document.createElement("button");b.type="button";b.innerHTML=`<span></span><small></small>`;b.querySelector("span").textContent=L.name;b.querySelector("small").textContent=L.sub;b.setAttribute("aria-pressed",L.n===level);b.onclick=()=>{level=L.n;saveHome();};lg.appendChild(b);});
  const box=$("formats"); box.innerHTML="";
  const mix=document.createElement("button"); mix.type="button"; mix.className="fmt mix"; mix.setAttribute("aria-pressed",picked.size===0);
  mix.innerHTML=`<b class="allin"><svg width="11" height="13" viewBox="0 0 22 26" aria-hidden="true"><path d="M13 0 2 15h7l-2 11L20 9h-7l2-9z" fill="currentColor"/></svg>All in</b>`;
  mix.onclick=()=>{picked.clear();saveHome();};
  box.appendChild(mix);
  FORMATS.filter(f=>!f.allInOnly).forEach(f=>{
    const b=document.createElement("button"); b.type="button"; b.className="fmt";
    const dis = !available(f.id);
    b.disabled=dis; b.setAttribute("aria-pressed",picked.has(f.id)&&!dis);
    b.innerHTML=`<b></b><span></span>`; b.querySelector("b").textContent=f.name;
    const sp=b.querySelector("span"); if(dis) sp.textContent="not at this level"; else sp.remove();
    b.onclick=()=>{picked.has(f.id)?picked.delete(f.id):picked.add(f.id); saveHome();};
    box.appendChild(b);
  });
  $("classTog").setAttribute("aria-pressed",classMode);
  const dd=store.get("daily:"+todayKey(),null), db=$("dailyBtn");
  db.classList.toggle("done",!!dd);
  $("dailySub").textContent = dd ? `${todayLabel()} · played: ${dd.wins.filter(Boolean).length}/${dd.wins.length}` : `${todayLabel()} · 5 challenges`;
  const ok=activeFormats().length>0; $("start").disabled=!ok;
  const best=store.get("best:"+keyNow(),null);
  $("bestLine").classList.toggle("cm",classMode);
  $("bestLine").textContent = classMode ? "Team vs Lightning on" : best==null ? "" : `Your best here: ${best}/${ROUNDS}`;
}
function keyNow(){return ROUNDS+"r:"+secs+"s:L"+level+":"+(picked.size?[...picked].sort().join(","):"mix");}
function saveHome(){store.set("level",level);store.set("picked",[...picked]);renderHome();}


// ----- building a game -----
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function buildRounds(){
  // half video problems, half new ones (where a generator exists); no video repeats until the pool is used up
  const fm=activeFormats();
  const seen=new Set(store.get("seen",[]));
  const pool=CHALLENGES.filter(c=>fm.includes(c.type)&&c.level===level);
  let fresh=shuffle(pool.filter(c=>!seen.has(c.nr)));
  const out=[];
  for(let r=0;r<ROUNDS;r++){
    const type=fm[r%fm.length];
    const f=FORMATS.find(x=>x.id===type);
    let vids=fresh.filter(c=>c.type===type);
    if(!vids.length && !f.gen){ pool.filter(c=>c.type===type).forEach(c=>seen.delete(c.nr)); fresh=fresh.concat(shuffle(pool.filter(c=>c.type===type&&!fresh.includes(c)))); vids=fresh.filter(c=>c.type===type); }
    const useVideo = vids.length && (!f.gen || Math.random()<.5);
    if(useVideo){ const c=vids[0]; fresh.splice(fresh.indexOf(c),1); seen.add(c.nr); out.push(c); }
    else out.push(generate(type,level));
  }
  store.set("seen",[...seen]);
  return shuffle(out);
}
// ----- daily lightning: same 5 challenges for everyone, from the date -----
function pad2(n){return String(n).padStart(2,"0");}
function todayKey(){const d=new Date();return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;}
function todayLabel(){return new Date().toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});}
function seeded(str){let h=1779033703^str.length;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19;}
  let a=h>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function buildDaily(key){
  const orig=Math.random; Math.random=seeded("btl-daily-"+key);
  try{
    const types=shuffle(["classic","equations","geometry","bigger","next"]);
    if(Math.random()<.35) types[Math.random()<.5?3:4]="correct";
    return types.map((t,i)=>{
      const L=DAILY_LEVELS[i], f=FORMATS.find(x=>x.id===t);
      const pool=CHALLENGES.filter(c=>c.type===t&&c.level===L);
      if(pool.length&&(!f.gen||Math.random()<.5)) return pool[Math.floor(Math.random()*pool.length)];
      return generate(t,L);
    });
  } finally { Math.random=orig; }
}
function setStageMode(mode){$("stage").classList.toggle("classroom",mode==="class");}
function start(mode){
  mode = mode || (classMode?"class":"normal");
  const daily = mode==="daily";
  game={mode,secs:daily?DAILY_SECS:secs,day:daily?todayKey():null,rounds:daily?buildDaily(todayKey()):buildRounds(),i:0,beaten:0,streak:0,bestStreak:0,log:[]};
  setStageMode(mode); show("play"); nextRound();
}
function saveDaily(){ const w=game.rounds.map((_,i)=>!!(game.log[i]&&game.log[i].win)); if(!store.get("daily:"+game.day,null)) store.set("daily:"+game.day,{wins:w}); }
function showDailyPlayed(){
  const key=todayKey(), dd=store.get("daily:"+key,null); if(!dd) return start("daily");
  const rounds=buildDaily(key);
  game={mode:"daily",secs:DAILY_SECS,day:key,rounds,i:rounds.length,beaten:dd.wins.filter(Boolean).length,streak:0,bestStreak:0,already:true,log:rounds.map((it,i)=>({it,win:!!dd.wins[i]}))};
  setStageMode("daily"); finish();
}
$("start").onclick=()=>{ac();loadBuffers();start();}; $("againBtn").onclick=()=>{ac();loadBuffers();start(game&&game.mode);};
$("dailyBtn").onclick=()=>{ac();loadBuffers(); store.get("daily:"+todayKey(),null)?showDailyPlayed():start("daily");};
$("yourBtn").onclick=()=>{show("setup");renderHome();};
$("backBtn").onclick=()=>{show("home");renderHome();};
$("classTog").onclick=()=>{classMode=!classMode;store.set("class",classMode);renderHome();};
$("homeBtn").onclick=()=>{setStageMode("");show("home");renderHome();};
$("quit").onclick=()=>{clearTimers(); if(game&&game.mode==="daily") saveDaily(); setStageMode("");show("home");renderHome();};
function show(id){$("stage").classList.remove("answering");["home","setup","play","results"].forEach(s=>$(s).hidden=s!==id);window.scrollTo(0,0);}
function clearTimers(){timers.forEach(clearTimeout);timers=[];}

// ----- a round -----
function watchEl(){const w=document.createElement("div");w.className="watch";w.innerHTML=`<img src="${TIMER_IMG}" alt=""><div class="n"></div>`;return w;}
function titleFor(it){return {bigger:"Which is bigger?",correct:"Which is correct?",next:"What's next?"}[it.type]||"";}
function stampEl(it){const s=document.createElement("div");s.className="stamp";s.innerHTML=`<small>From</small><b>Beat the lightning</b><span class="sn"></span>`;s.querySelector(".sn").textContent="#"+it.nr;return s;}
function renderBoard(it){
  const b=$("board"); b.innerHTML=""; b.style.justifyContent="center";
  if(!it.practice){ const st=stampEl(it); st.classList.add("flow"); b.appendChild(st); }
  const watch=watchEl();
  if(it.type==="bigger"){
    b.style.justifyContent="stretch";
    const t=document.createElement("div");t.className="title";t.textContent="Which is bigger?";b.appendChild(t);
    const sp=document.createElement("div");sp.className="split";
    ["x","y"].forEach(k=>{const r=document.createElement("div");r.className="s"+k;const tg=document.createElement("span");tg.className="tag";tg.textContent=k;r.append(tg,mathEl(it[k]));sp.appendChild(r);});
    sp.appendChild(watch); b.appendChild(sp); return watch;
  }
  const ttl=titleFor(it); if(ttl){const t=document.createElement("div");t.className="title";t.textContent=ttl;b.appendChild(t);}
  if(it.type==="correct"){
    b.appendChild(mathEl(it.tex,"math small"));
    const duo=document.createElement("div");duo.className="duo";
    ["A","B"].forEach(k=>{const c=document.createElement("div");const tg=document.createElement("span");tg.className="tag";tg.textContent=k;const f=document.createElement("div");f.className="fig";f.innerHTML=it.fig==="graphs"?graphSVG(it[k]):numberLineSVG(it[k]);c.append(tg,f);duo.appendChild(c);});
    b.appendChild(duo);
  } else if(it.type==="geometry"){
    const f=document.createElement("div");f.className="fig";f.innerHTML=FIGS[it.fig]();b.appendChild(f);
  } else if(it.type==="next"){
    const s=document.createElement("div");s.className="seq";s.style.alignItems="stretch";
    it.seq.forEach((v,i)=>{const e=document.createElement("span");e.textContent=v.replace("-","−");e.style.marginLeft=(i*14)+"%";if(v==="?")e.className="q";s.appendChild(e);});
    b.appendChild(s);
  } else {
    b.appendChild(mathEl(it.tex));
  }
  const first=[...b.children].find(e=>!e.classList.contains("stamp")||e.classList.contains("flow")); if(first) first.classList.add("lead");
  b.appendChild(watch); return watch;
}
function renderMeter(){
  const m=$("meter"); m.innerHTML="";
  $("roundT").textContent=game.rounds.length;
  for(let i=0;i<game.rounds.length;i++){const e=document.createElement("i"); const l=game.log[i]; if(l) e.className=l.win==null?"done":l.win?"win":"lose"; else if(i===game.i) e.className="now"; m.appendChild(e);}
  $("roundN").textContent=game.i+1; $("beatN").textContent=game.beaten; $("streakN").textContent=game.streak;
}
async function nextRound(){
  clearTimers(); $("stage").classList.remove("answering");
  if(game.i>=game.rounds.length) return finish();
  const it=game.rounds[game.i]; game.cur={it,phase:"wait",tapped:false};
  $("serial").textContent = game.mode==="daily" ? "Daily · "+LEVELS[(it.level||DAILY_LEVELS[game.i])-1].name : LEVELS[level-1].name;
  renderMeter();
  const watch=renderBoard(it); $("controls").innerHTML="";
  await typeset($("board"));
  if(game.cur.it!==it) return;
  // controls for the thinking phase
  const ctl=$("controls");
  if(game.mode==="class"){ /* the class answers out loud */ }
  else if(it.kind==="choice"){
    const box=document.createElement("div");box.className="choices";
    (it.type==="bigger"?[["x","x is bigger"],["y","y is bigger"]]:[["A","Graph A"],["B","Graph B"]]).forEach(([k,l])=>{
      const bt=document.createElement("button");bt.type="button";bt.className="big choice";
      bt.innerHTML=`${k}<small></small>`; bt.querySelector("small").textContent=it.type==="correct"?(it.fig==="graphs"?"":"" ):"is bigger";
      if(it.type==="correct") bt.querySelector("small").textContent="is correct";
      bt.onclick=()=>choose(k); box.appendChild(bt);});
    ctl.appendChild(box);
  } else {
    const bt=document.createElement("button");bt.type="button";bt.className="big gotit";bt.textContent="Got it!";bt.onclick=gotIt;ctl.appendChild(bt);
  }
  // empty clock, then 3-2-1, then lightning
  const n=watch.querySelector(".n");
  game.cur.phase="think";
  timers.push(setTimeout(()=>{
    const S=game.secs; for(let k=0;k<S;k++){ const left=S-k; timers.push(setTimeout(()=>{ n.textContent=left; SFX.tick(left===1); },k*1000)); }
    timers.push(setTimeout(strike,S*1000));
  },500));
}
function strike(){
  if(!game.cur||game.cur.phase!=="think") return;
  game.cur.phase="done";
  // full-screen strike like the videos: bolt from the top down into the stopwatch
  const st=$("stage").getBoundingClientRect(), wEl=$("board").querySelector(".watch");
  const n=wEl&&wEl.querySelector(".n"); if(n) n.textContent="0";
  const wr=wEl?wEl.getBoundingClientRect():{left:st.left+st.width/2,width:0,top:st.top+st.height*.7,height:0};
  const cx=wr.left-st.left+wr.width/2, topY=st.height*.08, tipY=game.cur.it.type==="bigger" ? st.height*.86 : wr.top-st.top+wr.height*.56, h=Math.max(120,tipY-topY), k=h/415;
  const P=[[0,0],[-62,249],[10,240],[0,415],[64,163],[-8,170]].map(([dx,dy])=>`${(cx+dx*k).toFixed(1)},${(topY+dy*k).toFixed(1)}`).join(" ");
  $("strikeSvg").setAttribute("viewBox",`0 0 ${st.width} ${st.height}`); $("boltPoly").setAttribute("points",P);
  const s=$("strike"); s.classList.remove("on"); void s.offsetWidth; s.classList.add("on");
  SFX.thunder();
  $("controls").innerHTML="";
  const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  timers.push(setTimeout(()=> game.mode==="class" ? revealBtn() : verdict(false,"The lightning won"), reduce?0:550));
}
function revealBtn(){
  game.cur.phase="reveal";
  const ctl=$("controls"); ctl.innerHTML="";
  const b=document.createElement("button");b.type="button";b.className="big reveal";b.textContent="Reveal";b.onclick=reveal;
  ctl.appendChild(b); setTimeout(()=>b.focus(),50);
}
function reveal(){
  if(game.cur.phase!=="reveal") return;
  game.cur.phase="done";
  const it=game.cur.it; game.log[game.i]={it,win:null}; renderMeter();
  const ctl=$("controls"); ctl.innerHTML="";
  const v=document.createElement("div");v.className="verdict";
  const sol=document.createElement("div");sol.className="sol";sol.append("Answer: ",solutionEl(it,"math"));v.appendChild(sol);
  const nb=document.createElement("button");nb.type="button";nb.className="big next";nb.textContent=game.i+1>=game.rounds.length?"See all answers":"Next";
  nb.onclick=()=>{game.i++;nextRound();};
  ctl.append(v,nb); typeset(v); setTimeout(()=>nb.focus(),50);
}
function gotIt(){
  if(game.cur.phase!=="think") return;
  clearTimers(); game.cur.phase="answer";
  const it=game.cur.it, ctl=$("controls"); ctl.innerHTML="";
  const hint=document.createElement("div");hint.className="hint";
  hint.textContent = it.kind==="multi" ? "Give all solutions, e.g. 3 or −3" : it.kind==="expr" ? "Use √ and π where needed" : "Fractions like 3/2 are fine";
  const row=document.createElement("form");row.className="answer";row.autocomplete="off";
  row.innerHTML=`<input id="ans" type="text" inputmode="text" autocapitalize="off" spellcheck="false" placeholder="${it.type==="equations"?"x = …":"Your answer"}" aria-label="Your answer"><button type="submit">Check</button>`;
  row.onsubmit=e=>{e.preventDefault();submit();};
  const keys=document.createElement("div");keys.className="keys";
  ["−","/",".","√","π","^","or"].forEach(k=>{const b=document.createElement("button");b.type="button";b.textContent=k;b.onclick=()=>ins(k==="or"?" or ":k==="−"?"-":k);keys.appendChild(b);});
  ctl.append(row,keys,hint);
  const w=$("board").querySelector(".watch .n"); if(w) w.textContent="✓";
  $("stage").classList.add("answering");
  setTimeout(()=>{ const a=$("ans"); a.focus(); keepAnswerVisible(); },30);
}
function keepAnswerVisible(){ const a=$("ans"); if(a&&document.activeElement===a) $("controls").scrollIntoView({block:"end",behavior:"smooth"}); }
if(window.visualViewport) visualViewport.addEventListener("resize",()=>setTimeout(keepAnswerVisible,60));
function ins(t){const i=$("ans");const a=i.selectionStart??i.value.length,b=i.selectionEnd??a;i.value=i.value.slice(0,a)+t+i.value.slice(b);i.focus();i.setSelectionRange(a+t.length,a+t.length);}
function submit(){
  const it=game.cur.it, v=$("ans").value;
  if(!v.trim()){ $("ans").focus(); return; }
  if(partialMulti(it,v)){ const h=$("controls").querySelector(".hint"); h.textContent="Almost: there is another solution. Give both."; h.style.color="var(--bolt)"; return; }
  game.cur.phase="done";
  const ok=checkAnswer(it,v);
  verdict(ok, ok?"You beat the lightning!":"Not quite", v);
}
function choose(k){
  if(game.cur.phase!=="think") return;
  clearTimers(); game.cur.phase="done";
  const ok=k===game.cur.it.a;
  verdict(ok, ok?"You beat the lightning!":"Not quite", k);
}
function solutionTex(it){
  if(it.kind==="multi") return it.a.map(a=>"x = "+a).join(" \\text{ or } ");
  if(it.kind==="expr") return it.show;
  if(it.kind==="choice"){ if(it.type==="bigger") return `${it.a}\\text{ is bigger: } ${it.vx}\\text{ vs }${it.vy}`; return `\\text{${it.a} is correct}`; }
  let s=String(it.a); const m=s.match(/^(-?)(\d+)\/(\d+)$/); if(m) s=`${m[1]}\\frac{${m[2]}}{${m[3]}}`;
  if(it.type==="equations") s="x = "+s;
  if(it.unit) s+= it.unit==="°" ? "^\\circ" : `\\text{ ${it.unit}}`;
  return s;
}
function solutionEl(it,cls){
  if(it.kind!=="choice") return mathEl(solutionTex(it),cls);
  const d=document.createElement("div"); d.className=cls+" txt";
  if(it.type==="bigger"){ d.append(it.a+" is bigger: ",mathEl(it.vx,"mi")," vs ",mathEl(it.vy,"mi")); }
  else d.append(it.a+" is correct");
  return d;
}
function verdict(win,msg,given){
  const it=game.cur.it; $("stage").classList.remove("answering");
  game.log[game.i]={it,win,given};
  if(win) SFX.win(); else if(msg!=="The lightning won") SFX.wrong();
  if(win){game.beaten++;game.streak++;game.bestStreak=Math.max(game.bestStreak,game.streak);} else game.streak=0;
  renderMeter();
  const ctl=$("controls"); ctl.innerHTML="";
  const v=document.createElement("div");v.className="verdict "+(win?"win":"lose");
  const h=document.createElement("h2");h.textContent=msg;v.appendChild(h);
  const sol=document.createElement("div");sol.className="sol";sol.append("Answer: ",solutionEl(it,"math"));v.appendChild(sol);
  const nb=document.createElement("button");nb.type="button";nb.className="big next";nb.textContent=game.i+1>=game.rounds.length?"See results":"Next";
  nb.onclick=()=>{game.i++;nextRound();};
  ctl.append(v,nb); typeset(v); setTimeout(()=>nb.focus(),50);
}
function finish(){
  show("results"); if(soundOn&&!game.already) SFX.end();
  const R=$("results"), mode=game.mode;
  R.classList.toggle("classmode",mode==="class"); R.classList.toggle("dailydone",mode==="daily");
  if(mode==="daily"&&!game.already) saveDaily();
  const n=game.beaten, total=game.rounds.length;
  $("finalN").innerHTML=`${n}<small>/${total}</small>`;
  const ch = picked.size===1 ? FORMATS.find(f=>f.id===[...picked][0]).name : picked.size ? "Mixed" : "All in";
  const fd=$("finalDots"); fd.innerHTML=game.log.map(({win})=>`<svg viewBox="-2 -2 26 30" class="${win?"w":"l"}"><path d="M13 0 2 15h7l-2 11L20 9h-7l2-9z"/></svg>`).join("");
  document.querySelector("#results .answers").open = mode==="class";
  const meta = mode==="daily" ? ["Daily", new Date(game.day+"T12:00").toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}), DAILY_SECS+" s"] : [LEVELS[level-1].name, ch, game.secs+" s"];
  $("finalMeta").innerHTML=""; meta.forEach(t=>{const s=document.createElement("span");s.textContent=t;$("finalMeta").appendChild(s);});
  $("finalMsg").textContent = n===total?"Flawless. The lightning never stood a chance.": n>=7?`Strong. Best streak: ${game.bestStreak}.`: n>=4?`Good start. Best streak: ${game.bestStreak}.`:"The lightning was faster this time.\nTry again?";
  if(mode==="daily") $("finalMsg").textContent = (game.already?"Already played today.\n":"") + "New lightning tomorrow.";
  if(mode==="normal"){ const k="best:"+keyNow(); if(n>(store.get(k,-1))) store.set(k,n); }
  const ul=$("rlist"); ul.innerHTML="";
  game.log.forEach(({it,win})=>{
    const li=document.createElement("li");
    const d=document.createElement("span");d.className="dot "+(win==null?"done":win?"win":"lose");d.innerHTML='<svg viewBox="-2 -2 26 30"><path d="M13 0 2 15h7l-2 11L20 9h-7l2-9z"/></svg>';
    let q = it.type==="bigger" ? `${it.x}\\;\\text{vs}\\;${it.y}` : it.tex ? it.tex : it.type==="next" ? it.seq.join(",\\ ") : "";
    const m = q ? mathEl(q,"m") : Object.assign(document.createElement("span"),{className:"m",textContent:FORMATS.find(f=>f.id===it.type).name});
    if(!it.practice){const v=document.createElement("span");v.className="vid";v.textContent="#"+it.nr;m.appendChild(v);}
    const s=solutionEl(it,"s");
    li.append(d,m,s); ul.appendChild(li);
  });
  typeset(ul);
}
document.addEventListener("keydown",e=>{ if(!game||$("play").hidden) return;
  if(game.mode==="class"&&(e.key===" "||e.key==="Enter")&&game.cur?.phase==="reveal"){e.preventDefault();reveal();return;}
  if(game.mode==="class"&&game.cur?.phase==="think") return; if(game.cur?.phase==="think"&&(e.key===" "||e.key==="Enter")&&game.cur.it.kind!=="choice"){e.preventDefault();gotIt();} });
renderHome();
