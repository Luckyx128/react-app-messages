const path = require('path');

module.exports = {
    mode: 'production',
    // Ponto de entrada do seu aplicativo
    entry: './src/index.js',
    // Configuração de saída
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    // Configuração do módulo
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Arquivos a serem processados
                exclude: /node_modules/, // Exclui a pasta node_modules
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Alvo: todos os arquivos que terminam com .css
                use: ['style-loader', 'css-loader'], // Loaders a serem aplicados
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
            },
            // Outras regras, se houver
        ],
    },
    // Resolve extensões para importar módulos sem precisar especificar a extensão
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // Configurações adicionais, se necessárias
};