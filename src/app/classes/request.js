"use strict";
var Request = (function () {
    function Request(url, host, cluster, group, topic) {
        this.url = url;
        this.host = host;
        this.cluster = cluster;
        this.group = group;
        this.topic = topic;
    }
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=request.js.map