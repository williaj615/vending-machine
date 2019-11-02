import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseUrl;

const getMachine = () => new Promise((resolve, reject) => {
    axios.get(`${baseURL}/machines.json`)
    .then((response) => {
        resolve(response);
    })
    .catch((error) => reject(error));
})

export default { getMachine }