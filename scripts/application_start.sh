#!/bin/bash
# give permission to the files inside /secure_docs directory
sudo chmod -R 777 /home/ec2-user/node.kitepaint

# navigate into current working directory
cd /home/ec2-user/node.kitepaint

# install node modules
npm ci

# start our node app in the background using pm2
pm2 start ‘npm start.’
