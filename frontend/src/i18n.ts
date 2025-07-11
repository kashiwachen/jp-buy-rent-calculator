export type Lang = 'en' | 'zh' | 'ja';

export const translations = {
  en: {
    title: 'JP Rent vs Buy Calculator',
    desc: 'Decide whether to rent or buy a home in Japan. Adjust the assumptions in each section below.',
    theme: 'Theme:',
    language: 'Language:',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    general: 'General Assumptions',
    income: 'After Tax Household Income Per Month',
    homePurchase: 'Home Purchase Assumptions',
    purchasePrice: 'Purchase Price',
    downPaymentPercentage: 'Down Payment (%)',
    downPayment: 'Down Payment',
    mortgageAmount: 'Mortgage Amount',
    mortgageInterest: 'Mortgage Interest Rate',
    mortgageLength: 'Mortgage Length (Years)',
    yearsOwnership: 'Years of Ownership',
    homeOwnershipCost: 'Home Ownership Cost Assumptions',
    propertyTaxPercentage: 'Annual Property Tax Rate',
    maintenancePercentage: 'Annual Maintenance Costs',
    insurancePercentage: 'Annual Home Owners Insurance',
    utilities: 'Monthly Utilities (In Excess vs. Renting)',
    closingCost: 'Closing Cost Assumptions',
    closingCostPurchasePercentage: 'Closing Costs Upon Purchase',
    closingCostSalePercentage: 'Closing Costs Upon Sale',
    valueAssumptions: 'Value Assumptions',
    appreciationPercentage: 'Annual Price Appreciation',
    capitalGains: 'Capital Gains Tax Assumptions',
    capitalGainsTax: 'Does Capital Gains Tax Apply?',
    marginalTaxRate: 'Marginal Tax Rate',
    capitalGainsExemption: 'Capital Gains Exemption',
    other: 'Other',
    initialRenovations: 'Initial Renovations Required',
    renting: 'Renting a Home',
    rentalAssumptions: 'Rental Property Assumptions',
    collectingRent: 'Collecting Rent?',
    monthlyRent: 'Monthly Rent Collectable',
    vacancyRate: 'Vacancy Rate',
    additionalMaintenance: 'Additional Maintenance',
    breakdown: 'Breakdown',
    breakdownDesc: 'Year-by-year breakdown and charts will go here.',
    result: 'Result',
    resultDesc: 'Calculation result will be displayed here.',
    yes: 'YES',
    no: 'NO',
    years: 'years',
    yen: '¥',
    percent: '%',
  },
  zh: {
    title: '日本租房 vs 买房计算器',
    desc: '帮助你决定在日本是租房还是买房。请在下方各部分调整假设。',
    theme: '主题：',
    language: '语言：',
    system: '跟随系统',
    light: '浅色',
    dark: '深色',
    general: '基本假设',
    income: '税后每月家庭收入',
    homePurchase: '购房假设',
    purchasePrice: '购房价格',
    downPaymentPercentage: '首付比例 (%)',
    downPayment: '首付金额',
    mortgageAmount: '贷款金额',
    mortgageInterest: '贷款利率',
    mortgageLength: '贷款年限',
    yearsOwnership: '持有年数',
    homeOwnershipCost: '持有成本假设',
    propertyTaxPercentage: '年度房产税率',
    maintenancePercentage: '年度维护费率',
    insurancePercentage: '年度房屋保险',
    utilities: '每月额外水电费',
    closingCost: '交易成本假设',
    closingCostPurchasePercentage: '购房交易成本',
    closingCostSalePercentage: '卖房交易成本',
    valueAssumptions: '价值假设',
    appreciationPercentage: '年度房价涨幅',
    capitalGains: '资本利得税假设',
    capitalGainsTax: '是否征收资本利得税？',
    marginalTaxRate: '边际税率',
    capitalGainsExemption: '资本利得免税额',
    other: '其他',
    initialRenovations: '初始装修费用',
    renting: '租房',
    rentalAssumptions: '租房假设',
    collectingRent: '收取租金？',
    monthlyRent: '每月可收租金',
    vacancyRate: '空置率',
    additionalMaintenance: '额外维护费用',
    breakdown: '明细',
    breakdownDesc: '这里将显示逐年明细和图表。',
    result: '结果',
    resultDesc: '这里将显示计算结果。',
    yes: '是',
    no: '否',
    years: '年',
    yen: '¥',
    percent: '%',
  },
  ja: {
    title: '日本 賃貸 vs 購入 計算機',
    desc: '日本で賃貸か購入かを判断するためのミニマルな計算サイト。各セクションの仮定を調整してください。',
    theme: 'テーマ：',
    language: '言語：',
    system: 'システムに従う',
    light: 'ライト',
    dark: 'ダーク',
    general: '基本仮定',
    income: '税引後世帯月収',
    homePurchase: '購入仮定',
    purchasePrice: '購入価格',
    downPaymentPercentage: '頭金 (%)',
    downPayment: '頭金',
    mortgageAmount: 'ローン金額',
    mortgageInterest: 'ローン金利',
    mortgageLength: 'ローン年数',
    yearsOwnership: '保有年数',
    homeOwnershipCost: '保有コスト仮定',
    propertyTaxPercentage: '年間固定資産税率',
    maintenancePercentage: '年間メンテナンス率',
    insurancePercentage: '年間火災保険',
    utilities: '毎月追加光熱費',
    closingCost: '取引コスト仮定',
    closingCostPurchasePercentage: '購入時取引コスト',
    closingCostSalePercentage: '売却時取引コスト',
    valueAssumptions: '価値仮定',
    appreciationPercentage: '年間価格上昇率',
    capitalGains: '譲渡益税仮定',
    capitalGainsTax: '譲渡益税がかかる？',
    marginalTaxRate: '限界税率',
    capitalGainsExemption: '譲渡益控除額',
    other: 'その他',
    initialRenovations: '初期リフォーム費用',
    renting: '賃貸',
    rentalAssumptions: '賃貸仮定',
    collectingRent: '家賃収入あり？',
    monthlyRent: '毎月家賃収入',
    vacancyRate: '空室率',
    additionalMaintenance: '追加メンテナンス費',
    breakdown: '内訳',
    breakdownDesc: '年ごとの内訳やグラフがここに表示されます。',
    result: '結果',
    resultDesc: '計算結果がここに表示されます。',
    yes: 'はい',
    no: 'いいえ',
    years: '年',
    yen: '¥',
    percent: '%',
  },
}; 