# Teste Front-end - Amil

## Instruções para rodar o teste

### instalação 
1. Você precisará ter o **Node.Js**  instalado em sua máquina, você pode baixar e instalar [neste link do site oficial](https://nodejs.org/en/)

	**Permissões**  
	Antes de comecar as instalações, é bom saber. Em sistemas baseados 	em Unix, pode ocorrer erros por falta de 	permissão de escrita, para isso, rode o comando `sudo` ex:

	```sh
	$ sudo npm install --global gulp-cli
	```
2. Para o _task manager_ você precisará utilizar o [Gulp](http://gulpjs.com/) e com uma serie de _plugins_;

	
	**Instalação do gulp**   
	No terminal rode o comando abaixo:
 
	```sh
	$ npm install --global gulp-cli
	```
	
3. Para o _css preprocessor_ você precisará utilizar o [sass](http://sass-lang.com/)  
**Instalação do sass**   
Existem diversos modos de instalação do sass, cheque o site oficial (link acima), mas você consegue instalar via NPM. 
No terminal rode o comando abaixo:
 
	```sh
	$ npm install node-sass
	```
4. Você precisa fazer um fork do projeto  

	```sh
	https://github.com/ubirajarapelli/frontend-test.git
	```
5. **Clone o projeto**  
	No terminal rode o comando abaixo, no diretório desejado
	 
	```sh
	$ git clone https://github.com/ubirajarapelli/frontend-test.git
	```

6. **Acesse o diretório do projeto**  
	No terminal rode o comando abaixo
 
	```sh
	$ cd frontend-test
	```

7. **Instale as dependências**  
	No terminal rode o comando abaixo
 
	```sh
	$ npm install
	```

#### Rodando o projeto

1. **Realizando o Build**  
	No terminal rode o comando abaixo
 
	```sh
	$ gulp bulid
	```
	Rode esse comando toda vez que você adicionar novos arquivos no diretório `src` e em seus subdiretórios.
2. **Rodando o projeto (Dev)**

	```sh
	$ gulp
	```
	
**That's all folks**

## Desafio n° 1
> 1.- Criar o HTML/CSS de acordo com o layout base fornecido no diretório [layout](./layout).

Seguindo as instruções do arquivo [primeiro-desafio.md](./primeiro-desafio.md). Criei o diretório `src` onde se encontra o arquivo [src/index.html](./src/index.html), e as folhas de estilo em `scss` que se encontram no diretório [src/scss](./src/scss). 

Para a produção os arquivos estão no diretório `build`, em [build/index.html](./build/index.html), a folha de estilio [build/css/style.min.css](./build/css/style.min.css), minificada e renomeada e também cópias das imagens, tudo isso gerado através do _task manager_ `gulp`.

### Observações

O desenvolvimento foi realizado sem a utilizacão de um `reset.css`, pois acredito que é um diferencial na realização do teste, principalmente para cross-browser.

**Navegação**  
Criei uma navegação no **Header Menu**:	

- O item "Lorem ipsum" redireciona para o `index.html`;
- O item "Consectetur" redireciona para o `form.html`.

## Desafio n° 2
>1.- Criar um formulário com 3 campos para cadastro de contatos   
2.- Mostrar os contatos cadastrados em uma lista na mesma página  

Seguindo as instruções do arquivo [segundo-desafio.md](./segundo-desafio.md). Criei o arquivo `src/form.html`, reaproveitei o layout do **Desafio nº 1** para isso, criei uma folha de estilo (scss) em `src/scss/_form.scss` para a estilização e também o arquivo `src/js/form.js` onde estão as funcionalidades de validação do formulário.

Como no **Desafio nº 1**  a utilização do `gulp`para minificar o arquivo `js` e enviar os arquivos para o diretório `build`.

### Observações

O desenvolvimento foi realizado sem a utilização do `JQuery` ou outro framework ou plugin, pois acredito que é um diferencial na realização do teste, principalmente para o cross-browser.

**Navegação**  
Criei uma navegação no **Header Menu**:	

- O item "Lorem ipsum" redireciona para o `index.html`;
- O item "Consectetur" redireciona para o `form.html`.


*Muito Obrigado!*
