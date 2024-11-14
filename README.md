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
- **src/hooks**: Se houver, pode conter hooks personalizados para gerenciar o estado do aplicativo.
- **src/utils**: Funções utilitárias, como salvar e carregar dados do `localStorage`.

## Como Rodar o Projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**:

```bash
npm start
```

4. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Como Usar

1. **Cadastrar Categorias**: No formulário de categorias, insira o nome da categoria e clique em "Salvar". As categorias salvas ficam disponíveis no formulário de produtos.
2. **Cadastrar Produtos**: No formulário de produtos, insira os dados do produto, incluindo a categoria (que será carregada automaticamente das categorias cadastradas) e clique em "Salvar".
3. **Listagem de Produtos**: Todos os produtos cadastrados são exibidos em uma lista com o nome da categoria associada a cada um.
4. **Editar Produtos**: Ao clicar em um produto, você pode editar seus dados e salvar as alterações.

## Dependências

- **react**: Biblioteca principal para criar interfaces de usuário.
- **react-dom**: Conecta o React com o DOM do navegador.
- **react-hook-form**: Biblioteca para gerenciamento de formulários no React.
- **yup**: Biblioteca para validação de dados nos formulários.
- **react-router-dom** (se usado para navegação entre páginas): Biblioteca para navegação em páginas no React.

