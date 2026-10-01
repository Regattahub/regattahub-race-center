"use strict";
const sections=[
 {key:"entries",title:"\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03bc\u03b5\u03c4\u03bf\u03c7\u03ce\u03bd",description:"\u03a3\u03c5\u03bc\u03bc\u03b5\u03c4\u03bf\u03c7\u03ad\u03c2 \u03c3\u03ba\u03b1\u03c6\u03ce\u03bd \u03ba\u03b1\u03b9 \u03ad\u03bb\u03b5\u03b3\u03c7\u03bf\u03c2 \u03b4\u03b5\u03bb\u03c4\u03af\u03c9\u03bd.",icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10M15 10v10"/>',featured:true},
 {key:"crews",title:"\u03a0\u03bb\u03b7\u03c1\u03ce\u03bc\u03b1\u03c4\u03b1 \u03b1\u03bd\u03ac \u03c3\u03ba\u03ac\u03c6\u03bf\u03c2",description:"\u039a\u03b1\u03c4\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ac\u03c4\u03c9\u03bd \u03b1\u03bd\u03ac \u03c3\u03ba\u03ac\u03c6\u03bf\u03c2.",icon:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0112 0v2M16 5a3 3 0 010 6M19 20v-2a6 6 0 00-2-4"/>',featured:true},
 {key:"results",title:"\u0391\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1",description:"\u039a\u03b1\u03c4\u03b1\u03c4\u03ac\u03be\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 \u03b9\u03c3\u03c4\u03b9\u03bf\u03b4\u03c1\u03bf\u03bc\u03b9\u03ce\u03bd.",icon:'<path d="M8 3h8v6a4 4 0 01-8 0V3ZM8 5H4v3a4 4 0 004 4M16 5h4v3a4 4 0 01-4 4M12 13v7M8 21h8"/>'},
 {key:"notice",title:"\u03a0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03b5\u03bb\u03ad\u03b3\u03c7\u03bf\u03c5",description:"\u03a0\u03c1\u03bf\u03ba\u03ae\u03c1\u03c5\u03be\u03b7 \u03ba\u03b1\u03b9 \u03b1\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c4\u03b7\u03c2 \u03b5\u03c0\u03b9\u03c4\u03c1\u03bf\u03c0\u03ae\u03c2 \u03b1\u03b3\u03ce\u03bd\u03b1.",icon:'<path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 12h8M8 16h6"/>'},
 {key:"entryForm",title:"\u0394\u03ae\u03bb\u03c9\u03c3\u03b7 \u03c3\u03c5\u03bc\u03bc\u03b5\u03c4\u03bf\u03c7\u03ae\u03c2",description:"\u0397 \u03c6\u03cc\u03c1\u03bc\u03b1 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2 \u03c3\u03c4\u03bf\u03bd \u03b1\u03b3\u03ce\u03bd\u03b1.",icon:'<rect x="4" y="4" width="16" height="17" rx="2"/><path d="M9 4V2h6v2M8 10h8M8 14h8M8 18h4"/>'},
 {key:"website",title:"\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03c0\u03bb\u03b7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2",description:"\u0386\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03c6\u03cc\u03c1\u03bc\u03b1\u03c2 \u03c4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 \u03c0\u03bb\u03b7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2.",icon:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0112 0v2M16 5a3 3 0 010 6M19 20v-2a6 6 0 00-2-4"/>'},
 {key:"photos",title:"\u0394\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2 \u03a0\u03bb\u03b7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2",description:"\u039f \u03c6\u03ac\u03ba\u03b5\u03bb\u03bf\u03c2 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03b4\u03b7\u03bb\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bb\u03b7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c3\u03b5 PDF.",icon:'<path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 12h8M8 16h6"/>'}
];
let config={raceTitle:"\u03a0\u039b\u0391\u03a4\u03a6\u039f\u03a1\u039c\u0391 TEST 2026",raceDate:"",organizer:"",organizerLogoUrl:"",organizerBannerUrl:"",links:{}};
let sheetState="loading";
const $=id=>document.getElementById(id);
function validUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)&&!u.username&&!u.password;}catch{return false;}}
function render(){
 $("race-title").textContent=config.raceTitle;$("race-date").textContent=config.raceDate;$("organizer").textContent=config.organizer;
 const logo=$("organizer-logo"),wrap=$("organizer-logo-wrap");
 const logoUrl=config.organizerLogoUrl||"";wrap.hidden=true;
 logo.onload=()=>{wrap.hidden=false;};logo.onerror=()=>{wrap.hidden=true;};
 if(validUrl(logoUrl)){logo.alt=`\u03a3\u03ae\u03bc\u03b1 \u03b4\u03b9\u03bf\u03c1\u03b3\u03b1\u03bd\u03c9\u03c4\u03ae: ${config.organizer}`;if(logo.getAttribute("src")!==logoUrl)logo.src=logoUrl;else if(logo.complete&&logo.naturalWidth>0)wrap.hidden=false;}else logo.removeAttribute("src");
 const banner=$("organizer-banner"),bannerWrap=$("organizer-banner-wrap");
 bannerWrap.hidden=true;
 banner.onload=()=>{bannerWrap.hidden=false;};banner.onerror=()=>{bannerWrap.hidden=true;};
 const bannerUrl=config.organizerBannerUrl||"";
 if(validUrl(bannerUrl)){if(banner.getAttribute("src")!==bannerUrl)banner.src=bannerUrl;else if(banner.complete&&banner.naturalWidth>0)bannerWrap.hidden=false;}else banner.removeAttribute("src");
 document.title=`${config.raceTitle} \u00b7 RegattaHub TEST`;
 $("cards").replaceChildren(...sections.map(s=>{
   const url=config.links[s.key];const connected=!!url&&validUrl(url);const el=document.createElement(connected?"a":"button");
   el.className="card";el.dataset.section=s.key;
   if(connected){el.href=url;el.target="_blank";el.rel="noopener noreferrer";el.setAttribute("aria-label",s.title+" \u2014 \u03b1\u03bd\u03bf\u03af\u03b3\u03b5\u03b9 \u03c3\u03b5 \u03bd\u03ad\u03b1 \u03ba\u03b1\u03c1\u03c4\u03ad\u03bb\u03b1");}else{el.type="button";el.addEventListener("click",()=>showDetail(s));}
   el.innerHTML=`<span class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${s.icon}</svg></span><span class="card-title"></span>`;
   el.querySelector(".card-title").textContent=s.title;
   return el;
 }));
 const pending=sections.some(s=>!validUrl(config.links[s.key]||""));
 let note=sheetState==="loaded"?"\u039f\u03b9 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5 \u03b1\u03b3\u03ce\u03bd\u03b1 \u03b5\u03bd\u03b7\u03bc\u03b5\u03c1\u03ce\u03b8\u03b7\u03ba\u03b1\u03bd.":sheetState==="loading"?"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03b9\u03ce\u03bd \u03b1\u03b3\u03ce\u03bd\u03b1\u2026":"\u039f\u03b9 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03c4\u03bf\u03c5 \u03b1\u03b3\u03ce\u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03c9\u03c1\u03b9\u03bd\u03ac \u03bc\u03b7 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b5\u03c2.";
 if(pending)note+=" \u039f\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03b8\u03b1 \u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03bf\u03cd\u03bd \u03cc\u03c4\u03b1\u03bd \u03b4\u03b7\u03bc\u03bf\u03c3\u03b9\u03b5\u03c5\u03c4\u03bf\u03cd\u03bd \u03bf\u03b9 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03af \u03c4\u03bf\u03c5\u03c2.";
 document.querySelector(".test-note p").textContent=note;
}
function showDetail(s){$("detail-title").textContent=s.title;$("detail-description").textContent=s.description;$("detail-dialog").showModal();}
document.querySelectorAll(".close-button").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
const TEST_SETTINGS_ID="1UPMKC_dUtJ958dgUpby3HYBwVPPyNe9AlastWySzK98";
const TEST_SETTINGS_BASE="https://script.google.com/macros/s/AKfycbytWK8tSR7gwrvsm2KM7fRUPi2yhPv1jjr2tt0a9PT-Wj7wLaxmAf_x4mQQjd2uKB-1/exec";
function checkedSettingsEndpoint(value){
 const u=new URL(value);
 if(u.origin+u.pathname!==TEST_SETTINGS_BASE||u.username||u.password||u.searchParams.get("settings")!==TEST_SETTINGS_ID||u.searchParams.get("action")!=="settings")throw new Error("TEST endpoint mismatch");
 return u;
}
function readSheetSettings(endpoint){
 return new Promise((resolve,reject)=>{
  let u;try{u=checkedSettingsEndpoint(endpoint);}catch(error){reject(error);return;}
  const name="raceCenterSettings_"+Date.now()+"_"+Math.random().toString(36).slice(2);
  const script=document.createElement("script");let settled=false;
  const finish=(error,data)=>{
   if(settled)return;settled=true;clearTimeout(timer);script.remove();
   // A delayed response can still execute after removal. Leave a harmless callback briefly.
   window[name]=()=>{};setTimeout(()=>{delete window[name];},30000);
   if(error)reject(error);else resolve(data);
  };
  const timer=setTimeout(()=>finish(new Error("settings timeout")),20000);
  window[name]=data=>finish(null,data);
  script.onerror=()=>finish(new Error("settings unavailable"));
  u.searchParams.set("callback",name);u.searchParams.set("_",String(Date.now()));
  script.src=u.toString();script.referrerPolicy="no-referrer";document.head.append(script);
 });
}
function mergeSheetSettings(base,data){
 if(!data||data.success!==true||typeof data.raceTitle!=="string"||!data.raceTitle.trim())throw new Error("invalid settings response");
 if(typeof data.viewer!=="string"||!validUrl(data.viewer)||new URL(data.viewer).searchParams.get("settings")!==TEST_SETTINGS_ID)throw new Error("viewer is not TEST");
 const next={...base,links:{...base.links,entries:data.viewer},raceTitle:data.raceTitle.trim()};
 if(typeof data.raceDate==="string")next.raceDate=data.raceDate;
 if(typeof data.organizerName==="string")next.organizer=data.organizerName;
 if(typeof data.organizerBanner==="string")next.organizerBannerUrl=validUrl(data.organizerBanner)?data.organizerBanner:"";
 if(typeof data.organizerLogoUrl==="string")next.organizerLogoUrl=validUrl(data.organizerLogoUrl)?data.organizerLogoUrl:"";
 // Optional fields for a later endpoint extension. Missing fields leave these cards unconfigured.
 for(const [key,field] of Object.entries({crews:"crewsUrl",results:"resultsUrl",notice:"noticeUrl",entryForm:"entryFormUrl",website:"websiteUrl",photos:"photosUrl"})){
  if(typeof data[field]==="string")next.links[key]=validUrl(data[field])?data[field]:"";
 }
 if(!next.links.entryForm&&/^\d{10,20}$/.test(data.jotformFormId||""))next.links.entryForm="https://form.jotform.com/"+data.jotformFormId;
 return next;
}
async function initialize(){
 render();
 try{
  const response=await fetch("race-config.json",{cache:"no-store"});if(!response.ok)throw new Error("config");
  const c=await response.json();
  if(c.schemaVersion!==1||c.mode!=="test"||typeof c.raceTitle!=="string"||!c.raceTitle.trim())throw new Error("schema");
  checkedSettingsEndpoint(c.settingsEndpoint);
  config={...config,...c,links:{...c.links}};render();
  config=mergeSheetSettings(config,await readSheetSettings(c.settingsEndpoint));sheetState="loaded";
 }catch(error){sheetState="error";}
 finally{render();}
}
initialize();
