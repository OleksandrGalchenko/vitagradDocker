(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"force-ssl":{"force_ssl_both.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/force-ssl/force_ssl_both.js                                                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
Object.assign(Meteor.absoluteUrl.defaultOptions, {
  secure: true
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"force_ssl_server.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/force-ssl/force_ssl_server.js                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
let isLocalConnection, isSslConnection;
module.watch(require("meteor/force-ssl-common"), {
  isLocalConnection(v) {
    isLocalConnection = v;
  },

  isSslConnection(v) {
    isSslConnection = v;
  }

}, 0);

var url = Npm.require("url");

// Unfortunately we can't use a connect middleware here since
// sockjs installs itself prior to all existing listeners
// (meaning prior to any connect middlewares) so we need to take
// an approach similar to overshadowListeners in
// https://github.com/sockjs/sockjs-node/blob/cf820c55af6a9953e16558555a31decea554f70e/src/utils.coffee
var httpServer = WebApp.httpServer;
var oldHttpServerListeners = httpServer.listeners('request').slice(0);
httpServer.removeAllListeners('request');
httpServer.addListener('request', function (req, res) {
  // allow connections if they have been handled w/ ssl already
  // (either by us or by a proxy) OR the connection is entirely over
  // localhost (development mode).
  //
  // Note: someone could trick us into serving over non-ssl by setting
  // x-forwarded-for, x-forwarded-proto, forwarded, etc. Not much we can do
  // there if we still want to operate behind proxies.
  if (!isLocalConnection(req) && !isSslConnection(req)) {
    // connection is not cool. send a 302 redirect!
    var host = url.parse(Meteor.absoluteUrl()).hostname; // strip off the port number. If we went to a URL with a custom
    // port, we don't know what the custom SSL port is anyway.

    host = host.replace(/:\d+$/, '');
    res.writeHead(302, {
      'Location': 'https://' + host + req.url,
      'Access-Control-Allow-Origin': '*'
    });
    res.end();
    return;
  } // connection is OK. Proceed normally.


  var args = arguments;
  oldHttpServerListeners.forEach(oldListener => {
    oldListener.apply(httpServer, args);
  });
}); // NOTE: this doesn't handle websockets!
//
// Websockets come in via the 'upgrade' request. We can override this,
// however the problem is we're not sure if the websocket is actually
// encrypted. We don't get x-forwarded-for, x-forwarded-proto, forwarded, etc.
// on websockets. It's possible the 'sec-websocket-origin' header does
// what we want, but that's not clear.
//
// For now, this package allows raw unencrypted DDP connections over
// websockets.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/force-ssl/force_ssl_both.js");
var exports = require("./node_modules/meteor/force-ssl/force_ssl_server.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['force-ssl'] = exports;

})();

//# sourceURL=meteor://💻app/packages/force-ssl.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZm9yY2Utc3NsL2ZvcmNlX3NzbF9ib3RoLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9mb3JjZS1zc2wvZm9yY2Vfc3NsX3NlcnZlci5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJNZXRlb3IiLCJhYnNvbHV0ZVVybCIsImRlZmF1bHRPcHRpb25zIiwic2VjdXJlIiwiaXNMb2NhbENvbm5lY3Rpb24iLCJpc1NzbENvbm5lY3Rpb24iLCJtb2R1bGUiLCJ3YXRjaCIsInJlcXVpcmUiLCJ2IiwidXJsIiwiTnBtIiwiaHR0cFNlcnZlciIsIldlYkFwcCIsIm9sZEh0dHBTZXJ2ZXJMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzbGljZSIsInJlbW92ZUFsbExpc3RlbmVycyIsImFkZExpc3RlbmVyIiwicmVxIiwicmVzIiwiaG9zdCIsInBhcnNlIiwiaG9zdG5hbWUiLCJyZXBsYWNlIiwid3JpdGVIZWFkIiwiZW5kIiwiYXJncyIsImFyZ3VtZW50cyIsImZvckVhY2giLCJvbGRMaXN0ZW5lciIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxDQUFjQyxPQUFPQyxXQUFQLENBQW1CQyxjQUFqQyxFQUFpRDtBQUFFQyxVQUFRO0FBQVYsQ0FBakQsRTs7Ozs7Ozs7Ozs7QUNBQSxJQUFJQyxpQkFBSixFQUFzQkMsZUFBdEI7QUFBc0NDLE9BQU9DLEtBQVAsQ0FBYUMsUUFBUSx5QkFBUixDQUFiLEVBQWdEO0FBQUNKLG9CQUFrQkssQ0FBbEIsRUFBb0I7QUFBQ0wsd0JBQWtCSyxDQUFsQjtBQUFvQixHQUExQzs7QUFBMkNKLGtCQUFnQkksQ0FBaEIsRUFBa0I7QUFBQ0osc0JBQWdCSSxDQUFoQjtBQUFrQjs7QUFBaEYsQ0FBaEQsRUFBa0ksQ0FBbEk7O0FBQXRDLElBQUlDLE1BQU1DLElBQUlILE9BQUosQ0FBWSxLQUFaLENBQVY7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlJLGFBQWFDLE9BQU9ELFVBQXhCO0FBQ0EsSUFBSUUseUJBQXlCRixXQUFXRyxTQUFYLENBQXFCLFNBQXJCLEVBQWdDQyxLQUFoQyxDQUFzQyxDQUF0QyxDQUE3QjtBQUNBSixXQUFXSyxrQkFBWCxDQUE4QixTQUE5QjtBQUNBTCxXQUFXTSxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUksQ0FBQ2hCLGtCQUFrQmUsR0FBbEIsQ0FBRCxJQUEyQixDQUFDZCxnQkFBZ0JjLEdBQWhCLENBQWhDLEVBQXNEO0FBQ3BEO0FBRUEsUUFBSUUsT0FBT1gsSUFBSVksS0FBSixDQUFVdEIsT0FBT0MsV0FBUCxFQUFWLEVBQWdDc0IsUUFBM0MsQ0FIb0QsQ0FLcEQ7QUFDQTs7QUFDQUYsV0FBT0EsS0FBS0csT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBUDtBQUVBSixRQUFJSyxTQUFKLENBQWMsR0FBZCxFQUFtQjtBQUNqQixrQkFBWSxhQUFhSixJQUFiLEdBQW9CRixJQUFJVCxHQURuQjtBQUVqQixxQ0FBK0I7QUFGZCxLQUFuQjtBQUlBVSxRQUFJTSxHQUFKO0FBQ0E7QUFDRCxHQXpCbUQsQ0EyQnBEOzs7QUFDQSxNQUFJQyxPQUFPQyxTQUFYO0FBQ0FkLHlCQUF1QmUsT0FBdkIsQ0FBZ0NDLFdBQUQsSUFBaUI7QUFDOUNBLGdCQUFZQyxLQUFaLENBQWtCbkIsVUFBbEIsRUFBOEJlLElBQTlCO0FBQ0QsR0FGRDtBQUdELENBaENELEUsQ0FtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYyIsImZpbGUiOiIvcGFja2FnZXMvZm9yY2Utc3NsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiT2JqZWN0LmFzc2lnbihNZXRlb3IuYWJzb2x1dGVVcmwuZGVmYXVsdE9wdGlvbnMsIHsgc2VjdXJlOiB0cnVlIH0pO1xuIiwidmFyIHVybCA9IE5wbS5yZXF1aXJlKFwidXJsXCIpO1xuaW1wb3J0IHsgaXNMb2NhbENvbm5lY3Rpb24sIGlzU3NsQ29ubmVjdGlvbiB9IGZyb20gJ21ldGVvci9mb3JjZS1zc2wtY29tbW9uJztcblxuLy8gVW5mb3J0dW5hdGVseSB3ZSBjYW4ndCB1c2UgYSBjb25uZWN0IG1pZGRsZXdhcmUgaGVyZSBzaW5jZVxuLy8gc29ja2pzIGluc3RhbGxzIGl0c2VsZiBwcmlvciB0byBhbGwgZXhpc3RpbmcgbGlzdGVuZXJzXG4vLyAobWVhbmluZyBwcmlvciB0byBhbnkgY29ubmVjdCBtaWRkbGV3YXJlcykgc28gd2UgbmVlZCB0byB0YWtlXG4vLyBhbiBhcHByb2FjaCBzaW1pbGFyIHRvIG92ZXJzaGFkb3dMaXN0ZW5lcnMgaW5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2NranMvc29ja2pzLW5vZGUvYmxvYi9jZjgyMGM1NWFmNmE5OTUzZTE2NTU4NTU1YTMxZGVjZWE1NTRmNzBlL3NyYy91dGlscy5jb2ZmZWVcblxudmFyIGh0dHBTZXJ2ZXIgPSBXZWJBcHAuaHR0cFNlcnZlcjtcbnZhciBvbGRIdHRwU2VydmVyTGlzdGVuZXJzID0gaHR0cFNlcnZlci5saXN0ZW5lcnMoJ3JlcXVlc3QnKS5zbGljZSgwKTtcbmh0dHBTZXJ2ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZXF1ZXN0Jyk7XG5odHRwU2VydmVyLmFkZExpc3RlbmVyKCdyZXF1ZXN0JywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG5cbiAgLy8gYWxsb3cgY29ubmVjdGlvbnMgaWYgdGhleSBoYXZlIGJlZW4gaGFuZGxlZCB3LyBzc2wgYWxyZWFkeVxuICAvLyAoZWl0aGVyIGJ5IHVzIG9yIGJ5IGEgcHJveHkpIE9SIHRoZSBjb25uZWN0aW9uIGlzIGVudGlyZWx5IG92ZXJcbiAgLy8gbG9jYWxob3N0IChkZXZlbG9wbWVudCBtb2RlKS5cbiAgLy9cbiAgLy8gTm90ZTogc29tZW9uZSBjb3VsZCB0cmljayB1cyBpbnRvIHNlcnZpbmcgb3ZlciBub24tc3NsIGJ5IHNldHRpbmdcbiAgLy8geC1mb3J3YXJkZWQtZm9yLCB4LWZvcndhcmRlZC1wcm90bywgZm9yd2FyZGVkLCBldGMuIE5vdCBtdWNoIHdlIGNhbiBkb1xuICAvLyB0aGVyZSBpZiB3ZSBzdGlsbCB3YW50IHRvIG9wZXJhdGUgYmVoaW5kIHByb3hpZXMuXG5cbiAgaWYgKCFpc0xvY2FsQ29ubmVjdGlvbihyZXEpICYmICFpc1NzbENvbm5lY3Rpb24ocmVxKSkge1xuICAgIC8vIGNvbm5lY3Rpb24gaXMgbm90IGNvb2wuIHNlbmQgYSAzMDIgcmVkaXJlY3QhXG5cbiAgICB2YXIgaG9zdCA9IHVybC5wYXJzZShNZXRlb3IuYWJzb2x1dGVVcmwoKSkuaG9zdG5hbWU7XG5cbiAgICAvLyBzdHJpcCBvZmYgdGhlIHBvcnQgbnVtYmVyLiBJZiB3ZSB3ZW50IHRvIGEgVVJMIHdpdGggYSBjdXN0b21cbiAgICAvLyBwb3J0LCB3ZSBkb24ndCBrbm93IHdoYXQgdGhlIGN1c3RvbSBTU0wgcG9ydCBpcyBhbnl3YXkuXG4gICAgaG9zdCA9IGhvc3QucmVwbGFjZSgvOlxcZCskLywgJycpO1xuXG4gICAgcmVzLndyaXRlSGVhZCgzMDIsIHtcbiAgICAgICdMb2NhdGlvbic6ICdodHRwczovLycgKyBob3N0ICsgcmVxLnVybCxcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICB9KTtcbiAgICByZXMuZW5kKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gY29ubmVjdGlvbiBpcyBPSy4gUHJvY2VlZCBub3JtYWxseS5cbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIG9sZEh0dHBTZXJ2ZXJMaXN0ZW5lcnMuZm9yRWFjaCgob2xkTGlzdGVuZXIpID0+IHtcbiAgICBvbGRMaXN0ZW5lci5hcHBseShodHRwU2VydmVyLCBhcmdzKTtcbiAgfSk7XG59KTtcblxuXG4vLyBOT1RFOiB0aGlzIGRvZXNuJ3QgaGFuZGxlIHdlYnNvY2tldHMhXG4vL1xuLy8gV2Vic29ja2V0cyBjb21lIGluIHZpYSB0aGUgJ3VwZ3JhZGUnIHJlcXVlc3QuIFdlIGNhbiBvdmVycmlkZSB0aGlzLFxuLy8gaG93ZXZlciB0aGUgcHJvYmxlbSBpcyB3ZSdyZSBub3Qgc3VyZSBpZiB0aGUgd2Vic29ja2V0IGlzIGFjdHVhbGx5XG4vLyBlbmNyeXB0ZWQuIFdlIGRvbid0IGdldCB4LWZvcndhcmRlZC1mb3IsIHgtZm9yd2FyZGVkLXByb3RvLCBmb3J3YXJkZWQsIGV0Yy5cbi8vIG9uIHdlYnNvY2tldHMuIEl0J3MgcG9zc2libGUgdGhlICdzZWMtd2Vic29ja2V0LW9yaWdpbicgaGVhZGVyIGRvZXNcbi8vIHdoYXQgd2Ugd2FudCwgYnV0IHRoYXQncyBub3QgY2xlYXIuXG4vL1xuLy8gRm9yIG5vdywgdGhpcyBwYWNrYWdlIGFsbG93cyByYXcgdW5lbmNyeXB0ZWQgRERQIGNvbm5lY3Rpb25zIG92ZXJcbi8vIHdlYnNvY2tldHMuXG4iXX0=
