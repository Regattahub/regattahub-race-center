"use strict";
const sections=[
 {key:"entries",title:"Ξ Ξ―Ξ½Ξ±ΞΊΞ±Ο ΟΟΞΌΞΌΞ΅ΟΞΏΟΟΞ½",description:"Ξ£ΟΞΌΞΌΞ΅ΟΞΏΟΞ­Ο ΟΞΊΞ±ΟΟΞ½ ΞΊΞ±ΞΉ Ξ­Ξ»Ξ΅Ξ³ΟΞΏΟ Ξ΄Ξ΅Ξ»ΟΞ―ΟΞ½.",icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10M15 10v10"/>',featured:true},
 {key:"crews",title:"Ξ Ξ»Ξ·ΟΟΞΌΞ±ΟΞ± Ξ±Ξ½Ξ¬ ΟΞΊΞ¬ΟΞΏΟ",description:"ΞΞ±ΟΞ±ΟΟΞ¬ΟΞ΅ΞΉΟ ΟΞ»Ξ·ΟΟΞΌΞ¬ΟΟΞ½ Ξ±Ξ½Ξ¬ ΟΞΊΞ¬ΟΞΏΟ.",icon:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0112 0v2M16 5a3 3 0 010 6M19 20v-2a6 6 0 00-2-4"/>',featured:true},
 {key:"results",title:"ΞΟΞΏΟΞ΅Ξ»Ξ­ΟΞΌΞ±ΟΞ±",description:"ΞΞ±ΟΞ±ΟΞ¬ΞΎΞ΅ΞΉΟ ΞΊΞ±ΞΉ Ξ±ΟΞΏΟΞ΅Ξ»Ξ­ΟΞΌΞ±ΟΞ± ΞΉΟΟΞΉΞΏΞ΄ΟΞΏΞΌΞΉΟΞ½.",icon:'<path d="M8 3h8v6a4 4 0 01-8 0V3ZM8 5H4v3a4 4 0 004 4M16 5h4v3a4 4 0 01-4 4M12 13v7M8 21h8"/>'},
 {key:"notice",title:"Ξ Ξ―Ξ½Ξ±ΞΊΞ±Ο Ξ΅Ξ»Ξ­Ξ³ΟΞΏΟ",description:"Ξ ΟΞΏΞΊΞ�ΟΟΞΎΞ· ΞΊΞ±ΞΉ Ξ±Ξ½Ξ±ΞΊΞΏΞΉΞ½ΟΟΞ΅ΞΉΟ ΟΞ·Ο Ξ΅ΟΞΉΟΟΞΏΟΞ�Ο Ξ±Ξ³ΟΞ½Ξ±.",icon:'<path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 12h8M8 16h6"/>'},
 {key:"entryForm",title:"ΞΞ�Ξ»ΟΟΞ· ΟΟΞΌΞΌΞ΅ΟΞΏΟΞ�Ο",description:"Ξ ΟΟΟΞΌΞ± Ξ΅Ξ³Ξ³ΟΞ±ΟΞ�Ο ΟΟΞΏΞ½ Ξ±Ξ³ΟΞ½Ξ±.",icon:'<rect x="4" y="4" width="16" height="17" rx="2"/><path d="M9 4V2h6v2M8 10h8M8 14h8M8 18h4"/>'},
 {key:"website",title:"Ξ€ΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ· ΟΞ»Ξ·ΟΟΞΌΞ±ΟΞΏΟ",description:"ΞΞ½ΞΏΞΉΞ³ΞΌΞ± ΟΞ·Ο ΟΟΟΞΌΞ±Ο ΟΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ·Ο ΟΞ»Ξ·ΟΟΞΌΞ±ΟΞΏΟ.",icon:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0112 0v2M16 5a3 3 0 010 6M19 20v-2a6 6 0 00-2-4"/>'},
 {key:"photos",title:"ΞΞ·Ξ»ΟΟΞ΅ΞΉΟ Ξ Ξ»Ξ·ΟΟΞΌΞ±ΟΞΏΟ",description:"Ξ ΟΞ¬ΞΊΞ΅Ξ»ΞΏΟ ΞΌΞ΅ ΟΞΉΟ Ξ΄Ξ·Ξ»ΟΟΞ΅ΞΉΟ ΟΞ»Ξ·ΟΟΞΌΞ±ΟΞΏΟ ΟΞ΅ PDF.",icon:'<path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 12h8M8 16h6"/>'}
];
let config={raceTitle:"Ξ ΞΞΞ€Ξ¦ΞΞ‘ΞΞ TEST 2026",raceDate:"",organizer:"",organizerLogoUrl:"",organizerBannerUrl:"",links:{}};
let sheetState="loading";
const $=id=>document.getElementById(id);
function validUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)&&!u.username&&!u.password;}catch{return false;}}
function render(){
 $("race-title").textContent=config.raceTitle;$("race-date").textContent=config.raceDate;$("organizer").textContent=config.organizer;
 const logo=$("organizer-logo"),wrap=$("organizer-logo-wrap");
 const logoUrl=config.organizerLogoUrl||"";wrap.hidden=true;
 logo.onload=()=>{wrap.hidden=false;};logo.onerror=()=>{wrap.hidden=true;};
 if(validUrl(logoUrl)){logo.alt=`Ξ£Ξ�ΞΌΞ± Ξ΄ΞΉΞΏΟΞ³Ξ±Ξ½ΟΟΞ�: ${config.organizer}`;if(logo.getAttribute("src")!==logoUrl)logo.src=logoUrl;else if(logo.complete&&logo.naturalWidth>0)wrap.hidden=false;}else logo.removeAttribute("src");
 const banner=$("organizer-banner"),bannerWrap=$("organizer-banner-wrap");
 bannerWrap.hidden=true;
 banner.onload=()=>{bannerWrap.hidden=false;};banner.onerror=()=>{bannerWrap.hidden=true;};
 const bannerUrl=config.organizerBannerUrl||"";
 if(validUrl(bannerUrl)){if(banner.getAttribute("src")!==bannerUrl)banner.src=bannerUrl;else if(banner.complete&&banner.naturalWidth>0)bannerWrap.hidden=false;}else banner.removeAttribute("src");
 document.title=`${config.raceTitle} Β· RegattaHub TEST`;
 $("cards").replaceChildren(...sections.map(s=>{
   const url=config.links[s.key];const connected=!!url&&validUrl(url);const el=document.createElement(connected?"a":"button");
   el.className="card";el.dataset.section=s.key;
   if(connected){el.href=url;el.target="_blank";el.rel="noopener noreferrer";el.setAttribute("aria-label",s.title+" β Ξ±Ξ½ΞΏΞ―Ξ³Ξ΅ΞΉ ΟΞ΅ Ξ½Ξ­Ξ± ΞΊΞ±ΟΟΞ­Ξ»Ξ±");}else{el.type="button";el.addEventListener("click",()=>showDetail(s));}
   el.innerHTML=`<span class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${s.icon}</svg></span><span class="card-title"></span>`;
   el.querySelector(".card-title").textContent=s.title;
   return el;
 }));
 const pending=sections.some(s=>!validUrl(config.links[s.key]||""));
 let note=sheetState==="loaded"?"ΞΞΉ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞΏΟ Ξ±Ξ³ΟΞ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ·ΞΊΞ±Ξ½.":sheetState==="loading"?"Ξ¦ΟΟΟΟΟΞ· ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ Ξ±Ξ³ΟΞ½Ξ±β¦":"ΞΞΉ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞΏΟ Ξ±Ξ³ΟΞ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞΏΟΟΟΞΉΞ½Ξ¬ ΞΌΞ· Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞ΅Ο.";
 if(pending)note+=" ΞΟΞΉΟΞΌΞ­Ξ½Ξ΅Ο Ξ΅ΟΞΉΞ»ΞΏΞ³Ξ­Ο ΞΈΞ± Ξ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞΉΞ·ΞΈΞΏΟΞ½ ΟΟΞ±Ξ½ Ξ΄Ξ·ΞΌΞΏΟΞΉΞ΅ΟΟΞΏΟΞ½ ΞΏΞΉ ΟΟΞ½Ξ΄Ξ΅ΟΞΌΞΏΞ― ΟΞΏΟΟ.";
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
