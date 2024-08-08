'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const mutations = require('./mutations-164b66b1.js');
const getters = require('./getters-1e382cac.js');
const mutations$1 = require('./mutations-7f57e396.js');
const index$1 = require('./index-a9c75016.js');
require('./index-00f0fc21.js');
require('./utils-a086ed6e.js');
require('./get-query-arg-53bf21e2.js');
require('./add-query-args-17c551b6.js');
require('./index-fb76df07.js');
require('./google-62bdaeea.js');
require('./currency-ba038e2f.js');
require('./price-f1f1114d.js');
require('./store-96a02d63.js');
require('./mutations-7113e932.js');
require('./mutations-8d7c4499.js');
require('./fetch-2dba325c.js');

const scOrderBillingAddressCss = ":host{display:block}.order-billing-address__toggle{margin-bottom:var(--sc-form-row-spacing, var(--sc-spacing-medium))}";

const ScOrderBillingAddress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = undefined;
    this.showName = undefined;
    this.namePlaceholder = wp.i18n.__('Name or Company Name', 'surecart');
    this.countryPlaceholder = wp.i18n.__('Country', 'surecart');
    this.cityPlaceholder = wp.i18n.__('City', 'surecart');
    this.line1Placeholder = wp.i18n.__('Address', 'surecart');
    this.line2Placeholder = wp.i18n.__('Address Line 2', 'surecart');
    this.postalCodePlaceholder = wp.i18n.__('Postal Code/Zip', 'surecart');
    this.statePlaceholder = wp.i18n.__('State/Province/Region', 'surecart');
    this.defaultCountry = undefined;
    this.toggleLabel = wp.i18n.__('Billing address is same as shipping', 'surecart');
    this.address = {
      country: null,
      city: null,
      line_1: null,
      line_2: null,
      postal_code: null,
      state: null,
    };
  }
  async reportValidity() {
    var _a, _b;
    if (!this.input)
      return true;
    return (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.reportValidity) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  prefillAddress() {
    var _a;
    // check if address keys are empty, if so, update them.
    const addressKeys = Object.keys(this.address).filter(key => key !== 'country');
    const emptyAddressKeys = addressKeys.filter(key => !this.address[key]);
    if (emptyAddressKeys.length === addressKeys.length) {
      this.address = { ...this.address, ...(_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.billing_address };
    }
  }
  componentWillLoad() {
    if (this.defaultCountry && !this.address.country) {
      this.address.country = this.defaultCountry;
    }
    this.prefillAddress();
    mutations.onChange('checkout', () => this.prefillAddress());
  }
  async updateAddressState(address) {
    var _a, _b;
    if (JSON.stringify(address) === JSON.stringify(this.address))
      return; // no change, don't update.
    this.address = address;
    try {
      mutations$1.lockCheckout('billing-address');
      mutations.state.checkout = (await index$1.createOrUpdateCheckout({
        id: (_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.id,
        data: {
          billing_matches_shipping: (_b = mutations.state.checkout) === null || _b === void 0 ? void 0 : _b.billing_matches_shipping,
          billing_address: this.address,
        },
      }));
    }
    catch (e) {
      console.error(e);
    }
    finally {
      mutations$1.unLockCheckout('billing-address');
    }
  }
  async onToggleBillingMatchesShipping(e) {
    mutations.state.checkout = {
      ...mutations.state.checkout,
      billing_matches_shipping: e.target.checked,
    };
  }
  shippingAddressFieldExists() {
    return !!document.querySelector('sc-order-shipping-address');
  }
  render() {
    var _a, _b;
    return (index.h(index.Fragment, null, this.shippingAddressFieldExists() && (index.h("sc-checkbox", { class: "order-billing-address__toggle", onScChange: e => this.onToggleBillingMatchesShipping(e), checked: (_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.billing_matches_shipping }, this.toggleLabel)), (!this.shippingAddressFieldExists() || !((_b = mutations.state.checkout) === null || _b === void 0 ? void 0 : _b.billing_matches_shipping)) && (index.h("sc-address", { exportparts: "label, help-text, form-control, input__base, select__base, columns, search__base, menu__base", ref: el => {
        this.input = el;
      }, label: this.label || wp.i18n.__('Billing Address', 'surecart'), placeholders: {
        name: this.namePlaceholder,
        country: this.countryPlaceholder,
        city: this.cityPlaceholder,
        line_1: this.line1Placeholder,
        line_2: this.line2Placeholder,
        postal_code: this.postalCodePlaceholder,
        state: this.statePlaceholder,
      }, names: {
        name: 'billing_name',
        country: 'billing_country',
        city: 'billing_city',
        line_1: 'billing_line_1',
        line_2: 'billing_line_2',
        postal_code: 'billing_postal_code',
        state: 'billing_state',
      }, required: true, loading: getters.formLoading(), address: this.address, "show-name": this.showName, onScChangeAddress: e => this.updateAddressState(e.detail) }))));
  }
};
ScOrderBillingAddress.style = scOrderBillingAddressCss;

exports.sc_order_billing_address = ScOrderBillingAddress;

//# sourceMappingURL=sc-order-billing-address.cjs.entry.js.map