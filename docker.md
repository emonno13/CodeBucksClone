# https://mherman.org/blog/dockerizing-a-react-app/

docker build -t sample:dev .
docker-compose up -d --build
docker-compose stop