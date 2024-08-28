declare const _default: import("vue").DefineComponent<{}, {}, {
    email: string;
    password: string;
    passwordTwo: string;
    errorMessage: string;
}, {}, {
    checkPassword(): boolean;
    check(): void;
    submit(): Promise<void>;
    login(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
