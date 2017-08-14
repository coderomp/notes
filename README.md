# notes
Nodejs notes application for adding notes and searching notes. Notes are timestamped for posterity.

Inspired by https://github.com/follower46/ashaw-notes

1) Clone / Download
2) Create relational database "coderomp" EG: In MySQL, PostgreSQL, MariaDB, MsSQL (IE: whatever Sequelize supports.)
3) Modify `notes/config/config.json` to connect to database, properly updating the auth and database dialect configs.
4) Run `npm install` which will install all dependencies from package.json.
4) Start the notes application by typing `forever start server.js`
5) Open a browser and go to http://localhost:8080/
