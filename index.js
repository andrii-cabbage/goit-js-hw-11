import{i as c,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="44952732-afe4551e0894d66c0b6ee4476";function p(s){const i=`https://pixabay.com/api/?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function f(){c.show({message:"Sorry, there are no images matching your search query. Please try again!",class:"toast-style",messageColor:"white",titleColor:"white",iconColor:"white"})}function g(){c.info({title:"Info",message:"No images found.",class:"toast-style",messageColor:"white",titleColor:"white",iconColor:"white"})}function h({webformatURL:s,largeImageURL:i,tags:n,likes:a,views:e,comments:t,downloads:r}){return`
  <div class ="image-container">
    <a href="${i}" class = "image-link">

    <li class="image-item">
      <img src="${s}" alt="${n}" />
    </li>
    <div class ="">
      <li class="image-item-info">
        <p><span class = "comment-head">Likes</span> ${a}</p>
        <p><span class = "comment-head">Views</span> ${e}</p>
        <p><span class = "comment-head">Comments</span> ${t}</p>
        <p><span class = "comment-head">Downloads</span> ${r}</p>
      </li>
    </div>
    </a>
  </div>
  `}const o={submitBtn:document.querySelector(".js-submit-btn"),form:document.querySelector("form[data-form]"),input:document.querySelector("input[data-input]"),gallery:document.querySelector(".gallery"),loading:document.querySelector(".loadingText")},y=new m(".image-link",{captions:!0,captionSelector:"img",captionsData:"alt",captionType:"attr",captionPosition:"bottom",captionDelay:250});function b(s){s.preventDefault();const i=o.input.value.trim(),n=o.input.value;function a(){return i===""?(o.submitBtn.disabled=!0,console.log("input is empty"),f(),!0):(o.submitBtn.disabled=!1,!1)}document.getElementById("loadingText");function e(t){const r=t.hits;let l="";r.forEach(u=>{l+=h(u)}),o.gallery.innerHTML=l,y.refresh()}if(o.gallery.innerHTML="",o.form.reset(),a()){o.submitBtn.disabled=!1;return}o.loading.style.display="block",p(n).then(t=>{setTimeout(()=>{if(o.loading.style.display="none",t.hits.length===0){g();return}e(t),o.gallery.style.display="flex"},1e3)}).catch(t=>{o.loading.style.display="none",iziToast.error({title:"Error",message:"No Images found or an error occurred while fetching images."})})}o.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
