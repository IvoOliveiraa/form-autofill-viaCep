# 📌 Formulário de Endereço com Preenchimento Automático

Este repositório contém um formulário de endereço que preenche automaticamente os campos com base no **CEP** informado. Ele utiliza a API **ViaCEP** para buscar os dados e atualiza os campos do formulário dinamicamente.

## 🚀 Funcionalidades

- **Validação do CEP:** Permite apenas números no campo CEP.
- **Autopreenchimento:** Preenche os campos de endereço automaticamente ao digitar um CEP válido.
- **Mensagens de erro:** Informa quando o CEP é inválido ou quando ocorre um erro na busca.
- **Bloqueio e desbloqueio de campos:** Os campos de endereço só são editáveis após a busca bem-sucedida do CEP.

## 🛠 Tecnologias Utilizadas

- **HTML**
- **CSS**
- **Bootstrap**
- **JavaScript**
- **Fetch API** (para requisição de dados via **ViaCEP**)

## 📂 Como Usar

1. Clone este repositório:
   ```sh
   git clone https://github.com/IvoOliveiraa/form-cep-autofill-viaCep.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   cd seu-repositorio
   ```

3. Abra o arquivo `index.html` no navegador.

4. Digite um CEP válido para testar o preenchimento automático.

## 🔗 API Utilizada

- **[ViaCEP](https://viacep.com.br/)** - API gratuita para consulta de endereços no Brasil.

