import React from 'react';
import type { Lang } from '../i18n';

interface BuyingSectionProps {
  income: number;
  setIncome: (v: number) => void;
  purchasePrice: number;
  setPurchasePrice: (v: number) => void;
  downPaymentPct: number;
  setDownPaymentPct: (v: number) => void;
  mortgageInterest: number;
  setMortgageInterest: (v: number) => void;
  mortgageLength: number;
  setMortgageLength: (v: number) => void;
  yearsOwnership: number;
  setYearsOwnership: (v: number) => void;
  propertyTaxPct: number;
  setPropertyTaxPct: (v: number) => void;
  maintenancePct: number;
  setMaintenancePct: (v: number) => void;
  insurancePct: number;
  setInsurancePct: (v: number) => void;
  utilities: number;
  setUtilities: (v: number) => void;
  closingCostPurchasePct: number;
  setClosingCostPurchasePct: (v: number) => void;
  closingCostSalePct: number;
  setClosingCostSalePct: (v: number) => void;
  appreciationPct: number;
  setAppreciationPct: (v: number) => void;
  capitalGainsTax: string;
  setCapitalGainsTax: (v: string) => void;
  marginalTaxRate: number;
  setMarginalTaxRate: (v: number) => void;
  capitalGainsExemption: number;
  setCapitalGainsExemption: (v: number) => void;
  initialRenovations: number;
  setInitialRenovations: (v: number) => void;
  translations: any;
  lang: Lang;
}

const BuyingSection: React.FC<BuyingSectionProps> = (props) => {
  const {
    income, setIncome,
    purchasePrice, setPurchasePrice,
    downPaymentPct, setDownPaymentPct,
    mortgageInterest, setMortgageInterest,
    mortgageLength, setMortgageLength,
    yearsOwnership, setYearsOwnership,
    propertyTaxPct, setPropertyTaxPct,
    maintenancePct, setMaintenancePct,
    insurancePct, setInsurancePct,
    utilities, setUtilities,
    closingCostPurchasePct, setClosingCostPurchasePct,
    closingCostSalePct, setClosingCostSalePct,
    appreciationPct, setAppreciationPct,
    capitalGainsTax, setCapitalGainsTax,
    marginalTaxRate, setMarginalTaxRate,
    capitalGainsExemption, setCapitalGainsExemption,
    initialRenovations, setInitialRenovations,
    translations, lang
  } = props;

  const downPayment = purchasePrice * downPaymentPct;
  const mortgageAmount = purchasePrice - downPayment;

  return (
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
  );
};

export default BuyingSection; 