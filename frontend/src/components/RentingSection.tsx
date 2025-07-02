import React from 'react';
import type { Lang } from '../i18n';

interface RentingSectionProps {
  collectingRent: string;
  setCollectingRent: (v: string) => void;
  monthlyRent: number;
  setMonthlyRent: (v: number) => void;
  vacancyRate: number;
  setVacancyRate: (v: number) => void;
  additionalMaintenance: number;
  setAdditionalMaintenance: (v: number) => void;
  translations: any;
  lang: Lang;
}

const RentingSection: React.FC<RentingSectionProps> = (props) => {
  const {
    collectingRent, setCollectingRent,
    monthlyRent, setMonthlyRent,
    vacancyRate, setVacancyRate,
    additionalMaintenance, setAdditionalMaintenance,
    translations, lang
  } = props;

  return (
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
  );
};

export default RentingSection; 