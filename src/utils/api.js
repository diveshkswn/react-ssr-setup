/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

export async function fetchPopularRepos(_lang = 'all') {
  try {
    const api = `https://api.github.com/search/repositories?q=stars:>1+language:${_lang}&sort=stars&order=desc&type=Repositories`;
    const response = await fetch(api);
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
