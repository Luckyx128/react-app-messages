# Etapa de build
FROM node:20-alpine AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de configuração
COPY package.json ./
COPY package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Fazer o build da aplicação React
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copiar os arquivos de build do React para o NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
