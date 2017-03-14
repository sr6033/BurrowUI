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
var platform_browser_1 = require('@angular/platform-browser');
var routes_1 = require('../routing/routes');
var app_component_1 = require('../components/app.component');
var consumer_component_1 = require('../components/consumer.component');
var home_component_1 = require("../components/home.component");
var error_component_1 = require("../components/error.component");
var lag_graph_component_1 = require("../components/lag_graph.component");
var partition_table_component_1 = require("../components/partition_table.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var consumer_service_1 = require("../services/consumer.service");
var ng2_charts_1 = require('ng2-charts');
var monitoredPartition_1 = require("../classes/monitoredPartition");
var http_1 = require('@angular/http');
var burrow_module_1 = require("./burrow.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes_1.ROUTES), forms_1.FormsModule, ng2_charts_1.ChartsModule, http_1.HttpModule, http_1.JsonpModule, burrow_module_1.BurrowModule],
            declarations: [app_component_1.AppComponent, consumer_component_1.ConsumerComponent, home_component_1.HomeComponent, error_component_1.ErrorComponent, lag_graph_component_1.LagGraphComponent, partition_table_component_1.PartitionTableComponent, monitoredPartition_1.PartitionFilterPipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [consumer_service_1.ConsumerService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map