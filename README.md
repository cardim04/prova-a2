# Projeto de Cadastro de Produtos e Categorias

Este é um projeto de gerenciamento de produtos e categorias, onde é possível cadastrar, editar e listar produtos, além de cadastrar e associar categorias aos produtos. O projeto utiliza o React para o front-end e o localStorage para persistir os dados no navegador.

## Funcionalidades

- **Cadastro de Categorias**: Permite criar novas categorias para os produtos.
- **Cadastro de Produtos**: Permite cadastrar produtos com nome, preço, categoria, estoque e descrição.
- **Listagem de Produtos**: Exibe os produtos cadastrados com a categoria associada.
- **Edição de Produtos**: Permite editar os dados de um produto existente.
- **Validação de Formulário**: Utiliza a biblioteca `react-hook-form` e `yup` para validação dos campos no front-end.

## Estrutura do Projeto

- **src/components**: Contém os componentes principais, como o formulário de produtos (`ProductForm`) e o formulário de categorias.
- **src/utils**: Funções utilitárias, como salvar e carregar dados do `localStorage`.

## Como Rodar o Projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/cardim04/prova-a2.git
cd prova-a2
