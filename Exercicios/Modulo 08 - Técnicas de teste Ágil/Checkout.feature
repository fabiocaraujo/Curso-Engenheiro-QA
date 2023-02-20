            #language: pt

            Funcionalidade: Checkout
            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que eu acesse a página de checkout

            Esquema do Cenario: Autenticações
            Quando eu inserir o <nome> <sobrenome> <nome empresa> <pais> <endereco> <cidade> <cep> <telefone> <end. e-mail>
            Então deve exibir <mensagem>

            Exemplos:
            | nome     | sobrenome | nome empresa    | pais     | endereco             | cidade      | cep         | telefone          | end. e-mail       | mensagem                                          |
            | "Amauri" | "Ribeiro" | "Amauri vendas" | "Brasil" | "Rua Adamantina, 46" | "São Paulo" | "87659-987" | "(11) 98768-2654" | "amauri@ebac.com" | "Cliente cadastrado com sucesso"                  |
            | "Amauri" | "Ribeiro" | "Amauri vendas" | "Brasil" | "Rua Adamantina, 46" | "São Paulo" | "87659-987" | "(11) 98768-2654" | "amauriebac.com"  | "E-mail inválido"                                 |
            | "Amauri" | --        | "Amauri vendas" | "Brasil" | "Rua Adamantina, 46" | --          | "87659-987" | "(11) 98768-2654" | "amauri@ebac.com" | "Por favor preencha todos os campos obrigatórios" |







