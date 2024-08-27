const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    // Quando o servidor recebe dados do cliente
    socket.on('data', (data) => {
        console.log('Dados recebidos do cliente:', data.toString());
        
        // Resposta para o cliente
        socket.write('Olá do servidor!');
    });

    // Quando o cliente desconecta
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });

    // Tratamento de erros
    socket.on('error', (err) => {
        console.error('Erro no socket:', err);
    });
});

// Inicia o servidor na porta 8080
server.listen(8080, () => {
    console.log('Servidor escutando na porta 8080.');
});
