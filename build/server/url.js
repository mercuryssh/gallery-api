"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route = (0, express_1.Router)();
route.get('/', function (req, res) {
    res.status(200).json({ message: 'hello world' });
});
exports.default = route;
