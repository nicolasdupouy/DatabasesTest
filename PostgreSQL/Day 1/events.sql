CREATE TABLE events (
	event_id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	starts TIMESTAMP,
	ends TIMESTAMP,
	venue_id INTEGER REFERENCES venues
);

INSERT INTO events(title, starts, ends, venue_id)
VALUES ('LARP Club', '2012-02-15 17:30', '2012-02-15 19:30', 2),
		('April Fools Day', '2012-04-01 00:00', '2012-04-01 23:59', null),
		('Christmas Day', '2012-12-25 00:00', '2012-12-25 23:59', null);
		
SELECT e.title, v.name
FROM events e 
FULL OUTER JOIN venues v ON e.venue_id = v.venue_id;
-- FULL OUTER JOIN/FULL JOIN is the union of LEFT JOIN and RIGHT JOIN

SELECT * FROM events WHERE event_id = 2;

-- For unique values we want a hash index.
CREATE INDEX events_title ON events USING hash(title);
SELECT * FROM events WHERE title = 'April Fools Day';

-- For less-than / greater-than / equals to matches we want a B-tree index.
CREATE INDEX events_start ON events USING btree(starts);
SELECT * FROM events WHERE starts >= '2012-04-01';