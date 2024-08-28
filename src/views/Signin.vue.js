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
    name: 'Signup',
    data: function () {
        return {
            email: '',
            password: '',
            passwordTwo: '',
            errorMessage: '',
        };
    },
    methods: {
        checkPassword: function () {
            if (this.password === this.passwordTwo) {
                return true;
            }
            return false;
        },
        check: function () {
            // var password = document.getElementById('password');
            // var passwordTwo = document.getElementById('password-two');
            // let userError = document.querySelector('.error-message');
            // if(password.value !== passwordTwo.value){
            //     userError.innerHTML = 'Passwords do not match';
            //     userError.style.color = 'red';
            // }else{
            //     userError.innerHTML = 'Passwords match';
            //     userError.style.color = 'green';
            // }
        },
        submit: function () {
            return __awaiter(this, void 0, void 0, function () {
                var userEmail, userPassword, _a, data, error, user;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.checkPassword()) return [3 /*break*/, 3];
                            userEmail = document.getElementById('email').value;
                            userPassword = document.getElementById('password').value;
                            // var error = document.querySelector('.error-message');
                            if (userEmail === '') {
                                this.errorMessage = 'Email is required';
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, supabase.auth.signUp({ email: userEmail, password: userPassword })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            return [4 /*yield*/, supabase.auth.getUser()];
                        case 2:
                            user = (_b.sent()).data.user;
                            if (error) {
                                // this.errorMessage = error.message;
                                console.log(error.message);
                                return [2 /*return*/];
                            }
                            this.$router.push('/home');
                            return [3 /*break*/, 4];
                        case 3:
                            alert('Passwords do not match');
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        login: function () {
            this.$router.push('/login');
        }
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("main-body") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ class: ("signup") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("signup-heading") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("email-box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign(__assign(__assign({ type: ("text") }, { class: ("input-box") }), { id: ("email"), placeholder: ("Enter Your Email or Phone Number") }), { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign(__assign(__assign({ type: ("password") }, { class: ("input-box") }), { id: ("password"), placeholder: ("Enter Your Password") }), { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign(__assign(__assign(__assign({ onKeyup: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.check();
            // @ts-ignore
            [check,];
        } }, { type: ("password") }), { class: ("input-box") }), { id: ("password-two"), placeholder: ("Enter Your Password Again") }), { style: ({}) }));
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("error-message") }));
        (__VLS_ctx.errorMessage);
        // @ts-ignore
        [errorMessage, errorMessage,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("input-box") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.submit();
            // @ts-ignore
            [submit,];
        } }, { type: ("button"), value: ("Signup") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("signup-change") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.login();
            // @ts-ignore
            [login,];
        } }, { class: ("google-button") }), { style: ({}) }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['main-body'];
        __VLS_styleScopedClasses['signup'];
        __VLS_styleScopedClasses['signup-heading'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['email-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['error-message'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['signup-change'];
        __VLS_styleScopedClasses['google-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = 'Signup';
    var __VLS_internalComponent;
}
