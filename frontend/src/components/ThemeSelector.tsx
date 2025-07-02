import React from 'react';

type Theme = 'system' | 'light' | 'dark';

type Props = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  translations: any;
  lang: string;
};

const ThemeSelector: React.FC<Props> = ({ theme, setTheme, translations, lang }) => (
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
);

export default ThemeSelector; 