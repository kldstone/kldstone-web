import json

with open("C:/Users/Administrator/Documents/GitHub/kldstone.cn/furniture_products.json", "r", encoding="utf-8") as f:
    data = json.load(f)

lines = []
lines.append("// Auto-generated from furniture PDF — do not edit manually")
lines.append("// Generated: 2026-07-11")
lines.append("")
lines.append('import type { CatalogProduct } from "./catalog";')
lines.append("")
lines.append('const BASE = "/catalog-images/furniture";')
lines.append("")
lines.append("const furnitureProducts: CatalogProduct[] = [")

for p in data:
    lines.append("  {")
    lines.append('    id: "' + p["id"] + '",')
    lines.append('    name: "' + p["name"] + '",')
    lines.append('    cover: "' + p["cover"] + '",')
    images = '", "'.join(p["images"])
    lines.append('    images: ["' + images + '"],')
    lines.append("    tagline: `" + p["tagline"] + "`,")
    desc = p["description"].replace("`", "\\`").replace("${", "\\${")
    lines.append("    description: `" + desc + "`,")
    styles = ", ".join('"' + s + '"' for s in p["styles"])
    lines.append("    styles: [" + styles + "],")
    specs = p["specs"].replace("`", "\\`").replace("${", "\\${")
    lines.append("    specs: `" + specs + "`,")
    lines.append("  },")

lines.append("];")
lines.append("")
lines.append("export default furnitureProducts;")

with open("C:/Users/Administrator/Documents/GitHub/kldstone.cn/src/data/furniture-products.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print("Done! " + str(len(data)) + " products written.")
