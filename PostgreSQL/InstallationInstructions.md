
# PostgreSQL installation instructions
## With Homebrew (Mac)

|                           |                  Command                |                                            |
| :------------------------ | :-------------------------------------- | :----------------------------------------- |
| Installation command      | brew install postgresql                 |                                            |
| Installed in              | /usr/local/Cellar/postgresql            |                                            |
| Configuration file        | /usr/local/var/postgres/postgresql.conf |                                            |
| Launch server             | brew services start postgresql          | or pg_ctl -D /usr/local/var/postgres start |
| Stop server               | brew services stop postgresql           |                                            |
| Data location             | /usr/local/var/postgres                 |                                            |

### List Homebrew services
brew services list

## Debian

|                           |                  Command                                |
| :------------------------ | :------------------------------------------------------ |
| Installation command      | sudo apt-get install postgresql-11 postgresql-client-11 |
| Installed in              | /usr/lib/postgresql/11/bin/postgres                     |
| Configuration file        | /etc/postgresql/11/main/postgresql.conf                 |
| Launch server             | sudo systemctl start postgresql                         |
| Stop server               | sudo systemctl stop postgresql                          |
| Data location             | /var/lib/postgres                                       |

## Access PostgreSQL remotely
In *postgersql.conf* add:

    listen_addresses = '*'

In *pg_hba.conf* add:

    host    all             all             0.0.0.0/0            md5

Replace *md5* by *trust* if you don't want to create a dedicated user (unsecure).

## Setup
Need `sudo -u postgres` before the command if postgres is the owner of the files (Data location)
### Initial connection
    psql -h 127.0.0.1 -p 5432 -U postgres
or 

    psql postgres
    
### Create user
Change password for postgres role 

    postgres=# \password postgres
    
Create a new non superuser (role)

    postgres=# CREATE ROLE nicolas WITH LOGIN PASSWORD 'XXXXXX';
    postgres=# ALTER ROLE nicolas CREATEDB;
    postgres=# \du
    
### Reconnect
    psql postgres -U nicolas

### Create database
    postgres=> CREATE DATABASE databasetest;
    postgres=> \l
    postgres=> GRANT ALL PRIVILEGES ON DATABASE databasetest TO nicolas;
    postgres=> \list
    postgres=> \connect databasetest



### Second way
Use the createuser and createdb binaries

    createdb book

## Export data
    pg_dump -U username databasename > databasename.pg.sql
    psql -U username databasename < databasename.pg.sql