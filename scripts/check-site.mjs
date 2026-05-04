import { readFile } from "node:fs/promises";

const checks = [
  [
    "web/index.html",
    [
      "VEGO AI Coding 寶典",
      "Sandbox Review",
      "English summary",
      "審核駕駛艙",
      "chapterReader",
      "voiceStatus",
      "readChapter",
      "testVoice",
      "speechVoice",
      "speechVolume",
      "speechProgress",
      "voiceFab",
      "voice-briefing",
      "startVoiceBriefing",
      "智庫工具",
      "物流與供應鏈智庫地圖",
      "AI 自動化到物流 AGI",
      "機器人協作層"
    ]
  ],
  [
    "web/index.html",
    [
      "AI Coding 文章搜集區",
      "articleForm",
      "skillDraftPreview",
      "articleSearch",
      "articleLayerFilter",
      "articleLineFilter",
      "articlePriorityFilter",
      "articleRiskFilter"
    ]
  ],
  ["web/index.html", ["sourceForm", "sourceDraftPreview", "downloadSourceDraft"]],
  [
    "web/styles.css",
    [
      "@media (max-width: 920px)",
      "grid-template-columns",
      "border-radius: 8px",
      "queue-grid",
      "collector-layout",
      "chapter-reader",
      "voice-launcher",
      "voice-panel",
      "voice-fab",
      "voice-progress",
      "article-filterbar",
      "domain-grid"
    ]
  ],
  [
    "web/data.js",
    [
      "window.VEGO_DATA",
      "handbook",
      "skills",
      "articles",
      "sources",
      "sandboxSkills",
      "\"html\"",
      "logistics-exception-management",
      "external-skill-converter",
      "智庫工具與外部電子書",
      "物流與供應鏈智庫",
      "物流 AGI 領域架構",
      "logistics-agent-domain-planner",
      "automation-opportunity-scanner",
      "robotics-workflow-bridge",
      "語音讀報模式",
      "voice-briefing-producer",
      "edge-tts-offline-briefing",
      "logistics-article-classifier",
      "VEGO AI Logistics Knowledge Base",
      "aiLayer",
      "logisticsLine",
      "vegoPriority",
      "riskLevel"
    ]
  ],
  [
    "web/app.js",
    [
      "externalSkills",
      "const reviewQueue",
      "ARTICLE_STORAGE_KEY",
      "SOURCE_STORAGE_KEY",
      "fillArticleFilterOptions",
      "articleRiskClass",
      "createSkillDraft",
      "createSourceDraft",
      "openChapter",
      "navigateChapter",
      "openVoiceBriefingChapter",
      "item.index === \"16\"",
      "startVoiceBriefing",
      "readCurrentChapter",
      "populateVoiceOptions",
      "setSpeechProgress",
      "updateSpeechControls",
      "testVoice",
      "speechSynthesis",
      "superpowers-zh"
    ]
  ]
];

let failed = false;

for (const [file, needles] of checks) {
  const text = await readFile(file, "utf8");
  for (const needle of needles) {
    if (!text.includes(needle)) {
      console.error(`Missing "${needle}" in ${file}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log("Site check passed: required content, responsive CSS, and Skill data found.");
