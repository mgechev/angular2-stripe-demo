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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var index_1 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent() {
        console.log('Environment config', index_1.Config);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLHNCQUEwRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBYTNFO0lBQ0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFWSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMscUJBQWMsQ0FBQztZQUMvQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7U0FDbkUsQ0FBQzs7b0JBQUE7SUFLRixtQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksb0JBQVksZUFJeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQ29uZmlnLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC4gV2l0aGluIHRoZSBAUm91dGVzIGFubm90YXRpb24gaXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlXG4gKiBhcHBsaWNhdGlvbnMgcm91dGVzLCBjb25maWd1cmluZyB0aGUgcGF0aHMgZm9yIHRoZSBsYXp5IGxvYWRlZCBjb21wb25lbnRzIChIb21lQ29tcG9uZW50LCBBYm91dENvbXBvbmVudCkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHZpZXdQcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuICB9XG59XG4iXX0=
