<h1>Servidor de páginas estatricas com express</h1>

<h1>Sobre:</h1>
Com o express com poucas linha de codigo criamos um servidor de paginas estaticas html.
o exepress sempre procura a pagina "index.html" quando o path se junta ao diretorio.
Caso não encontre ele retorna pagina não encontrada.

Os metodos GET PUT e DELETE estão sendo executados no html por um script usando um "fetch". Você precisa passar o dominio e o metodo dentro de um objeto e ele então retornara uma resposta que vai ser o header da pagina html e então o body da pagina.

Tecnologias: Java Script, Node e Express

<h1>Como rodar a aplicação?!</h1>
rode o comando "node app.js" na pasta onde o codigo estiver salvo.