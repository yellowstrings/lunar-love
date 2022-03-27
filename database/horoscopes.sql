CREATE DATABASE lunarlove;

// how to connect
\c lunarlove;

CREATE TABLE horoscopes (
  phase text NOT NULL,
  moonsign text NOT NULL,
  horoscope text NOT NULL
);

COPY horoscopes
FROM '/Users/anisahmajeed/fun-projects/lunar-love/horoscopes.csv'
DELIMITER ','
CSV HEADER;