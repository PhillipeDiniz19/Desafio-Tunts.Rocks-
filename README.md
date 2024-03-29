Testando Endpoints com Insomnia:
Abra o Insomnia: Abra o Insomnia ou qualquer outro cliente HTTP que você preferir.

Envie Requisições HTTP: Use os endpoints definidos no código (/metadata, /getRows, /addRow, /updateValues) para enviar solicitações HTTP ao seu servidor Express. Por exemplo:

Envie uma solicitação GET para /metadata para obter os metadados da planilha.

Envie uma solicitação GET para /getRows para obter os dados das linhas da planilha.

Envie uma solicitação POST para /addRow com dados de uma nova linha para adicionar uma nova entrada na planilha.

Envie uma solicitação POST para /updateValues com dados para atualizar os valores das células da planilha.

Certifique-se de que seu servidor esteja em execução enquanto você estiver testando os endpoints. Você receberá respostas do servidor com base nas solicitações que enviar.

Usar --> http://localhost:3001/

1- Comentários em Inglês: Comentários em inglês foram adicionados ao código para explicar o propósito e a funcionalidade de cada parte, seguindo as melhores práticas de documentação de código

////

