"use strict";
const sections=[
 {key:"entries",title:"Πίνακας συμμετοχών",description:"Συμμετοχές σκαφών και έλεγχος δελτίων.",icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10M15 10v10"/>',featured:true},
 {key:"crews",title:"Πληρώματα ανά σκάφος",description:"Καταστάσεις πληρωμάτων ανά σκάφος.",icon:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0112 0v2M16 5a3 3 0 010 6M19 20v-2a6 6 0 00-2-4"/>',featured:true},
 {key:"results",title:"Αποτελέσματα",description:"Κατατάξεις και αποτελέσματα ιστιοδρομιών.",icon:'<path d="M8 3h8v6a4 4 0 01-8 0V3ZM8 5H4v3a4 4 0 004 4M16 5h4v3a4 4 0 01-4 4M12 13v7M8 21h8"/>'},
 {key:"notice",title:"Προκήρυξη",description:"Η προκήρυξη και οι όροι του αγώνα.",icon:'<path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 12h8M8 16h6"/>'},
 {key:"entryForm",title:"Δήλωση συμμετοχής",description:"Η φόρμα εγγραφής στον αγώνα.",icon:'<rect x="4" y="4" width="16" height="17" rx="2"/><path d="M9 4V2h6v2M8 10h8M8 14h8M8 18h4"/>'},
 {key:"website",title:"Website αγώνα",description:"Ανακοινώσεις και πληροφορίες διοργανωτή.",icon:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a18 18 0 010 18 18 18 0 010-18Z"/>'},
 {key:"photos",title:"Φωτογραφίες & Video",description:"Το φωτογραφικό υλικό και τα video του αγώνα.",icon:'<path d="M8 5l2-2h4l2 2h5v15H3V5h5Z"/><circle cx="12" cy="12" r="4"/>'}
];
let config={raceTitle:"TEST RACE 2027",raceDate:"1 & 2 Οκτωβρίου 2027",organizer:"Δοκιμαστικός αγώνας ομίλου",organizerLogoUrl:"",links:{}};
const $=id=>document.getElementById(id);
function validUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)&&!u.username&&!u.password;}catch{return false;}}
function render(){
 $("race-title").textContent=config.raceTitle;$("race-date").textContent=config.raceDate;$("organizer").textContent=config.organizer;
 const logo=$("organizer-logo"),wrap=$("organizer-logo-wrap");
 const logoUrl=config.organizerLogoUrl||"";wrap.hidden=true;
 logo.onload=()=>{wrap.hidden=false;};logo.onerror=()=>{wrap.hidden=true;};
 if(validUrl(logoUrl)){logo.alt=`Σήμα διοργανωτή: ${config.organizer}`;if(logo.getAttribute("src")!==logoUrl)logo.src=logoUrl;else if(logo.complete&&logo.naturalWidth>0)wrap.hidden=false;}else logo.removeAttribute("src");
 document.title=`${config.raceTitle} · RegattaHub TEST`;
 $("cards").replaceChildren(...sections.map(s=>{
   const url=config.links[s.key];const connected=!!url&&validUrl(url);const el=document.createElement(connected?"a":"button");
   el.className="card";el.dataset.section=s.key;
   if(connected){el.href=url;el.target="_blank";el.rel="noopener noreferrer";el.setAttribute("aria-label",s.title+" — ανοίγει σε νέα καρτέλα");}else{el.type="button";el.addEventListener("click",()=>showDetail(s));}
   el.innerHTML=`<span class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${s.icon}</svg></span><span class="card-title"></span>`;
   el.querySelector(".card-title").textContent=s.title;
   return el;
 }));
 const pending=sections.some(s=>!validUrl(config.links[s.key]||""));
 document.querySelector(".test-note p").textContent=pending?"Οι σύνδεσμοι δεν έχουν συνδεθεί όλοι ακόμη. Από τις «Ρυθμίσεις TEST» μπορείτε να δοκιμάσετε τους δικούς σας, μόνο για αυτή την προβολή.":"Οι δοκιμαστικοί σύνδεσμοι ισχύουν μόνο για αυτή την προβολή. Με την ανανέωση επανέρχονται οι αρχικές ρυθμίσεις.";
}
function showDetail(s){$("detail-title").textContent=s.title;$("detail-description").textContent=s.description;$("detail-dialog").showModal();}
function openSettings(){
 $("form-error").textContent="";const form=$("settings-form");for(const key of ["raceTitle","raceDate","organizer","organizerLogoUrl"])form.elements[key].value=config[key]||"";
 $("link-fields").replaceChildren(...sections.map(s=>{const label=document.createElement("label");label.textContent=s.title;const input=document.createElement("input");input.type="url";input.name=s.key;input.value=config.links[s.key]||"";input.placeholder="https://…";input.autocomplete="off";label.append(input);return label;}));$("settings-dialog").showModal();
}
document.querySelectorAll(".close-button").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
$("settings-open").addEventListener("click",openSettings);$("settings-cancel").addEventListener("click",()=>$("settings-dialog").close());
$("detail-settings").addEventListener("click",()=>{$("detail-dialog").close();openSettings();});
$("settings-form").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.target);const links={};for(const s of sections){const url=String(data.get(s.key)||"").trim();if(url&&!validUrl(url)){$("form-error").textContent=`Ο σύνδεσμος «${s.title}» πρέπει να αρχίζει με https:// ή http:// και να μην περιλαμβάνει στοιχεία σύνδεσης.`;e.target.elements[s.key].focus();return;}links[s.key]=url;}const organizerLogoUrl=String(data.get("organizerLogoUrl")||"").trim();if(organizerLogoUrl&&!validUrl(organizerLogoUrl)){$("form-error").textContent="Συμπληρώστε έγκυρο σύνδεσμο εικόνας για το σήμα διοργανωτή.";e.target.elements.organizerLogoUrl.focus();return;}const title=String(data.get("raceTitle")).trim();if(!title){$("form-error").textContent="Συμπληρώστε τον τίτλο αγώνα.";return;}config={...config,raceTitle:title,raceDate:String(data.get("raceDate")).trim(),organizer:String(data.get("organizer")).trim(),organizerLogoUrl,links};render();$("settings-dialog").close();$("toast").textContent="Οι σύνδεσμοι εφαρμόστηκαν για αυτή την προβολή TEST.";$("toast").hidden=false;setTimeout(()=>{$("toast").hidden=true;},4500);});
render();
fetch("race-config.json").then(r=>{if(!r.ok)throw new Error("config");return r.json();}).then(c=>{if(c.schemaVersion!==1||c.mode!=="test"||typeof c.raceTitle!=="string"||!c.raceTitle.trim())throw new Error("schema");config={...config,...c,links:{...c.links}};render();}).catch(()=>{document.querySelector(".test-note p").textContent="Δεν φορτώθηκαν οι ρυθμίσεις αγώνα. Η σελίδα εμφανίζει την αρχική δοκιμαστική προβολή. Μπορείτε να χρησιμοποιήσετε τις «Ρυθμίσεις TEST».";});
