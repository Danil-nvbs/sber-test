# Использование официального образа Nginx с Docker Hub
FROM nginx:alpine

# Копирование статических HTML-файлов на сервер Nginx
COPY . /usr/share/nginx/html

# Экспонирование порта 80
EXPOSE 80