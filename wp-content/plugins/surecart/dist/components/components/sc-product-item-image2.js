import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{s as sizeImage,g as getFeaturedProductMediaAttributes}from"./media.js";import{a as applyFilters}from"./index6.js";const scProductItemImageCss=":host{border-style:none}.product-img{max-width:100%;aspect-ratio:var(--sc-product-image-aspect-ratio);padding-top:var(--sc-product-image-padding-top, 0);padding-bottom:var(--sc-product-image-padding-bottom, 0);padding-left:var(--sc-product-image-padding-left, 0);padding-right:var(--sc-product-image-padding-right, 0);margin-top:var(--sc-product-image-margin-top, 0);margin-bottom:var(--sc-product-image-margin-bottom, 0);margin-left:var(--sc-product-image-margin-left, 0);margin-right:var(--sc-product-image-margin-right, 0);border:solid var(--sc-product-image-border-width) var(--sc-product-image-border-color);border-radius:var(--sc-product-image-border-radius);overflow:hidden}.product-img>img{width:100%;height:100%;box-sizing:border-box;object-fit:contain;display:block;transition:transform var(--sc-transition-medium) ease}.product-img.is_covered>img{object-fit:cover}.product-img.is_contained>img{object-fit:contain}.product-img_placeholder{width:100%;height:100%;background-color:var(--sc-color-gray-300)}.product-img:hover img{transform:scale(1.05)}",ScProductItemImage=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.product=void 0,this.sizing=void 0}getSrc(){var t,i,e,r,o,d,a,c,s,m,u;return(null===(i=null===(t=this.product)||void 0===t?void 0:t.featured_product_media)||void 0===i?void 0:i.url)?null===(r=null===(e=this.product)||void 0===e?void 0:e.featured_product_media)||void 0===r?void 0:r.url:(null===(a=null===(d=null===(o=this.product)||void 0===o?void 0:o.featured_product_media)||void 0===d?void 0:d.media)||void 0===a?void 0:a.url)?sizeImage(null===(m=null===(s=null===(c=this.product)||void 0===c?void 0:c.featured_product_media)||void 0===s?void 0:s.media)||void 0===m?void 0:m.url,applyFilters("surecart/product-list/media/size",900)):`${null===(u=window.scData)||void 0===u?void 0:u.plugin_url}/images/placeholder.jpg`}render(){const{alt:t,title:i}=getFeaturedProductMediaAttributes(this.product);return h(Host,{style:{borderStyle:"none"}},h("div",{class:{"product-img":!0,is_contained:"contain"===this.sizing,is_covered:"cover"===this.sizing}},this.getSrc()?h("img",{src:this.getSrc(),alt:t,...i?{title:i}:{}}):h("div",{class:"product-img_placeholder"})))}static get style(){return scProductItemImageCss}},[1,"sc-product-item-image",{product:[16],sizing:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-product-item-image"].forEach((t=>{"sc-product-item-image"===t&&(customElements.get(t)||customElements.define(t,ScProductItemImage))}))}export{ScProductItemImage as S,defineCustomElement as d};