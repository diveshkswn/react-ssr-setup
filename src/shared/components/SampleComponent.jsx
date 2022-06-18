import React, { useState } from 'react';
import styles from '../styles/SampleComponent.css';

export default function SampleComponent() {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.SampleComponentMain}>
      <p className={styles.SampleComponentText}>
        Sample Component Count :
        {' '}
        {counter}
      </p>
      <button type="button" onClick={() => { setCounter((preVal) => preVal + 1); }}>Increase Counter</button>
    </div>
  );
}
