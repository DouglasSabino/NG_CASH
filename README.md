<h1>NG Cash</h1>

<h3>Desesafio proposto em processo seletivo, uma aplicação bancaria fullstack que seguem as seguintes regras de negocio:</h3>

<details>
 <summary><strong>Backend</strong></summary><br />
  <li><strong>Qualquer pessoa deverá poder ser um usuario da aplicação. Para isso, basta realizar o cadastro informando username e password.</strong></li>
    <br />
  <li><strong>Deve-se garantir que cada username seja único e composto por, pelo menos, 3 caracteres.</strong></li>
    <br />
  <li><strong>Deve-se garantir que a password seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser hashada ao ser armazenada no banco.</strong></li>
    <br />
  <li><strong>Durante o processo de cadastro de um novo usuário, sua respectiva conta deverá ser criada automaticamente na tabela Accounts com um balance de R$ 100,00. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado,  a tabela Accounts não deverá ser afetada.</strong></li>
    <br />
  <li><strong>Todo usuário deverá conseguir logar na aplicação informando username e password. Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido.</strong></li>
    <br />
  <li><strong>Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar seu próprio balance atual. Um usuário A não pode visualizar o balance de um usuário B, por exemplo.</strong></li>
    <br />
  <li><strong>Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um cash-out informando o username do usuário que sofrerá o cash-in), caso apresente balance suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo.</strong></li>
    <br />
  <li><strong>Toda nova transação bem-sucedida deverá ser registrada na tabela Transactions. Em casos de falhas transacionais, a tabela Transactions não deverá ser afetada.</strong></li>
    <br />
  <li><strong>Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (cash-out e cash-in) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela.</strong></li>
    <br />
  <li><strong>Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por:</strong>
    <br />
    <h5><strong>Data de realização da transação e/ou</strong></h5>
    <h5><strong>Transações de cash-out</strong></h5>
    <h5><strong>Transações de cash-in</strong></h5>
</details>

<details>
 <summary><strong>Frontend</strong></summary><br />
  <li><strong>Página para realizar o cadastro na NG informando username e password.</strong></li>
    <br />
  <li><strong>Página para realizar o login informando username e password.</strong></li>
    <br />
  <li><strong>Com o usuário logado, a página principal deve apresentar:</strong></li>
    <br />
    <ul>
      <li><h5><strong>balance atual do usuário</strong></h5></li>
      <li><h5><strong></strong>Seção voltada à realização de transferências para outros usuários NG a partir do username de quem sofrerá o cash-in</h5></li>
      <li><h5><strong>Tabela com os detalhes de todas as transações que o usuário participou</strong></h5></li>
      <li><h5><strong>Mecanismo para filtrar a tabela por data de transação e/ou transações do tipo cash-in/cash-out</strong></h5></li>
      <li><h5><strong>Botão para realizar o log-out.</strong></h5></li>
    </ul>
    
</details>

<details>
 <summary><strong>Diagrama</strong></summary><br />
  <img src="https://ngcash.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F65a8d6ca-b491-4d27-a26e-2d4bcdaed34a%2Fdigram.png?id=431ddb96-828d-4bd5-b4a7-a8814683b66d&table=block&spaceId=6f9b2303-1422-45c0-a306-a5a53110fd01&width=1820&userId=&cache=v2" alt="diagrama aplicação" />
</details>

<h2>Ferramentas e tecnologias utilizadas</h2>
<ul>
  <li>React</li>
  <li>Tailwind CSS</li>
  <li>Node</li>
  <li>Express</li>
  <li>Joi</li>
  <li>JWT</li>
  <li>Bcrypt</li>
  <li>MySql</li>
  <li>Javascipt</li>
</ul>

<h2>⚠️ IMPORTANTE ⚠️</h2>
<p>Nas pastas "backend" e "frontend" existem arquivos chamados ".env.example" renomei-os para ".env" e configure suas variaveis de ambiente neles. Na basta "backend" exitem dois arquivos "migrations.sql" e "seeders.sql" eles tem as querys para criar e popular as tabelas respectivamente no banco de dados para falicitar testes. A aplicação ainda não é responsiva por favor utilize em resolução de desktop (1920 x 1080 Recomendada).</p>

<h2>🛠 Status 🛠</h2>
<p>Backend concluido e frontend iniciado</p>