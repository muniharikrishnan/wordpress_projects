import { r as registerInstance, h, F as Fragment } from './index-644f5478.js';
import { s as state, o as onChange } from './mutations-b8f9af9f.js';
import { a as formLoading } from './getters-2c9ecd8c.js';
import { l as lockCheckout, b as unLockCheckout } from './mutations-dc690b18.js';
import { c as createOrUpdateCheckout } from './index-d7508e37.js';
import './index-1046c77e.js';
import './utils-00526fde.js';
import './get-query-arg-cb6b8763.js';
import './add-query-args-f4c5962b.js';
import './index-c5a96d53.js';
import './google-357f4c4c.js';
import './currency-728311ef.js';
import './price-178c2e2b.js';
import './store-dde63d4d.js';
import './mutations-8871d02a.js';
import './mutations-0a628afa.js';
import './fetch-2525e763.js';

const scOrderBillingAddressCss = ":host{display:block}.order-billing-address__toggle{margin-bottom:var(--sc-form-row-spacing, var(--sc-spacing-medium))}";

const ScOrderBillingAddress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      this.address = { ...this.address, ...(_a = state.checkout) === null || _a === void 0 ? void 0 : _a.billing_address };
    }
  }
  componentWillLoad() {
    if (this.defaultCountry && !this.address.country) {
      this.address.country = this.defaultCountry;
    }
    this.prefillAddress();
    onChange('checkout', () => this.prefillAddress());
  }
  async updateAddressState(address) {
    var _a, _b;
    if (JSON.stringify(address) === JSON.stringify(this.address))
      return; // no change, don't update.
    this.address = address;
    try {
      lockCheckout('billing-address');
      state.checkout = (await createOrUpdateCheckout({
        id: (_a = state === null || state === void 0 ? void 0 : state.checkout) === null || _a === void 0 ? void 0 : _a.id,
        data: {
          billing_matches_shipping: (_b = state.checkout) === null || _b === void 0 ? void 0 : _b.billing_matches_shipping,
          billing_address: this.address,
        },
      }));
    }
    catch (e) {
      console.error(e);
    }
    finally {
      unLockCheckout('billing-address');
    }
  }
  async onToggleBillingMatchesShipping(e) {
    state.checkout = {
      ...state.checkout,
      billing_matches_shipping: e.target.checked,
    };
  }
  shippingAddressFieldExists() {
    return !!document.querySelector('sc-order-shipping-address');
  }
  render() {
    var _a, _b;
    return (h(Fragment, null, this.shippingAddressFieldExists() && (h("sc-checkbox", { class: "order-billing-address__toggle", onScChange: e => this.onToggleBillingMatchesShipping(e), checked: (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.billing_matches_shipping }, this.toggleLabel)), (!this.shippingAddressFieldExists() || !((_b = state.checkout) === null || _b === void 0 ? void 0 : _b.billing_matches_shipping)) && (h("sc-address", { exportparts: "label, help-text, form-control, input__base, select__base, columns, search__base, menu__base", ref: el => {
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
      }, required: true, loading: formLoading(), address: this.address, "show-name": this.showName, onScChangeAddress: e => this.updateAddressState(e.detail) }))));
  }
};
ScOrderBillingAddress.style = scOrderBillingAddressCss;

export { ScOrderBillingAddress as sc_order_billing_address };

//# sourceMappingURL=sc-order-billing-address.entry.js.map