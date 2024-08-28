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
var solid_1 = require("@heroicons/vue/20/solid");
var supabase_js_1 = require("@supabase/supabase-js");
var crypto_js_1 = require("crypto-js");
var supabaseUrl = 'https://vhhyfjcnkfmcjyqeymec.supabase.co';
var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaHlmamNua2ZtY2p5cWV5bWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1Mjc2NDIsImV4cCI6MjA0MDEwMzY0Mn0.Qjc5L6Nyfnj-xtTR48Dy9EXmxzb-abHTQhmYncIZ9J4';
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return { ChevronDownIcon: solid_1.ChevronDownIcon };
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
            this.showDropdown = !this.showDropdown;
        },
        signOut: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, supabase.auth.signOut()];
                        case 1:
                            _a.sent();
                            this.$router.push('/login');
                            return [2 /*return*/];
                    }
                });
            });
        }
    },
    data: function () {
        return {
            hash: '',
            gravatarUrl: '',
            userEmail: '',
            showDropdown: false,
        };
    },
    mounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, email, cleanedEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supabase.auth.getUser()];
                    case 1:
                        user = (_a.sent()).data.user;
                        if (!user) {
                            this.$router.push('/login');
                        }
                        email = user.email;
                        this.userEmail = email;
                        cleanedEmail = email.trim().toLowerCase();
                        this.hash = crypto_js_1.default.SHA256(cleanedEmail).toString();
                        this.gravatarUrl = "https://www.gravatar.com/avatar/".concat(this.hash, "?d=identicon");
                        return [2 /*return*/];
                }
            });
        });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("navbar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.home();
            // @ts-ignore
            [home,];
        } }, { class: ("logo") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("options") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.home();
            // @ts-ignore
            [home,];
        } }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.search();
            // @ts-ignore
            [search,];
        } }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("settings-profile") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("settings-profile") }));
    if (!__VLS_ctx.showDropdown) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((!__VLS_ctx.showDropdown)))
                    return;
                __VLS_ctx.profile();
                // @ts-ignore
                [showDropdown, profile,];
            } }, { class: ("profile-button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.gravatarUrl)), alt: ("profile picture") }, { class: ("profile-picture") }));
        // @ts-ignore
        [gravatarUrl,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        var __VLS_0_1 = (__VLS_ctx.ChevronDownIcon);
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0_1, new __VLS_0_1(__assign({ class: ("h-5 w-5") })));
        var __VLS_2_1 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: ("h-5 w-5") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
        ({}(__assign({ class: ("h-5 w-5") })));
        var __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0_1, __VLS_2_1));
        // @ts-ignore
        [solid_1.ChevronDownIcon,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () { } }, { class: ("profile-dropdown") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.gravatarUrl)), alt: ("profile picture") }, { class: ("dropdown-avatar") }));
        // @ts-ignore
        [gravatarUrl,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.userEmail);
        // @ts-ignore
        [userEmail,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(!((!__VLS_ctx.showDropdown))))
                    return;
                __VLS_ctx.signOut();
                // @ts-ignore
                [signOut,];
            } }, { class: ("sign-out-button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(!((!__VLS_ctx.showDropdown))))
                    return;
                __VLS_ctx.profile();
                // @ts-ignore
                [profile,];
            } }, { class: ("close-dropdown-button") }));
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['navbar'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['options'];
        __VLS_styleScopedClasses['settings-profile'];
        __VLS_styleScopedClasses['settings-profile'];
        __VLS_styleScopedClasses['profile-button'];
        __VLS_styleScopedClasses['profile-picture'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['profile-dropdown'];
        __VLS_styleScopedClasses['dropdown-avatar'];
        __VLS_styleScopedClasses['sign-out-button'];
        __VLS_styleScopedClasses['close-dropdown-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = undefined;
    var __VLS_internalComponent;
}
