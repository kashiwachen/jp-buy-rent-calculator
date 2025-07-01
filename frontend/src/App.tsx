import { useState, useEffect } from 'react';
import './App.css';

const THEME_KEY = 'jp-rent-buy-theme';

type Theme = 'system' | 'light' | 'dark' | 'tokyo-night';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('theme-light', 'theme-dark', 'theme-tokyo-night');
  if (theme === 'light') {
    root.classList.add('theme-light');
  } else if (theme === 'dark') {
    root.classList.add('theme-dark');
  } else if (theme === 'tokyo-night') {
    root.classList.add('theme-tokyo-night');
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
  const [income, setIncome] = useState(450000);
  const [purchasePrice, setPurchasePrice] = useState(70000000);
  const [downPaymentPct, setDownPaymentPct] = useState(0.2);
  const [mortgageInterest, setMortgageInterest] = useState(0.015);
  const [mortgageLength, setMortgageLength] = useState(35);
  const [yearsOwnership, setYearsOwnership] = useState(5);
  const [propertyTaxPct, setPropertyTaxPct] = useState(0.0125);
  const [maintenancePct, setMaintenancePct] = useState(0.001);
  const [insurancePct, setInsurancePct] = useState(0.0007);
  const [utilities, setUtilities] = useState(200);
  const [closingCostPurchasePct, setClosingCostPurchasePct] = useState(0.01);
  const [closingCostSalePct, setClosingCostSalePct] = useState(0.02);
  const [appreciationPct, setAppreciationPct] = useState(0.03);
  const [capitalGainsTax, setCapitalGainsTax] = useState('YES');
  const [marginalTaxRate, setMarginalTaxRate] = useState(0.2);
  const [capitalGainsExemption, setCapitalGainsExemption] = useState(500000);
  const [initialRenovations, setInitialRenovations] = useState(200000);

  // Renting a Home state
  const [collectingRent, setCollectingRent] = useState('NO');
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [vacancyRate, setVacancyRate] = useState(0.05);
  const [additionalMaintenance, setAdditionalMaintenance] = useState(0);

  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    return saved || 'system';
  });

  useEffect(() => {
    if (theme === 'system') {
      applyTheme(getSystemTheme());
    } else {
      applyTheme(theme);
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

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
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
        <label style={{ fontWeight: 500, marginRight: 8 }}>Theme:</label>
        <select
          value={theme}
          onChange={e => setTheme(e.target.value as Theme)}
          style={{ padding: '4px 10px', borderRadius: 6 }}
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="tokyo-night">Tokyo Night</option>
        </select>
      </div>
      <h1>JP Rent vs Buy Calculator</h1>
      <p>Decide whether to rent or buy a home in Japan. Adjust the assumptions in each section below.</p>

      {/* Row 1: Buying a Home, Renting a Home */}
      <div className="sections-row">
        {/* Buying a Home Section */}
        <section className="section">
          <h2>Buying a Home</h2>
          <div className="section-content">
            <h3 style={{marginTop: 0}}>General Assumptions</h3>
            <div className="input-row">
              <span className="input-label">After Tax Household Income Per Month</span>
              <input type="number" step="any" value={income} onChange={e => setIncome(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
            <h3>Home Purchase Assumptions</h3>
            <div className="input-row">
              <span className="input-label">Purchase Price</span>
              <input type="number" step="any" value={purchasePrice} onChange={e => setPurchasePrice(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
            <div className="input-row">
              <span className="input-label">Down Payment (%)</span>
              <input type="number" step="any" value={downPaymentPct} onChange={e => setDownPaymentPct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="readonly-field">
              <span className="input-label">Down Payment</span>
              <span className="input-value">{downPayment.toLocaleString()}</span>
              <span className="input-unit">¥</span>
            </div>
            <div className="readonly-field">
              <span className="input-label">Mortgage Amount</span>
              <span className="input-value">{mortgageAmount.toLocaleString()}</span>
              <span className="input-unit">¥</span>
            </div>
            <div className="input-row">
              <span className="input-label">Mortgage Interest Rate</span>
              <input type="number" step="any" value={mortgageInterest} onChange={e => setMortgageInterest(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Mortgage Length (Years)</span>
              <input type="number" step="any" value={mortgageLength} onChange={e => setMortgageLength(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">years</span>
            </div>
            <div className="input-row">
              <span className="input-label">Years of Ownership</span>
              <input type="number" step="any" value={yearsOwnership} onChange={e => setYearsOwnership(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">years</span>
            </div>
            <h3>Home Ownership Cost Assumptions</h3>
            <div className="input-row">
              <span className="input-label">Annual Property Tax Rate</span>
              <input type="number" step="any" value={propertyTaxPct} onChange={e => setPropertyTaxPct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Annual Maintenance Costs</span>
              <input type="number" step="any" value={maintenancePct} onChange={e => setMaintenancePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Annual Home Owners Insurance</span>
              <input type="number" step="any" value={insurancePct} onChange={e => setInsurancePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Monthly Utilities (In Excess vs. Renting)</span>
              <input type="number" step="any" value={utilities} onChange={e => setUtilities(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
            <h3>Closing Cost Assumptions</h3>
            <div className="input-row">
              <span className="input-label">Closing Costs Upon Purchase</span>
              <input type="number" step="any" value={closingCostPurchasePct} onChange={e => setClosingCostPurchasePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Closing Costs Upon Sale</span>
              <input type="number" step="any" value={closingCostSalePct} onChange={e => setClosingCostSalePct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <h3>Value Assumptions</h3>
            <div className="input-row">
              <span className="input-label">Annual Price Appreciation</span>
              <input type="number" step="any" value={appreciationPct} onChange={e => setAppreciationPct(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <h3>Capital Gains Tax Assumptions</h3>
            <div className="input-row">
              <span className="input-label">Does Capital Gains Tax Apply?</span>
              <select value={capitalGainsTax} onChange={e => setCapitalGainsTax(e.target.value)} className="input-value">
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
              <span className="input-unit"></span>
            </div>
            <div className="input-row">
              <span className="input-label">Marginal Tax Rate</span>
              <input type="number" step="any" value={marginalTaxRate} onChange={e => setMarginalTaxRate(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Capital Gains Exemption</span>
              <input type="number" step="any" value={capitalGainsExemption} onChange={e => setCapitalGainsExemption(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
            <h3>Other</h3>
            <div className="input-row">
              <span className="input-label">Initial Renovations Required</span>
              <input type="number" step="any" value={initialRenovations} onChange={e => setInitialRenovations(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
          </div>
        </section>

        {/* Renting a Home Section */}
        <section className="section">
          <h2>Renting a Home</h2>
          <div className="section-content">
            <h3 style={{marginTop: 0}}>Rental Property Assumptions</h3>
            <div className="input-row">
              <span className="input-label">Collecting Rent?</span>
              <select value={collectingRent} onChange={e => setCollectingRent(e.target.value)} className="input-value">
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
              <span className="input-unit"></span>
            </div>
            <div className="input-row">
              <span className="input-label">Monthly Rent Collectable</span>
              <input type="number" step="any" value={monthlyRent} onChange={e => setMonthlyRent(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
            <div className="input-row">
              <span className="input-label">Vacancy Rate</span>
              <input type="number" step="any" value={vacancyRate} onChange={e => setVacancyRate(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">%</span>
            </div>
            <div className="input-row">
              <span className="input-label">Additional Maintenance</span>
              <input type="number" step="any" value={additionalMaintenance} onChange={e => setAdditionalMaintenance(parseFloat(e.target.value) || 0)} className="input-value" />
              <span className="input-unit">¥</span>
            </div>
          </div>
        </section>
      </div>

      {/* Row 2: Breakdown (full width) */}
      <div className="sections-row" style={{marginTop: 24}}>
        <section className="section" style={{width: '100%'}}>
          <h2>Breakdown</h2>
          <div className="section-content">
            <p>Year-by-year breakdown and charts will go here.</p>
          </div>
        </section>
      </div>

      {/* Row 3: Result (full width) */}
      <div className="sections-row" style={{marginTop: 24}}>
        <section className="section" style={{width: '100%'}}>
          <h2>Result</h2>
          <div className="section-content">
            <p>Calculation result will be displayed here.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
