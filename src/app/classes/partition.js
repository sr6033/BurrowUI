"use strict";
var Partition = (function () {
    // Constructor
    function Partition() {
    }
    Partition.prototype.makePartition = function (startOffset, endOffset, lag, state) {
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.lag = lag;
        this.state = state;
        return this;
    };
    Object.defineProperty(Partition.prototype, "isError", {
        get: function () {
            return this.state == "ERR";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partition.prototype, "isWarning", {
        get: function () {
            return this.state != "ERR" && this.state != "OK";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Partition.prototype, "isOkay", {
        get: function () {
            return this.state == "OK";
        },
        enumerable: true,
        configurable: true
    });
    return Partition;
}());
exports.Partition = Partition;
//# sourceMappingURL=partition.js.map