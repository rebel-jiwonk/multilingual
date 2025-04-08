const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const faqKoJsonPath = path.join(__dirname, "faq.ko.json");
const faqEnJsonPath = path.join(__dirname, "faq.en.json");
const faqDirectory = path.join(__dirname, "faq");
const faqTxtPath = path.join(__dirname, "faq", "faq-summary.txt");

const defaultAuthor = "Kwak Jiwon";

let faqCategories = [];

// if (!fs.existsSync(faqJsonPath)) {
//   console.error("❌ Error: `faq.json` not found!");
//   process.exit(1);
// }

// let faqCategories;
// try {
//   faqCategories = JSON.parse(fs.readFileSync(faqJsonPath, "utf8"));
//   if (!Array.isArray(faqCategories)) {
//     console.warn("⚠️ Warning: `faq.json` format is incorrect.");
//     process.exit(1);
//   }
// } catch (error) {
//   console.error("❌ Error parsing `faq.json`:", error);
//   process.exit(1);
// }

console.log("✅ Loaded FAQ Categories:", faqCategories.length, "categories");

const today = new Date().toISOString().split("T")[0];
let updated = false;

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (file.endsWith(".md")) {
      results.push(path.relative(faqDirectory, fullPath));
    }
  });
  return results;
}

const faqFiles = getAllMarkdownFiles(faqDirectory);
const existingFiles = new Set(faqFiles);

function detectLangFromFileName(fileName) {
  return fileName.includes(".en.md") ? "en" : "ko";
}

faqFiles.forEach(file => {
  const filePath = path.join(faqDirectory, file); // already relative from root
  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContent);
  const order = parsed.data.order ?? 999;
  const title = parsed.data.title || file.replace(".md", "");
  const categories = parsed.data.categories || (parsed.data.category ? [parsed.data.category] : ["Uncategorized"]);
  const tags = parsed.data.tags || [];
  const body = marked(parsed.content.trim());
  const lang = detectLangFromFileName(file);

  // 🆕 Per-language title deduplication
const seenTitlesByLang = {
  ko: new Set(),
  en: new Set(),
};

categories.forEach(category => {
  let existingCategory = faqCategories.find(c => c.category === category && c.lang === lang);

  if (!existingCategory) {
    existingCategory = { category, lang, faqs: [] };
    faqCategories.push(existingCategory);
  }

  // Skip if this title already exists in the current language
  if (seenTitlesByLang[lang].has(title.trim())) {
    return;
  }

  seenTitlesByLang[lang].add(title.trim());

  existingCategory.faqs.push({
    title,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    tags,
    body,
    author: defaultAuthor,
    createdDate: today,
    fileName: file,
    order: (parsed.data.primaryCategory === category) ? parsed.data.order || 9999 : 9999
  });
});

  updated = true;
});

faqCategories.forEach(category => {
  category.faqs = category.faqs.filter(faq => existingFiles.has(faq.fileName));
});

faqCategories = faqCategories.filter(category => category.faqs.length > 0);

const categoryOrderMap = {
  ko: [
    "SDK 사용법",
    "설치 및 설정",
    "서비스 활용/최적화",
    "제품 정보/호환성",
    "지원 및 문제 해결"
  ],
  en: [
    "Using the SDK",
    "Installation & Setup",
    "Optimization & Application",
    "Product & Compatibility",
    "Support & Troubleshooting"
  ]
};

faqCategories.forEach(category => {
  category.faqs.sort((a, b) => (a.order || 9999) - (b.order || 9999));
});

const langGroupedCategories = { ko: [], en: [] };
faqCategories.forEach(category => {
  langGroupedCategories[category.lang].push(category);
});

Object.entries(langGroupedCategories).forEach(([lang, categories]) => {
  const order = categoryOrderMap[lang] || [];
  categories.sort((a, b) => {
    const aIndex = order.indexOf(a.category);
    const bIndex = order.indexOf(b.category);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });
});

try {
  fs.writeFileSync(faqKoJsonPath, JSON.stringify(langGroupedCategories.ko, null, 2), "utf8");
  fs.writeFileSync(faqEnJsonPath, JSON.stringify(langGroupedCategories.en, null, 2), "utf8");
  console.log("✅ Separate language JSONs saved: `faq.ko.json` and `faq.en.json`");
} catch (error) {
  console.error("❌ Error writing language-specific JSON files:", error);
  process.exit(1);
}

const faqMap = new Map();
faqCategories.forEach(category => {
  category.faqs.forEach(faq => {
    if (!faqMap.has(faq.fileName)) {
      faqMap.set(faq.fileName, {
        title: faq.title,
        author: faq.author,
        createdDate: faq.createdDate,
        categories: new Set()
      });
    }
    faqMap.get(faq.fileName).categories.add(category.category);
  });
});

let markdownContent = `# FAQ Summary  
## Maintained by: Baddie Jiwon   
## Last Updated: ${today}

| File Name       | Categories     | Title                                    | Author  | Created Date |
|----------------|----------------|------------------------------------------|---------|--------------|
`;

faqMap.forEach((faq, fileName) => {
  const categoriesStr = Array.from(faq.categories).join(", ");
  markdownContent += `| ${fileName} | ${categoriesStr} | ${faq.title} | ${faq.author} | ${faq.createdDate} |\n`;
});

try {
  fs.writeFileSync(faqTxtPath, markdownContent, "utf8");
  console.log("🎉 성공이에요! FAQ 요약 파일이 업데이트되었습니다!");
} catch (error) {
  console.error("❌ Error writing `faq-summary.txt`:", error);
}
