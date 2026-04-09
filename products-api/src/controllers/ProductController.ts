import { AzuraResponse } from "azurajs";
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "azurajs/decorators";

// Base de dados em memoria para fins de estudo.
const products = [
    { id: 1, name: "Notebook Pro X", price: 4999.99, stock: 15 },
    { id: 2, name: "Mouse Gamer RGB", price: 199.90, stock: 50 },
];

// Prefixo comum de todas as rotas deste controller.
@Controller("/api/products")
export class ProductController {

    // GET /api/products -> retorna todos os produtos.
    @Get()
    getAll(@Res() res: AzuraResponse) {
        res.json({ success: true, data: products })
    }

    // GET /api/products/:id -> busca um produto pelo ID da URL.
    @Get("/:id")
    getById(@Param("id") id: string, @Res() res: AzuraResponse) {
        // Converte o id da rota para numero e procura no array.
        const product = products.find((p) => p.id === Number(id));
        if (!product) {
            return res.status(404).json({ success: false, error: "Produto não encontrado" });
        }
        res.json({ success: true, data: product });
    }

    // POST /api/products -> cria um novo produto com os dados enviados no body.
    @Post()
    create(@Body() body: any, @Res() res: AzuraResponse) {
        // Gera um id simples e mescla com os campos recebidos.
        const newProduct = { id: products.length + 1, ...body };
        products.push(newProduct);
        res.status(201).json({ success: true, data: newProduct });
    }

    // PUT /api/products/:id -> atualiza campos de um produto existente.
    @Put("/:id")
    update(@Param("id") id: string, @Body() body: any, @Res() res: AzuraResponse) {
        const index = products.findIndex((p) => p.id === Number(id));
        if (index === -1) {
            return res.status(404).json({ success: false, error: "Produto não encontrado"})
        }
        // Mantem os dados atuais e sobrescreve apenas o que veio no body.
        products[index] = { ...products[index], ...body };
        res.json({ success: true, data: products[index] });
    }

    // DELETE /api/products/:id -> remove um produto pelo ID.
    @Delete("/:id")
    remove(@Param("id") id: string, @Res() res: AzuraResponse) {
        const index = products.findIndex((p) => p.id === Number(id));
        if (index === -1) {
            return res.status(404).json({ success: false, error: "Produto não encontrado"});
        }
        products.splice(index, 1);
        res.json({ success: true, message: "Produto removido com sucesso"});
    }
}