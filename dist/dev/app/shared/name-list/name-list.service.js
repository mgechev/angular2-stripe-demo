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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/map');
require('rxjs/add/operator/publishReplay');
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
        this.names = [];
    }
    NameListService.prototype.get = function () {
        var _this = this;
        if (this.names && this.names.length) {
            return Observable_1.Observable.from([this.names]);
        }
        if (!this.request) {
            this.request = this.http.get('/assets/data.json')
                .map(function (response) { return response.json(); })
                .map(function (data) {
                _this.request = null;
                return _this.names = data;
            }).publishReplay(1).refCount();
        }
        return this.request;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    NameListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyxpQ0FBaUMsQ0FBQyxDQUFBO0FBTXpDO0lBbUJFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWI5QixVQUFLLEdBQWEsRUFBRSxDQUFDO0lBYVksQ0FBQztJQU9sQyw2QkFBRyxHQUFIO1FBQUEsaUJBYUM7UUFaQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2lCQUM5QyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDNUMsR0FBRyxDQUFDLFVBQUMsSUFBYztnQkFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFNRCw2QkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFoREg7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQWlEYixzQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksdUJBQWUsa0JBZ0QzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9wdWJsaXNoUmVwbGF5JztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBOYW1lTGlzdCBzZXJ2aWNlIHdpdGggbWV0aG9kcyB0byByZWFkIG5hbWVzIGFuZCBhZGQgbmFtZXMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYW1lTGlzdFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBUaGUgYXJyYXkgb2YgaW5pdGlhbCBuYW1lcyBwcm92aWRlZCBieSB0aGUgc2VydmljZS5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgbmFtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIHRoZSBjdXJyZW50bHkgcGVuZGluZyByZXF1ZXN0LlxuICAgKiBAdHlwZSB7T2JzZXJ2YWJsZTxzdHJpbmdbXT59XG4gICAqL1xuICBwcml2YXRlIHJlcXVlc3Q6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE5hbWVMaXN0U2VydmljZSB3aXRoIHRoZSBpbmplY3RlZCBIdHRwLlxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgR0VUIHJlcXVlc3QgZm9yIHRoZSBKU09OIHJlc291cmNlLiBJZiB0aGVyZSB3YXMgYSBwcmV2aW91cyBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICogKHRoZSBsb2NhbCBuYW1lcyBhcnJheSBpcyBkZWZpbmVkIGFuZCBoYXMgZWxlbWVudHMpLCB0aGUgY2FjaGVkIHZlcnNpb24gaXMgcmV0dXJuZWRcbiAgICogQHJldHVybiB7c3RyaW5nW119IFRoZSBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCByZXF1ZXN0LlxuICAgKi9cbiAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBpZiAodGhpcy5uYW1lcyAmJiB0aGlzLm5hbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuZnJvbShbdGhpcy5uYW1lc10pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucmVxdWVzdCkge1xuICAgICAgdGhpcy5yZXF1ZXN0ID0gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxuICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLm1hcCgoZGF0YTogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICB0aGlzLnJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgIHJldHVybiB0aGlzLm5hbWVzID0gZGF0YTtcbiAgICAgICAgfSkucHVibGlzaFJlcGxheSgxKS5yZWZDb3VudCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIG5hbWUgdG8gdGhlIGFycmF5IG9mIG5hbWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgbmFtZSB0byBhZGQuXG4gICAqL1xuICBhZGQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubmFtZXMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuIl19
