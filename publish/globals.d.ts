declare global {
    interface Window {
        attachEvent(type: string, callback: any): void;
        detachEvent(type: string, callback: any): void;
    }
}

declare module 'vue-echarts-ts' {

}

