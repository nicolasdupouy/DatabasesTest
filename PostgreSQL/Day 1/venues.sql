CREATE TABLE venues (
	venue_id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	street_address TEXT,
	type CHAR(7) CHECK (type IN ('public', 'private')) DEFAULT 'public',
	postal_code CHAR(9),
	country_code CHAR(2),
	FOREIGN KEY (country_code, postal_code)
		REFERENCES cities (country_code, postal_code) MATCH FULL
);

INSERT INTO venues(name, postal_code, country_code)
VALUES('Crystal Ballroom', '97205', 'us');

INSERT INTO venues(name, postal_code, country_code)
VALUES('Voodoo Donuts', '97205', 'us')
RETURNING venue_id;

SELECT v.venue_id, v.name, c.name
FROM venues v
INNER JOIN cities c ON v.postal_code = c.postal_code
					AND v.country_code = c.country_code;

SELECT * FROM venues;