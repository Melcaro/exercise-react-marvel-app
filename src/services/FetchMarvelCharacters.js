import md5 from 'md5';
import axios from 'axios';
import { auth } from './../auth';

function getParams(auth) {
  const ts = Date.now();
  const hash = md5(ts + auth.privateKey + auth.publicKey);
  return { ts, apikey: auth.publicKey, hash: hash };
}

function fetchMarvelCharacters(query) {
  return axios.get(`http://gateway.marvel.com/v1/public/characters`, {
    params: {
    name: query,
    ...getParams(auth),}
  });
}

export { fetchMarvelCharacters };
