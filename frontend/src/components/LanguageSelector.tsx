import React from 'react';
import type { Lang } from '../i18n';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const icons = {
  en: 'EN',
  zh: '中文',
  ja: 'あ',
};

const LanguageSelector: React.FC<Props> = ({ lang, setLang }) => (
  <div style={{
    position: 'fixed',
    right: 16,
    bottom: 16,
    zIndex: 100,
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 6,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    minWidth: 0,
  }}>
    {(['en', 'zh', 'ja'] as Lang[]).map((l) => (
      <button
        key={l}
        onClick={() => setLang(l)}
        style={{
          background: 'transparent',
          border: 'none',
          borderRadius: 3,
          padding: '1px 4px',
          fontSize: 10,
          cursor: 'pointer',
          outline: 'none',
          color: '#222',
          borderBottom: lang === l ? '2px solid #6366f1' : '2px solid transparent',
          opacity: lang === l ? 1 : 0.7,
          marginLeft: 1,
          marginRight: 1,
          transition: 'border-bottom 0.2s, opacity 0.2s',
        }}
        aria-label={l === 'en' ? 'English' : l === 'zh' ? 'Chinese' : 'Japanese'}
      >
        {icons[l]}
      </button>
    ))}
  </div>
);

export default LanguageSelector; 