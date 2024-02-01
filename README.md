Testando Endpoints com Insomnia:
Abra o Insomnia: Abra o Insomnia ou qualquer outro cliente HTTP que você preferir.

Envie Requisições HTTP: Use os endpoints definidos no código (/metadata, /getRows, /addRow, /updateValues) para enviar solicitações HTTP ao seu servidor Express. Por exemplo:

Envie uma solicitação GET para /metadata para obter os metadados da planilha.

Envie uma solicitação GET para /getRows para obter os dados das linhas da planilha.

Envie uma solicitação POST para /addRow com dados de uma nova linha para adicionar uma nova entrada na planilha.

Envie uma solicitação POST para /updateValues com dados para atualizar os valores das células da planilha.

Certifique-se de que seu servidor esteja em execução enquanto você estiver testando os endpoints. Você receberá respostas do servidor com base nas solicitações que enviar.

Usar --> http://localhost:3001/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
1- Configuração do Ambiente: Foi instalado o Node.js e o pacote express foi adicionado para criar um servidor web.

2- Configuração da Autenticação do Google Sheets: Utilizando o Google APIs Client Library for Node.js, foi configurada a autenticação para acessar o Google Sheets. Isso envolveu a criação de um arquivo de credenciais JSON 
e a configuração das permissões necessárias.

3- Criação do Servidor Express: Um servidor Express foi criado para lidar com as solicitações HTTP.

4- Endpoint para Obter Metadados: Um endpoint foi criado para obter os metadados da planilha do Google Sheets.

5- Endpoint para Obter Linhas: Foi criado um endpoint para obter os dados das linhas da planilha. Isso incluiu a autenticação com o Google Sheets, a consulta dos dados da planilha 
e a manipulação desses dados de acordo com as regras definidas.

6- Endpoint para Adicionar Linha: Foi criado um endpoint para adicionar uma nova linha à planilha. Isso envolveu a autenticação com o Google Sheets e a inserção dos dados fornecidos na solicitação na planilha.

7- Endpoint para Atualizar Valores: Um endpoint foi criado para atualizar os valores das células da planilha. Isso envolveu a autenticação com o Google Sheets e a atualização dos valores fornecidos na solicitação na planilha.

8- Execução do Servidor: O servidor Express foi iniciado e configurado para ouvir solicitações na porta 3001.

9- Desenvolvimento Incremental: O código foi desenvolvido de forma incremental, testando cada parte à medida que avançava e garantindo que cada etapa funcionasse conforme o esperado antes de prosseguir para a próxima.

10- Comentários em Inglês: Comentários em inglês foram adicionados ao código para explicar o propósito e a funcionalidade de cada parte, seguindo as melhores práticas de documentação de código

////

