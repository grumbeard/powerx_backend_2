CREATE TABLE User(
    userid BIGSERIAL NOT NULL PRIMARY KEY,
    login varchar(50) UNIQUE NOT NULL CHECK (char_length(login) >= 8),
    password varchar(50) NOT NULL CHECK (char_length(password) >= 15)
);

INSERT INTO User (login, password) VALUES ('koolkid', 'password');
INSERT INTO User (login, password) VALUES ('koolkoalaz', 'password');
INSERT INTO User (login, password) VALUES ('koolkiddo', 'password');
INSERT INTO User (login, password) VALUES ('koolkoalazard', 'password');