import{__}from"@wordpress/i18n";export const zones={ca_gst:{label:__("GST Number","surecart"),label_small:__("CA GST","surecart")},au_abn:{label:__("ABN Number","surecart"),label_small:__("AU ABN","surecart")},gb_vat:{label:__("VAT Number","surecart"),label_small:__("UK VAT","surecart")},eu_vat:{label:__("VAT Number","surecart"),label_small:__("EU VAT","surecart")},other:{label:__("Tax ID","surecart"),label_small:__("Other","surecart")}};export const getType=a=>"CA"===(a=a?a.toUpperCase():a)?"ca_gst":"AU"===a?"au_abn":"GB"===a?"gb_vat":["AT","BE","EU","BG","HR","CY","CZ","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","RO","SK","SI","ES","SE"].includes(a)?"eu_vat":null;export const formatTaxDisplay=a=>a?`${__("Tax")}: ${a||""}`:__("Tax","surecart");