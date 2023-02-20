            #language: pt

            Funcionalidade: Configurar produto e inserir no carrinho
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que eu acesse a página do produto desejado

            Cenario: Autenticação válida
            Quando eu selecionar a "cor", "tamanho" e "quantidade"
            E clicar em "comprar"
            Então o produto deve ser adiciinado ao carrinho

            Esquema do Cenario: Autenticações inválidas
            Quando eu inserir o <cor>, <tamanho> e <quantidade>
            E clicar em "comprar"
            Então deve exibir <mensagem>

            Exemplos:
            | cor    | tamanho | quantidade | mensagem                                                                |
            | "blue" | "--"    | "1"        | "Selecione uma das opções do produto antes de adicioná-lo ao carrinho." |
            | "--"   | "M"     | "1"        | "Selecione uma das opções do produto antes de adicioná-lo ao carrinho." |



