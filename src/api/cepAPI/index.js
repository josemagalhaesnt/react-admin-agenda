import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.postmon.com.br/v1/cep/',
});
