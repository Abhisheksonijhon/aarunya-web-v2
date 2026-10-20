import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'aarunya-theme';

function readTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {}
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const syncTheme = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    window.addEventListener('storage', syncTheme);
    return () => window.removeEventListener('storage', syncTheme);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch {}
  };

  return <button type="button" className="theme-toggle" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}><span className="theme-toggle-icon">{theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}</span><span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span></button>;
}
