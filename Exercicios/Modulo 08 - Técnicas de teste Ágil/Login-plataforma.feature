            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse a página de login

            Cenario: Autenticação válida
            Quando e digitar o usuário "rodrigo@EBAC.com"
            E a senha "teste#123"
            Então o sistema deve direcionar o aluno para a Dashboard

            Esquema do Cenario: Autenticações inválidas
            Quando eu inserir o <usuario> e <senha>
            Então deve exibir <mensagem>

            Exemplos:
            | usuario                | senha         | mensagem                     |
            | "rodrigo.123@Ebac.com" | "teste#123"   | “Usuário ou senha inválidos” |
            | "rodrigo@EBAC.com"     | "teste%%$456" | “Usuário ou senha inválidos” |




