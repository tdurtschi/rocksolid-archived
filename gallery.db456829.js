var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},i=e.parcelRequiree6a2;null==i&&((i=function(e){if(e in l)return l[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return l[e]=r,i.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,l){n[e]=l},e.parcelRequiree6a2=i);var r=i("dpDBx"),t=i("6uVsB");console.log("running gallery init");var a=parseInt(function(e,l){l||(l=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(l);return n&&n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):""}("id")),o=new t.GalleryViewModel;r.applyBindings(o),console.log(o.galleries);var s=o.galleries().filter((function(e){return e.id==a}))[0];s&&(o.displayedGalleries.push(s),a>=o.maxId&&(document.getElementsByClassName("gallery-nav-next")[0].style.visibility="hidden",document.getElementsByClassName("gallery-nav-next")[1].style.visibility="hidden"),0==a&&(document.getElementsByClassName("gallery-nav-prev")[0].style.visibility="hidden",document.getElementsByClassName("gallery-nav-prev")[1].style.visibility="hidden"));
//# sourceMappingURL=gallery.db456829.js.map
