import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

const faqData = [
  {
    category: "关于水刀拼花",
    items: [
      {
        q: "什么是水刀拼花？",
        a: "水刀拼花是利用高压水流（掺入细砂）通过数控切割设备，将不同颜色、纹理的石材切割成预设的几何图案或花型，再经手工拼接打磨而成的一种石材装饰工艺。其切割精度高（可达±0.5mm以内），拼缝极小，适合用于酒店大堂、别墅玄关、商场地面等高档场所的装饰。",
      },
      {
        q: "水刀拼花和传统拼花有什么区别？",
        a: "传统拼花主要依靠手工切割或简单机械加工，精度较低、拼缝大、图案复杂度受限。水刀拼花则采用数控水刀切割设备，由电脑控制切割路径，可加工任意复杂图案，拼缝极小（肉眼几乎不可见），成品效果更加精致、美观。",
      },
      {
        q: "水刀拼花一般用在哪些地方？",
        a: "水刀拼花广泛应用于：酒店大堂及走廊地面、别墅玄关及客厅地面、商场中庭及过道、办公楼大堂、高端会所、展厅、教堂等公共空间，以及家居背景墙、地面拼花等个性化装修场景。",
      },
      {
        q: "水刀拼花用什么石材做比较好？",
        a: "理论上各种天然石材均可用于水刀拼花，但实际选材需考虑颜色搭配、硬度、可加工性等因素。常用品种包括：大理石（如帝皇金、宝金米黄、雪花白等）、花岗岩、玉石等。康利德拥有丰富的石材品种资源，可根据设计图纸给出最优的选材建议。",
      },
    ],
  },
  {
    category: "关于产品与定制",
    items: [
      {
        q: "康利德能做什么类型的水刀拼花？",
        a: "康利德可加工各类水刀拼花产品，包括：地面拼花（圆形、方形、椭圆形等几何构图）、玄关拼花、背景墙拼花、定制LOGO拼花、水刀马赛克、拼图、铜条拼花等。无论标准图案还是来图定制，均可承接。",
      },
      {
        q: "客户需要自己提供设计图纸吗？",
        a: "客户可自行提供设计图纸（CAD或效果图），也可以提供想法或参考图片，由康利德的设计团队协助深化出图。建议下单前与我方设计师充分沟通，确认花型、尺寸、石材搭配等细节。",
      },
      {
        q: "最小起订量是多少？",
        a: "水刀拼花属于定制类产品，单件即可订做，无最低起订量限制。但如需批量生产，单价会有相应优惠，具体可联系销售经理详谈。",
      },
      {
        q: "可以做超大尺寸的拼花吗？",
        a: "可以。康利德拥有7000平方米排板场地和大型水刀设备，可加工大尺寸拼花。超大尺寸拼花会在地面预排版编号，然后拆分成便于运输的单元，到现场按编号拼接即可。",
      },
      {
        q: "除了水刀拼花还有哪些产品？",
        a: "除水刀拼花外，康利德还提供：CNC数控雕刻（精雕花纹、线条）、精工背景墙（客厅、玄关、酒店）、奢石家居（餐桌、茶几、茶盘等，品牌「康莱德」）、工程板、马赛克、拼图、异形腰线、复合板等各类工程精装石材。",
      },
    ],
  },
  {
    category: "关于价格与下单",
    items: [
      {
        q: "水刀拼花多少钱一平方米？",
        a: "水刀拼花的价格因图案复杂度、尺寸、所选石材品种、拼花密度等因素差异较大。简拼类约600—900元/平方米，中等复杂度约900—1500元/平方米，复杂定制类则需根据图纸评估。建议提供具体图纸和选材要求，我方可给出精准报价。",
      },
      {
        q: "影响价格的主要因素有哪些？",
        a: "影响水刀拼花价格的主要因素包括：①图案复杂程度（线条越多、切割越精细，价格越高）；②拼花尺寸（大尺寸涉及排版和运输）；③所选石材品种（名贵石材成本更高）；④是否含铜条镶嵌等特殊工艺；⑤订单数量（批量订单有优惠）。",
      },
      {
        q: "如何获取报价和下单？",
        a: "您可通过电话/微信 15659069988 或通过官网在线咨询联系我们。提供您的拼花图纸（或参考图）、尺寸、意向石材品种和数量，我们将在1—2个工作日内给出报价。",
      },
      {
        q: "下单后多久能交货？",
        a: "交期根据产品复杂度和订单量有所不同。常规水刀拼花产品（标准图案、中小尺寸）一般7—15个工作日；复杂定制或大尺寸拼花约15—30个工作日。具体交期在确认订单时与客户约定。",
      },
      {
        q: "支持哪些付款方式？",
        a: "支持银行转账、对公账户汇款。长期合作客户可协商灵活的结算方式。首次合作通常需预付一定比例的定金，尾款在发货前结清。具体条款以双方签订的合同为准。",
      },
    ],
  },
  {
    category: "关于工艺与质量",
    items: [
      {
        q: "康利德水刀拼花的切割精度能达到多少？",
        a: "康利德配备永达4米×2.6米五轴水刀机，可实现1—2毫米的精密斜切，拼缝经拼接打磨后肉眼几乎不可见。工厂设有关键要素检测实验室，执行18道检测工序，确保每件产品的精度和品质。",
      },
      {
        q: "水刀拼花拼接处的缝隙大吗？会不会看得出来？",
        a: "康利德的五轴水刀切割精度极高，切割面平整光滑，拼装缝隙通常在0.5mm以内。配合专业师傅的拼接打磨，成品拼缝几乎不可察觉。这是水刀拼花优于传统手工拼花的重要方面。",
      },
      {
        q: "康利德的品控体系是怎样的？",
        a: "康利德从原料进厂到成品出厂实行全流程品控：原料检验→切割精度检测→拼接平整度检查→缝隙检验→表面打磨抛光→出厂终检。设有检测实验室，共18道检测工序，不合格品不出厂。",
      },
      {
        q: "水刀拼花容易开裂或损坏吗？",
        a: "水刀拼花在加工过程中采用精密水冷切割，不会产生热应力，石材本身不受损伤。拼接处使用专用石材胶粘合，强度高、耐久性好。正常使用和养护条件下，水刀拼花可保持数十年不变形不开裂。",
      },
    ],
  },
  {
    category: "关于安装与维护",
    items: [
      {
        q: "康利德提供安装服务吗？",
        a: "康利德可提供安装指导和技术支持。客户本地施工团队如有需要，我方可通过视频或派人现场指导。国内主要城市可协商派遣经验丰富的安装师傅上门安装，费用根据项目情况另行计算。",
      },
      {
        q: "水刀拼花日常怎么清洁和保养？",
        a: "水刀拼花日常清洁使用中性清洁剂配合软布擦拭即可。建议：①避免使用酸性或碱性强的清洁剂；②地面上放置重物时做保护衬垫；③定期（每6—12个月）做一次石材结晶养护，可保持光泽并延长使用寿命。",
      },
      {
        q: "水刀拼花地面需要做防水处理吗？",
        a: "石材本身具有一定的吸水率，建议在铺贴后做防护处理（如涂刷石材防护剂），尤其是用于洗手间、厨房等潮湿区域的拼花。康利德可提供防护处理建议和配套产品。",
      },
      {
        q: "拼花铺贴后有色差怎么办？",
        a: "天然石材存在自然的纹理和色差，这是天然石材的特性也是其美感所在。康利德在排版时会尽量做颜色过渡处理，使整体效果和谐。如需严格无色差，建议选用人造石或同一大板切割的产品，下单时请与销售明确说明要求。",
      },
    ],
  },
  {
    category: "关于康利德",
    items: [
      {
        q: "康利德公司在哪里？可以到工厂参观吗？",
        a: "公司地址：福建省南安市水头镇（海联工业区，海西石材城旁），厦门机场/动车站乘车约1小时可达。欢迎客户到厂实地考察、选材洽谈，来访前请提前预约（电话/微信：15659069988）。",
      },
      {
        q: "康利德能承接海外订单吗？",
        a: "可以。康利德产品已远销俄罗斯、沙特阿拉伯、卡塔尔、迪拜、美国等国家和地区，具备丰富的出口经验。海外客户可通过官网联系或直接致电详询。",
      },
      {
        q: "康利德做过哪些知名项目？",
        a: "康利德产品已用于多家国内酒店大堂、别墅精装、商场走廊，以及海外教堂装饰和高端工程项目。具体案例可联系销售获取相关资料。",
      },
      {
        q: "如何联系康利德？",
        a: "电话/微信：15659069988\n邮箱：kldstone.china@gmail.com\n官网：kldstone.cn\n地址：福建省南安市水头镇世纪大道5—7号（明利酒店对面）",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] bg-[#0f0f0f] overflow-hidden">
        <img src={optimizedImage("/brand-gallery/craftsmanship-hero-2026-07-06.jpg")} alt="" className="w-full h-full object-cover opacity-60" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-white/50 text-[11px] font-bold tracking-[0.20em] uppercase">FAQ</span>
            <h1 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[0.02em] mt-3 mb-3">
              常见问题
            </h1>
            <p className="text-white/55 text-[15px] max-w-[520px] mx-auto leading-relaxed">
              关于水刀拼花、产品定制、价格、工艺与安装的详细解答
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-[860px] mx-auto px-6 py-20">
        <div className="space-y-16">
          {faqData.map((group) => (
            <div key={group.category}>
              <h2 className="text-[#111111] text-[1.3rem] font-black tracking-[0.03em] mb-6 pb-3 border-b border-black/5">
                {group.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-1">
                {group.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${group.category}-${i}`}
                    className="border border-black/5 bg-white hover:border-black/10 transition-colors px-6"
                  >
                    <AccordionTrigger className="text-[#111111] text-[14px] font-semibold tracking-[0.03em] py-4 hover:no-underline text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#111111]/60 text-[14px] leading-[1.8] pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f8f8] py-16 px-6 text-center border-t border-black/8">
        <h2 className="text-[#111111] text-[1.4rem] font-black tracking-[0.02em] mb-3">
          还有其他问题？
        </h2>
        <p className="text-[#111111]/45 text-[14px] mb-8 max-w-[460px] mx-auto leading-relaxed">
          直接联系我们，我们会尽快为您解答
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-3.5 bg-[#34c759] text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-[#34c759]/80 transition-colors"
        >
          联系我们
        </Link>
      </section>
    </div>
  );
}
