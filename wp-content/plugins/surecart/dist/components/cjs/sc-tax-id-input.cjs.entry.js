'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const index$1 = require('./index-fb76df07.js');
const tax = require('./tax-4f82e63a.js');

const scTaxIdInputCss = ":host{display:block;z-index:3;position:relative}";

const ScTaxIdInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scChange = index.createEvent(this, "scChange", 7);
    this.scInput = index.createEvent(this, "scInput", 7);
    this.scInputType = index.createEvent(this, "scInputType", 7);
    this.scSetState = index.createEvent(this, "scSetState", 7);
    this.country = undefined;
    this.show = false;
    this.type = 'other';
    this.number = null;
    this.status = 'unknown';
    this.loading = undefined;
    this.help = undefined;
    this.otherLabel = wp.i18n.__('Tax ID', 'surecart');
    this.caGstLabel = wp.i18n.__('GST Number', 'surecart');
    this.auAbnLabel = wp.i18n.__('ABN Number', 'surecart');
    this.gbVatLabel = wp.i18n.__('UK VAT', 'surecart');
    this.euVatLabel = wp.i18n.__('EU VAT', 'surecart');
    this.taxIdTypes = [];
    this.required = false;
  }
  async reportValidity() {
    return this.input.reportValidity();
  }
  onLabelChange() {
    tax.zones.ca_gst.label = this.caGstLabel || tax.zones.ca_gst.label;
    tax.zones.au_abn.label = this.auAbnLabel || tax.zones.au_abn.label;
    tax.zones.gb_vat.label = this.gbVatLabel || tax.zones.gb_vat.label;
    tax.zones.eu_vat.label = this.euVatLabel || tax.zones.eu_vat.label;
    tax.zones.other.label = this.otherLabel || tax.zones.other.label;
  }
  componentWillLoad() {
    this.onLabelChange();
  }
  renderStatus() {
    if (this.status === 'valid') {
      return index.h("sc-icon", { name: "check", slot: "prefix", style: { color: 'var(--sc-color-success-500)' } });
    }
    if (this.status === 'invalid') {
      return index.h("sc-icon", { name: "x", slot: "prefix", style: { color: 'var(--sc-color-danger-500)' } });
    }
  }
  filteredZones() {
    if (!!this.taxIdTypes.length) {
      return Object.keys(tax.zones)
        .filter(name => this.taxIdTypes.includes(name))
        .reduce((obj, key) => {
        obj[key] = tax.zones[key];
        return obj;
      }, {});
    }
    return tax.zones;
  }
  onTaxIdTypesChange() {
    // If there is no other type, set the first one as default type.
    if (!!this.taxIdTypes.length) {
      this.type = !this.taxIdTypes.includes('other') ? this.taxIdTypes[0] : 'other';
    }
  }
  getZoneLabel() {
    var _a, _b;
    const filteredZones = this.filteredZones() || {};
    // Get the label of the current type or the other type.
    // If there is no other type, get the first one.
    return ((_a = filteredZones === null || filteredZones === void 0 ? void 0 : filteredZones[(this === null || this === void 0 ? void 0 : this.type) || 'other']) === null || _a === void 0 ? void 0 : _a.label) || ((_b = filteredZones === null || filteredZones === void 0 ? void 0 : filteredZones[Object.keys(filteredZones)[0]]) === null || _b === void 0 ? void 0 : _b.label);
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (index.h(index.Fragment, null, index.h("sc-input", { name: "tax_identifier.number_type", required: this.required, value: this.type, style: { display: 'none' } }), index.h("sc-input", { ref: el => (this.input = el), label: this.getZoneLabel(), "aria-label": wp.i18n.__('Tax ID', 'surecart'), placeholder: wp.i18n.__('Enter Tax ID', 'surecart'), name: "tax_identifier.number", value: this.number, onScInput: (e) => {
        e.stopImmediatePropagation();
        this.scInput.emit({
          number: e.target.value,
          number_type: this.type || 'other',
        });
      }, onScChange: (e) => {
        e.stopImmediatePropagation();
        this.scChange.emit({
          number: e.target.value,
          number_type: this.type || 'other',
        });
      }, help: this.help, required: this.required }, this.loading && this.type === 'eu_vat' ? index.h("sc-spinner", { slot: "prefix", style: { '--spinner-size': '10px' } }) : this.renderStatus(), ((_a = Object.keys(this.filteredZones() || {})) === null || _a === void 0 ? void 0 : _a.length) === 1 ? (index.h("span", { slot: "suffix" }, (_c = (_b = Object.values(this.filteredZones() || {})) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c['label_small'])) : (index.h("sc-dropdown", { slot: "suffix", position: "bottom-right", role: "select", "aria-multiselectable": "false", "aria-label": wp.i18n.__('Select number type', 'surecart') }, index.h("sc-button", { type: "text", slot: "trigger", caret: true, loading: false, style: { color: 'var(--sc-input-label-color)' }, tabindex: "0" }, (_e = (_d = this.filteredZones()) === null || _d === void 0 ? void 0 : _d[(this === null || this === void 0 ? void 0 : this.type) || 'other']) === null || _e === void 0 ? void 0 : _e.label_small), index.h("sc-menu", null, Object.keys(this.filteredZones() || {}).map(name => (index.h("sc-menu-item", { role: "option", onClick: () => {
        this.scInput.emit({
          number: this.number,
          number_type: name,
        });
        this.scChange.emit({
          number: this.number,
          number_type: name,
        });
        this.type = name;
      }, onKeyDown: e => {
        var _a;
        if (e.key === 'Enter') {
          this.scInput.emit({
            number: this.number,
            number_type: name,
          });
          this.scChange.emit({
            number: this.number,
            number_type: name,
          });
          this.type = name;
          (_a = this.input) === null || _a === void 0 ? void 0 : _a.triggerFocus();
          index$1.speak(wp.i18n.sprintf(wp.i18n.__('%s selected', 'surecart'), tax.zones[name].label_small, 'assertive'));
        }
      }, checked: this.type === name, "aria-selected": this.type === name ? 'true' : 'false', "aria-label": tax.zones[name].label_small }, tax.zones[name].label_small)))))))));
  }
  static get watchers() { return {
    "otherLabel": ["onLabelChange"],
    "caGstLabel": ["onLabelChange"],
    "auAbnLabel": ["onLabelChange"],
    "gbVatLabel": ["onLabelChange"],
    "euVatLabel": ["onLabelChange"],
    "taxIdTypes": ["onTaxIdTypesChange"]
  }; }
};
ScTaxIdInput.style = scTaxIdInputCss;

exports.sc_tax_id_input = ScTaxIdInput;

//# sourceMappingURL=sc-tax-id-input.cjs.entry.js.map