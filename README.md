<img src="/public/banner.gif">

<h1 align="center">
    <br>
    <p align="center">Projeto Final | Todas em Tech - Back End | Reprograma <p>
</h1>

<center>

<br/>

![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![ExpressJs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)![Swagger](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)![Swagger](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


## Console.log ('cheirinho de café! ')

Café Filtrado é o projeto final do bootcamp Todas em Tech (Turma On16) da Reprograma que consiste em uma API Rest para reunir iniciativas gratuitas para formação de mulheres no setor cafeeiro. Ela propõe um CRUD criado com a utilização de Node.Js e Express.js para manipulação de dados armazenados no MongoDB Atlas. Temos dados relacionados a oportunidades gratuitas e, também, de usuários, criando uma cadeia de publicações colaborativa e autenticada. Esta API está publicada no Heroku e com documentação registrada pelo Swagger para melhor entendimento da estrutura de requisições.

</center>

---

<center>

### Consultas e Publicações:


[Heroku](https://cafe-filtrado.herokuapp.com/) | [Swagger](https://cafe-filtrado.herokuapp.com/minha-documentacao) | [Apresentação](https://cafe-filtrado.herokuapp.com/)

![BuiltWithLove](https://forthebadge.com/images/badges/built-with-love.svg)


</center>

---

### Etapas de execução do projeto:

* Plantio e florada: [semeando a ideia do projeto](#sobre)
* Colheita e processamento: [colhendo uma ideia madura e criando rotas possíveis!](#modelos)
* Torrefação e empacotamento: [padronizando e dando forma à safra de ideias](#mvc)
* Moagem e consumo: [saboreando uma API de qualidade](#inicializacao)
   
---

<div id='sobre'/> 

### 🌱 Plantio e Florada: semeando a ideia do projeto 🌱

O Filtrado, é uma bebida muito presente no dia a dia dos brasileiros e, em muitos casos, a mais acessível para muitos. Com relação aos demais tipos de café, tem seu preparo mais lento e pouco automatizado, por isso ele foi escolhido para representar esta API, apesar do objetivo de fomentar a iniciação e formação de mulheres para a cultura cafeeira, tornando este processo mais acessível, sabemos que isso faz parte de um movimento cuidadoso e que seu avanço não é imediato, mas que pode ser uma tentativa dentre muitas, afinal, é o que as mulheres tem vivido hoje no mercado da tecnologia, que também já foi um campo sem muitos frutos, mas que hoje tem evoluído muito com as comunidades e ações afirmativas. 

<img src="/public/rodape.png" width="150">


<div id='modelos'/> 

### ⚙️ Colheita e Processamento: colhendo uma ideia madura e criando rotas possíveis!  ⚙️

Com uma ideia mais madura, é hora de colher e processar todos os recursos necessários para implantar a API. 
Deste modo instalamos todas as dependências, modelamos a Schema Json e criamos os endpoints de manipulação de dados conforme descrito a seguir: 

#### Dependencias: 

- nodemon
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- swagger-autogen
- swagger-ui-express


#### Schema Json para /opportunities

```

{
    "titulo":"Oficina gratuita de baristas",
    "organizador":"Museu do Café de Santos",
    "modo":"presencial",
    "vagas": 12,
    "assunto":"barista",
    "descricao":"a oficina ensinará como extrair o melhor do café em casa. Para isso, compartilhará dicas de como escolher o tipo de torra e moagem ideal do grão, que variam para cada paladar.",
    "requisitos": "residentes em Santos, SP",
    "regiao": "Santos, SP",
    "acessibilidade": "false",
    "certificado": "sim",
    "prazoInscricao": "até 02/03/2022",
    "inscricao": "enviar um e-mail para cpc@museudocafe.org.br, para receberem a ficha de inscrição. Nela, serão requeridas informações como RG, CPF e data de nascimento."
    }

```

#### Rotas para /opportunities

| Verbo |                Rota                 |             Descrição da Rota                |    
| :---: | :---------------------------------: | :------------------------------------------: |
|  📖 GET  |      `/oportunities/search`      |       listar todas as oportunidades       | 
| 🔍 GET  |   `/opportunities/:id`    |     listar oportunidades pelo ID    | 
🔍 GET  |   `opportunities/category?baristas`    |     listar oportunidades pela categoria    | 
| ➕ POST   |      `/opportunities/new`      | cadastrar uma nova oportunidade                 | 
| ❌ DELET |    `/opportunities/delete`    | deletar uma oportunidade já cadastrada                | 
| ✏ PATCH | `/opportunities/:id` | atualizar uma oportunidade já cadastrada pelo seu ID| 

<br/>

#### Schema Json para /users
```

{
    "nome":"Ada Lovelace",
    "email":"ada@lovelace.com.br",
    "senha:"01010101010101",

    }

```


#### Rotas para /users

| Verbo |                Rota                 |             Descrição da Rota                |
| :---: | :---------------------------------: | :------------------------------------------: |
|  📖 GET  |      `/users`      |       rota principal       |
|  📖 GET  |      `/users/new`      |       cadastrar novo usuário      |
|  📖 GET  |      `/users/search`      |       listar todos os usuários cadastrados       | 
| 🔍 GET  |   `/users/search/:id`    |     buscar usuário pelo seu ID    | 
| 🔍 GET  |   `/users/login`    |     logar com usuário cadastrado    | 
| ➕ POST   |      `/users/new`      | cadastrar um novo usuário                | 
| ❌ DELET |    `/users/delete`    | deletar usuários pelo seu ID            | 
| ✏ PATCH | `/users/:id` | atualizar informação de usuário já cadastrado usando o ID| 

<img src="/public/rodape.png" width="150">



<div id='mvc'/> 

### 🔥 Torrefação e Empacotamento: padronizando e dando forma à safra de ideias 🔥

Com os aspectos da API definidos, temos a estrutura que molda o projeto e a autenticação que viabiliza a execução das ações.


#### Estrutura MVC
```
 📁 CAFE-FILTRADO
   |- 📁 public
   |- 📁 src
   |   |- 📁 controller
   |       |- 📑 opportunitiesController.js
   |       |- 📑 usersController.js
   |   |- 📁 database
   |       |- 📑 mongooseConnect.js
   |   |- 📁 models
   |       |- 📑 opportunitiesModel.js
   |       |- 📑 usersModel.js
   |    |- 📁 routes
   |       |- 📑 index.js
   |       |- 📑 opportunitiesRoutes.js   
   |       |- 📑 usersRoutes.js
   |    |- 📑 app.js
   |- 📁 swagger
   |   |- 📑 swagger_output.json
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js
```


<img src="/public/rodape.png" width="150">

<div id='inicializacao'/> 

## ☕️ Moagem e Preparo: saboreando uma API de qualidade ☕️

#### Para contribuir: 

- Fork do projeto;
- Criar nova branch: git checkout -b nome-da-nova-branch
- Commit + Pull Request com as contribuições 

#### Execução local: 

```
# Clonar o repositório
$ git clone https://github.com/lialaurindo/cafe-filtrado

# Instalar as dependências
$ npm i

#Executar o servidor
$ npm start

```
- Estabelecer varíaveis de ambiente conforme .env.example
- Utilizando a porta 3000 no server com endpoint principal `/opportunities`. Deste modo temos a
rota: `localhost:3000/opportunities`

<img src="/public/rodape.png" width="150">

<br/>

---
[🔝 Voltar ao início](#sobre)


Um Chai Latte com muito amor e inspiração:
- Minha irmã trabalha com café faz mais de 5 anos, desde então o café tornou-se mais que uma bebida, é como ela compartilha seu afeto e isso me inspira muito! 
Este projeto é dedicado à May, minha barista favorita que faz meu café favorito!


- São Paulo Coffee Festival 2022: o evento teve como proposta apresentar e estreitar laços da comunidade de cafés especiais com o consumidor final. Foi onde também ocorreu o Campeonato Brasileiro de Barista.
Foi nesse evento que pude ouvir falas importantes sobre a representatividade de muheres trabalhando com café.


<center>
<img src="/public/reprograma.png" width="250">
<h6>
    <br>
    <p align="center"> Este projeto faz parte do cronograma de finalização do bootcamp Todas em Tech promovido pela {reprograma}. A iniciativa tem como objetivo "reprogramar a forma como mulheres se percebem como contribuidoras no setor de tecnologia. E tem como missão inspirar, empoderar e ensinar mulheres, por meio de conhecimentos de computação e ferramentas de capacitação profissional."
 <p>
 
 [💜](https://reprograma.com.br/)
 
</h6>

| <img src="/public/profile.gif">|            `Oi, eu sou a Lia! Me interesso por Back-End e, ao que tudo indica, por café também! haha. Acredito que tecnologia é isso: criar possilidades, seja onde for!`                  |  
| :---: | :---------------------------------: |

<center>

![https://www.linkedin.com/in/lialaurindo/](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)![liamaralaurindo@gmail.com](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
)


