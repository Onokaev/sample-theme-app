import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getTheme, ITheme, PrimaryButton } from '@fluentui/react';

function App() {
  const currentTheme: ITheme = getTheme();
  const appStyle = {
    background: currentTheme.semanticColors.bodyBackground
  }
  console.log(appStyle.background)
  
  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimaryButton>
          MyButton
        </PrimaryButton>
      </header>
    </div>
  );
}

export default App;
