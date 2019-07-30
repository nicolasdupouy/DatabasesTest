
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

## Setup
 - createuser nicolas
 - createdb book


