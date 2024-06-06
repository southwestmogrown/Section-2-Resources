-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS musician_instruments;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER REFERENCES bands(id) NOT NULL
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musician_instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  musician_id INTEGER REFERENCES musicians(id) NOT NULL,
  instrument_id INTEGER REFERENCES instruments(id) NOT NULL
);



INSERT INTO bands (name)
VALUES ("TOOL");

INSERT INTO bands (name)
VALUES ("Primus");

INSERT INTO musicians (first_name, last_name, band_id)
VALUES ("Danny", "Carey", 1);

INSERT INTO musicians (first_name, last_name, band_id)
VALUES ("Maynard", "Keenan", 1);

INSERT INTO musicians (first_name, last_name, band_id)
VALUES ("Les", "Claypool", 2);

INSERT INTO instruments (type)
VALUES ("Drums");

INSERT INTO musician_instruments (musician_id, instrument_id)
VALUES (1, 1);

DELETE FROM musician_instruments
WHERE id = 1;

DELETE FROM musicians
WHERE id = 1;