/* eslint-disable max-len */
import React from 'react';
import SampleComponent from './components/SampleComponent';
import styles from './styles/App.css';
import { fetchPopularRepos } from '../utils/api';

export default function App({ serverData }) {
  console.log('initialData client : ', serverData);

  return (
    <div className={styles.AppContainer}>
      <h1>
        Hello SSR Web App :
      </h1>
      {serverData?.map((eachRepo) => (<p key={eachRepo.id}>{eachRepo.name}</p>))}
      {(serverData?.length === 0 || !serverData) && <h3>Something went wrong in GITHUB API. Please try again later</h3>}
      <SampleComponent />
    </div>
  );
}
