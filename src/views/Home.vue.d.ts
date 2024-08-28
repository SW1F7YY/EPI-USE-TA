declare const _default: import("vue").DefineComponent<{}, {}, {
    employees: any[];
    showModal: boolean;
    cy: any;
    showEditModal: boolean;
}, {}, {
    home(): void;
    manage(): void;
    search(): void;
    profile(): void;
    getEmployees(): Promise<void>;
    addEmployee(): Promise<void>;
    closeModal(): void;
    deleteEmployee(): Promise<void>;
    createGraph(): void;
    toggleGraphVisibility(): void;
    editEmployee(): void;
    closeEditModal(): void;
    submit(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
