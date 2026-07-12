#!/usr/bin/env python3
"""Generate product data for image-only catalog PDFs (carved-parts, wall-panels, arttech)."""
import json

# Carved parts — 25 pages
carved = []
for i in range(1, 26):
    pid = f"kld-cp-{i:03d}"
    carved.append({
        "id": pid,
        "name": f"欧式雕花构件 #{i:02d}",
        "cover": f"/catalog-images/carved-parts/page_{i:02d}.png",
        "images": [f"/catalog-images/carved-parts/page_{i:02d}.png"],
        "tagline": "大理石欧式雕花装饰构件",
        "description": f"大理石欧式雕花装饰构件\n产品编号: {pid.upper()}\n源自天然大理石精雕细琢",
        "styles": ["Carved Component", "European Classic"],
        "specs": "材质: 天然大理石\n工艺: CNC 精雕 / 手工打磨"
    })

# Wall panels — 50 pages
wall = []
for i in range(1, 51):
    pid = f"kld-wp-{i:03d}"
    wall.append({
        "id": pid,
        "name": f"石材护墙板 #{i:02d}",
        "cover": f"/catalog-images/wall-panels/page_{i:02d}.png",
        "images": [f"/catalog-images/wall-panels/page_{i:02d}.png"],
        "tagline": "法式与新中式石材护墙板",
        "description": f"法式与新中式石材护墙板\n产品编号: {pid.upper()}\n天然石材与经典墙面设计结合",
        "styles": ["Wall Panel", "French", "Neo-Chinese"],
        "specs": "材质: 天然大理石\n风格: 法式 / 新中式"
    })

# Artech mosaic atlas — 48 pages
arttech = []
for i in range(1, 49):
    pid = f"kld-at-{i:03d}"
    arttech.append({
        "id": pid,
        "name": f"艺术拼花 #{i:02d}",
        "cover": f"/catalog-images/arttech/page_{i:02d}.png",
        "images": [f"/catalog-images/arttech/page_{i:02d}.png"],
        "tagline": "KLD 石材拼花图集",
        "description": f"KLD ARTTECH 石材拼花\n产品编号: {pid.upper()}\n水刀拼花工艺 / 多种风格可选",
        "styles": ["Mosaic", "Artistic"],
        "specs": "工艺: 水刀拼花\n风格: 欧式古典 / 中式意境 / 现代简约"
    })

# Oikos — 81 pages (text suggests it's a door/entrance catalog, not stone furniture)
# Check if it should be included — text content is about Italian door brand Oikos
# Including as-is for now
oikos = []
for i in range(1, 82):
    pid = f"kld-ok-{i:03d}"
    oikos.append({
        "id": pid,
        "name": f"OIKOS #{i:02d}",
        "cover": f"/catalog-images/oikos/page_{i:02d}.png",
        "images": [f"/catalog-images/oikos/page_{i:02d}.png"],
        "tagline": "OIKOS 系列产品",
        "description": f"OIKOS 系列产品\n产品编号: {pid.upper()}",
        "styles": ["OIKOS", "Contemporary"],
        "specs": "系列: OIKOS"
    })

def write_ts(data, filename, varname):
    lines = [
        "// Auto-generated from PDF — do not edit manually",
        "// Generated: 2026-07-11",
        "",
        'import type { CatalogProduct } from "./catalog";',
        "",
        f"const {varname}: CatalogProduct[] = [",
    ]
    for p in data:
        lines.append("  {")
        lines.append(f'    id: "{p["id"]}",')
        lines.append(f'    name: "{p["name"]}",')
        lines.append(f'    cover: "{p["cover"]}",')
        images = '", "'.join(p["images"])
        lines.append(f'    images: ["{images}"],')
        lines.append(f"    tagline: `{p['tagline']}`,")
        desc = p["description"].replace("`", "\\`").replace("${", "\\${")
        lines.append(f"    description: `{desc}`,")
        styles = ", ".join(f'"{s}"' for s in p["styles"])
        lines.append(f"    styles: [{styles}],")
        lines.append(f"    specs: `{p['specs']}`,")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append(f"export default {varname};")

    base = r"C:\Users\Administrator\Documents\GitHub\kldstone.cn\src\data"
    with open(f"{base}/{filename}", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"  {filename}: {len(data)} products")

print("Generating product files...")
write_ts(carved, "carved-products.ts", "carvedProducts")
write_ts(wall, "wall-products.ts", "wallProducts")
write_ts(arttech, "arttech-products.ts", "arttechProducts")
write_ts(oikos, "oikos-products.ts", "oikosProducts")
print("Done!")
