docker run -d --name gjg-mongo -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=test \
    -e MONGO_INITDB_ROOT_PASSWORD=prettystrong \
    -e MONGO_INITDB_DATABASE=test \
    -v /home/safa/Projects/GJ-Games/db-init:/docker-entrypoint-initdb.d \
    mongo

# useful commands
# sudo bash docker_init_mongodb.sh
# sudo docker exec -it gjg-mongo bash

# sudo docker stop fd4 && sudo docker container rm fd4