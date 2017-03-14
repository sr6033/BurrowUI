"use strict";
var consumer_component_1 = require("../components/consumer.component");
var home_component_1 = require("../components/home.component");
var error_component_1 = require("../components/error.component");
exports.ROUTES = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'AnalyzeConsumer',
        component: consumer_component_1.ConsumerComponent
    },
    {
        path: '**',
        component: error_component_1.ErrorComponent
    }
];
//# sourceMappingURL=routes.js.map