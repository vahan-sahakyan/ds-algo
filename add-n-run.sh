#!/bin/bash

# Color Variables for Console Output
Gray='\033[0;30m'
Red='\033[1;31m'
Green='\033[1;32m'
Brown='\033[1;33m'
Blue='\033[1;34m'
Purple='\033[1;35m'
Cyan='\033[1;36m'
NC='\033[0m' # No Color


if [[ -z $1 ]]; then
    echo
    echo -e "${Blue}USAGE:"
    echo
    echo -e "${Red}$0 ${Gray}<${Blue}SCRIPT_NAME:${Cyan}string${Gray}> <${Blue}FILE_NAME${Purple}?${Gray}:${Cyan}string${Gray}>"
    echo
    
    exit 0
fi

SCRIPT_NAME=${1}
FILE_NAME=${2}
if [[ -z $2 ]]; then
    FILE_NAME=${SCRIPT_NAME}
fi

# sed command: 's/foo/bar/g' replacing all [foo -> bar] with regex
# replace [["LAST_SCRIPT": "nodemon ./src/LAST_SCRIPT.js"]] with -> ITSELF + \n[NEWLINE] + NEWSCRIPT
sed -i '' -e "s/\(\(    \"\).*\(\": \".*\/\).*.js\"$\)/\1,\n\2${SCRIPT_NAME}\3${FILE_NAME}.js\"/g" package.json


echo -e "${Green}[ ${0} ] -${Gray} Creating file:${Cyan}\t ${FILE_NAME}.js ${NC}"
sleep 0.3
touch ./src/${FILE_NAME}.js

echo -e "${Green}[ ${0} ] -${Gray} Opening file:${Cyan}\t ${FILE_NAME}.js ${NC}"
sleep 0.3
code ./src/${FILE_NAME}.js

echo -e "${Green}[ ${0} ] -${Gray} Running script:${Cyan}\t yarn ${SCRIPT_NAME} ${NC}"
sleep 0.3
yarn ${SCRIPT_NAME}
