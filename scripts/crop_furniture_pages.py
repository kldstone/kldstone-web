#!/usr/bin/env python3
"""Crop furniture PDF pages into individual product images."""

import fitz
import os

PDF_PATH = r"C:\Users\Administrator\Desktop\新建文件夹\石材家具画册2024~2026.pdf"
OUT_DIR = r"C:\Users\Administrator\Documents\GitHub\kldstone.cn\public\catalog-images\furniture"
DPI = 200

# Each entry: (page_number, num_products_grid_rows, num_products_grid_cols)
# Based on visual inspection of PDF layout
PAGE_LAYOUTS = {
    # Console Tables — pages where 3 products share one page
    4: (1, 3),   # 3 console tables side by side
    5: (3, 3),   # 9 console tables in 3×3 grid

    # Dining Tables
    7: (2, 3),   # 6 dining tables
    8: (2, 1),   # 2 dining tables full width (top/bottom)
    9: (3, 4),   # 12 dining tables in grid

    # Coffee Tables
    11: (3, 3),  # 9 coffee tables
    12: (3, 3),  # 9 coffee tables
    13: (3, 3),  # 9 coffee tables

    # Cube Coffee Tables
    15: (3, 3),  # 9 cube tables
    16: (2, 2),  # 4 cube tables
    17: (4, 2),  # 7 cube tables — mixed, treat as 4×2
    18: (3, 2),  # 5 cube tables — treat as 3×2

    # Tall Coffee Tables
    20: (3, 3),  # 9 tall tables
    21: (2, 2),  # 4 tall tables

    # Side Tables
    23: (3, 3),  # 9 side tables
    24: (3, 3),  # 9 side tables
    26: (3, 3),  # 8 side tables — treat as 3×3
    27: (3, 3),  # 9 side tables
    29: (3, 3),  # 8 side tables — treat as 3×3
    30: (3, 3),  # 9 side tables

    # Standing Sinks
    32: (2, 3),  # 6 sinks 3×2

    # Countertop Sinks — high density
    34: (5, 3),  # ~15 sinks
    35: (5, 3),
    36: (5, 3),
    37: (5, 3),
    38: (5, 3),
    40: (5, 3),
    41: (5, 3),
    42: (5, 3),
    43: (5, 3),
    44: (5, 3),

    # Bathtubs
    46: (3, 1),  # 3 tubs full width
}

doc = fitz.open(PDF_PATH)
os.makedirs(OUT_DIR, exist_ok=True)

# First, render single-product pages as full pages
single_product_pages = set(range(1, 48)) - set(PAGE_LAYOUTS.keys())
# But some single-product pages are section headers/covers with no real products
# Pages that are section headers (cover pages within the catalog):
section_headers = {1, 2, 3, 6, 10, 14, 19, 22, 25, 28, 31, 33, 39, 45, 47}

# Remove section headers from single_product_pages
single_product_pages -= section_headers

stats = {"cropped": 0, "full": 0}

# Process multi-product pages
for page_num, (rows, cols) in PAGE_LAYOUTS.items():
    if page_num > len(doc):
        continue

    page = doc[page_num - 1]
    pix = page.get_pixmap(dpi=DPI)
    w, h = pix.width, pix.height

    # Load as PIL for cropping
    from PIL import Image
    import io
    img_data = pix.tobytes("ppm")
    img = Image.open(io.BytesIO(img_data))

    cell_w = w // cols
    cell_h = h // rows

    product_idx = 0
    for r in range(rows):
        for c in range(cols):
            left = c * cell_w
            top = r * cell_h
            right = left + cell_w
            bottom = top + cell_h
            crop = img.crop((left, top, right, bottom))

            pnum = page_num * 100 + product_idx
            out_path = os.path.join(OUT_DIR, f"page_{page_num:02d}_{product_idx:02d}.png")
            crop.save(out_path)
            product_idx += 1
            stats["cropped"] += 1

    print(f"  Page {page_num}: {rows}×{cols} = {product_idx} crops")

# Process single-product pages (full page, but only actual content pages)
for page_num in sorted(single_product_pages):
    page = doc[page_num - 1]
    pix = page.get_pixmap(dpi=DPI)
    out_path = os.path.join(OUT_DIR, f"page_{page_num:02d}_00.png")
    pix.save(out_path)
    stats["full"] += 1
    print(f"  Page {page_num}: single product (full page)")

doc.close()
print(f"\nDone! {stats['cropped']} cropped + {stats['full']} full-page = {stats['cropped'] + stats['full']} total")
