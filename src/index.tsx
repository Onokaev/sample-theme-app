import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadGETheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function getOSTheme(): string {
  let currentSystemTheme: string;
  const currentSystemThemeDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );

  const currentSystemThemeLight = window.matchMedia(
    '(prefers-color-scheme: light)'
  );

  if (currentSystemThemeDark.matches === true) {
    currentSystemTheme = 'dark';
  } else if (currentSystemThemeLight.matches === true) {
    currentSystemTheme = 'light';
  } else {
    currentSystemTheme = 'high-contrast';
  }

  return currentSystemTheme;
}

function setCurrentTheme(){
  const currentTheme = getOSTheme();

  // You can play around with this to set different themes (light, dark, high-contrast). Notice how the button changes color with different themes
  loadGETheme(currentTheme);
  // loadGETheme('dark');
  // loadGETheme('light');
  // loadGETheme('high-contrast');
}

setCurrentTheme();
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
