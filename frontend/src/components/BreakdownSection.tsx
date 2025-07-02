import React from 'react';
import type { Lang } from '../i18n';

interface BreakdownSectionProps {
  translations: any;
  lang: Lang;
}

const BreakdownSection: React.FC<BreakdownSectionProps> = ({ translations, lang }) => (
  <section className="section" style={{width: '100%'}}>
    <h2>{translations[lang].breakdown}</h2>
    <div className="section-content">
      <p>{translations[lang].breakdownDesc}</p>
    </div>
  </section>
);

export default BreakdownSection; 