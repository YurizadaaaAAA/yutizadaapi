const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const API_URL = 'https://file-upload-api.onrender.com'; // Sua URL do Render

async function uploadFile(filePath) {
    try {
        const formData = new FormData();
        const fileStream = fs.createReadStream(filePath);
        formData.append('file', fileStream);

        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                ...formData.getHeaders()
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        });

        return response.data; // Retorna { id, downloadUrl }
    } catch (error) {
        console.error('Erro no upload:', error.message);
        throw error;
    }
}

module.exports = uploadFile; 