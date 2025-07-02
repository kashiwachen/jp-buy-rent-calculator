import React from 'react';
import type { Lang } from '../i18n';

interface ResultSectionProps {
  translations: any;
  lang: Lang;
}

const ResultSection: React.FC<ResultSectionProps> = ({ translations, lang }) => (
  <section className="section" style={{width: '100%'}}>
    <h2>{translations[lang].result}</h2>
    <div className="section-content">
      <p>{translations[lang].resultDesc}</p>
    </div>
  </section>
);

export default ResultSection; 