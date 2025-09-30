### Pokedex - Trilha JS Developer

Este é um projeto de uma Pokedex digital, uma enciclopédia interativa de Pokémons, que consome dados da PokéAPI para exibir informações detalhadas sobre os monstrinhos de bolso.

Contexto do Projeto
Este projeto foi desenvolvido com base em uma estrutura inicial fornecida como parte de um bootcamp ou trilha de desenvolvimento. A partir desse esqueleto pré-criado, foram implementadas diversas melhorias e novas funcionalidades para aprimorar a experiência do usuário, modernizar a interface e adicionar mais interatividade.

### ✨ Funcionalidades Implementadas
Listagem de Pokémons: Exibe a lista dos 151 Pokémons da primeira geração, carregados dinamicamente da PokéAPI.

Carregamento Progressivo: O botão "Carregar Mais" permite carregar novos Pokémons sem sobrecarregar a página inicial, simulando um scroll infinito.

Tema Escuro Moderno: A interface foi totalmente redesenhada com uma paleta de cores escura, mais atraente e confortável para visualização.

Design Responsivo: A Pokedex se adapta perfeitamente a diferentes tamanhos de tela, desde desktops até dispositivos móveis.

### 🖱️ Card de Status Detalhado (Hover): Ao passar o mouse sobre um Pokémon, um card informativo aparece sobreposto, exibindo suas estatísticas base (HP, Ataque, Defesa, etc.) através de barras de progresso visuais.

Tipagem Dinâmica: Cada Pokémon na lista possui um fundo e cores correspondentes ao seu tipo principal, facilitando a identificação visual.

### 🛠️ Ferramentas e Tecnologias Utilizadas
Este projeto foi construído utilizando tecnologias web modernas e fundamentais do front-end:

**HTML5**: Para a estrutura semântica do conteúdo.

CSS3: Para a estilização, utilizando recursos avançados como:

Grid Layout: Para organizar a galeria de Pokémons de forma responsiva.

Flexbox: Para alinhar elementos complexos dentro dos cards.

Transitions e Pseudo-classes (:hover): Para criar as animações e o efeito de exibição do card de status.

JavaScript (ES6+): Para toda a lógica de programação, incluindo:

Consumo de API: Utilização da Fetch API para fazer requisições assíncronas à PokéAPI.

Promises: Para lidar com as operações assíncronas de forma elegante.

Manipulação do DOM: Para inserir dinamicamente os Pokémons e gerenciar eventos na página.

PokéAPI: Como fonte de todos os dados sobre os Pokémons.

Normalize.css: Para garantir uma renderização consistente do estilo em diferentes navegadores.

Google Fonts: Para a utilização da fonte 'Roboto', melhorando a tipografia da aplicação.

🚀 Como Executar o Projeto
Como este é um projeto puramente front-end, você não precisa de um ambiente de desenvolvimento complexo para executá-lo.

Clone o repositório:

Bash

git clone https://seu-link-para-o-repositorio.git
Navegue até a pasta do projeto:

Bash

cd nome-da-pasta-do-projeto
Abra o arquivo index.html:

Simplesmente abra o arquivo index.html no seu navegador de preferência.

(Recomendado) Para uma melhor experiência, especialmente para evitar possíveis problemas de CORS com requisições locais, utilize um servidor web. Se você usa o Visual Studio Code, pode instalar a extensão Live Server e clicar em "Go Live" no canto inferior direito da sua janela.
