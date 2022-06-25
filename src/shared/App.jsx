import React from 'react';
import SampleComponent from './components/SampleComponent';
import styles from './styles/App.css';

export default function App({ serverData }) {
  const { name = 'abcd', age = '123' } = serverData || {};
  console.log('initialData client : ', serverData);
  return (
    <div className={styles.AppContainer}>
      <h1>
        Hello SSR Web App :
        {serverData.map((eachRepo) => (<p key={eachRepo.id}>{eachRepo.name}</p>))}
      </h1>
      <SampleComponent />
    </div>
  );
}
