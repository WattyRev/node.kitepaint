#!/bin/bash
source /home/ec2-user/.bash_profile

# stop existing node servers
echo “Stopping any existing node servers.”
pm2 stop all
