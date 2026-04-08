import type { ConfigTypes } from "azurajs/config";

// Configuracao principal da API.
const config: ConfigTypes = {
    // Ambiente de execucao atual.
    environment: "development",
    server: {
        // Porta onde a API vai escutar.
        port: 3000,
        // Desativado para manter o projeto simples em estudo.
        cluster: false,
        // Permite acesso pela rede local.
        ipHost: true
    },
    logging: {
        // Exibe logs no terminal.
        enabled: true,
        // Mostra mais detalhes de requisicoes e respostas.
        showDetails: true,
    },
    plugins: {
        cors: {
            // Libera chamadas de outros frontends/dominios.
            enabled: true,
            origins: ["*"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: "",
            credentials: false
        },
    },
};

export default config;