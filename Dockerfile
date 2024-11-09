# Usando uma imagem do Node.js para construir e rodar a aplicação React
FROM node:16

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências e instalá-las
COPY package*.json ./
RUN npm install

# Copiar o código da aplicação
COPY . .

# Construir a aplicação
RUN npm run build
RUN  npm install -g serve


# Expor a porta usada pela aplicação React
EXPOSE 3000

# Rodar a aplicação
CMD ["serve","-s", "build"]
