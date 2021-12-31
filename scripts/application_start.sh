#!/bin/bash
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads
# export HOME="/home/ec2-user/"

echo "setting path"
export PATH=$PATH:/home/ec2-user/.nvm/versions/node/v12.22.7/bin

echo "giving permission to the files inside /secure_docs directory"
sudo chmod -R 777 /home/ec2-user/node.kitepaint

echo "navigating into current working directory"
cd /home/ec2-user/node.kitepaint

echo "installing node modules"
npm ci

echo "starting node app in the background using pm2"
pm2 start src/index.js
