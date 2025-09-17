import{a as f,i as m,S as L}from"./assets/vendor-CbwwRNAc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v="21847975-d0fb10f6989c918e9c55b7840";f.defaults.baseURL="https://pixabay.com/api";async function b(t,a=1,i=20,s="photo",e="horizontal",r=!0){return(await f.get("/",{params:{key:v,q:t,page:a,per_page:i,image_type:s,orientation:e,safesearch:r}})).data}function w(t,a){const i=t.map(s=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
              <img
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
              />
              <ul class="image-details">
                <li class="image-details-item">
                  <p>Likes</p>
                  <p>${s.likes}</p>
                </li>
                <li class="image-details-item">
                  <p>Views</p>
                  <p>${s.views}</p>
                </li>
                <li class="image-details-item">
                  <p>Comments</p>
                  <p>${s.comments}</p>
                </li>
                <li class="image-details-item">
                  <p>Downloads</p>
                  <p>${s.downloads}</p>
                </li>
              </ul>
            </a>
          </li>
      `).join("");a.insertAdjacentHTML("beforeend",i)}let l="",g="",n=1,p=15;const u=document.querySelector("form.search-form"),h=document.querySelector("ul.gallery"),c=document.querySelector("button.load-more-btn"),d=document.querySelector("span.loader");u.addEventListener("input",t=>{l=t.target.value});u.addEventListener("submit",t=>{if(t.preventDefault(),!l){m.warning({icon:"",position:"topRight",message:"Please, fill in the search field"});return}h.innerHTML="",n=1,g=l,y(),l="",u.reset()});c.addEventListener("click",q);var P=new L("ul.gallery a",{captionsData:"alt",captionDelay:250});async function y(){c.classList.add("visually-hidden"),d.classList.remove("visually-hidden");try{const t=await b(g,n,p);if(n+=1,t.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");w(t.hits,h),P.refresh(),d.classList.add("visually-hidden"),S(n,p,t.totalHits)}catch(t){d.classList.add("visually-hidden"),m.error({icon:"",position:"topRight",message:t.message})}}function S(t,a,i){const s=Math.ceil(i/a);if(t>s)return m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});c.classList.remove("visually-hidden")}function q(){c.classList.add("visually-hidden"),y()}
//# sourceMappingURL=index.js.map
