db.createUser(
    {
        user: "test12",
        pwd: "test12",
        roles: [ { role: "readWrite", db: "test" } ]
    }
);
