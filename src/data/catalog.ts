import furnitureProducts from "./furniture-products";
import carvedProducts from "./carved-products";
import wallProducts from "./wall-products";
import arttechProducts from "./arttech-products";

// ============================================================
// 产品画册 — 数据层类型与品类配置
// PDF 整合到产品中心
// ============================================================

export type CatalogProduct = {
  id: string;
  name: string;
  /** 封面图 */
  cover: string;
  /** 详情页多图 */
  images: string[];
  /** 简短描述（列表页显示） */
  tagline: string;
  /** 详细描述（详情页） */
  description: string;
  /** 风格标签 */
  styles?: string[];
  /** 规格 */
  specs?: string;
};

export type CatalogCategory = {
  key: string;
  name: string;
  subtitle: string;
  description: string;
  heroImg: string;
  products: CatalogProduct[];
};

const BASE = "/catalog-images";

const categories: CatalogCategory[] = [
  {
    key: "carved-parts",
    name: "欧式雕花构件",
    subtitle: "European Carved Components",
    description: "大理石欧式雕花构件系列，涵盖罗马柱、窗套线、浮雕、壁炉等各类装饰构件，以天然大理石为原料，精雕细琢，为空间增添经典欧式韵味。",
    heroImg: `${BASE}/carved-hero.jpg`,
    products: carvedProducts,
  },
  {
    key: "wall-panels",
    name: "石材护墙板",
    subtitle: "Stone Wall Panels",
    description: "法式与新中式风格石材护墙板，将天然石材的质感与经典墙面设计语言相结合，打造富有层次感的立面装饰。",
    heroImg: `${BASE}/wall-hero.jpg`,
    products: wallProducts,
  },
  {
    key: "furniture",
    name: "石材家具",
    subtitle: "Stone Furniture",
    description: "2024-2026 石材家具画册系列，以天然大理石为材质打造的餐桌、茶几、边几、台面等家具，将石材的永恒质感融入日常生活。",
    heroImg: `${BASE}/furniture-hero.jpg`,
    products: furnitureProducts,
  },
  {
    key: "arttech",
    name: "艺术拼花图集",
    subtitle: "ARTTECH Mosaic Atlas",
    description: "KLD ARTTECH 石材拼花图集，涵盖欧式古典、中式意境、现代简约三大风格，以精湛的水刀拼花工艺呈现艺术级地面与墙面装饰。",
    heroImg: `${BASE}/arttech-hero.jpg`,
    products: arttechProducts,
  },
];

export default categories;
