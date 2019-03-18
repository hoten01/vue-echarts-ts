declare global {
    interface Window {
        attachEvent(type: string, listener: EventListener): void;
    }
}