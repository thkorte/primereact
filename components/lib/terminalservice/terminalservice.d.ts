/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primefaces.org/primereact/terminal/)
 *
 * @module terminal
 *
 */

/**
 * Custom terminal service options.
 * @group Misc
 */
export interface TerminalServiceOptions {
    /**
     * Method to attach an event listener to a specific action.
     * @param {'command' | 'response' | 'clear'} action - Custom listener.
     * @param {*} fn - Custom listener.
     */
    on(action: 'command' | 'response' | 'clear', fn: any): void;
    /**
     * Method to emit an event for a specific action.
     * @param {'command' | 'response' | 'clear'} action - Custom listener.
     * @param {*} params - Custom listener.
     */
    emit(action: 'command' | 'response' | 'clear', params?: any): void;
    /**
     * Method to detach an event listener from a specific action.
     * @param {'command' | 'response' | 'clear'} action - Custom listener.
     * @param {*} fn - Custom listener.
     */
    off(action: 'command' | 'response' | 'clear', fn: any): void;
}

/**
 * **PrimeReact - TerminalService**
 *
 * _Terminal is a text based user interface._
 *
 * [Live Demo](https://www.primefaces.org/primereact/terminal/)
 * --- ---
 * ![PrimeReact](https://www.primereact.org/images/logo-100.png)
 *
 * @group Component
 */
export declare const TerminalService: TerminalServiceOptions;
