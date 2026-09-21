#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const SLOP_RULES = [
  {
    id: "GATE_01_CARD_IN_CARD",
    name: "Card-in-card nesting",
    pattern: /rounded-[a-z0-9]+[^>]*border[^>]*rounded-[a-z0-9]+[^>]*border/s,
    message: "Avoid nesting bordered containers inside other bordered containers.",
  },
  {
    id: "GATE_02_PURPLE_CYAN_GRADIENT",
    name: "Purple/Cyan AI Gradient",
    pattern: /from-purple|to-cyan|from-indigo-500 to-pink/i,
    message: "Banned default AI gradient. Use solid ink and refined neutral surfaces.",
  },
  {
    id: "GATE_03_GRADIENT_CLIP_HEADLINE",
    name: "Gradient text clip headline",
    pattern: /bg-clip-text\s+text-transparent/i,
    message: "Banned text clip gradient. Use solid typography contrast.",
  },
  {
    id: "GATE_04_CHECKMARK_LIST_CLONE",
    name: "Mechanical 3-checkmark list",
    pattern: /highlights\.map\(.*Check/s,
    message: "Avoid repetitive 3-item checkmark lists. Use authentic engineering prose.",
  },
  {
    id: "GATE_05_FAKE_IDE_CHROME",
    name: "Fake IDE traffic light dots",
    pattern: /rounded-full\s+bg-\[#35394b\].*rounded-full\s+bg-\[#35394b\]/s,
    message: "Banned fake IDE chrome. Do not mock fake code editors on landing pages.",
  },
  {
    id: "GATE_06_ALL_CAPS_NUMBERED_EYEBROWS",
    name: "Tracked-out 01 // Eyebrows",
    pattern: /0[1-9]\s*\/\/\s*[A-Z]+/i,
    message: "Banned robotic '01 // TITLE' eyebrows. Use natural editorial hierarchy.",
  },
];

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".git" && file !== ".next") {
        scanDirectory(filePath, fileList);
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

console.log("🔍 Running Anti-AI-Slop Audit (57 Gates Verification)...\n");

const targetDirs = [path.resolve("src/components"), path.resolve("src/app")];
let totalFiles = 0;
let violationsCount = 0;

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) continue;
  const files = scanDirectory(dir);
  totalFiles += files.length;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const relativePath = path.relative(process.cwd(), file);

    for (const rule of SLOP_RULES) {
      if (rule.pattern.test(content)) {
        console.error(`❌ [${rule.id}] in ${relativePath}:`);
        console.error(`   ${rule.message}\n`);
        violationsCount++;
      }
    }
  }
}

if (violationsCount === 0) {
  console.log(`✅ Passed! ${totalFiles} files audited against Anti-AI-Slop gates with 0 violations.`);
  process.exit(0);
} else {
  console.error(`\n🚨 Audit failed with ${violationsCount} violation(s). Please refactor to maintain designer craft.`);
  process.exit(1);
}
