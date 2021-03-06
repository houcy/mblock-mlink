"use strict";
var exec = require("child_process").exec,
    networkUtils = require("./network-utils"),
    env = require("./env");

function scanWifi(i) {
    return function(u) {
        var o = [],
            v = {},
            e = "nmcli -f all -m multiline dev wifi list";
        i.iface && (e += " iface " + i.iface), exec(e, env, function(e, i) {
            if (e) u && u(e);
            else {
                var r = !1,
                    s = !1,
                    n = !1,
                    t = !1,
                    a = !1;
                i = i.toString("utf8").replace(/\:[ ]*/g, ":").split("\n");
                for (var c = 0; c < i.length; c++) {
                    switch (i[c] = i[c].split(":"), 2 == i[c].length && (i[c][1] = i[c][1].split("'").join("")), i[c][0]) {
                        case "SSID":
                            v.ssid = i[c][1], r = !0;
                            break;
                        case "FREQ":
                            v.frequency = parseInt(i[c][1]), s = !0;
                            break;
                        case "SIGNAL":
                            v.signal_level = networkUtils.dBFromQuality(i[c][1]), n = !0;
                            break;
                        case "SECURITY":
                            v.security = i[c][1], t = !0;
                            break;
                        case "BSSID":
                            for (var l = "", f = 1; f < 6; f++) l = l + i[c][f] + ":";
                            l += i[c][6], v.mac = l, a = !0
                    }
                    r && s && n && t && a && (o.push(v), a = t = n = s = r = !(v = {}))
                }
                u && u(null, o)
            }
        })
    }
}
exports.scanWifi = scanWifi;
