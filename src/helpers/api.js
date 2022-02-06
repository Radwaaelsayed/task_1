import axios from 'axios';

import { API_URL, LIVE_API_URL, TOKEN } from '../constants';

const api = axios.create({
    baseURL:
        process.env.REACT_APP_NODE_ENV === 'development' ? `${API_URL}/api` : `${LIVE_API_URL}/api`,
    responseType: 'json'
});

api.interceptors.request.use((config) => {
    const token = ''
    const authorizedConfig = { ...config };
    if (token) {
        authorizedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default api;
