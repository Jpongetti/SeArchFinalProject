# SeArchFinalProject
Software Architecture final project Fall 2016

## Dev Setup
Devlopment requires node.js to be installed on the user's machine.  The server uses a config.json file for things such as api keys and other personal settings.

Assuming no prior setup.
```
git clone https://github.com/EliCDavis/SeArchFinalProject.git
cd SeArchFinalProject
npm install gulp -g
npm install
gulp build
```

Create a file named 'config.json' and fill it out similar to the 'config.json.example' while inserting your keys.  After you've filled out your file then run: 
```
npm start
```

A local server should be running at the end of this proccess serving up the client.
