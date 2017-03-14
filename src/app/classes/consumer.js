"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Consumer = (function () {
    // Constructor
    function Consumer() {
    }
    // Make Consumer
    Consumer.prototype.makeConsumer = function (name, environment, partitions) {
        this.name = name;
        this.environment = environment;
        this.partitions = partitions;
        return this;
    };
    // Get Total Lag
    Consumer.prototype.getTotalLag = function () {
        var lag = 0;
        this.partitions.forEach(function (partition) {
            lag += partition.data[partition.data.length - 1].lag;
        });
        return lag;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Consumer.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Consumer.prototype, "environment", void 0);
    return Consumer;
}());
exports.Consumer = Consumer;
//# sourceMappingURL=consumer.js.map