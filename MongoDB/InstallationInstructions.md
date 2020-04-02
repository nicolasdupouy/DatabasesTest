
# MongoDB installation instructions

## With Homebrew (Mac)

|                           |           Command                     |
| :------------------------ | :------------------------------------ |
| Installation command      | brew install mongodb-community        |
| Installed in              | /usr/local/Cellar/mongodb-community   |
| Configuration file        | /usr/local/etc/mongod.conf            |
| Launch server             | brew services start mongodb-community |
| Stop server               | brew services stop mongodb-community  |
| Data location             | /usr/local/var/mongodb                |

### List Homebrew services
brew services list


## Home installation (Mac)

|                           |           Command           |                                Exemple                                  |
| :------------------------ | :-------------------------- | :---------------------------------------------------------------------- |
| Installation command      | Untar in /opt or whatever   |                                                                         |
| Installed in              | /opt, /Applications or ...  | /Applications/NicolasPrograms/database/MongoDB/mongodb-osx-x86_64-4.0.2 |
| Configuration file        | None by default             |                                                                         |
| Launch server             | mongod                      |                                                                         |
| Stop server               | Control-C or kill process   |                                                                         |
| Data location             | /data/db                    |                                                                         |


## Debian

|                           |           Command            |
| :------------------------ | :--------------------------- |
| Installation command      | sudo apt-get install mongodb |
| Installed in              | /usr/bin/mongodb             |
| Configuration file        | /etc/mongodb.conf            |
| Launch server             | sudo systemctl start mongodb |
| Stop server               | sudo systemctl stop mongodb  |
| Data location             | /var/lib/mongodb             |


## Access MongoDB remotely
Set `bind_ip` or `bindIp` to 0.0.0.0 if you want to authorize access to every machine.
Or set a list of IP separated by commas if you want a more restricted access.
The default value is 127.0.0.1 to limit access to the local MongoDB host.

## Export data
### Export to file (recommended)
You cannot only give the database name, the collection name is mandatory.

    mongoexport --db <database_name> --collection <collection_name> --out <database.collection.json>
    mongoimport --db <database_name> --collection <collection_name> --file <database.collection.json>

### Binary export
    mongodump --db <database_name> --out <directory_backup>
    mongorestore --db <database_name> <directory_backup>/<database_name>
