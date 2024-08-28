"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var supabase_js_1 = require("@supabase/supabase-js");
var supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'addEmployeeModal',
    data: function () {
        return {
            isVisible: true,
        };
    },
    methods: {
        close: function () {
            // this.isVisible = false;
            this.$emit('close');
        },
        updateArray: function () {
            return __awaiter(this, void 0, void 0, function () {
                var name, surname, birth_date, salary, role, reporting_line_manager, updateData, split, _a, data_1, error_1, _b, data, error;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            name = document.getElementById('name').value.trim();
                            surname = document.getElementById('surname').value.trim();
                            birth_date = document.getElementById('birth_date').value.trim();
                            salary = document.getElementById('salary').value.trim();
                            role = document.getElementById('role').value.trim();
                            reporting_line_manager = document.getElementById('reporting_line_manager').value.trim();
                            updateData = {};
                            // Check each field and add to updateData if not empty
                            if (name === '' || surname === '') {
                                alert('Please enter the name and surname');
                                return [2 /*return*/];
                            }
                            if (birth_date !== '')
                                updateData.birth_date = birth_date;
                            if (salary !== '')
                                updateData.salary = salary;
                            if (role !== '')
                                updateData.role = role;
                            if (!(reporting_line_manager !== '')) return [3 /*break*/, 3];
                            if (!(reporting_line_manager === '-1')) return [3 /*break*/, 1];
                            updateData.reporting_line_manager = null;
                            return [3 /*break*/, 3];
                        case 1:
                            split = reporting_line_manager.split(' ');
                            if (split.length !== 2) {
                                alert('Please enter the Reporting Line Manager name and surname');
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, supabase
                                    .from('employee')
                                    .select('*')
                                    .eq('name', split[0])
                                    .eq('surname', split[1])];
                        case 2:
                            _a = _c.sent(), data_1 = _a.data, error_1 = _a.error;
                            if (error_1 || data_1.length === 0) {
                                alert('Manager not found');
                                return [2 /*return*/];
                            }
                            updateData.reporting_line_manager = data_1[0].employee_number;
                            _c.label = 3;
                        case 3:
                            // Check if there are any fields to update
                            if (Object.keys(updateData).length === 0) {
                                alert('No fields to update');
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, supabase
                                    .from('employee')
                                    .update(updateData)
                                    .eq('name', name).eq('surname', surname)];
                        case 4:
                            _b = _c.sent(), data = _b.data, error = _b.error;
                            if (error) {
                                console.log('Error: ' + error.message);
                                alert('Error updating employee');
                                return [2 /*return*/];
                            }
                            alert('Employee updated successfully');
                            return [2 /*return*/];
                    }
                });
            });
        }
    },
});
;
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("modal-backdrop") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("modal") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: ("modal-header") }));
    var __VLS_0 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("subtitle") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.close();
            // @ts-ignore
            [close,];
        } }, { type: ("button") }), { class: ("btn-close") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("modal-body") }));
    var __VLS_1 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ class: ("addEmployeeForm") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), name: ("name"), placeholder: ("Enter Name"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("surname"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("surname"), name: ("surname"), placeholder: ("Enter Surame"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("birth_date"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("date"), id: ("birth_date"), name: ("birth_date"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("salary"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("number"), id: ("salary"), name: ("salary"), placeholder: ("Enter Salary"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("role"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("role"), name: ("role"), placeholder: ("Enter Role"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("reporting_line_manager"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("reporting_line_manager"), name: ("reporting_line_manager"), placeholder: ("Reporting Line Manager Name and Surname"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.updateArray();
            // @ts-ignore
            [updateArray,];
        } }, { type: ("button"), value: ("Update Employee") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)(__assign({ class: ("modal-footer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.close();
            // @ts-ignore
            [close,];
        } }, { type: ("button") }), { class: ("btn-green") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal-backdrop'];
        __VLS_styleScopedClasses['modal'];
        __VLS_styleScopedClasses['modal-header'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['subtitle'];
        __VLS_styleScopedClasses['btn-close'];
        __VLS_styleScopedClasses['modal-body'];
        __VLS_styleScopedClasses['addEmployeeForm'];
        __VLS_styleScopedClasses['modal-footer'];
        __VLS_styleScopedClasses['btn-green'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = 'addEmployeeModal';
    var __VLS_internalComponent;
}
