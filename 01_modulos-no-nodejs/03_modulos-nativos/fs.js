const fs = require('fs');
const path = require('path')

// Criar uma pasta em um diretorio, duas opcoes
// Cria na pasta do diretorio do arquivo
fs.mkdir(path.join(__dirname, 'new-folder'), () => { })
// Cria na pasta onde executa o arquivo, se executar na pasta 01_MODULOS-NO-NODEJS ele cria a pasta lá
fs.mkdir("./new-folder", () => { })

// Criar um arquivo, 
fs.writeFile(path.join(__dirname, 'new-folder', 'file.txt'), "Hello from FSC!", () => { })

//Adicionar conteudo a um arquivo
fs.appendFile(path.join(__dirname, 'new-folder', 'file.txt'), "Hello World", () => { })

//Ler o conteudo de um arquivo
fs.readFile(path.join(__dirname, 'new-folder', 'file.txt'), "utf-8", (error, data) => {
    console.log(data)
})