const path = require("path")
const fs = require("fs")

console.log(__filename) //Mostra todo o diretorio e o nome do arquivo
console.log(__dirname) //Mostra todo o diretorio da pasta

// Pega o nome de um arquivo
console.log(path.basename(__filename));

// Pegar a extensão do arquivo
console.log(path.extname(__filename));

// Cria uma arquivo no diretorio
// fs.writeFile(path.join(__dirname, "message.txt"), "Welcome to FSC", () => {});
