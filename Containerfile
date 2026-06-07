FROM nginxinc/nginx-unprivileged:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY manifest.json /usr/share/nginx/html/manifest.json
COPY sw.js /usr/share/nginx/html/sw.js
COPY icons/ /usr/share/nginx/html/icons/
EXPOSE 8080
