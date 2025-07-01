import { useState, useEffect } from 'react';
import './App.css';

const THEME_KEY = 'jp-rent-buy-theme';
const LANG_KEY = 'jp-rent-buy-lang';

type Theme = 'system' | 'light' | 'dark';
type Lang = 'en' | 'zh' | 'ja';

const translations = {
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
    downPaymentPct: 'Down Payment (%)',
    downPayment: 'Down Payment',
    mortgageAmount: 'Mortgage Amount',
    mortgageInterest: 'Mortgage Interest Rate',
    mortgageLength: 'Mortgage Length (Years)',
    yearsOwnership: 'Years of Ownership',
    homeOwnershipCost: 'Home Ownership Cost Assumptions',
    propertyTaxPct: 'Annual Property Tax Rate',
    maintenancePct: 'Annual Maintenance Costs',
    insurancePct: 'Annual Home Owners Insurance',
    utilities: 'Monthly Utilities (In Excess vs. Renting)',
    closingCost: 'Closing Cost Assumptions',
    closingCostPurchasePct: 'Closing Costs Upon Purchase',
    closingCostSalePct: 'Closing Costs Upon Sale',
    valueAssumptions: 'Value Assumptions',
    appreciationPct: 'Annual Price Appreciation',
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
    downPaymentPct: '首付比例 (%)',
    downPayment: '首付金额',
    mortgageAmount: '贷款金额',
    mortgageInterest: '贷款利率',
    mortgageLength: '贷款年限',
    yearsOwnership: '持有年数',
    homeOwnershipCost: '持有成本假设',
    propertyTaxPct: '年度房产税率',
    maintenancePct: '年度维护费率',
    insurancePct: '年度房屋保险',
    utilities: '每月额外水电费',
    closingCost: '交易成本假设',
    closingCostPurchasePct: '购房交易成本',
    closingCostSalePct: '卖房交易成本',
    valueAssumptions: '价值假设',
    appreciationPct: '年度房价涨幅',
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
    downPaymentPct: '頭金 (%)',
    downPayment: '頭金',
    mortgageAmount: 'ローン金額',
    mortgageInterest: 'ローン金利',
    mortgageLength: 'ローン年数',
    yearsOwnership: '保有年数',
    homeOwnershipCost: '保有コスト仮定',
    propertyTaxPct: '年間固定資産税率',
    maintenancePct: '年間メンテナンス率',
    insurancePct: '年間火災保険',
    utilities: '毎月追加光熱費',
    closingCost: '取引コスト仮定',
    closingCostPurchasePct: '購入時取引コスト',
    closingCostSalePct: '売却時取引コスト',
    valueAssumptions: '価値仮定',
    appreciationPct: '年間価格上昇率',
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

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('theme-light', 'theme-dark');
  if (theme === 'light') {
    root.classList.add('theme-light');
  } else if (theme === 'dark') {
    root.classList.add('theme-dark');
  }
  // If system, remove all classes (let prefers-color-scheme work)
}

