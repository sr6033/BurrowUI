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
var Rx_1 = require("rxjs/Rx");
var LagGraphComponent = (function () {
    function LagGraphComponent(consumerService) {
        this.consumerService = consumerService;
        this.lineChartData = [
            { data: [], label: 'AnalyticsConsumer' }
        ];
        this.lineChartLabels = new Rx_1.BehaviorSubject([]);
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(233,30,99,0.2)',
                borderColor: 'rgba(233,30,99,1)',
                pointBackgroundColor: 'rgba(0,150, 136, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 150, 136, 0.8)'
            }
        ];
        this.lagWindow = consumerService.lagWindow;
    }
    Object.defineProperty(LagGraphComponent.prototype, "observableLabels", {
        get: function () { return this.lineChartLabels.asObservable(); },
        enumerable: true,
        configurable: true
    });
    ;
    LagGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lagWindow.subscribe(function (obj) {
            _this.drawLagChart(obj);
        });
    };
    LagGraphComponent.prototype.drawLagChart = function (newEntries) {
        if (newEntries.length > 0) {
            var newLabels = this.lineChartLabels.getValue();
            var newData = this.lineChartData.slice(0);
            var currentTime = new Date().toLocaleTimeString();
            newLabels.push(currentTime);
            newData[0].data = newEntries;
            this.lineChartLabels.next(newLabels);
            this.lineChartData = newData;
        }
    };
    LagGraphComponent = __decorate([
        core_1.Component({
            selector: 'lag-graph',
            templateUrl: '../../templates/lag_graph.html',
        }), 
        __metadata('design:paramtypes', [consumer_service_1.ConsumerService])
    ], LagGraphComponent);
    return LagGraphComponent;
}());
exports.LagGraphComponent = LagGraphComponent;
//# sourceMappingURL=lag_graph.component.js.map