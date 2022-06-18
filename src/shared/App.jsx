import React from 'react';
import SampleComponent from './components/SampleComponent';
import styles from './styles/App.css';

export default function App() {
  return (
    <div className={styles.AppContainer}>
      <h1>Hello SSR Web App</h1>
      <SampleComponent />
    </div>
  );
}
