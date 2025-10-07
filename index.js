import{a as g,i as m,S as L}from"./assets/vendor-CbwwRNAc.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="21847975-d0fb10f6989c918e9c55b7840";g.defaults.baseURL="https://pixabay.com/api";async function b(e,i=1,o=20,r="photo",t="horizontal",s=!0){return(await g.get("/",{params:{key:v,q:e,page:i,per_page:o,image_type:r,orientation:t,safesearch:s}})).data}function w(e,i){const o=e.map(r=>`
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
      `).join("");i.insertAdjacentHTML("beforeend",o)}let l="",f="",n=1,p=15;const u=document.querySelector("form.form"),h=document.querySelector("ul.gallery"),c=document.querySelector("button.load-more-btn"),d=document.querySelector("div.loader-box");u.addEventListener("input",e=>{l=e.target.value});u.addEventListener("submit",e=>{if(e.preventDefault(),!l){m.warning({icon:"",position:"topRight",message:"Please, fill in the search field"});return}h.innerHTML="",n=1,f=l,y(),l="",u.reset()});c.addEventListener("click",q);var P=new L("ul.gallery a",{captionsData:"alt",captionDelay:250});async function y(){c.classList.add("visually-hidden"),d.classList.remove("visually-hidden");try{const e=await b(f,n,p);if(n+=1,e.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");w(e.hits,h),P.refresh(),d.classList.add("visually-hidden"),S(n,p,e.totalHits)}catch(e){d.classList.add("visually-hidden"),m.error({icon:"",position:"topRight",message:e.message})}}function S(e,i,o){const r=Math.ceil(o/i);if(e>r)return m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});c.classList.remove("visually-hidden"),R()}function q(){c.classList.add("visually-hidden"),y()}function R(){const i=document.querySelector("ul.gallery .gallery-item").getBoundingClientRect().height;setTimeout(()=>{window.scrollBy({top:i*2,behavior:"smooth"})},500)}
//# sourceMappingURL=index.js.map
