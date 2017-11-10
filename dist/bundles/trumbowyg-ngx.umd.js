(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global['trumbowyg-ngx'] = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

var TRUMBOWYG_OPTIONS = new core.InjectionToken('Trumbowyg options');
var EditorComponent = /** @class */ (function () {
    /**
     * @param {?} _changeDetection
     * @param {?} _config
     * @param {?} editorControl
     */
    function EditorComponent(_changeDetection, _config, editorControl) {
        this._changeDetection = _changeDetection;
        this._config = _config;
        this.editorControl = editorControl;
        this.propagateChange = function (_) {
        };
        this.propagateTouched = function () {
        };
        editorControl.valueAccessor = this;
    }
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngOnInit = function () {
        var /** @type {?} */ control = this.editorControl.control;
        control.setValidators(control.validator);
        control.updateValueAndValidity();
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(this._editor.nativeElement).trumbowyg(Object.assign({}, this._config, this.options)).on('tbwinit', function () {
            $(_this._editor.nativeElement).trumbowyg(_this._disabled ? 'disable' : 'enable');
            _this.setContent(_this._initValue);
        }).on('tbwchange', function () {
            _this.propagateChange(_this.getContent());
            _this._changeDetection.detectChanges();
        }).on('tbwblur', function () {
            _this.propagateTouched();
            _this._changeDetection.detectChanges();
        });
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EditorComponent.prototype.writeValue = function (value) {
        this._initValue = value;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    EditorComponent.prototype.setDisabledState = function (disabled) {
        this._disabled = disabled;
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngOnDestroy = function () {
        $(this._editor.nativeElement).trumbowyg('destroy');
    };
    /**
     * @param {?} content
     * @return {?}
     */
    EditorComponent.prototype.setContent = function (content) {
        $(this._editor.nativeElement).trumbowyg('html', content);
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.getContent = function () {
        return $(this._editor.nativeElement).trumbowyg('html');
    };
    return EditorComponent;
}());
EditorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'trumbowyg-ngx-editor',
                template: "\n      <textarea #editor [placeholder]=\"placeholder ? placeholder : ''\"></textarea>\n    ",
                styles: ["\n\n    "],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
EditorComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: core.Inject, args: [TRUMBOWYG_OPTIONS,] }, { type: core.Optional },] },
    { type: forms.NgControl, decorators: [{ type: core.Self },] },
]; };
EditorComponent.propDecorators = {
    'options': [{ type: core.Input },],
    'placeholder': [{ type: core.Input },],
    '_editor': [{ type: core.ViewChild, args: ['editor',] },],
};
var TrumbowygNgxModule = /** @class */ (function () {
    function TrumbowygNgxModule() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    TrumbowygNgxModule.withConfig = function (options) {
        return {
            ngModule: TrumbowygNgxModule,
            providers: [
                { provide: TRUMBOWYG_OPTIONS, useValue: options }
            ]
        };
    };
    return TrumbowygNgxModule;
}());
TrumbowygNgxModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    EditorComponent
                ],
                exports: [
                    EditorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TrumbowygNgxModule.ctorParameters = function () { return []; };

exports.TrumbowygNgxModule = TrumbowygNgxModule;
exports.ɵb = EditorComponent;
exports.ɵa = TRUMBOWYG_OPTIONS;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=trumbowyg-ngx.umd.js.map