CREATE TABLE public.countries (
    country_code CHAR(2) PRIMARY KEY,
    country_name TEXT UNIQUE
);

--set search_path to public; -- default with IntelliJ: information_schema
--set search_path to information_schema;
show search_path;

INSERT INTO countries(country_code, country_name)
VALUES ('us', 'United States'), ('mx', 'Mexico'), ('au', 'Australia'),
		('gb', 'United Kingdom'), ('de', 'Germany'), ('ll', 'Loompaland');

INSERT INTO countries VALUES ('ca', 'Canada');

DELETE FROM countries
WHERE country_code = 'll';


SELECT * FROM countries;