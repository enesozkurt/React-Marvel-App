import axios from 'axios';
import { LIST_RESPONSE } from '../action-types'
const API_URL = 'http://gateway.marvel.com/v1/public';
const API_KEY = '872e9ad98090d4b8a06579b5ba76d496';
const TIMESTAMP = 1;
const HASH = '1196b066c1dd6d6ffc07791f14be40e4'

function get(query, opt) {
    if (typeof opt === 'object') {
        return axios.get(`${API_URL}/${query}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}&limit=30`, { params: opt });
    } else {
        return axios.get(`${API_URL}/${query}/${opt}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`);
    }
}

export function getCharacter(opt) {
    return dispatch => {
        return get('characters', opt).then(response => {
            dispatch({ type: LIST_RESPONSE, payload: response.data.data });
            return response.data;
        });
    };
}

// export function getCharacterDetail

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
    }
);
