import React from 'react';
import type { Lang } from '../i18n';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageSelector: React.FC<Props> = ({ lang, setLang }) => (
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
);

export default LanguageSelector; 