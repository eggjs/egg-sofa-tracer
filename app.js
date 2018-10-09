'use strict';

const logSofaRpcClient = require('./lib/rpc_client');
const logSofaRpcServer = require('./lib/rpc_server');

module.exports = app => {
  logSofaRpcClient(app);
  logSofaRpcServer(app);
};
