/// <reference types="vite/client" />

declare global {
  interface Window {
    __MICRO_APP_ENVIRONMENT__: boolean;
    rawWindow: Window;
    rawDocument: Document;
    microApp: any;
    created: () => void;
    beforemount: () => void;
    mounted: () => void;
    unmount: () => void;
    error: () => void;
  }
}

export {};
