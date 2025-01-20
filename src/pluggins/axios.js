import axios from 'axios';

// Crea una instancia de Axios
const instance = axios.create({
    baseURL: 'http://localhost:9000', // Cambia esto a la URL de tu backend
    withCredentials: true // Asegúrate de incluir las credenciales para que el cookie sea enviado
});

// Obtén el token CSRF y configúralo en los encabezados de Axios


export default instance;
