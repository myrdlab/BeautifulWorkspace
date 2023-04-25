import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class BeautifulLibService {
    constructor() { }
}
BeautifulLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BeautifulLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BeautifulLibComponent {
}
BeautifulLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BeautifulLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.8", type: BeautifulLibComponent, selector: "blib-BeautifulLib", ngImport: i0, template: `
    <p>
      beautiful-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'blib-BeautifulLib', template: `
    <p>
      beautiful-lib works!
    </p>
  ` }]
        }] });

class BeautifulLibModule {
}
BeautifulLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BeautifulLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibModule, declarations: [BeautifulLibComponent], exports: [BeautifulLibComponent] });
BeautifulLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.8", ngImport: i0, type: BeautifulLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BeautifulLibComponent
                    ],
                    imports: [],
                    exports: [
                        BeautifulLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of beautiful-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BeautifulLibComponent, BeautifulLibModule, BeautifulLibService };
//# sourceMappingURL=myrdlab-beautiful-lib.mjs.map
