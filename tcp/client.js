const net = require('net');

// Conecta ao servidor no localhost na porta 8080
const client = net.createConnection({ port: 8080, host: 'localhost' }, () => {
    console.log('Conectado ao servidor.');

    // Envia uma mensagem ao servidor
    client.write('Olá servidor!');
});

// Quando o cliente recebe dados do servidor
client.on('data', (data) => {
    console.log('Dados recebidos do servidor:', data.toString());

    // Fecha a conexão
    client.end();
});

// Quando o cliente desconecta
client.on('end', () => {
    console.log('Desconectado do servidor.');
});

// Tratamento de erros
client.on('error', (err) => {
    console.error('Erro no cliente:', err);
});
