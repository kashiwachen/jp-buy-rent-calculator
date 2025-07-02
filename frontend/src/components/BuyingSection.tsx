import React from 'react';
import type { Lang } from '../i18n';

interface BuyingSectionProps {
  income: number;
  setIncome: (v: number) => void;
  purchasePrice: number;
  setPurchasePrice: (v: number) => void;
  downPaymentPercentage: number;
  setDownPaymentPercentage: (v: number) => void;
  mortgageInterest: number;
  setMortgageInterest: (v: number) => void;
  mortgageLength: number;
  setMortgageLength: (v: number) => void;
  yearsOwnership: number;
  setYearsOwnership: (v: number) => void;
  propertyTaxPercentage: number;
  setPropertyTaxPercentage: (v: number) => void;
  maintenancePercentage: number;
  setMaintenancePercentage: (v: number) => void;
  insurancePercentage: number;
  setInsurancePercentage: (v: number) => void;
  utilities: number;
  setUtilities: (v: number) => void;
  closingCostPurchasePercentage: number;
  setClosingCostPurchasePercentage: (v: number) => void;
  closingCostSalePercentage: number;
  setClosingCostSalePercentage: (v: number) => void;
  appreciationPercentage: number;
  setAppreciationPercentage: (v: number) => void;
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
    downPaymentPercentage, setDownPaymentPercentage,
    mortgageInterest, setMortgageInterest,
    mortgageLength, setMortgageLength,
    yearsOwnership, setYearsOwnership,
    propertyTaxPercentage, setPropertyTaxPercentage,
    maintenancePercentage, setMaintenancePercentage,
    insurancePercentage, setInsurancePercentage,
    utilities, setUtilities,
    closingCostPurchasePercentage, setClosingCostPurchasePercentage,
    closingCostSalePercentage, setClosingCostSalePercentage,
    appreciationPercentage, setAppreciationPercentage,
    capitalGainsTax, setCapitalGainsTax,
    marginalTaxRate, setMarginalTaxRate,
    capitalGainsExemption, setCapitalGainsExemption,
    initialRenovations, setInitialRenovations,
    translations, lang
  } = props;

  const downPayment = purchasePrice * (downPaymentPercentage / 100);
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
          <span className="input-label">{translations[lang].downPaymentPercentage}</span>
          <input type="number" step="any" value={downPaymentPercentage} onChange={e => setDownPaymentPercentage(parseFloat(e.target.value) || 0)} className="input-value" />
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
          <span className="input-label">{translations[lang].propertyTaxPercentage}</span>
          <input type="number" step="any" value={propertyTaxPercentage} onChange={e => setPropertyTaxPercentage(parseFloat(e.target.value) || 0)} className="input-value" />
          <span className="input-unit">{translations[lang].percent}</span>
        </div>
        <div className="input-row">
          <span className="input-label">{translations[lang].maintenancePercentage}</span>
          <input type="number" step="any" value={maintenancePercentage} onChange={e => setMaintenancePercentage(parseFloat(e.target.value) || 0)} className="input-value" />
          <span className="input-unit">{translations[lang].percent}</span>
        </div>
        <div className="input-row">
          <span className="input-label">{translations[lang].insurancePercentage}</span>
          <input type="number" step="any" value={insurancePercentage} onChange={e => setInsurancePercentage(parseFloat(e.target.value) || 0)} className="input-value" />
          <span className="input-unit">{translations[lang].percent}</span>
        </div>
        <div className="input-row">
          <span className="input-label">{translations[lang].utilities}</span>
          <input type="number" step="any" value={utilities} onChange={e => setUtilities(parseFloat(e.target.value) || 0)} className="input-value" />
          <span className="input-unit">{translations[lang].yen}</span>
        </div>
        <h3>{translations[lang].closingCost}</h3>
        <div className="input-row">
          <span className="input-label">{translations[lang].closingCostPurchasePercentage}</span>
          <input type="number" step="any" value={closingCostPurchasePercentage} onChange={e => setClosingCostPurchasePercentage(parseFloat(e.target.value) || 0)} className="input-value" />
          <span className="input-unit">{translations[lang].percent}</span>
        </div>
        <div className="input-row">
          <span className="input-label">{translations[lang].closingCostSalePercentage}</span>
          <input type="number" step="any" value={closingCostSalePercentage} onChange={e => setClosingCostSalePercentage(parseFloat(e.target.value) || 0)} className="input-value" />
          <span className="input-unit">{translations[lang].percent}</span>
        </div>
        <h3>{translations[lang].valueAssumptions}</h3>
        <div className="input-row">
          <span className="input-label">{translations[lang].appreciationPercentage}</span>
          <input type="number" step="any" value={appreciationPercentage} onChange={e => setAppreciationPercentage(parseFloat(e.target.value) || 0)} className="input-value" />
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