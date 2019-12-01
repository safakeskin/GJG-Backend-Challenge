docker run -d --name gjg-mongo -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=test \
    -e MONGO_INITDB_ROOT_PASSWORD=prettystrong \
    -e MONGO_INITDB_DATABASE=test \
    mongo