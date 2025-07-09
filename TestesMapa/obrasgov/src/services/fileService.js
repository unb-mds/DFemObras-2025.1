const fs = require('fs');

function saveToJsonFile(data, filename) {
<<<<<<< HEAD
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`Dados salvos no arquivo ${filename}`);
    } catch (error) {
        console.error(`Erro ao salvar o arquivo ${filename}:`, error.message);
    }
}

module.exports = {
    saveToJsonFile
};
=======
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Dados salvos no arquivo ${filename}`);
  } catch (error) {
    console.error(`Erro ao salvar o arquivo ${filename}:`, error.message);
  }
}

module.exports = {
  saveToJsonFile,
};
>>>>>>> 9f36ec1879030b2c6b5452007a57d8b36fe0b9f6
