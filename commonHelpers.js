import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="/goit-js-hw-11/assets/iconSuccess-286069d5.svg",m="/goit-js-hw-11/assets/iconError-864cff06.svg",g="43934204-71edb5ce863d740adbd705f51",h="https://pixabay.com/api/";function p(o){const t=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${h}?${t}`).then(s=>{if(s.status!==200)throw new Error(s.statusText);return s.json()})}function y(o){return o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:a,downloads:d})=>`
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
        <b>Downloads </b>${d}
      </p>
    </div>
  </div>
`).join("")}const i={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let c="";const b=new u(".gallery a",{captionsData:"alt",captionDelay:250});l.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});i.loader.classList.add("disable");i.formSearch.addEventListener("submit",L);function L(o){o.preventDefault(),c=o.currentTarget.elements.searchQuery.value,c&&(i.loader.classList.remove("disable"),i.gallery.innerHTML="",p(c).then(t=>{t.totalHits?(S(t.totalHits),i.gallery.insertAdjacentHTML("beforeend",y(t.hits)),b.refresh()):v()}).catch(t=>console.log(t)).finally(()=>{i.formSearch.reset(),i.loader.classList.add("disable")}))}function S(o){l.success({title:"OK",message:`Hooray! We found ${o} images.`,iconUrl:f,theme:"dark",color:"rgb(89, 161, 13)"})}function v(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:m,theme:"dark",color:"rgb(239, 64, 64)"})}
//# sourceMappingURL=commonHelpers.js.map
