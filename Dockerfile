# Alpine quer dizer que é uma versão minima do linux
FROM node:alpine

WORKDIR /root/api/docker-api

# Instalando api
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Só pode haver um CMD por Dockerfile, é o comando que finaliza a inicialização do container
# Não precisa executar CMD quando houver "command" no docker-compose.yml
# CMD ["npm", "start"]