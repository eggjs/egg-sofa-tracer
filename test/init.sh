#!/bin/bash

GEN=${PWD}/node_modules/.bin/egg-rpc-generator

# test dir

DIR=${PWD}/test/fixtures/apps
NAMES="rpc-client rpc-server"

for NAME in $NAMES
do
  echo "Create ${DIR}/${NAME} proxy"
  $GEN -b ${DIR}/${NAME} -p protobuf,jar2proxy
  echo "------------------------------------------------"
done

echo "All done"
