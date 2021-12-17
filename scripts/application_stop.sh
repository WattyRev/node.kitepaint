#!/bin/bash
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads
# export HOME="/home/ec2-user/"

echo "setting path"
export PATH=$PATH:/home/ec2-user/.nvm/versions/node/v12.22.7/bin

# stop existing node servers
echo "Stopping any existing node servers."
pm2 stop all
