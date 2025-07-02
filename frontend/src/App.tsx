import { useState, useEffect } from 'react';
import './App.css';
import { translations } from './i18n';
import type { Lang } from './i18n';
import ThemeSelector from './components/ThemeSelector';
import LanguageSelector from './components/LanguageSelector';
import BuyingSection from './components/BuyingSection';
import RentingSection from './components/RentingSection';
import BreakdownSection from './components/BreakdownSection';
import ResultSection from './components/ResultSection';

const THEME_KEY = 'jp-rent-buy-theme';
const LANG_KEY = 'jp-rent-buy-lang';

type Theme = 'system' | 'light' | 'dark';

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
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(0);
  const [mortgageInterest, setMortgageInterest] = useState(0);
  const [mortgageLength, setMortgageLength] = useState(0);
  const [yearsOwnership, setYearsOwnership] = useState(0);
  const [propertyTaxPercentage, setPropertyTaxPercentage] = useState(0);
  const [maintenancePercentage, setMaintenancePercentage] = useState(0);
  const [insurancePercentage, setInsurancePercentage] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [closingCostPurchasePercentage, setClosingCostPurchasePercentage] = useState(0);
  const [closingCostSalePercentage, setClosingCostSalePercentage] = useState(0);
  const [appreciationPercentage, setAppreciationPercentage] = useState(0);
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

  const downPayment = purchasePrice * downPaymentPercentage;
  const mortgageAmount = purchasePrice - downPayment;

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12, gap: 16, flexWrap: 'wrap' }}>
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <LanguageSelector lang={lang} setLang={setLang} />
      </div>
      <h1>{translations[lang].title}</h1>
      <p>{translations[lang].desc}</p>

      {/* Row 1: Buying a Home, Renting a Home */}
      <div className="sections-row">
        <BuyingSection
          income={income} setIncome={setIncome}
          purchasePrice={purchasePrice} setPurchasePrice={setPurchasePrice}
          downPaymentPercentage={downPaymentPercentage} setDownPaymentPercentage={setDownPaymentPercentage}
          mortgageInterest={mortgageInterest} setMortgageInterest={setMortgageInterest}
          mortgageLength={mortgageLength} setMortgageLength={setMortgageLength}
          yearsOwnership={yearsOwnership} setYearsOwnership={setYearsOwnership}
          propertyTaxPercentage={propertyTaxPercentage} setPropertyTaxPercentage={setPropertyTaxPercentage}
          maintenancePercentage={maintenancePercentage} setMaintenancePercentage={setMaintenancePercentage}
          insurancePercentage={insurancePercentage} setInsurancePercentage={setInsurancePercentage}
          utilities={utilities} setUtilities={setUtilities}
          closingCostPurchasePercentage={closingCostPurchasePercentage} setClosingCostPurchasePercentage={setClosingCostPurchasePercentage}
          closingCostSalePercentage={closingCostSalePercentage} setClosingCostSalePercentage={setClosingCostSalePercentage}
          appreciationPercentage={appreciationPercentage} setAppreciationPercentage={setAppreciationPercentage}
          capitalGainsTax={capitalGainsTax} setCapitalGainsTax={setCapitalGainsTax}
          marginalTaxRate={marginalTaxRate} setMarginalTaxRate={setMarginalTaxRate}
          capitalGainsExemption={capitalGainsExemption} setCapitalGainsExemption={setCapitalGainsExemption}
          initialRenovations={initialRenovations} setInitialRenovations={setInitialRenovations}
          translations={translations}
          lang={lang}
        />
        <RentingSection
          collectingRent={collectingRent} setCollectingRent={setCollectingRent}
          monthlyRent={monthlyRent} setMonthlyRent={setMonthlyRent}
          vacancyRate={vacancyRate} setVacancyRate={setVacancyRate}
          additionalMaintenance={additionalMaintenance} setAdditionalMaintenance={setAdditionalMaintenance}
          translations={translations}
          lang={lang}
        />
      </div>

      {/* Row 2: Breakdown (full width) */}
      <div className="sections-row" style={{marginTop: 24}}>
        <BreakdownSection translations={translations} lang={lang} />
      </div>

      {/* Row 3: Result (full width) */}
      <div className="sections-row" style={{marginTop: 24}}>
        <ResultSection translations={translations} lang={lang} />
      </div>
    </div>
  );
}

export default App;
