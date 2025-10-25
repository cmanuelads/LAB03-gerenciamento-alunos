# Usa a imagem oficial do Nginx como base
FROM nginx:alpine

# Copia os arquivos da sua aplicação (HTML, JS, CSS) para o diretório de conteúdo do Nginx
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# O Nginx escuta por padrão na porta 80.
EXPOSE 80

# O comando padrão do Nginx inicia o servidor web.
CMD ["nginx", "-g", "daemon off;"]