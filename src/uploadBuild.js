const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');

async function uploadBuildFile(buildPath) {
    try {
        // Cria um FormData para enviar o arquivo
        const formData = new FormData();
        const fileStream = fs.createReadStream(buildPath);
        
        formData.append('file', fileStream);

        // Faz o upload para a API
        const response = await axios.post('http://localhost:3000/upload', formData, {
            headers: {
                ...formData.getHeaders()
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        });

        console.log('Upload realizado com sucesso!');
        console.log('Link para download:', `http://localhost:3000${response.data.downloadLink}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer upload:', error.message);
        throw error;
    }
}

module.exports = uploadBuildFile; 