function getSystemTheme(): Theme {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function App() {
  // Buying a Home state
  const [income, setIncome] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPaymentPct, setDownPaymentPct] = useState(0);
  const [mortgageInterest, setMortgageInterest] = useState(0);
  const [mortgageLength, setMortgageLength] = useState(0);
  const [yearsOwnership, setYearsOwnership] = useState(0);
  const [propertyTaxPct, setPropertyTaxPct] = useState(0);
  const [maintenancePct, setMaintenancePct] = useState(0);
  const [insurancePct, setInsurancePct] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [closingCostPurchasePct, setClosingCostPurchasePct] = useState(0);
  const [closingCostSalePct, setClosingCostSalePct] = useState(0);
  const [appreciationPct, setAppreciationPct] = useState(0);
  const [capitalGainsTax, setCapitalGainsTax] = useState('YES');
  const [marginalTaxRate, setMarginalTaxRate] = useState(0);
  const [capitalGainsExemption, setCapitalGainsExemption] = useState(0);
  const [initialRenovations, setInitialRenovations] = useState(0);

  // Renting a Home state
  const [collectingRent, setCollectingRent] = useState('NO');
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [vacancyRate, setVacancyRate] = useState(0);
  const [additionalMaintenance, setAdditionalMaintenance] = useState(0);

  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    return saved || 'system';
  });

  // Language state
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    return saved || 'en';
  });

  useEffect(() => {
    if (theme === 'system') {
      applyTheme(getSystemTheme());
    } else {
      applyTheme(theme);
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  // Listen to system theme changes if user selected 'system'
  useEffect(() => {
    if (theme !== 'system') return;
    const handler = (e: MediaQueryListEvent) => {
      applyTheme(e.matches ? 'dark' : 'light');
    };
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  // Calculated fields (examples)
  const downPayment = purchasePrice * downPaymentPct;
  const mortgageAmount = purchasePrice - downPayment;

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12, gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontWeight: 500, marginRight: 8 }}>Theme:</label>
          <select
            value={theme}
            onChange={e => setTheme(e.target.value as Theme)}
            style={{ padding: '4px 10px', borderRadius: 6 }}
          >
            <option value="system">{translations[lang].system}</option>
            <option value="light">{translations[lang].light}</option>
            <option value="dark">{translations[lang].dark}</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontWeight: 500, marginRight: 8 }}>Language:</label>
          <select
            value={lang}
            onChange={e => setLang(e.target.value as Lang)}
            style={{ padding: '4px 10px', borderRadius: 6 }}
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
      <h1>{translations[lang].title}</h1>
      <p>{translations[lang].desc}</p>

      {/* Row 1: Buying a Home, Renting a Home */}
      <div className="sections-row">
        {/* Buying a Home Section */}
        <section className="section">
          <h2>Buying a Home</h2>
          <div className="section-content">
            <h3 style={{marginTop: 0}}>{translations[lang].general}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].income}</span>
              <input type="number" step="any" value={income} onChange={e => setIncome(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <h3>{translations[lang].homePurchase}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].purchasePrice}</span>
              <input type="number" step="any" value={purchasePrice} onChange={e => setPurchasePrice(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].downPaymentPct}</span>
              <input type="number" step="any" value={downPaymentPct} onChange={e => setDownPaymentPct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="readonly-field">
              <span className="input-label">{translations[lang].downPayment}</span>
              <span className="input-value">{downPayment.toLocaleString()}</span>
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <div className="readonly-field">
              <span className="input-label">{translations[lang].mortgageAmount}</span>
              <span className="input-value">{mortgageAmount.toLocaleString()}</span>
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].mortgageInterest}</span>
              <input type="number" step="any" value={mortgageInterest} onChange={e => setMortgageInterest(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].mortgageLength}</span>
              <input type="number" step="any" value={mortgageLength} onChange={e => setMortgageLength(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].years}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].yearsOwnership}</span>
              <input type="number" step="any" value={yearsOwnership} onChange={e => setYearsOwnership(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].years}</span>
            </div>
            <h3>{translations[lang].homeOwnershipCost}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].propertyTaxPct}</span>
              <input type="number" step="any" value={propertyTaxPct} onChange={e => setPropertyTaxPct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].maintenancePct}</span>
              <input type="number" step="any" value={maintenancePct} onChange={e => setMaintenancePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].insurancePct}</span>
              <input type="number" step="any" value={insurancePct} onChange={e => setInsurancePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].utilities}</span>
              <input type="number" step="any" value={utilities} onChange={e => setUtilities(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <h3>{translations[lang].closingCost}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].closingCostPurchasePct}</span>
              <input type="number" step="any" value={closingCostPurchasePct} onChange={e => setClosingCostPurchasePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].closingCostSalePct}</span>
              <input type="number" step="any" value={closingCostSalePct} onChange={e => setClosingCostSalePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <h3>{translations[lang].valueAssumptions}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].appreciationPct}</span>
              <input type="number" step="any" value={appreciationPct} onChange={e => setAppreciationPct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <h3>{translations[lang].capitalGains}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].capitalGainsTax}</span>
              <select value={capitalGainsTax} onChange={e => setCapitalGainsTax(e.target.value)} className="input-value">
                <option value="YES">{translations[lang].yes}</option>
                <option value="NO">{translations[lang].no}</option>
              </select>
              <span className="input-unit"></span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].marginalTaxRate}</span>
              <input type="number" step="any" value={marginalTaxRate} onChange={e => setMarginalTaxRate(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].capitalGainsExemption}</span>
              <input type="number" step="any" value={capitalGainsExemption} onChange={e => setCapitalGainsExemption(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <h3>{translations[lang].other}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].initialRenovations}</span>
              <input type="number" step="any" value={initialRenovations} onChange={e => setInitialRenovations(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
          </div>
        </section>

        {/* Renting a Home Section */}
        <section className="section">
          <h2>{translations[lang].renting}</h2>
          <div className="section-content">
            <h3 style={{marginTop: 0}}>{translations[lang].rentalAssumptions}</h3>
            <div className="input-row">
              <span className="input-label">{translations[lang].collectingRent}</span>
              <select value={collectingRent} onChange={e => setCollectingRent(e.target.value)} className="input-value">
                <option value="NO">{translations[lang].no}</option>
                <option value="YES">{translations[lang].yes}</option>
              </select>
              <span className="input-unit"></span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].monthlyRent}</span>
              <input type="number" step="any" value={monthlyRent} onChange={e => setMonthlyRent(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].vacancyRate}</span>
              <input type="number" step="any" value={vacancyRate} onChange={e => setVacancyRate(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].percent}</span>
            </div>
            <div className="input-row">
              <span className="input-label">{translations[lang].additionalMaintenance}</span>
              <input type="number" step="any" value={additionalMaintenance} onChange={e => setAdditionalMaintenance(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">{translations[lang].yen}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Row 2: Breakdown (full width) */}
      <div className="sections-row" style={{marginTop: 24}}>
        <section className="section" style={{width: '100%'}}>
          <h2>{translations[lang].breakdown}</h2>
          <div className="section-content">
            <p>{translations[lang].breakdownDesc}</p>
          </div>
        </section>
      </div>

      {/* Row 3: Result (full width) */}
      <div className="sections-row" style={{marginTop: 24}}>
        <section className="section" style={{width: '100%'}}>
          <h2>{translations[lang].result}</h2>
          <div className="section-content">
            <p>{translations[lang].resultDesc}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
