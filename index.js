import{a as p,S as m,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="57432104-af322cf6064c3c38738d72266",y="https://pixabay.com/api/";function h(a){return p.get(y,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),v=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(a){const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:o,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${r}" alt="${e}" loading="lazy" />
          </a>
          <div class="image-info">
            <div class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${s}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${o}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${u}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${d}</span>
            </div>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),v.refresh()}function L(){l.innerHTML=""}function S(){c.classList.add("is-visible")}function q(){c.classList.remove("is-visible")}const f=document.querySelector(".form");f.addEventListener("submit",w);function w(a){a.preventDefault();const t=a.currentTarget.elements["search-text"].value.trim();if(t===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S(),h(t).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}b(r.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"})}).finally(()=>{q(),f.reset()})}
//# sourceMappingURL=index.js.map
