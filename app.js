const translations = {

en:{
dashboard:"Dashboard",
workers:"Workers",
monitor:"Live Monitor",
camera:"AI Camera",
title:"Enterprise Safety Command Center",
subtitle:"AI-based Industrial Worker Protection Platform"
},

zh:{
dashboard:"控制台",
workers:"工人管理",
monitor:"实时监控",
camera:"AI摄像头",
title:"企业级安全指挥中心",
subtitle:"基于AI的工业工人安全平台"
},

ko:{
dashboard:"대시보드",
workers:"작업자 관리",
monitor:"실시간 모니터링",
camera:"AI 카메라",
title:"기업 안전 통합 관제 센터",
subtitle:"AI 기반 산업 근로자 보호 플랫폼"
}

}

function setLang(lang){

localStorage.setItem("lang",lang)

document.getElementById("navDashboard").innerText =
translations[lang].dashboard

document.getElementById("navWorkers").innerText =
translations[lang].workers

document.getElementById("navMonitor").innerText =
translations[lang].monitor

document.getElementById("navCamera").innerText =
translations[lang].camera

if(document.getElementById("mainTitle")){

document.getElementById("mainTitle").innerText =
translations[lang].title

}

if(document.getElementById("mainSubtitle")){

document.getElementById("mainSubtitle").innerText =
translations[lang].subtitle

}

}

window.onload = function(){

const savedLang =
localStorage.getItem("lang") || "en"

setLang(savedLang)

}
