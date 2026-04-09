import { AzuraServer } from "azurajs";
import { applyDecorators } from "azurajs/decorators";
import { ProductController } from "./controllers/ProductController";

// Cria a aplicacao HTTP do AzuraJS.
const app = new AzuraServer();

// Registra os decorators do controller para montar as rotas automaticamente.
applyDecorators(app, [ProductController]);

// Inicia o servidor e mostra a URL local quando estiver pronto.
await app.listen().then(() => {
    console.log("API pronta em http://localhost:3000")
})