"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault"),
    _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),
    _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass")),
    Request = function() {
        function r(e) {
            (0, _classCallCheck2.default)(this, r), this.verifiy(e), this.Body = e
        }
        return (0, _createClass2.default)(r, [{
            key: "verifiy",
            value: function(e) {
                if (!e.hasOwnProperty("connectType")) throw new Error("Missing 'connectType'.");
                if (!e.hasOwnProperty("cmd")) throw new Error("Missing 'cmd'.")
            }
        }, {
            key: "getParams",
            value: function() {
                return this.Body.hasOwnProperty("params") ? this.Body.params : {}
            }
        }, {
            key: "getOptions",
            value: function() {
                var e = this.getParams();
                return e.hasOwnProperty("options") ? e.options : {}
            }
        }]), r
    }();
module.exports = Request;
