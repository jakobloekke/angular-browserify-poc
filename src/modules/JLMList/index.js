'use strict';

var JLMList = require('angular').module('modules.JLMList', []);

JLMList.directive('listDirective', require('./directives/listDirective'));
JLMList.service('ListDataService', require('./services/ListDataService'));

module.exports = JLMList;
