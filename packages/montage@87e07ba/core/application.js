var Montage=require("core/core").Montage,Target=require("core/target").Target,MontageWindow=require("window-loader/montage-window").MontageWindow,Slot;require("core/dom");var Application=exports.Application=Target.specialize({eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){for(var e=this;e.parentApplication;)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return null==this.parentApplication?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){null==this.parentApplication?-1!==["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(null==this.parentApplication){if(!this._windows){var e=new MontageWindow;e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=new MontageWindow;e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,t=this.windowsSortOrder;if("z-order"==t)return e[0];if("reverse-z-order"==t)return e[e.length-1];for(var n in e)if(e[n].focused)return e[n]}},delegate:{value:null},nextTarget:{get:function(){return this.delegate}},openWindow:{value:function(e,t,n){var i,s,a=this,r=new MontageWindow,o={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},l={module:e,name:t,parent:window,callback:function(e,t){var n;i=e.document.application,r.window=e,r.application=i,r.component=t,i.window=r,a.attachedWindows.push(r),n=a.mainApplication.windowsSortOrder,"z-order"==n||"reverse-open-order"==n?a.windows.unshift(r):a.windows.push(r),s=document.createEvent("CustomEvent"),s.initCustomEvent("load",!0,!0,null),r.dispatchEvent(s)}};if(this!==this.mainApplication||this._multipleWindow||this.window,"object"==typeof n){var h,u,c="",d="";for(h in n)n.hasOwnProperty(h)&&(o[h]=n[h])}var m=["name"];for(h in o)-1==m.indexOf(h)&&(u=o[h],"boolean"==typeof u?u=u?"yes":"no":(u+="",u.match(/[ ,"]/)&&(u='"'+u.replace(/"/g,'\\"')+'"')),d+=c+h+"="+u,c=",");return window.require.loadPackage({name:"montage"}).then(function(e){var t=window.open(e.location+"window-loader/index.html","_blank",d);t.loadInfo=l}).done(),r}},attachWindow:{value:function(e){var t,n=e.application.parentApplication;return n!==this&&(n&&n.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),t=this.mainApplication.windowsSortOrder,"z-order"==t||"reverse-open-order"==t?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var t,n,i=this.windows;return void 0===e&&(e=this.window),n=e.application.parentApplication,n==this?(t=this.attachedWindows.indexOf(e),-1!==t&&this.attachedWindows.splice(t,1),t=i.indexOf(e),-1!==t&&i.splice(t,1),e.application.parentApplication=null):n&&n.detachWindow(e),e}},constructor:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(e,t){var n,i=this;exports.application=i,require.async("ui/component").then(function(s){return n=s.__root__,n.element=document,require("core/template").instantiateDocument(window.document,e).then(function(){i.callDelegateMethod("willFinishLoading",i),n.needsDraw=!0,t&&t(i)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return"alert"===e||"confirm"===e||"notify"===e}},_createPopupSlot:{value:function(e){var t=document.createElement("div");document.body.appendChild(t),t.style.zIndex=e,t.style.position="absolute";var n=new Slot;return n.element=t,n.attachToParentComponent(),n}},getPopupSlot:{value:function(e,t,n){var i=this;require.async("ui/slot.reel/slot").then(function(s){Slot=Slot||s.Slot,e=e||"custom";var a,r,o=i._isSystemPopup(e);if(i.popupSlots=i.popupSlots||{},o)switch(e){case"alert":a=9004;break;case"confirm":a=9003;break;case"notify":a=9002}else i._zIndex=i._zIndex?i._zIndex+1:7e3,a=i._zIndex;r=i.popupSlots[e],r||(r=i.popupSlots[e]=i._createPopupSlot(a)),o||(r.element.style.zIndex=a),r.content=t,n.call(this,r)}).done()}},returnPopupSlot:{value:function(e){var t=this;if(t.popupSlots&&t.popupSlots[e]){var n=t.popupSlots[e];n.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var t=Object.keys(this.popupSlots);if(t&&t.length>0){var n,i=0,s=t.length;for(i=0;s>i;i++)n=this.popupSlots[t[i]],n&&null!==n.content&&e.push(n)}}return e}}});