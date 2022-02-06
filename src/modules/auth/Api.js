import api from '../../helpers/api';

export const Login = (formData) => {
    return api.post(`/login`, formData);
};

