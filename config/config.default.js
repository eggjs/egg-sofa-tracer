'use strict';

/**
 * egg-sofa-tracer default config
 * @member Config#sofaTracer
 * @property {String} SOME_KEY - some description
 */
exports.sofaTracer = {

};

exports.opentracing = {
  carrier: {
    RPC: require('../lib/carrier/rpc_carrier'),
  },
};
