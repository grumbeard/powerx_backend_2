DROP TABLE IF EXISTS AppUser;

CREATE TABLE AppUser(
    userid BIGSERIAL NOT NULL PRIMARY KEY,
    login varchar(50) UNIQUE NOT NULL CHECK (char_length(login) >= 8),
    password varchar(50) NOT NULL CHECK (char_length(password) >= 15)
);

INSERT INTO AppUser (login, password) VALUES ('koolkidz', 'password1234567');
INSERT INTO AppUser (login, password) VALUES ('koolkoalaz', 'password1234567');
INSERT INTO AppUser (login, password) VALUES ('koolkiddo', 'password1234567');
INSERT INTO AppUser (login, password) VALUES ('koolkoalazard', 'password1234567');