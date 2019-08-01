
-- Select all the tables we created (and only those) from pg_class.
SELECT current_user, relowner, * FROM pg_class 
INNER JOIN pg_user ON pg_class.relowner = pg_user.usesysid
WHERE pg_class.relkind = 'r' -- r = ordinary table
  AND pg_user.usename = current_user
  AND relnamespace = 2200;

-- Finds the country name of the LARP Club event.
SELECT e.title, c.country_name
from EVENTS e
INNER JOIN venues v ON e.venue_id = v.venue_id
INNER JOIN countries c ON v.country_code = c.country_code
WHERE e.title = 'LARP Club';

-- Alter the venues table to contain a boolean column called active, with the defaults value of true
ALTER TABLE venues
	ADD COLUMN active BOOLEAN DEFAULT true;
	
SELECT * FROM venues;