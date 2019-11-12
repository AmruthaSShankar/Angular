"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var date_pipe_1 = require("./date.pipe");
var GroupByPipe = (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (value, field) {
        if (field === void 0) { field = 'date'; }
        var obj;
        var datePipeEn = new common_1.DatePipe('en-US');
        var latest_date = new date_pipe_1.DateFormatPipe(datePipeEn);
        if (value == null)
            return;
        var groupedObj = value.reduce(function (prev, cur, i) {
            if (i == 0) {
                // array start happens here      
                // Created another proerty "endtime" to display end session time
                cur = (Object.assign({}, cur, { "endtime": new Date((new Date(cur[field]).getTime() + 3600000)).toLocaleString() }));
                prev[latest_date.transformDate(cur[field])] = [cur];
            }
            else if (!prev[latest_date.transformDate(cur[field])]) {
                cur = (Object.assign({}, cur, { "endtime": new Date((new Date(cur[field]).getTime() + 3600000)).toLocaleString() }));
                prev[latest_date.transformDate(cur[field])] = [cur];
            }
            else {
                // push the object to array with time field
                cur = (Object.assign({}, cur, { "endtime": new Date((new Date(cur[field]).getTime() + 3600000)).toLocaleString() }));
                prev[latest_date.transformDate(cur[field])].push(cur);
            }
            return prev;
        }, {});
        return groupedObj;
    };
    return GroupByPipe;
}());
GroupByPipe = __decorate([
    core_1.Pipe({ name: 'groupBy' })
], GroupByPipe);
exports.GroupByPipe = GroupByPipe;
//# sourceMappingURL=groupbypipe.component.js.map