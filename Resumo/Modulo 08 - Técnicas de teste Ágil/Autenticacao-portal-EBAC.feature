            #language: pt

            Funcionalidade: Autenticacao portal EBAC
            Como aluno do portal EBAC
            Quero me autenticar
            Para que eu possa visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de login da EBAC

            Cenario: Autenticação válida
            Quando eu inserir o usuário "joão_silva@ebac.com"
            E a senha "123@teste"
            Então deve direcionar para o Dashboard do aluno

            Esquema do Cenario: validar autenticações inválidas:
            Quando eu inserir o <usuário> e <senha>
            Então deve exibir <mensagem>

            Exemplos:
            | usuário                 | senha          | mensagem              |
            | "joãosilva123@ebac.com" | "123@teste"    | "Usuário inexistente" |
            | "joão_silva@ebac.com"   | "123_01@teste" | "Senha inválida"      |



