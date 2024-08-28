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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var cytoscape_1 = require("cytoscape");
var editEmployeeModal_vue_1 = require("../components/editEmployeeModal.vue");
var addEmployeeModal_vue_1 = require("../components/addEmployeeModal.vue");
var supabase_js_1 = require("@supabase/supabase-js");
var supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    components: {
        addEmployeeModal: addEmployeeModal_vue_1.default,
        editEmployeeModal: editEmployeeModal_vue_1.default,
    },
    methods: {
        home: function () {
            this.$router.push('/home');
        },
        manage: function () {
            this.$router.push('/manage');
        },
        search: function () {
            this.$router.push('/search');
        },
        profile: function () {
            this.$router.push('/profile');
        },
        getEmployees: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, supabase
                                .from('employee')
                                .select('*')];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                console.log('Error: ' + error.message);
                                return [2 /*return*/];
                            }
                            this.employees = data;
                            console.log(data);
                            return [2 /*return*/];
                    }
                });
            });
        },
        addEmployee: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // open a form to add employee
                    this.showModal = true;
                    return [2 /*return*/];
                });
            });
        },
        closeModal: function () {
            this.showModal = false;
            location.reload();
        },
        deleteEmployee: function () {
            return __awaiter(this, void 0, void 0, function () {
                var name, nameParts, surname, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            name = document.getElementById('deleteEmployee').value;
                            if (name === '' || name === null) {
                                alert('Cannot leave name empty');
                                return [2 /*return*/];
                            }
                            nameParts = name.split(' ');
                            name = nameParts[0];
                            surname = nameParts.slice(1).join(' ');
                            return [4 /*yield*/, supabase
                                    .from('employee')
                                    .delete()
                                    .eq('name', name)
                                    .eq('surname', surname)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                console.log('Error: ' + error.message);
                                return [2 /*return*/];
                            }
                            location.reload();
                            alert('Employee deleted');
                            return [2 /*return*/];
                    }
                });
            });
        },
        createGraph: function () {
            this.cy = (0, cytoscape_1.default)({
                container: document.getElementById('cy'),
                elements: __spreadArray(__spreadArray([], this.employees.map(function (employee) { return ({
                    data: {
                        id: employee.employee_number,
                        label: employee.name + " " + employee.surname,
                    },
                }); }), true), this.employees.map(function (employee) {
                    if (employee.reporting_line_manager) { // Check for valid manager
                        return {
                            data: {
                                id: "".concat(employee.employee_number, "-").concat(employee.reporting_line_manager),
                                source: employee.employee_number,
                                target: employee.reporting_line_manager
                            }
                        };
                    }
                    return null; // Don't create edge if manager is null
                }).filter(function (edge) { return edge; }), true),
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#cccccc', // Assuming gray background
                            'label': 'data(label)',
                            'color': '#000000', // Black label color
                            'width': 80, // Adjust node width as needed
                            'height': 40 // Adjust node height as needed
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 2,
                            'line-color': '#000000' // Example: black color for edges
                        }
                    }
                ],
            });
        },
        toggleGraphVisibility: function () {
            if (this.showModal || this.showEditModal) {
                this.cy = null;
                document.getElementsByClassName('main-body')[0].style.display = 'none';
            }
            else {
                document.getElementsByClassName('main-body')[0].style.display = 'block';
                this.getEmployees();
                this.createGraph();
            }
        },
        editEmployee: function () {
            this.showEditModal = true;
        },
        closeEditModal: function () {
            this.showEditModal = false;
            location.reload();
        },
        submit: function () {
            return __awaiter(this, void 0, void 0, function () {
                var search, cy, matchingNode;
                return __generator(this, function (_a) {
                    search = document.getElementById('employee').value;
                    if (search === '' || search === null) {
                        alert("Cannot leave search empty");
                        return [2 /*return*/];
                    }
                    cy = window.cy;
                    matchingNode = this.cy.nodes().filter(function (node) { return node.data('label').includes(search); });
                    if (matchingNode.length > 0) {
                        this.cy.animate({
                            fit: { eles: matchingNode }
                        });
                    }
                    else {
                        console.log("No match");
                    }
                    return [2 /*return*/];
                });
            });
        },
    },
    created: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, supabase
                            .from('employee')
                            .select('*')];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.log('Error: ' + error.message);
                            return [2 /*return*/];
                        }
                        this.employees = data;
                        this.createGraph();
                        return [2 /*return*/];
                }
            });
        });
    },
    data: function () {
        return {
            employees: [],
            showModal: false,
            cy: null,
            showEditModal: false,
        };
    },
    watch: {
        showModal: function (newShowModal, oldShowModal) {
            if (newShowModal !== oldShowModal) {
                this.toggleGraphVisibility();
            }
        },
        showEditModal: function (newEditModal, oldEditModal) {
            if (newEditModal !== oldEditModal) {
                this.toggleGraphVisibility();
            }
        }
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("management") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: ({}) }));
    // @ts-ignore
    var __VLS_0 = {}
        .editEmployeeModal;
    ({}.editEmployeeModal);
    __VLS_components.EditEmployeeModal;
    __VLS_components.editEmployeeModal;
    // @ts-ignore
    [EditEmployeeModal,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onClose': {} })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClose': {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    ({}(__assign({ 'onClose': {} })));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showEditModal));
    var __VLS_6;
    var __VLS_7 = {
        onClose: (__VLS_ctx.closeEditModal)
    };
    var __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [vShow, showEditModal, closeEditModal,];
    // @ts-ignore
    var __VLS_8 = {}
        .addEmployeeModal;
    ({}.addEmployeeModal);
    __VLS_components.AddEmployeeModal;
    __VLS_components.addEmployeeModal;
    // @ts-ignore
    [AddEmployeeModal,];
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ 'onClose': {} })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ 'onClose': {} })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    ({}(__assign({ 'onClose': {} })));
    __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.showModal));
    var __VLS_14;
    var __VLS_15 = {
        onClose: (__VLS_ctx.closeModal)
    };
    var __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    var __VLS_11;
    var __VLS_12;
    // @ts-ignore
    [vShow, showModal, closeModal,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("search-and-add") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ class: ("search") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("search-box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign(__assign({ type: ("text") }, { class: ("input-field") }), { id: ("employee"), placeholder: ("Enter Name") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.submit();
            // @ts-ignore
            [submit,];
        } }, { type: ("button"), value: ("Search") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.addEmployee();
            // @ts-ignore
            [addEmployee,];
        } }, { class: ("add-employee-button") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ class: ("search-and-add") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("search-box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign(__assign({ type: ("text") }, { class: ("input-field") }), { id: ("deleteEmployee"), placeholder: ("Enter Name and Surname") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.deleteEmployee();
            // @ts-ignore
            [deleteEmployee,];
        } }, { type: ("button"), value: ("Delete") }), { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.editEmployee();
            // @ts-ignore
            [editEmployee,];
        } }, { class: ("add-employee-button") }), { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("main-body") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ('cy') }, { style: ({}) }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['management'];
        __VLS_styleScopedClasses['search-and-add'];
        __VLS_styleScopedClasses['search'];
        __VLS_styleScopedClasses['search-box'];
        __VLS_styleScopedClasses['input-field'];
        __VLS_styleScopedClasses['add-employee-button'];
        __VLS_styleScopedClasses['search-and-add'];
        __VLS_styleScopedClasses['search-box'];
        __VLS_styleScopedClasses['input-field'];
        __VLS_styleScopedClasses['add-employee-button'];
        __VLS_styleScopedClasses['main-body'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {
        addEmployeeModal: addEmployeeModal_vue_1.default,
        editEmployeeModal: editEmployeeModal_vue_1.default,
    };
    var __VLS_name = undefined;
    var __VLS_internalComponent;
}
