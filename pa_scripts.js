//Menuwrap Icons
function waitForElement(e,t){const n=new MutationObserver((i=>{for(const o of i)if("childList"===o.type&&document.querySelector(e)){n.disconnect(),t(document.querySelector(e));break}})),i=document.querySelector(".menuwrap");i&&n.observe(i,{childList:!0,subtree:!0})}function addIdsToMenuItems(e){const t=e.querySelector(".left");t&&(t.style.visibility="visible"),e.querySelectorAll(".left li.menu").forEach((e=>{const t=e.querySelector("a");if(t){const n=t.getAttribute("href"),i=(t.innerHTML.trim(),t.querySelector("span")?.innerHTML.trim());e.querySelector(".nick")?e.id="nick":"https://msg.forumcommunity.net/?act=Msg&CODE=01&c=655775"===n?e.id="messenger":"https://msg.forumcommunity.net/?act=UserCP&CODE=26&c=655775"===n?e.id="topics":"#notifications"===n?e.id="notif":e.querySelector('form[action="/?act=Mod"]')||["&nbsp;Moderation","&nbsp;Moderazione","&nbsp;Moderación","&nbsp;Modération","&nbsp;Mäßigung","&nbsp;Moderação"].includes(i)?e.id="mod":(["&nbsp;Administration","&nbsp;Amministrazione","&nbsp;Administración","&nbsp;Verwaltung","&nbsp;Administração"].includes(i)||"https://www.forumcommunity.net/?cid=655775"===n)&&(e.id="admin"),"&nbsp;Messenger"===i&&(e.id="messenger")}})),e.querySelectorAll(".left li:not(.menu)").forEach((e=>{const t=e.querySelector("a");t&&("HOME"===t.textContent.trim()?e.id="pahome":"/latestupdates"===t.getAttribute("href")&&(e.id="updates"))}))}waitForElement(".menuwrap",addIdsToMenuItems);
//Slideshow
!function(){const e=document.querySelector(".slider").children,t=document.querySelector(".prev"),c=document.querySelector(".next"),i=document.querySelector(".indicator");let n,r=0;function updateCircleIndicator(){const e=document.querySelector(".indicator .active");e&&e.classList.remove("active"),i.children[r].classList.add("active")}function nextSlide(){r=r===e.length-1?0:r+1,changeSlide()}function changeSlide(){for(let t=0;t<e.length;t++)e[t].classList.remove("active");e[r].classList.add("active")}function resetTimer(){clearInterval(n),n=setInterval(autoPlay,4e3)}function autoPlay(){nextSlide(),updateCircleIndicator()}function createIndicatorCircles(){i.innerHTML="";for(let t=0;t<e.length;t++){const e=document.createElement("div");e.addEventListener("click",(()=>{r=t,changeSlide(),updateCircleIndicator(),resetTimer()})),e.id=t,0===t&&e.classList.add("active"),i.appendChild(e)}}t.addEventListener("click",(()=>{r=0===r?e.length-1:r-1,changeSlide(),updateCircleIndicator(),resetTimer()})),c.addEventListener("click",(()=>{nextSlide(),updateCircleIndicator(),resetTimer()})),createIndicatorCircles(),resetTimer(),new MutationObserver((function handleMutation(e){e.forEach((e=>{if(e.addedNodes.length)for(let t of e.addedNodes)t.nodeType===Node.ELEMENT_NODE&&t.matches(".slider, .prev, .next, .indicator")&&(createIndicatorCircles(),resetTimer())}))})).observe(document.body,{childList:!0,subtree:!0})}();
//Enhancer
function waitForElement(e,t){const n=document.querySelector(e);if(n)t(n);else{const n=new MutationObserver((o=>{o.forEach((o=>{Array.from(o.addedNodes).forEach((o=>{o.nodeType===Node.ELEMENT_NODE&&(o.matches(e)?(n.disconnect(),t(o)):(o.querySelectorAll("a").forEach((e=>{const t=e.innerHTML.trim();"&lt;"===t?replaceGoToLeftChevron(e):"&gt;"===t?replaceGoToRightChevron(e):isGoToFirstUnreadText(t)&&replaceGoToFirstUnread(e)})),o.querySelectorAll('input[type="submit"][value="search"].codebuttons, input[type="submit"][value="cerca"].codebuttons').forEach((e=>{convertInputToButton(e)})),o.querySelectorAll('input[type="submit"][value="Add Reply"].forminput,input[type="submit"][value="Invia Risposta"].forminput,input[type="submit"][value="Enviar Respuesta"].forminput,input[type="submit"][value="Ajoute Réponse"].forminput,input[type="submit"][value="Antwort Hinzufügen"].forminput,input[type="submit"][value="Responder"].forminput').forEach((e=>{convertAddReplyInputToButton(e)})),o.querySelectorAll('input[type="submit"][name="delvote"][value="Annulla"].codebuttons').forEach((e=>{changeCancelVoteButton(e)})),o.querySelectorAll('input[type="button"][value="Go Back"].forminput').forEach((e=>{convertGoBackInputToButton(e)})),o.querySelectorAll('input[type="submit"][value="Register"].forminput').forEach((e=>{convertRegisterInputToButton(e)})),o.querySelectorAll('input[type="submit"][value="Log In"].forminput').forEach((e=>{convertLogInInputToButton(e)})),"INPUT"!==o.tagName||"submit"!==o.type||"Submit Modified Post"!==o.value&&"Invia il messaggio modificato"!==o.value&&"Enviar el mensaje modificado"!==o.value&&"Envoie le message modifié"!==o.value&&"Verschicke die abgeänderte Nachricht"!==o.value&&"Salvar alterações"!==o.value||convertSubmitModifiedPostInputToDiv(o),o.matches("#send .send .darkbar")&&o.childNodes.forEach((e=>{e.nodeType===Node.TEXT_NODE&&(e.textContent=e.textContent.replace(/\u00A0/g,""))})),o.matches('.error .skin_tbl[style="width:60%;min-width:500px"] .Sub.Item')&&(o.innerHTML=o.innerHTML.replace(/(\s*&nbsp;\s*)+/g,""))))}))}))}));n.observe(document.body,{childList:!0,subtree:!0})}}function copyNickToDetails(e){const t=e.querySelector(".post .nick"),n=e.querySelector(".post .details");if(t&&n){const e=t.cloneNode(!0),o=n.querySelector(".post .avatar");o?n.insertBefore(e,o.nextSibling):n.appendChild(e)}}function addShareButton(e){const t=document.createElement("a");t.className="share",t.innerHTML='<i class="fa-regular fa-share-nodes"></i>',t.title="Share this thread";const n=e.closest(".post").querySelector(".title2.top .right.Item.Justify .mini_buttons.rt.Sub");if(n){const e=n.querySelector("a:last-of-type");e?n.insertBefore(t,e):n.appendChild(t)}else e.insertBefore(t,e.firstChild);t.addEventListener("click",(()=>{handleShareButtonClick(e)}))}function handleShareButtonClick(e){const t=e.closest(".post").querySelector(".title2.top .right.Item.Justify .lt.Sub a:nth-of-type(2)");t&&navigator.clipboard.writeText(t.href).then((()=>{const e=document.createElement("div");e.className="clipbd",e.innerHTML='<span><i class="fa-regular fa-copy"></i> Link copied to clipboard</span>',document.body.appendChild(e),setTimeout((()=>{document.body.removeChild(e)}),3820)})).catch((e=>{console.error("Failed to copy link: ",e)}))}function isGoToFirstUnreadText(e){return["Go to first unread post","Ultimo messaggio","Ir al ultimo mensaje","Dernier message","Letzten Nachricht","Ir para o primeiro post não lido"].includes(e)}function replaceGoToFirstUnread(e){e.innerHTML='<i class="fa-regular fa-chevrons-right"></i>'}function replaceGoToLeftChevron(e){e.innerHTML='<i class="fa-solid fa-chevron-left"></i>'}function replaceGoToRightChevron(e){e.innerHTML='<i class="fa-regular fa-chevron-right"></i>'}function convertInputToButton(e){const t=document.createElement("button");t.type="submit",t.value=e.value,t.className=e.className;const n=document.createElement("i");n.className="fa-regular fa-magnifying-glass",t.appendChild(n),e.replaceWith(t)}function convertAddReplyInputToButton(e){const t=document.createElement("button");t.type="submit",t.value=e.value,t.className=e.className,t.setAttribute("aria-label","Add Reply"),t.innerHTML='<i class="fa-regular fa-reply"></i> POST REPLY',e.replaceWith(t)}function changeCancelVoteButton(e){e.value="CANCEL VOTE"}function convertPostNewTopicInputToButton(e){const t=document.createElement("button");t.type="submit",t.value=e.value,t.className=e.className,t.innerHTML='<i class="fa-regular fa-pen"></i> POST NEW TOPIC',e.replaceWith(t)}function convertGoBackInputToButton(e){const t=document.createElement("button");t.type="button",t.value=e.value,t.className=e.className,t.setAttribute("onclick",e.getAttribute("onclick")),t.innerHTML='<i class="fa-regular fa-arrow-left"></i> GO BACK',e.replaceWith(t)}function convertRegisterInputToButton(e){const t=document.createElement("button");t.type="submit",t.value=e.value,t.className=e.className,t.setAttribute("style",e.getAttribute("style")),t.innerHTML='<i class="fa-regular fa-pen-to-square"></i> REGISTER',e.replaceWith(t)}function convertLogInInputToButton(e){const t=document.createElement("button");t.type="submit",t.value=e.value,t.className=e.className,t.setAttribute("style",e.getAttribute("style")),t.innerHTML='<i class="fa-regular fa-right-to-bracket"></i> LOG IN',e.replaceWith(t)}function createSearchButton(){const e=document.querySelector('input[type="submit"][value="Search this forum"].forminput, input[type="submit"][value="Cerca in questo forum"].forminput, input[type="submit"][value="Busca en este foro"].forminput, input[type="submit"][value="Cherche dans ce forum"].forminput, input[type="submit"][value="Suche in diesem Forum"].forminput, input[type="submit"][value="Procure neste fórum"].forminput');if(e){const t=document.createElement("button");t.type="submit",t.value="Search this forum",t.className="forminput",t.setAttribute("aria-label","Search"),Object.assign(t.style,{background:"none",border:"none",color:"var(--ltcol)",height:".875rem",marginLeft:"5px",marginRight:"5px",padding:"0",position:"relative",width:".875rem"});const n=document.createElement("i");n.className="fa-regular fa-magnifying-glass",Object.assign(n.style,{left:"50%",position:"absolute",transform:"translate(-50%, -50%)",top:"50%"}),t.appendChild(n),e.replaceWith(t)}}function createLoginButton(){const e=document.querySelector('input[type="submit"][value="\u00A0Login\u00A0"]');if(e){const t=document.createElement("button");t.type="submit",t.value=" Login ",t.className="log",t.setAttribute("aria-label","Login"),Object.assign(t.style,{background:"none",border:"none",color:"var(--mdcol)",fontSize:"1rem",padding:"0"});const n=document.createElement("i");n.className="fa-regular fa-right-to-bracket",t.appendChild(n),e.replaceWith(t)}}function createIconContainer(e,t,n){const o=document.createElement("span");o.className=t;const a=document.createElement("i");a.className=n,o.appendChild(a),o.appendChild(e.cloneNode(!0)),e.replaceWith(o)}function enhanceCallback(e){e.forEach((e=>{"childList"===e.type&&e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&(e.matches(".post")&&copyNickToDetails(e),e.matches(".post .title2.top .right.Item.Justify .mini_buttons.rt.Sub")&&addShareButton(e),e.matches(".menuwrap .login")&&cleanMenuWrapLogin(),createSearchButton(),createLoginButton(),e.matches("#send .send .darkbar")&&e.childNodes.forEach((e=>{e.nodeType===Node.TEXT_NODE&&(e.textContent=e.textContent.replace(/\u00A0/g,""))})),e.matches('.error .skin_tbl[style="width:60%;min-width:500px"] .Sub.Item')&&(e.innerHTML=e.innerHTML.replace(/(\s*&nbsp;\s*)+/g,"")))}))}))}function convertSubmitInputToButton(){const e=document.querySelector('input[type="submit"][name="submit_post"]');if(e){const t=document.createElement("button");t.type="submit",t.name=e.name,t.value=e.value,t.tabIndex=e.tabIndex,t.className=e.className,t.innerHTML='<i class="fa-regular fa-floppy-disk"></i>&nbsp;Save',e.style.display="none",e.parentNode.replaceChild(t,e)}}waitForElement('input[type="submit"][value="Search this forum"].forminput, input[type="submit"][value="Cerca in questo forum"].forminput, input[type="submit"][value="Busca en este foro"].forminput, input[type="submit"][value="Cherche dans ce forum"].forminput, input[type="submit"][value="Suche in diesem Forum"].forminput, input[type="submit"][value="Procure neste fórum"].forminput',(e=>{createSearchButton()})),waitForElement('input[type="submit"][value=" Login "]',(e=>{createLoginButton()})),waitForElement('input[type="submit"][value="Add Reply"].forminput,input[type="submit"][value="Invia Risposta"].forminput,input[type="submit"][value="Enviar Respuesta"].forminput,input[type="submit"][value="Ajoute Réponse"].forminput,input[type="submit"][value="Antwort Hinzufügen"].forminput,input[type="submit"][value="Responder"].forminput',(e=>{convertAddReplyInputToButton(e)})),waitForElement('input[type="submit"][name="delvote"][value="Annulla"].codebuttons',(e=>{changeCancelVoteButton(e)})),waitForElement('input[type="submit"][name="submit_post"][value="Post New Topic"].forminput',(e=>{convertPostNewTopicInputToButton(e)})),waitForElement(".profile-group",(e=>{const t=e.cloneNode(!0);waitForElement(".profile .nick",(n=>{const o=document.createElement("div");o.className="profile_info",o.appendChild(t),o.appendChild(n),waitForElement(".profile .Sub.left",(t=>{t.appendChild(o),e.parentNode.removeChild(e)}))}))}));const enhanceObserver=new MutationObserver(enhanceCallback);enhanceObserver.observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("a").forEach((e=>{const t=e.innerHTML.trim();("&lt;"===t||"&gt;"===t||isGoToFirstUnreadText(t))&&("&lt;"===t?replaceGoToLeftChevron(e):"&gt;"===t?replaceGoToRightChevron(e):replaceGoToFirstUnread(e))})),document.querySelectorAll(".post .title2.top .right.Item.Justify .mini_buttons.rt.Sub").forEach(addShareButton),document.querySelectorAll(".post").forEach(copyNickToDetails),convertSubmitInputToButton();
//Emojione 
function applyEmojiTransformation(e){e.classList.contains("[class*=e1a-]")||(e.innerHTML=emojione.toImage(emojione.shortnameToUnicode(emojione.toShort(e.innerHTML))))}function observeElements(e){document.querySelectorAll(e).forEach(applyEmojiTransformation);new MutationObserver((o=>{o.forEach((o=>{"childList"===o.type&&o.addedNodes.forEach((o=>{o.nodeType===Node.ELEMENT_NODE&&(o.matches(e)||o.querySelector(e))&&applyEmojiTransformation(o.matches(e)?o:o.querySelector(e))}))}))})).observe(document.body,{childList:!0,subtree:!0})}observeElements(".post .color, .post .quote span, .tmsg, .profile-interests, .web a, .mtitle, .notification-text");
//Post Avatars
(function(){const AVATAR_COLORS=['#ff7770','#ff6b6b','#ff5154','#ffcb69','#fdc26d','#ffa96c','#ff9f1c','#ff8f5c','#9ce37d','#74c365','#16c172','#3ab795','#4ecdc4','#2dc7ff','#0eb1d2','#009bf5','#a3bcf9','#9b9ece','#9792e3','#8075ff','#b455b0','#a755c2','#a5acb5','#889696'];function getColorForCharacterCount(count){const rangeSize=Math.ceil(AVATAR_COLORS.length/26);return AVATAR_COLORS[Math.min(Math.floor(count/rangeSize),AVATAR_COLORS.length-1)];}function createAvatarSpan(userName,parentElement){const firstLetter=userName.charAt(0).toUpperCase(),avatarSpan=document.createElement('span');avatarSpan.className='avatar';avatarSpan.innerHTML=firstLetter;avatarSpan.style.backgroundColor=getColorForCharacterCount(userName.length);avatarSpan.style.color='#F7FFF7';parentElement.innerHTML='';parentElement.appendChild(avatarSpan);}function replaceAvatarsInPosts(){const posts=document.querySelectorAll('.post');posts.forEach(post=>{const avatarElement=post.querySelector('.left .avatar'),userLink=post.querySelector('.nick a'),userNickElement=post.querySelector('.nick');let userName;if(userLink){userName=userLink.textContent.trim();}else if(userNickElement){userName=userNickElement.innerHTML.trim();}if(avatarElement){const img=avatarElement.querySelector('img');if(img){const imgSrc=img.src,imgCheck=new Image();imgCheck.src=imgSrc;imgCheck.onload=function(){const defaultAvatarSrc="https://res.cloudinary.com/dbdf6gwgo/image/upload/v1674337715/forum/Avatar/default_avatar_zpw3zz.svg",robotAvatarSrc="https://res.cloudinary.com/dbdf6gwgo/image/upload/v1676109015/forum/Avatar/robot_snynw7.svg";if(imgSrc===defaultAvatarSrc||imgSrc===robotAvatarSrc){createAvatarSpan(userName,avatarElement);}};imgCheck.onerror=function(){createAvatarSpan(userName,avatarElement);};}else{createAvatarSpan(userName,avatarElement);}}else if(userName){const detailsElement=post.querySelector('.center .left .details');if(detailsElement&&!detailsElement.querySelector('.avatar')){const existingParagraph=detailsElement.querySelector('p'),existingNick=detailsElement.querySelector('.nick');createAvatarSpan(userName,detailsElement);if(existingParagraph)detailsElement.appendChild(existingParagraph);if(existingNick)detailsElement.appendChild(existingNick);}}});}replaceAvatarsInPosts();})();
//Reply Counter
function processPostElements(){const e=document.querySelectorAll(".post"),t=(()=>{const e=new URLSearchParams(window.location.search);return parseInt(e.get("st")||0)+1})();e.forEach(((e,r)=>{createReplyCounter(e,t+r,"after")}))}function createReplyCounter(e,t,r){if(e.querySelector(".reply_counter"))return;const o=document.createElement("b");o.className="reply_counter",o.textContent="#"+t;const s=e.querySelector(".mini_buttons.rt.Sub");s&&("after"===r?s.appendChild(o):s.insertBefore(o,s.firstChild))}processPostElements();const postObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.matches(".post")&&processPostElements()}))}))}));postObserver.observe(document.body,{childList:!0,subtree:!0});
//Favicons
function updateFaviconsForLinks(e){e.forEach((e=>{if(!(e.closest(".spoiler .code_top a")||e.closest(".fancyborder a")||e.closest(".quote_top a")||e.closest(".ve-content [data-type=mention]")||e.querySelector("img"))){let o=document.createElement("img");o.src=e.href.includes("youtu.be")?"https://www.google.com/s2/favicons?domain=youtube.com":"https://www.google.com/s2/favicons?domain="+e.href,o.alt="fav",o.width=e.matches(".quote a, .tmsg a")?14:16,o.height=e.matches(".quote a, .tmsg a")?14:16,e.prepend(o)}}))}updateFaviconsForLinks(document.querySelectorAll(".color a, span.tmsg a"));const faviconObserver=new MutationObserver((e=>{e.forEach((e=>{updateFaviconsForLinks(e.target.querySelectorAll(".color a, span.tmsg a"))}))}));faviconObserver.observe(document.body,{childList:!0,subtree:!0});
//Textarea Autogrow 
function resizeTextarea(){const e=document.querySelector("textarea#Post");function updateTextareaHeight(){e.style.height="0",e.style.height=e.scrollHeight+"px",e.style.maxHeight="650px"}e&&(updateTextareaHeight(),e.addEventListener("input",updateTextareaHeight),window.addEventListener("load",updateTextareaHeight),e.addEventListener("paste",(()=>{setTimeout(updateTextareaHeight,0)})))}resizeTextarea();const textareaObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.matches("textarea#Post")&&resizeTextarea()}))}))}));textareaObserver.observe(document.body,{childList:!0,subtree:!0});
//Quote
function isInsideVeContentColor(e){return null!==e.closest(".ve-content.color")}function expandQuotes(e){if(isInsideVeContentColor(e))return;const updateHeight=()=>{const o=e.querySelector(".quotebtn button");if(!o&&e.scrollHeight>170){e.style.maxHeight="170px";const o=document.createElement("div");o.className="quotebtn";const t=document.createElement("button");t.innerHTML="Show More...",o.appendChild(t),e.appendChild(o),t.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),e.style.transition="max-height 0.382s ease-in-out",e.style.maxHeight=e.scrollHeight+"px",o.style.display="none",setTimeout((()=>{e.style.maxHeight="none"}),382)}))}else o&&e.scrollHeight<=170&&o.parentNode.remove()};updateHeight();const o=new ResizeObserver(updateHeight);o.observe(e);const t=e.querySelector(".spoiler .code_top a");t&&t.addEventListener("click",(()=>{e.style.maxHeight="none",o.disconnect()}))}document.querySelectorAll(".quote").forEach(expandQuotes);const quoteObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.matches(".quote")?expandQuotes(e):e.nodeType===Node.ELEMENT_NODE&&e.querySelectorAll(".quote").forEach(expandQuotes)}))}))}));quoteObserver.observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll(".quote_top").forEach(modifyQuoteTop);const quoteTopObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.querySelectorAll(".quote_top").forEach(modifyQuoteTop)}))}))}));function modifyQuoteTop(e){if(isInsideVeContentColor(e))return;const o=e.textContent,t=e.querySelector("a");if(o.includes("@")){const n=o.replace(/(.*)\s*\(([^@]+)@[^)]+\)\s*/,"$2 said:");e.innerHTML=n,e.style.color="var(--mdcol)",t&&(e.appendChild(t),t.style.color="var(--mdcol)")}else{const o=e.querySelector(".quote_top b");o&&(o.style.opacity=1)}}quoteTopObserver.observe(document.body,{childList:!0,subtree:!0});
//Goto
let timeoutId;function scrollToSmooth(o){window.scrollTo({top:o,behavior:"smooth"})}function showGotoElement(o){o.classList.add("active"),o.style.zIndex="9999"}function hideGotoElement(o){o.classList.remove("active")}function initSmoothScrolling(){document.querySelector(".p_up").addEventListener("click",(()=>{scrollToSmooth(0)})),document.querySelector(".p_down").addEventListener("click",(()=>{scrollToSmooth(document.body.scrollHeight)}));const o=document.querySelector(".goto");window.addEventListener("scroll",(()=>{clearTimeout(timeoutId),showGotoElement(o),timeoutId=setTimeout((()=>{hideGotoElement(o)}),3e3)})),o.addEventListener("mouseenter",(()=>{clearTimeout(timeoutId),showGotoElement(o)})),o.addEventListener("mouseleave",(()=>{timeoutId=setTimeout((()=>{hideGotoElement(o)}),3e3)}))}initSmoothScrolling();const smoothScrollObserver=new MutationObserver((o=>{o.forEach((o=>{o.addedNodes.forEach((o=>{o.nodeType===Node.ELEMENT_NODE&&o.matches(".p_up, .p_down, .goto")&&initSmoothScrolling()}))}))}));smoothScrollObserver.observe(document.body,{childList:!0,subtree:!0});
//Lazysizes
!function(){function handleLazyLoad(){Array.from(document.querySelectorAll("img, iframe")).filter((e=>!function isInViewport(e){const o=e.getBoundingClientRect();return o.bottom>0&&o.top<window.innerHeight}(e)&&!function isInsideSlideshow(e){return!!e.closest("#pa_slideshow")}(e))).forEach((e=>{e.classList.add("lazyload")})),window.lazySizes&&lazySizes.init()}new MutationObserver((e=>{const o=[];e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&o.push(e)}))})),o.length>0&&handleLazyLoad()})).observe(document.body,{childList:!0,subtree:!0}),handleLazyLoad()}();
//Youtube iframe
function replaceYouTubeFrames(){document.querySelectorAll('iframe[src*="youtube.com/embed/"]').forEach((function(e){var t=e.src.split("/").pop().split("?")[0],a=e.src.match(/[?&]start=([^&]*)/),l=a?a[1]:null;fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+t+"&key=AIzaSyCFhniclB06-OF1kOeL6t0g-KF7_qYVslI").then((e=>e.json())).then((a=>{var r=a.items[0].snippet.title,o=a.items[0].snippet.thumbnails,s=o.maxres?o.maxres.url:o.standard?o.standard.url:o.medium?o.medium.url:"",i=document.createElement("img");i.src=s,i.width="560",i.height="315",i.alt="YouTube Video Thumbnail";var n=document.createElement("span");n.textContent=r;var c=document.createElement("button");c.className="ytp-button",c.setAttribute("aria-label","Play"),c.setAttribute("title","Play"),c.style.width="68px",c.style.height="48px",c.style.background="none",c.style.border="none",c.style.position="absolute",c.style.top="50%",c.style.left="50%",c.style.transform="translate(-50%, -50%)",c.innerHTML='<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>';var p=document.createElement("div");p.className="res_tmb",p.appendChild(i),p.appendChild(n),p.appendChild(c),p.onclick=function(){var e=document.createElement("iframe");e.width="560",e.height="315",e.src="https://www.youtube.com/embed/"+t+"?autoplay=1",e.title="YouTube video player",e.frameborder="0",e.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen="true",l&&(e.src+="&start="+l),p.parentNode.replaceChild(e,p)},e.parentNode.replaceChild(p,e)})).catch((e=>console.error(e)))}))}replaceYouTubeFrames();
//Pamedia
const iframeObserver=new MutationObserver((e=>{e.forEach((e=>{e.target.querySelectorAll("iframe").forEach((e=>{const t=e.getAttribute("src");if(t&&!t.includes("twitter.com")&&!t.includes("facebook.com")&&!t.includes("t.me")&&!e.closest(".pamedia")){if(e.closest(".iuw-content"))return;const t=document.createElement("div");t.classList.add("pamedia");const r=e.closest(".youtube-frame");if(r)r.parentNode.replaceChild(t,r),t.appendChild(r);else{const r=e.closest('div[style="position:relative;height:0;padding-bottom:56.25%"]');r?(r.parentNode.replaceChild(t,r),t.appendChild(r)):(e.parentNode.replaceChild(t,e),t.appendChild(e))}}}))}))})),target=document.querySelector("body");iframeObserver.observe(target,{childList:!0,subtree:!0});
//Skin
const root=document.documentElement,button=document.getElementById("theme-toggle-button");button.addEventListener("click",(()=>{"second"===root.getAttribute("data-theme")?(root.removeAttribute("data-theme"),localStorage.removeItem(storageKey)):(root.setAttribute("data-theme","second"),localStorage.setItem(storageKey,"second"))}));
//Clickable Images
function createCustomDialog(){const e=document.querySelector(".imgen-backdrop"),t=document.querySelector(".imgen"),n=document.querySelector(".imgen-alert");if(t){t.style.display="block",e.style.display="block",n.style.display="none";const a=t.querySelector("input");a&&a.focus()}else{const e=document.createElement("div");e.className="imgen",e.style.zIndex=9999;const t=document.createElement("div");t.className="imgen-backdrop",t.addEventListener("click",(()=>{e.style.display="none",t.style.display="none",document.querySelector(".imgen-alert").style.display="none",document.querySelector(".imgen input").value=""}));const n=document.createElement("div");n.className="header",n.innerHTML='<i class="fa-regular fa-image"></i> Generate Image Thumbnail',e.appendChild(n);const a=document.createElement("div");a.className="imgen-alert",a.innerHTML='<i class="fa-regular fa-circle-exclamation"></i> Please enter a valid URL',e.appendChild(a),a.style.display="none";const l=document.createElement("input");l.type="text",l.placeholder="Insert image link...",l.setAttribute("aria-label","Image URL"),e.appendChild(l);const c=document.createElement("button");c.className="codebuttons",c.textContent="INSERT",c.addEventListener("click",(()=>{const n=l.value;validateImageURL(n,(c=>{c?(tag('<a target="_blank" href="'+n+'"><img class="color_img" src="'+n+'"></a>',""),triggerInputEvent(),e.style.display="none",t.style.display="none",l.value=""):a.style.display="block"}))})),e.appendChild(c),c.setAttribute("aria-label","Insert"),l.addEventListener("click",(()=>{l.select()})),document.body.appendChild(t),document.body.appendChild(e),e.style.display="block",l.focus()}}function triggerInputEvent(){const e=document.querySelector("textarea#Post");if(e){const t=new Event("input",{bubbles:!0,cancelable:!0});e.dispatchEvent(t)}}function validateImageURL(e,t){const n=new Image;n.src=e,n.onload=()=>t(!0),n.onerror=()=>t(!1)}function tag_image(){createCustomDialog()}if(document.URL.includes("?act=Post")||document.URL.includes("?t="));else{const e=document.querySelector('.codebuttons[value*="IMG"]');e&&e.addEventListener("click",tag_image)}
//Link Generator
let linkgenInput;function createCustomLinkDialog(){const e=document.querySelector(".linkgen"),n=document.querySelector(".linkgen-backdrop"),t=document.querySelector(".linkgen-alert");if(e)e.style.display="block",n.style.display="block",t.style.display="none",linkgenInput.value="",linkgenInput.focus();else{const e=document.createElement("div");e.className="linkgen",e.style.zIndex=9999;const n=document.createElement("div");n.className="header",n.innerHTML='<i class="fa-regular fa-link"></i> Generate Link',e.appendChild(n);const t=document.createElement("div");t.className="linkgen-alert",t.innerHTML='<i class="fa-regular fa-circle-exclamation"></i> Please enter a valid URL',t.style.display="none";const l=document.createElement("div");l.className="linkgen-backdrop",l.addEventListener("click",(function(){e.style.display="none",l.style.display="none",linkgenInput.value="",a.value="",t.style.display="none"})),linkgenInput=document.createElement("input"),linkgenInput.type="text",linkgenInput.placeholder="Insert link...",linkgenInput.setAttribute("aria-label","URL"),linkgenInput.addEventListener("click",(function(){linkgenInput.value&&linkgenInput.select()}));const a=document.createElement("input");a.type="text",a.placeholder="Custom text...",a.setAttribute("aria-label","Custom Text");const i=document.createElement("button");i.className="codebuttons",i.textContent="INSERT",i.addEventListener("click",(function(){const n=linkgenInput.value,i=a.value;if(isValidURL(n)&&!containsHTMLorBBCode(n)){let t="";t=i?'<a target="_blank" href="'+n+'">'+i+"</a>":'<a target="_blank" href="'+n+'">'+n+"</a>",tag(t,""),triggerInputEvent(),e.style.display="none",l.style.display="none",linkgenInput.value="",a.value=""}else t.style.display="block"})),e.appendChild(t),e.appendChild(linkgenInput),e.appendChild(a),e.appendChild(i),document.body.appendChild(e),document.body.appendChild(l),e.style.display="block",linkgenInput.focus()}}function triggerInputEvent(){const e=document.querySelector("textarea#Post");if(e){const n=new Event("input",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}}function isValidURL(e){return/^https?:\/\/|^ftp:\/\//.test(e)}function containsHTMLorBBCode(e){return/<[^>]+>|\[.*?\]/.test(e)}const urlButton=document.querySelector('input[accesskey="w"]');urlButton&&(urlButton.removeAttribute("onclick"),urlButton.addEventListener("click",(function(){createCustomLinkDialog()})));
//HTML Colors
var colors=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkCyan","DarkGoldenRod","DarkGray","DarkKhaki","Darkorange","DarkSalmon","DarkSeaGreen","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","GreenYellow","HoneyDew","HotPink","IndianRed","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","MediumAquaMarine","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MintCream","MistyRose","Moccasin","NavajoWhite","OldLace","Olive","OliveDrab","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","RosyBrown","RoyalBlue","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","WhiteSmoke","YellowGreen"];document.querySelectorAll('.send select[title="Insert Font Color tags"]').forEach((function(e){colors.forEach((function(l){var o=document.createElement("option");o.text=l,o.value=l,o.style.color=l,e.add(o)}))}));var selectElement=document.querySelector(".tag select.codebuttons");selectElement&&colors.forEach((function(e){var l=document.createElement("option");l.text=e,l.value=e,l.style.color=e,selectElement.add(l)})); 
//Preview
function handleLoadingElement(){document.querySelectorAll(".send").forEach((e=>{var n=e.querySelectorAll("ul li.Item");if(n.length>=2){var t=document.getElementById("loading");t&&n[1].appendChild(t)}}))}const preview=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.length>0&&e.target.querySelector(".send")&&handleLoadingElement()}))}));preview.observe(document.body,{childList:!0,subtree:!0}),handleLoadingElement();
