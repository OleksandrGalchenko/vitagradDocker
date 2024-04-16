(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"force-ssl-common":{"force_ssl_common.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/force-ssl-common/force_ssl_common.js                                                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.export({
  isLocalConnection: () => isLocalConnection,
  isSslConnection: () => isSslConnection
});
let forwarded;
module.watch(require("forwarded-http"), {
  default(v) {
    forwarded = v;
  }

}, 0);

// Determine if the connection is only over localhost. Both we
// received it on localhost, and all proxies involved received on
// localhost (supports "forwarded" and "x-forwarded-for").
const isLocalConnection = req => {
  const localhostRegexp = /^\s*(.*127\.0\.0\.1|\[?::1\]?)\s*$/;
  const request = Object.create(req);
  request.connection = Object.assign({}, req.connection, {
    remoteAddress: req.connection.remoteAddress || req.socket.remoteAddress
  });
  const forwardedParams = forwarded(request);
  let isLocal = true;
  Object.keys(forwardedParams.for).forEach(forKey => {
    if (!localhostRegexp.test(forKey)) {
      isLocal = false;
    }
  });
  return isLocal;
}; // Determine if the connection was over SSL at any point. Either we
// received it as SSL, or a proxy did and translated it for us.


const isSslConnection = req => {
  const forwardedParams = forwarded(req);
  return req.connection.pair || forwardedParams.proto && forwardedParams.proto.indexOf('https') !== -1;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"forwarded-http":{"package.json":function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// ../../.1.1.0.jltsyt.c4h2++os+web.browser+web.cordova/npm/node_modules/forwarded-http/package.json    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
exports.name = "forwarded-http";
exports.version = "0.3.0";
exports.main = "lib/index.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// node_modules/meteor/force-ssl-common/node_modules/forwarded-http/lib/index.js                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
'use strict'

var debug = require('debug')('forwarded-http')
var filter = require('ip-filter')
var http = require('http')
var IP = require('ip')
var rfc7239 = require('./rfc7239')
var schemas = require('./schemas')
var util = require('util')
var ipRegExp = require('ip-port-regex')

module.exports = function (req, options) {
  var opts = util._extend({
    filter: '*',
    allowPrivate: true
  }, options)

  if (!req || !(req instanceof http.IncomingMessage)) {
    throw new TypeError('a request of type: "http.IncomingMessage" is required')
  }

  // start with default values
  var forwarded = {
    ips: [req.connection.remoteAddress],
    port: req.connection.remotePort,
    ports: [req.connection.remotePort],
    proto: req.connection.encrypted ? 'https' : 'http',
    host: req.headers && req.headers.host ? req.headers.host : undefined
  }

  // construct "for" object
  forwarded.for = {}

  // set default value
  forwarded.for[req.connection.remoteAddress] = req.connection.remotePort

  // exit early
  if (Object.keys(req.headers).length === 0) {
    return forwarded
  }

  // loop through schemas
  schemas.forEach(function (schema) {
    // detect host
    if (schema.host && req.headers[schema.host]) {
      debug('found %s header', schema.host)

      forwarded.host = req.headers[schema.host]
    }

    // detect protocol
    if (schema.proto) {
      var proto = false

      if (typeof schema.proto === 'function') {
        proto = schema.proto(req)
      } else {
        if (req.headers[schema.proto]) {
          debug('found %s header', schema.proto)

          proto = req.headers[schema.proto]
        }
      }

      // overwrite
      if (proto) {
        forwarded.proto = proto
      }
    }

    // detect ports
    if (schema.port && req.headers[schema.port]) {
      debug('found %s header', schema.port)

      var port = req.headers[schema.port]

      // attach to global list
      forwarded.ports.push(port)

      // TODO: how to determine priority / final value?
      forwarded.port = port
    }

    // detect IPs
    if (schema.ip && req.headers[schema.ip]) {
      debug('found %s header', schema.ip)

      var ips = req.headers[schema.ip].split(/ *, */)

      // attach to global list
      Array.prototype.push.apply(forwarded.ips, ips)

      // construct "for"
      ips.forEach(function (ip) {
        forwarded.for[ip] = forwarded.port
      })
    }
  })

  // append missing ips to forward.for
  var diff = forwarded.ips.filter(function (ip) {
    return forwarded.for[ip] !== undefined
  })

  diff.forEach(function (ip) {
    forwarded.for[ip] = forwarded.port
  })

  // process RFC7239 and use to overwrite
  if (req.headers.forwarded) {
    var rfc = rfc7239(req.headers.forwarded)
    if (rfc.for) {
      rfc.for.forEach(function (node) {
        var parts = ipRegExp.parts(node)

        // console.log(node, parts)

        var ip = parts.ip === null ? node : parts.ip
        var port = parts.port === null ? forwarded.port : parts.port

        forwarded.ips.push(ip)
        forwarded.ports.push(port)
        forwarded.for[ip] = port
      })
    }

    if (rfc.proto) {
      forwarded.proto = rfc.proto
    }

    if (rfc.host) {
      forwarded.host = rfc.host
    }

    if (rfc.by) {
      forwarded.by = rfc.by
    }
  }

  // clear out duplicate port entries
  var uniqueFilter = function (value, index, self) {
    return self.indexOf(value) === index
  }

  forwarded.ips = forwarded.ips.filter(uniqueFilter)
  forwarded.ports = forwarded.ports.filter(uniqueFilter)

  forwarded.ips = forwarded.ips.filter(function (ip) {
    // use IP filters
    var filtered = null

    try {
      filtered = filter(ip, opts.filter)
    } catch (e) {
      debug('[%s] %s', ip, e.message)
    }

    // remove private ips
    return (filtered !== null && (opts.allowPrivate === true ? true : IP.isPublic(ip)))
  })

  Object.keys(forwarded.for).forEach(function (ip) {
    // use IP filters
    var filtered = filter(ip, opts.filter, true)

    // remove private ips
    if (filtered === null || (opts.allowPrivate === true ? false : IP.isPrivate(ip))) {
      delete forwarded.for[ip]
    }
  })

  return forwarded
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/force-ssl-common/force_ssl_common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['force-ssl-common'] = exports;

})();

//# sourceURL=meteor://💻app/packages/force-ssl-common.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZm9yY2Utc3NsLWNvbW1vbi9mb3JjZV9zc2xfY29tbW9uLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsImlzTG9jYWxDb25uZWN0aW9uIiwiaXNTc2xDb25uZWN0aW9uIiwiZm9yd2FyZGVkIiwid2F0Y2giLCJyZXF1aXJlIiwiZGVmYXVsdCIsInYiLCJyZXEiLCJsb2NhbGhvc3RSZWdleHAiLCJyZXF1ZXN0IiwiT2JqZWN0IiwiY3JlYXRlIiwiY29ubmVjdGlvbiIsImFzc2lnbiIsInJlbW90ZUFkZHJlc3MiLCJzb2NrZXQiLCJmb3J3YXJkZWRQYXJhbXMiLCJpc0xvY2FsIiwia2V5cyIsImZvciIsImZvckVhY2giLCJmb3JLZXkiLCJ0ZXN0IiwicGFpciIsInByb3RvIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPQyxNQUFQLENBQWM7QUFBQ0MscUJBQWtCLE1BQUlBLGlCQUF2QjtBQUF5Q0MsbUJBQWdCLE1BQUlBO0FBQTdELENBQWQ7QUFBNkYsSUFBSUMsU0FBSjtBQUFjSixPQUFPSyxLQUFQLENBQWFDLFFBQVEsZ0JBQVIsQ0FBYixFQUF1QztBQUFDQyxVQUFRQyxDQUFSLEVBQVU7QUFBQ0osZ0JBQVVJLENBQVY7QUFBWTs7QUFBeEIsQ0FBdkMsRUFBaUUsQ0FBakU7O0FBRTNHO0FBQ0E7QUFDQTtBQUNBLE1BQU1OLG9CQUFxQk8sR0FBRCxJQUFTO0FBQ2pDLFFBQU1DLGtCQUFrQixvQ0FBeEI7QUFDQSxRQUFNQyxVQUFVQyxPQUFPQyxNQUFQLENBQWNKLEdBQWQsQ0FBaEI7QUFDQUUsVUFBUUcsVUFBUixHQUFxQkYsT0FBT0csTUFBUCxDQUNuQixFQURtQixFQUVuQk4sSUFBSUssVUFGZSxFQUduQjtBQUFFRSxtQkFBZVAsSUFBSUssVUFBSixDQUFlRSxhQUFmLElBQWdDUCxJQUFJUSxNQUFKLENBQVdEO0FBQTVELEdBSG1CLENBQXJCO0FBS0EsUUFBTUUsa0JBQWtCZCxVQUFVTyxPQUFWLENBQXhCO0FBQ0EsTUFBSVEsVUFBVSxJQUFkO0FBQ0FQLFNBQU9RLElBQVAsQ0FBWUYsZ0JBQWdCRyxHQUE1QixFQUFpQ0MsT0FBakMsQ0FBMENDLE1BQUQsSUFBWTtBQUNuRCxRQUFJLENBQUNiLGdCQUFnQmMsSUFBaEIsQ0FBcUJELE1BQXJCLENBQUwsRUFBbUM7QUFDakNKLGdCQUFVLEtBQVY7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUFPQSxPQUFQO0FBQ0QsQ0FoQkQsQyxDQWtCQTtBQUNBOzs7QUFDQSxNQUFNaEIsa0JBQW1CTSxHQUFELElBQVM7QUFDL0IsUUFBTVMsa0JBQWtCZCxVQUFVSyxHQUFWLENBQXhCO0FBQ0EsU0FBT0EsSUFBSUssVUFBSixDQUFlVyxJQUFmLElBQ0FQLGdCQUFnQlEsS0FBaEIsSUFBeUJSLGdCQUFnQlEsS0FBaEIsQ0FBc0JDLE9BQXRCLENBQThCLE9BQTlCLE1BQTJDLENBQUMsQ0FENUU7QUFFRCxDQUpELEMiLCJmaWxlIjoiL3BhY2thZ2VzL2ZvcmNlLXNzbC1jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9yd2FyZGVkIGZyb20gJ2ZvcndhcmRlZC1odHRwJztcblxuLy8gRGV0ZXJtaW5lIGlmIHRoZSBjb25uZWN0aW9uIGlzIG9ubHkgb3ZlciBsb2NhbGhvc3QuIEJvdGggd2Vcbi8vIHJlY2VpdmVkIGl0IG9uIGxvY2FsaG9zdCwgYW5kIGFsbCBwcm94aWVzIGludm9sdmVkIHJlY2VpdmVkIG9uXG4vLyBsb2NhbGhvc3QgKHN1cHBvcnRzIFwiZm9yd2FyZGVkXCIgYW5kIFwieC1mb3J3YXJkZWQtZm9yXCIpLlxuY29uc3QgaXNMb2NhbENvbm5lY3Rpb24gPSAocmVxKSA9PiB7XG4gIGNvbnN0IGxvY2FsaG9zdFJlZ2V4cCA9IC9eXFxzKiguKjEyN1xcLjBcXC4wXFwuMXxcXFs/OjoxXFxdPylcXHMqJC87XG4gIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuY3JlYXRlKHJlcSk7XG4gIHJlcXVlc3QuY29ubmVjdGlvbiA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgcmVxLmNvbm5lY3Rpb24sXG4gICAgeyByZW1vdGVBZGRyZXNzOiByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8IHJlcS5zb2NrZXQucmVtb3RlQWRkcmVzcyB9XG4gICk7XG4gIGNvbnN0IGZvcndhcmRlZFBhcmFtcyA9IGZvcndhcmRlZChyZXF1ZXN0KTtcbiAgbGV0IGlzTG9jYWwgPSB0cnVlO1xuICBPYmplY3Qua2V5cyhmb3J3YXJkZWRQYXJhbXMuZm9yKS5mb3JFYWNoKChmb3JLZXkpID0+IHtcbiAgICBpZiAoIWxvY2FsaG9zdFJlZ2V4cC50ZXN0KGZvcktleSkpIHtcbiAgICAgIGlzTG9jYWwgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNMb2NhbDtcbn07XG5cbi8vIERldGVybWluZSBpZiB0aGUgY29ubmVjdGlvbiB3YXMgb3ZlciBTU0wgYXQgYW55IHBvaW50LiBFaXRoZXIgd2Vcbi8vIHJlY2VpdmVkIGl0IGFzIFNTTCwgb3IgYSBwcm94eSBkaWQgYW5kIHRyYW5zbGF0ZWQgaXQgZm9yIHVzLlxuY29uc3QgaXNTc2xDb25uZWN0aW9uID0gKHJlcSkgPT4ge1xuICBjb25zdCBmb3J3YXJkZWRQYXJhbXMgPSBmb3J3YXJkZWQocmVxKTtcbiAgcmV0dXJuIHJlcS5jb25uZWN0aW9uLnBhaXJcbiAgICAgIHx8IGZvcndhcmRlZFBhcmFtcy5wcm90byAmJiBmb3J3YXJkZWRQYXJhbXMucHJvdG8uaW5kZXhPZignaHR0cHMnKSAhPT0gLTE7XG59O1xuXG5leHBvcnQgeyBpc0xvY2FsQ29ubmVjdGlvbiwgaXNTc2xDb25uZWN0aW9uIH07XG4iXX0=
