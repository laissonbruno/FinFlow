# Projeto FinFlow - Carteira de Controle Financeiro

O projeto **FinFlow** é uma aplicação de carteira de controle financeiro que utiliza a stack MERN (MongoDB, Express, React e Node.js). Ele tem o propósito de ajudar os usuários a gerenciar seu fluxo de caixa pessoal, permitindo o registro de transações financeiras e oferecendo autenticação de usuários para manter os dados seguros.

## Tecnologias Utilizadas

O projeto utiliza uma variedade de tecnologias tanto no backend quanto no frontend para fornecer uma experiência completa e segura aos usuários. Algumas das principais tecnologias empregadas incluem:

### Backend

- **Node.js:** Plataforma de execução de código JavaScript do lado do servidor.
- **Express:** Framework web para construir APIs e manipular requisições HTTP de forma simplificada.
- **MongoDB:** Banco de dados NoSQL usado para armazenar os dados do aplicativo.
- **Mongoose:** ODM (Object Data Modeling) para Node.js e MongoDB, simplificando a interação com o banco de dados.
- **JWT (JSON Web Tokens):** Método para autenticação e criação de tokens de acesso seguros.
- **Joi:** Biblioteca para validação de dados e definição de schemas no backend.
- **bcrypt:** Biblioteca para criptografia de senhas, garantindo a segurança das credenciais dos usuários.
- **dotenv:** Carrega variáveis de ambiente a partir de um arquivo `.env`.


### Frontend

- **ReactJS:** Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **Vite:** Ferramenta de construção rápida para aplicações web modernas em React.
- **Zod:** Biblioteca de validação de schemas utilizada para garantir a integridade dos dados no frontend.
- **Axios:** Cliente HTTP baseado em promessas utilizado para fazer requisições ao backend.
- **Cookies:** Para gerenciamento de cookies e persistência de informações.
- **Formik:** Biblioteca para lidar com formulários de maneira eficiente.
- **Tailwind CSS:** Framework de CSS utilizado para estilização e design responsivo.

## Funcionalidades Principais

O aplicativo **FinFlow** oferece diversas funcionalidades para auxiliar os usuários no controle financeiro:

- **Autenticação de Usuários:** Os usuários podem criar contas seguras e fazer login usando autenticação baseada em JWT.
- **Registro de Transações:** Os usuários podem adicionar suas transações financeiras.
- **Validação de Dados:** Tanto no backend quanto no frontend, as informações são validadas para garantir integridade e segurança.
- **Layout Responsivo:** Utilizando o Tailwind CSS, o aplicativo é responsivo, adaptando-se a diferentes tamanhos de tela.

