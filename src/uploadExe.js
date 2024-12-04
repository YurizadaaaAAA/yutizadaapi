const uploadBuildFile = require('./uploadBuild');

const EXE_PATH = 'caminho/para/seu/arquivo.exe'; // Ajuste este caminho

uploadBuildFile(EXE_PATH)
    .then(response => {
        console.log('Upload concluído!');
        console.log('ID do arquivo:', response.id);
        console.log('Link de download:', `http://localhost:3000${response.downloadLink}`);
    })
    .catch(error => {
        console.error('Erro no upload:', error.message);
    }); 