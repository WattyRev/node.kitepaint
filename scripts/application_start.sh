#!/bin/bash
# give permission to the files inside /secure_docs directory
sudo chmod -R 777 /home/ubuntu/node.kitepaint

# navigate into current working directory
cd /home/ubuntu/node.kitepaint

# install node modules
npm ci

# start our node app in the background using pm2
sudo pm2 start ‘npm start.’
