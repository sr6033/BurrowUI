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
var consumer_service_1 = require('../services/consumer.service');
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var ConsumerComponent = (function () {
    function ConsumerComponent(consumerService, route) {
        this.consumerService = consumerService;
        this.route = route;
    }
    ;
    ConsumerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getParams();
        this.consumerService.constructConsumer(this.consumerName, this.environmentName);
        this.observableConsumer = this.consumerService.consumer;
        // Subscribe to changes
        this.observableConsumer.subscribe(function (obj) {
            _this.consumer = obj;
        });
        // Refresh every 10 seconds
        // Start by getting 5 snapshots of data at 2 second intervals; this helps build the graph quicker. Then move to the 10 second intervals.
        var startWindow = 0;
        var refresh = Rx_1.Observable.interval(2 * 1000).subscribe(function (x) {
            startWindow++;
            _this.consumerService.refreshData();
            if (startWindow == 5) {
                refresh.unsubscribe();
                refresh = Rx_1.Observable.interval(10 * 1000).subscribe(function (t) {
                    _this.consumerService.refreshData();
                });
            }
        });
    };
    ConsumerComponent.prototype.getParams = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.consumerName = params['consumer'];
            _this.environmentName = params['environment'];
        });
    };
    ConsumerComponent = __decorate([
        core_1.Component({
            selector: 'consumer_application',
            templateUrl: '../../templates/consumer.html',
        }), 
        __metadata('design:paramtypes', [consumer_service_1.ConsumerService, router_1.ActivatedRoute])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
exports.ConsumerComponent = ConsumerComponent;
//# sourceMappingURL=consumer.component.js.map