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
var core_1 = require('@angular/core');
var consumer_1 = require("../classes/consumer");
// Mock Data
var mock_consumer_1 = require('../mock_data/mock-consumer');
var Rx_1 = require("rxjs/Rx");
var partition_1 = require("../classes/partition");
var ConsumerService = (function () {
    function ConsumerService() {
        // Observable Consumer
        this._consumer = new Rx_1.BehaviorSubject(new consumer_1.Consumer());
        // Observable Lag Window
        this._lagWindow = new Rx_1.BehaviorSubject([]);
    }
    Object.defineProperty(ConsumerService.prototype, "consumer", {
        get: function () { return this._consumer.asObservable(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ConsumerService.prototype, "lagWindow", {
        get: function () { return this._lagWindow.asObservable(); },
        enumerable: true,
        configurable: true
    });
    ;
    ConsumerService.prototype.constructConsumer = function (consumerName, environment) {
        var newConsumer = mock_consumer_1.CONSUMER;
        newConsumer.name = consumerName;
        newConsumer.environment = environment;
        // Update Observable
        this._consumer.next(newConsumer);
    };
    ConsumerService.prototype.refreshData = function () {
        // Refresh Partitions
        this.refreshPartitions();
        // Add Lag Window
        this.addLagWindow();
    };
    ConsumerService.prototype.addLagWindow = function () {
        var updatedLag = this._consumer.getValue().getTotalLag();
        var window = this._lagWindow.getValue();
        window.push(updatedLag);
        this._lagWindow.next(window);
    };
    ConsumerService.prototype.refreshPartitions = function () {
        // Get current Consumer
        var consumer = this._consumer.getValue();
        // Check if the array should be popped and pushed
        var window = 60; // We refresh every 10seconds; so saving 60 frames is a 10 minute window.
        var shiftWindow = false;
        if (consumer.partitions[0].data.length == window) {
            shiftWindow = true;
        }
        for (var i = 0; i < consumer.partitions.length; i++) {
            if (shiftWindow) {
                consumer.partitions[i].data.splice(0, 1);
            }
            var states = ["WARN", "OK", "STALL", "ERR", "STOP"];
            var newPartition = new partition_1.Partition().makePartition(100, 200, 100, states[Math.floor(Math.random() * 4)]);
            newPartition.lag = Math.floor(Math.random() * 1000);
            newPartition.endOffset = Math.floor(Math.random() * 1000) + newPartition.endOffset;
            newPartition.startOffset = Math.floor(Math.random() * 1000) + newPartition.startOffset;
            consumer.partitions[i].updatePartition(newPartition);
        }
    };
    ConsumerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConsumerService);
    return ConsumerService;
}());
exports.ConsumerService = ConsumerService;
//# sourceMappingURL=consumer.service.js.map