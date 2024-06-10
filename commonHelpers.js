import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="43934204-71edb5ce863d740adbd705f51",m="https://pixabay.com/api/";function g(o){const r=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});return fetch(`${m}?${r}`).then(i=>{if(i.status!==200)throw new Error(i.statusText);return i.json()})}function y(o){return o.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:t,comments:a,downloads:d})=>`
  <div class="photo-card gallery__item">
    <a href="${i}" class="gallery__link">
      <img src="${r}" alt="${n}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes </b>${e}
      </p>
      <p class="info-item">
        <b>Views </b>${t}
      </p>
      <p class="info-item">
        <b>Comments </b>${a}
      </p>
      <p class="info-item">
        <b>Downloads </b>${d}
      </p>
    </div>
  </div>
`).join("")}const s={formSearch:document.getElementById("search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let c="";const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});l.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});s.loader.classList.add("disable");s.formSearch.addEventListener("submit",h);function h(o){o.preventDefault(),c=o.currentTarget.elements.searchQuery.value,c&&(s.loader.classList.remove("disable"),g(c).then(r=>{s.loader.classList.add("disable"),r.totalHits?(s.gallery.innerHTML="",b(r.totalHits),s.gallery.insertAdjacentHTML("beforeend",y(r.hits)),p.refresh()):(s.gallery.innerHTML="",L())}).catch(r=>console.log(r)).finally(s.formSearch.reset()))}function b(o){l.success({title:"OK",message:`Hooray! We found ${o} images.`,iconUrl:"./img/iconSuccess.svg",theme:"dark",color:"rgb(89, 161, 13)"})}function L(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/iconError.svg",theme:"dark",color:"rgb(239, 64, 64)"})}
//# sourceMappingURL=commonHelpers.js.map
