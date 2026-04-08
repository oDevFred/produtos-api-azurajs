# Products API

API simples de exemplo construída com [AzuraJS](https://azura.js.org/) e TypeScript. O projeto expõe um CRUD de produtos com dados mantidos em memória, então qualquer alteração é perdida ao reiniciar o servidor.

## Requisitos

- Node.js instalado
- npm instalado

## Instalação

```bash
npm install
```

## Como executar

Inicie o servidor em modo de desenvolvimento com:

```bash
npm run dev
```

Quando a aplicação subir, ela ficará disponível em:

```bash
http://localhost:3000
```

## Rotas disponíveis

Todas as rotas de produtos começam com `/api/products`.

### `GET /api/products`
Lista todos os produtos cadastrados.

Resposta exemplo:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Notebook Pro X",
      "price": 4999.99,
      "stock": 15
    }
  ]
}
```

### `GET /api/products/:id`
Busca um produto pelo ID.

### `POST /api/products`
Cria um novo produto.

Exemplo de corpo da requisição:

```json
{
  "name": "Teclado Mecânico",
  "price": 349.9,
  "stock": 20
}
```

### `PUT /api/products/:id`
Atualiza parcialmente um produto existente.

### `DELETE /api/products/:id`
Remove um produto pelo ID.

## Estrutura do projeto

```text
products-api/
├── azura.config.ts
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    └── controllers/
        └── ProductController.ts
```

## Observações

- Os dados ficam apenas em memória.
- O controller já usa decorators do AzuraJS para registrar as rotas automaticamente.
- Este projeto é um exemplo base para evoluir depois para banco de dados e validação de entrada.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para os detalhes.