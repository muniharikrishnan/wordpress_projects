import { r as registerInstance, c as createEvent, h, a as getElement } from './index-644f5478.js';
import { F as FormSubmitController } from './form-data-dd63c61f.js';
import { i as isRtl } from './page-align-8602c4c7.js';

const scCheckboxCss = ":host{display:block}.checkbox{display:flex;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;cursor:pointer}.checkbox__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-checkbox-size);height:var(--sc-checkbox-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:2px;background-color:var(--sc-input-background-color);color:var(--sc-color-white);transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--sc-checkbox-size);height:var(--sc-checkbox-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{opacity:0.8}.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control{border-color:var(--sc-color-white);background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.checkbox--disabled{opacity:0.5;cursor:not-allowed}.checkbox__label{line-height:var(--sc-checkbox-size);margin-top:var(--sc-input-border-width);margin-left:0.5em;flex:1}.checkbox--is-required .checkbox__label:after{content:\" *\";color:var(--sc-color-danger-500)}::slotted(*){display:inline-block}.checkbox--is-rtl .checkbox__label{margin-left:0;margin-right:0.5em}";

let id = 0;
const ScCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scBlur = createEvent(this, "scBlur", 7);
    this.scChange = createEvent(this, "scChange", 7);
    this.scFocus = createEvent(this, "scFocus", 7);
    this.inputId = `checkbox-${++id}`;
    this.labelId = `checkbox-label-${id}`;
    this.hasFocus = false;
    this.name = undefined;
    this.value = undefined;
    this.disabled = false;
    this.edit = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.input.indeterminate = this.indeterminate;
  }
  /** Simulates a click on the checkbox. */
  async triggerClick() {
    return this.input.click();
  }
  /** Sets focus on the checkbox. */
  async triggerFocus(options) {
    return this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
  async triggerBlur() {
    return this.input.blur();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  async reportValidity() {
    this.invalid = !this.input.checkValidity();
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.scBlur.emit();
  }
  handleFocus() {
    this.hasFocus = true;
    this.scFocus.emit();
  }
  handleLabelMouseDown() {
    // Prevent clicks on the label from briefly blurring the input
    // event.preventDefault();
    this.input.focus();
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.scChange.emit();
  }
  componentDidLoad() {
    this.formController = new FormSubmitController(this.el, {
      value: (control) => (control.checked ? control.value : undefined),
    }).addFormData();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
  }
  render() {
    const Tag = this.edit ? 'div' : 'label';
    return (h(Tag, { part: "base", class: {
        'checkbox': true,
        'checkbox--is-required': this.required,
        'checkbox--checked': this.checked,
        'checkbox--disabled': this.disabled,
        'checkbox--focused': this.hasFocus,
        'checkbox--indeterminate': this.indeterminate,
        'checkbox--is-rtl': isRtl()
      }, htmlFor: this.inputId, onMouseDown: () => this.handleLabelMouseDown() }, h("span", { part: "control", class: "checkbox__control" }, this.checked ? (h("span", { part: "checked-icon", class: "checkbox__icon" }, h("svg", { viewBox: "0 0 16 16" }, h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" }, h("g", { stroke: "currentColor", "stroke-width": "2" }, h("g", { transform: "translate(3.428571, 3.428571)" }, h("path", { d: "M0,5.71428571 L3.42857143,9.14285714" }), h("path", { d: "M9.14285714,0 L3.42857143,9.14285714" }))))))) : (''), !this.checked && this.indeterminate ? (h("span", { part: "indeterminate-icon", class: "checkbox__icon" }, h("svg", { viewBox: "0 0 16 16" }, h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round" }, h("g", { stroke: "currentColor", "stroke-width": "2" }, h("g", { transform: "translate(2.285714, 6.857143)" }, h("path", { d: "M10.2857143,1.14285714 L1.14285714,1.14285714" }))))))) : (''), h("input", { id: this.inputId, ref: el => (this.input = el), type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, required: this.required, role: "checkbox", "aria-checked": this.checked ? 'true' : 'false', "aria-labelledby": this.labelId, onClick: () => this.handleClick(), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() })), h("span", { part: "label", id: this.labelId, class: "checkbox__label" }, h("slot", null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "checked": ["handleStateChange"],
    "indeterminate": ["handleStateChange"]
  }; }
};
ScCheckbox.style = scCheckboxCss;

export { ScCheckbox as sc_checkbox };

//# sourceMappingURL=sc-checkbox.entry.js.map