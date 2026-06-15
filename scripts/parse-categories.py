import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

DOCX = Path("public/assets/Categories.docx")
OUT_JSON = Path("src/components/bharatview/bharatAwardCategories.generated.json")
OUT_TS = Path("src/components/bharatview/bharatAwardCategories.ts")

with zipfile.ZipFile(DOCX) as z:
    xml = z.read("word/document.xml")
root = ET.fromstring(xml)
ns = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"

paras = []
for p in root.iter(f"{{{ns}}}p"):
    texts = []
    for t in p.iter(f"{{{ns}}}t"):
        if t.text:
            texts.append(t.text)
        if t.tail:
            texts.append(t.tail)
    line = "".join(texts).strip().replace("\ufffd", "-")
    if line:
        paras.append(line)

MAIN_RE = re.compile(r"^\((\d+)\)\s*(.+)$")

SECTION_WITHOUT_AWARDS = {
    "Sustainability & Governance",
    "Schools & Higher Education",
    "Colleges & Universities",
    "Skill Development & Training",
}

AWARD_ITEM_PREFIXES = (
    "Best ",
    "Excellence ",
    "Most ",
    "Fastest ",
    "Emerging Agency",
    "Emerging Business",
    "Emerging Entrepreneur",
    "Emerging Leader",
    "Emerging Marketing",
)


def is_subheader(line: str) -> bool:
    if MAIN_RE.match(line):
        return False
    if line in SECTION_WITHOUT_AWARDS:
        return True
    if line.endswith(" Awards"):
        return not any(line.startswith(prefix) for prefix in AWARD_ITEM_PREFIXES)
    return False


categories = []
current = None
current_sub = None


def flush_sub() -> None:
    global current_sub
    if current and current_sub and current_sub["awards"]:
        current["subcategories"].append(current_sub)
        current_sub = None


for line in paras:
    match = MAIN_RE.match(line)
    if match:
        if current:
            flush_sub()
            if current["subcategories"]:
                categories.append(current)
            else:
                categories.append({"id": current["id"], "title": current["title"]})
        current = {"id": int(match.group(1)), "title": match.group(2).strip(), "subcategories": []}
        current_sub = None
        continue

    if current is None:
        continue

    if is_subheader(line):
        flush_sub()
        current_sub = {"title": line, "awards": []}
    else:
        if current_sub is None:
            current_sub = {"title": "General Awards", "awards": []}
        current_sub["awards"].append(line)

if current:
    flush_sub()
    if current["subcategories"]:
        categories.append(current)
    else:
        categories.append({"id": current["id"], "title": current["title"]})

for category in categories:
    subs = category.get("subcategories", [])
    if len(subs) == 1 and subs[0]["title"] == "General Awards":
        if category["id"] == 1:
            awards = subs[0]["awards"]
            split_at = "Marketing Leader of the Year"
            if split_at in awards:
                idx = awards.index(split_at)
                category["subcategories"] = [
                    {"title": "Agency & Campaign Awards", "awards": awards[:idx]},
                    {"title": "Individual Awards", "awards": awards[idx:]},
                ]
                continue
        subs[0]["title"] = "Award Categories"

OUT_JSON.write_text(json.dumps(categories, indent=2, ensure_ascii=False), encoding="utf-8")

lines = [
    "export interface BharatAwardSubcategory {",
    "  title: string",
    "  awards: string[]",
    "}",
    "",
    "export interface BharatAwardCategory {",
    "  id: number",
    "  title: string",
    "  subcategories?: BharatAwardSubcategory[]",
    "}",
    "",
    "export const BHARAT_AWARD_CATEGORIES: BharatAwardCategory[] = ",
]

lines.append(json.dumps(categories, indent=2, ensure_ascii=False))
lines[-1] = lines[-1] + "\n"
OUT_TS.write_text("\n".join(lines), encoding="utf-8")

for category in categories:
    subs = category.get("subcategories", [])
    total = sum(len(s["awards"]) for s in subs)
    print(f"{category['id']}. {category['title']}: {len(subs)} groups, {total} awards")

print(f"Wrote {OUT_TS}")
