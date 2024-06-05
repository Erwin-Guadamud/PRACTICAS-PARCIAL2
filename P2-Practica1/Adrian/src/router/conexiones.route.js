import axios from 'axios';

// Define el tipo de los datos que esperas recibir. Esto es opcional y puedes ajustar según tus necesidades.


// Función para realizar solicitudes GET usando Axios
export const fetchDataWithAxios = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error al obtener datos con Axios: ' + error.message);
        } else {
            throw new Error('Error al obtener datos con Axios');
        }
    }
};

// Función para realizar solicitudes GET usando Ky
export const fetchDataWithKy = async (url) => {
    try {
        // Utiliza importación dinámica para importar ky
        const ky = await import('ky');
        const response = await ky.default.get(url).json();
        return response;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener datos con Ky: ' + error.message);
        } else {
            throw new Error('Error al obtener datos con Ky');
        }
    }
}
