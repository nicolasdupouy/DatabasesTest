
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
 - createuser nicolas
 - createdb book


