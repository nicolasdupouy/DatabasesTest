CREATE TABLE cities (
	name TEXT NOT null,
	postal_code VARCHAR(9) CHECK (postal_code <> ''),
	country_code CHAR(2) REFERENCES countries,
	PRIMARY KEY (country_code, postal_code)
);

INSERT INTO cities VALUES('Toronto', 'M4C1B5', 'ca');
INSERT INTO cities VALUES('Portland', '87200', 'us');

UPDATE cities
SET postal_code = '97205'
WHERE name = 'Portland';

SELECT * FROM cities;

SELECT cities.*, countries.country_name
FROM cities
INNER JOIN countries on cities.country_code = countries.country_code;
