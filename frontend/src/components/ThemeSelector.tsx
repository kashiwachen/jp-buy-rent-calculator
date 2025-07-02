import React from 'react';

type Theme = 'system' | 'light' | 'dark';

type Props = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const icons = {
  system: '🧑‍💻', // Person using computer
  light: '🌞',    // Sun with face
  dark: '🌚',     // New moon face
};

const themeOrder: Theme[] = ['system', 'light', 'dark'];

function isDarkMode() {
  if (typeof window !== 'undefined') {
    return document.documentElement.classList.contains('theme-dark') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !document.documentElement.classList.contains('theme-light'));
  }
  return false;
}

function getIconColor(theme: Theme) {
  if (isDarkMode()) {
    return '#fff';
  }
  return '#222';
}

function getTextShadow(theme: Theme) {
  if (isDarkMode() && theme === 'dark') {
    // White glow for the moon face in dark mode
    return '0 0 2px #fff, 0 0 4px #fff';
  }
  return 'none';
}

function getSystemStyles(currentTheme: Theme) {
  const isDark = isDarkMode();
  let background = isDark ? '#fff' : '#222';
  let color = isDark ? '#222' : '#fff';
  let border = currentTheme === 'system' ? '2px solid #6366f1' : '2px solid transparent';
  return {
    display: 'inline-block',
    borderRadius: '50%',
    border,
    width: 17.5,
    height: 17.5,
    lineHeight: '15px',
    textAlign: 'center',
    fontSize: 12.5,
    boxSizing: 'border-box',
    background,
    color,
    transition: 'background 0.2s, border 0.2s, color 0.2s',
  } as React.CSSProperties;
}

const ThemeSelector: React.FC<Props> = ({ theme, setTheme }) => {
  const selectedIdx = themeOrder.indexOf(theme);

  return (
    <div className="theme-selector-bar" style={{ display: 'flex', alignItems: 'center', position: 'relative', gap: 0, height: 25, background: 'transparent' }}>
      <div style={{ position: 'relative', display: 'flex', gap: 0, background: 'transparent' }}>
        {/* Sliding highlight bar */}
        <div
          style={{
            position: 'absolute',
            left: `calc(${selectedIdx} * 25px)` ,
            top: 18,
            width: 25,
            height: 3.75,
            background: '#6366f1',
            borderRadius: 2,
            transition: 'left 0.25s cubic-bezier(.4,1.6,.6,1)',
            zIndex: 0,
          }}
        />
        {themeOrder.map((t, idx) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              background: 'transparent',
              border: 'none',
              borderRadius: 5,
              padding: '1.25px',
              fontSize: 12.5,
              width: 25,
              height: 25,
              cursor: 'pointer',
              outline: 'none',
              zIndex: 1,
              color: getIconColor(t),
              opacity: theme === t ? 1 : 0.7,
              transition: 'opacity 0.2s',
              textShadow: getTextShadow(t),
              position: 'relative',
            }}
            aria-label={t.charAt(0).toUpperCase() + t.slice(1) + ' theme'}
          >
            {t === 'system' ? (
              <span style={getSystemStyles(theme)}>{icons[t]}</span>
            ) : icons[t]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector; 