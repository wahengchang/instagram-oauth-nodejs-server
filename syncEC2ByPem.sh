# 2017/4/23
# To sync file from local to AWS EC2 by pem key
# Exclude '/node_modules'


# Check user name  *******************/
if [ -z ${SYNC_USER} ]; then
    echo "Input your EC2 name (default user: ec2-user):."
    read _userName
    if [ -z ${_userName} ]; then
        export SYNC_USER=ec2-user
    else
        export SYNC_USER=${_userName}
    fi
fi

# Check openHouse URL  *******************/
if [ -z ${SYNC_URL} ]; then
    echo "Input your EC2 Public Url:."
    read _url
    export SYNC_URL=$_url
fi


# Check remote directory name  *******************/
if [ -z ${SYNC_DIR_NAME} ]; then
    echo "Input your remote Directory name (Default: current directory):"
    read _url
    if [ -z ${_url} ]; then
        export SYNC_DIR_NAME=${PWD##*/}
    else
        export SYNC_DIR_NAME=$_url
    fi
fi

# Check user name  *******************/
echo "SYNC_URL:"  $SYNC_URL
echo "SYNC_DIR_NAME:"  $SYNC_DIR_NAME
rsync -rave "ssh -i ~/.ssh/ec2-key.pem"  -azP --exclude='/node_modules' ./ $SYNC_USER@$SYNC_URL:~/$SYNC_DIR_NAME
