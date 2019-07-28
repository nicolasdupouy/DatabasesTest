
# MongoDB installation instructions
## With Homebrew (Mac)

|                           |           Command           |
| :------------------------ | :-------------------------- |
| Installation command      | brew install mongodb        |
| Installed in              | /usr/local/Cellar/mongodb   |
| Launch server             | brew services start mongodb |
| Stop server               | brew services stop mongodb  |
| Data location             | /usr/local/var/mongodb      |

### List Homebrew services
brew services list


## Home installation
cd /Applications/NicolasPrograms/database/MongoDB/mongodb-osx-x86_64-4.0.2
mongod

|                           |           Command           |
| :------------------------ | :-------------------------- |
| Installation command      | Untar in /opt or whatever   |
| Installed in              | /opt, /Applications or ...  |
| Launch server             | mongod                      |
| Stop server               | Control-C or kill process   |
| Data location             | /data/db                    |
