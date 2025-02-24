/**
 *
 * ColorPicker is an input component to select a color.
 *
 * [Live Demo](https://www.primefaces.org/primereact/colorpicker/)
 *
 * @module colorpicker
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { TooltipOptions } from '../tooltip/tooltipoptions';
import { FormEvent } from '../ts-helpers';

/**
 * RGB type of value
 */
interface ColorPickerRGBType {
    /**
     * red color number
     */
    r: number;
    /**
     * green color number
     */
    g: number;
    /**
     * blue color number
     */
    b: number;
}

/**
 * HSB type of value
 */
interface ColorPickerHSBType {
    /**
     * hue number
     */
    h: number;
    /**
     * saturation number
     */
    s: number;
    /**
     * brightness number
     */
    b: number;
}

/**
 * Custom change event.
 * @see {@link ColorPickerProps.onChange}
 * @extends {FormEvent}
 * @event
 */
interface ColorPickerChangeEvent extends FormEvent<string | ColorPickerRGBType | ColorPickerHSBType> {}

/**
 * Defines valid properties in AutoComplete component. In addition to these, all properties of HTMLInputElement can be used in this component.
 * @group Properties
 */
export interface ColorPickerProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value' | 'ref'> {
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.
     * @defaultValue document.body
     */
    appendTo?: 'self' | HTMLElement | undefined | null;
    /**
     * Default color to display when value is null.
     * @defaultValue ff0000
     */
    defaultColor?: string | undefined;
    /**
     * Format to use in value binding.
     * @defaultValue hex
     */
    format?: 'hex' | 'rgb' | 'hsb' | undefined;
    /**
     * Whether to display as an overlay or not.
     * @defaultValue false
     */
    inline?: boolean | undefined;
    /**
     * Identifier of the focus input to match a label defined for the dropdown.
     */
    inputId?: string | undefined;
    /**
     * Reference of the input element.
     */
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClassName?: string | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: React.CSSProperties | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     * @type {TooltipOptions}
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     * @type {CSSTransitionProps}
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * Value of the component.
     * @type {string | ColorPickerRGBType | ColorPickerHSBType}
     */
    value?: string | ColorPickerRGBType | ColorPickerHSBType | undefined;
    /**
     * Callback to invoke when a color is selected.
     * @param {ColorPickerChangeEvent} event - Custom change event.
     */
    onChange?(event: ColorPickerChangeEvent): void;
    /**
     * Callback to invoke when overlay panel becomes visible.
     */
    onShow?(): void;
    /**
     * Callback to invoke when overlay panel becomes hidden.
     */
    onHide?(): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * **PrimeReact - ColorPicker**
 *
 * _ColorPicker is an input component to select a color._
 *
 * [Live Demo](https://www.primefaces.org/primereact/colorpicker/)
 * --- ---
 * ![PrimeReact](https://www.primereact.org/images/logo-100.png)
 *
 * @group Component
 */
export declare class ColorPicker extends React.Component<ColorPickerProps, any> {
    /**
     * Used to show the overlay.
     */
    public show(): void;
    /**
     * Used to hide the overlay.
     */
    public hide(): void;
    /**
     * Used to focus the component.
     */
    public focus(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
    /**
     * Used to get input element.
     * @return {HTMLInputElement} Input element
     */
    public getInput(): HTMLInputElement;
    /**
     * Used to get overlay element.
     * @return {HTMLElement} Overlay element
     */
    public getOverlay(): HTMLElement;
}
