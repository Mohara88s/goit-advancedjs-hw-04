import{a as m,i as p,S as u}from"./assets/vendor-CbwwRNAc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const d="21847975-d0fb10f6989c918e9c55b7840";m.defaults.baseURL="https://pixabay.com/api";async function f(a,t=10,i="photo",r="horizontal",e=!0){return(await m.get("/",{params:{key:d,q:a,per_page:t,image_type:i,orientation:r,safesearch:e}})).data}function g(a,t){const i=a.map(r=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
              <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
              />
              <ul class="image-details">
                <li class="image-details-item">
                  <p>Likes</p>
                  <p>${r.likes}</p>
                </li>
                <li class="image-details-item">
                  <p>Views</p>
                  <p>${r.views}</p>
                </li>
                <li class="image-details-item">
                  <p>Comments</p>
                  <p>${r.comments}</p>
                </li>
                <li class="image-details-item">
                  <p>Downloads</p>
                  <p>${r.downloads}</p>
                </li>
              </ul>
            </a>
          </li>
      `).join("");t.insertAdjacentHTML("beforeend",i)}let n="";const c=document.querySelector("form.search-form"),o=document.querySelector("ul.gallery");c.addEventListener("input",a=>{n=a.target.value});c.addEventListener("submit",async a=>{if(a.preventDefault(),!n){p.warning({icon:"",position:"topRight",message:"Please, fill the search field"});return}o.innerHTML='<span class="loader"></span>';try{const t=await f(n,24);if(o.innerHTML="",t.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");g(t.hits,o),h.refresh()}catch(t){o.innerHTML="",p.error({icon:"",position:"topRight",message:t.message})}n="",c.reset()});var h=new u("ul.gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
