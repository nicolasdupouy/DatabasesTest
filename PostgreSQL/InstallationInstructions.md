
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

## Setup
 - createuser nicolas
 - createdb book


