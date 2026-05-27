const translations = {
  en: {
    dashboard: "Dashboard",
    workers: "Workers Management",
    monitor: "Real-time Monitoring",
    camera: "AI Camera",

    title: "Enterprise Safety Command Center",
    subtitle: "AI-based industrial worker protection platform",

    online: "Workers Online",
    risk: "High Risk Workers",
    training: "Training Completed",

    worker1: "Welder",
    worker2: "High-altitude Worker",

    heart: "Heart Rate",
    temp: "Temperature",
    location: "Location",

    helmet: "Helmet Detected",
    fatigue: "Fatigue Warning"
  },

  zh: {
    dashboard: "控制台",
    workers: "工人管理",
    monitor: "实时监控",
    camera: "AI摄像头",

    title: "企业级安全指挥中心",
    subtitle: "基于AI的工业工人安全平台",

    online: "在线工人",
    risk: "高风险工人",
    training: "培训完成率",

    worker1: "焊工",
    worker2: "高空作业工人",

    heart: "心率",
    temp: "体温",
    location: "位置",

    helmet: "已佩戴安全帽",
    fatigue: "疲劳预警"
  },

  kr: {
    dashboard: "대시보드",
    workers: "작업자 관리",
    monitor: "실시간 모니터링",
    camera: "AI 카메라",

    title: "기업 안전 통합 관제 센터",
    subtitle: "AI 기반 산업 근로자 보호 플랫폼",

    online: "온라인 작업자",
    risk: "고위험 작업자",
    training: "교육 완료율",

    worker1: "용접공",
    worker2: "고소 작업자",

    heart: "심박수",
    temp: "체온",
    location: "위치",

    helmet: "안전모 감지",
    fatigue: "피로 경고"
  }
};

function setLanguage(lang) {

  localStorage.setItem("language", lang);

  const t = translations[lang];

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if (t[key]) {
      el.innerText = t[key];
    }
  });
}

window.onload = () => {
  const saved = localStorage.getItem("language") || "en";
  setLanguage(saved);
};
