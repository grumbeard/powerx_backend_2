DROP TABLE IF EXISTS AppUser;

CREATE TABLE AppUser(
    userid BIGSERIAL NOT NULL PRIMARY KEY,
    login varchar(50) UNIQUE NOT NULL CHECK (char_length(login) >= 8),
    password varchar(50) NOT NULL CHECK (char_length(password) >= 15),
    name varchar(50) NOT NULL CHECK (char_length(name) >= 2),
    email varchar(100) CONSTRAINT valid_email CHECK (email ~* '^([a-zA-Z0-9]|[._-])*@{1}(([a-zA-Z0-9]|[.-])*\.[a-zA-Z]*)+$'),
    fav_animal varchar(80),
    vaccinated boolean NOT NULL DEFAULT FALSE
);

INSERT INTO AppUser (login, password, name, email, fav_animal, vaccinated) VALUES ('koolkidz', 'password1234567', 'Molly', 'kool.kid.z@email.com.sg', 'Koalas', FALSE);
INSERT INTO AppUser (login, password, name, fav_animal) VALUES ('koolkoalaz', 'password1234567', 'Polly', 'Koalas');
INSERT INTO AppUser (login, password, name, email, vaccinated) VALUES ('koolkiddo', 'password1234567', 'Jolly', 'jolly_koolkidd-o@e.m.a.i.l.com.xyz', TRUE);
INSERT INTO AppUser (login, password, name, vaccinated) VALUES ('koolkoalazard', 'password1234567', 'Olly', TRUE);