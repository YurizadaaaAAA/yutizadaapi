const uploadBuildFile = require('./src/uploadBuild');

// ... seu código de build ...

build.onSuccess(async () => {
    const exePath = 'caminho/para/seu/arquivo.exe';
    await uploadBuildFile(exePath);
}); 