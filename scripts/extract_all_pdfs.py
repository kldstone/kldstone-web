#!/usr/bin/env python3
"""Extract images from all catalog PDFs."""

import fitz  # PyMuPDF
import os
import json

PDF_DIR = r"C:\Users\Administrator\Desktop\新建文件夹"
OUT_DIR = r"C:\Users\Administrator\Documents\GitHub\kldstone.cn\public\catalog-images"

# (pdf_filename, output_subdir, category_key)
PDFS = [
    ("2、大理石欧式雕花构件.pdf", "carved-parts", "carved-parts"),
    ("3、石材护墙板（法式、新中式）(1).pdf", "wall-panels", "wall-panels"),
    ("KLD ARTTECH 石材拼花图集（欧式、中式、现代）.pdf", "arttech", "arttech"),
    ("Oikos画册2021(1).pdf", "oikos", "oikos"),
    ("康绿德石材公司简介.pdf", "intro", None),
]

for pdf_name, subdir, cat_key in PDFS:
    pdf_path = os.path.join(PDF_DIR, pdf_name)
    img_dir = os.path.join(OUT_DIR, subdir)
    os.makedirs(img_dir, exist_ok=True)

    if not os.path.exists(pdf_path):
        print(f"[SKIP] {pdf_name} not found")
        continue

    print(f"\n=== {pdf_name} → {subdir}/ ===")
    doc = fitz.open(pdf_path)
    print(f"  Pages: {len(doc)}")

    text_pages = {}
    for i, page in enumerate(doc):
        page_num = i + 1
        # Render page as image
        pix = page.get_pixmap(dpi=150)
        out_path = os.path.join(img_dir, f"page_{page_num:02d}.png")
        pix.save(out_path)

        # Extract text
        text = page.get_text().strip()
        has_text = len(text) > 20
        if has_text:
            text_pages[page_num] = text[:200]
        status = "TEXT" if has_text else "IMAGE"
        print(f"  [{page_num:3d}/{len(doc)}] {status} {out_path}")

    doc.close()
    print(f"  → {len(os.listdir(img_dir))} images saved to {subdir}/")

    # Save extracted text if any
    if text_pages:
        text_path = os.path.join(img_dir, "_extracted_text.json")
        with open(text_path, "w", encoding="utf-8") as f:
            json.dump(text_pages, f, ensure_ascii=False, indent=2)
        print(f"  → Text extracted from {len(text_pages)} pages, saved to _extracted_text.json")

print("\n✅ All PDFs processed!")
