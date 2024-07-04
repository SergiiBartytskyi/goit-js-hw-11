import{i as l,S as f}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d="/goit-js-hw-11/assets/iconSuccess-286069d5.svg",m="/goit-js-hw-11/assets/iconError-864cff06.svg";l.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function h(o){l.success({title:"OK",message:`Hooray! We found ${o} images.`,iconUrl:d,theme:"dark",color:"rgb(89, 161, 13)"})}function y(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,theme:"dark",color:"rgb(239, 64, 64)"})}const p="https://pixabay.com/api/",g={}.VITE_API_KEY;class b{constructor(){this.searchQuery=""}fetchQuery(){const t=new URLSearchParams({key:g,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${p}?${t}`).then(s=>{if(s.status!==200)throw new Error(s.statusText);return s.json()})}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}function L(o){return o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:a,downloads:u})=>`
  <div class="photo-card gallery__item">
    <a href="${s}" class="gallery__link">
      <img src="${t}" alt="${n}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${e}
      </p>
      <p class="info-item">
        <b>Views </b>${r}
      </p>
      <p class="info-item">
        <b>Comments </b>${a}
      </p>
      <p class="info-item">
        <b>Downloads </b>${u}
      </p>
    </div>
  </div>
`).join("")}function S(o){i.gallery.insertAdjacentHTML("beforeend",L(o))}const c=new b,v=new f(".gallery a",{captionsData:"alt",captionDelay:250});i.loader.classList.add("disable");i.formSearch.addEventListener("submit",w);function w(o){o.preventDefault();const t=o.currentTarget;c.query=t.elements.searchQuery.value,c.query&&(i.gallery.innerHTML="",i.loader.classList.remove("disable"),c.fetchQuery().then(({totalHits:s,hits:n})=>{s?(h(s),S(n),v.refresh()):y()}).catch(s=>console.log(s)).finally(()=>{t.reset(),i.loader.classList.add("disable")}))}
//# sourceMappingURL=commonHelpers.js.map
