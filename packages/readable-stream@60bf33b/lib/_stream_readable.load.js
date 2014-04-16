montageDefine("60bf33b","lib/_stream_readable",{dependencies:["isarray","buffer","events","stream","core-util-is","inherits","string_decoder/"],factory:function(e,t,n){function i(t){t=t||{};var n=t.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(z||(z=e("string_decoder/").StringDecoder),this.decoder=new z(t.encoding),this.encoding=t.encoding)}function r(e){return this instanceof r?(this._readableState=new i(e,this),this.readable=!0,E.call(this),void 0):new r(e)}function a(e,t,n,i,r){var a=c(t,n);if(a)e.emit("error",a);else if(null===n||void 0===n)t.reading=!1,t.ended||u(e,t);else if(t.objectMode||n&&n.length>0)if(t.ended&&!r){var o=Error("stream.push() after EOF");e.emit("error",o)}else if(t.endEmitted&&r){var o=Error("stream.unshift() after end event");e.emit("error",o)}else!t.decoder||r||i||(n=t.decoder.write(n)),t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):(t.reading=!1,t.buffer.push(n)),t.needReadable&&h(e),p(e,t);else r||(t.reading=!1);return s(t)}function s(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function o(e){if(e>=T)e=T;else{e--;for(var t=1;32>t;t<<=1)e|=e>>t;e++}return e}function l(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:isNaN(e)||null===e?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:0>=e?0:(e>t.highWaterMark&&(t.highWaterMark=o(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function c(e,t){var n=null;return x.isBuffer(t)||"string"==typeof t||null===t||void 0===t||e.objectMode||n||(n=new TypeError("Invalid non-string/buffer chunk")),n}function u(e,t){if(t.decoder&&!t.ended){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,t.length>0?h(e):y(e)}function h(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,t.sync?process.nextTick(function(){d(e)}):d(e))}function d(e){e.emit("readable")}function p(e,t){t.readingMore||(t.readingMore=!0,process.nextTick(function(){f(e,t)}))}function f(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(e.read(0),n!==t.length);)n=t.length;t.readingMore=!1}function m(e){return function(){var t=e._readableState;t.awaitDrain--,0===t.awaitDrain&&g(e)}}function g(e){function t(e){var t=e.write(n);!1===t&&i.awaitDrain++}var n,i=e._readableState;for(i.awaitDrain=0;i.pipesCount&&null!==(n=e.read());)if(1===i.pipesCount?t(i.pipes,0,null):C(i.pipes,t),e.emit("data",n),i.awaitDrain>0)return;return 0===i.pipesCount?(i.flowing=!1,M.listenerCount(e,"data")>0&&_(e),void 0):(i.ranOut=!0,void 0)}function v(){this._readableState.ranOut&&(this._readableState.ranOut=!1,g(this))}function _(e,t){var n=e._readableState;if(n.flowing)throw Error("Cannot switch to old mode now.");var i=t||!1,r=!1;e.readable=!0,e.pipe=E.prototype.pipe,e.on=e.addListener=E.prototype.on,e.on("readable",function(){r=!0;for(var t;!i&&null!==(t=e.read());)e.emit("data",t);null===t&&(r=!1,e._readableState.needReadable=!0)}),e.pause=function(){i=!0,this.emit("pause")},e.resume=function(){i=!1,r?process.nextTick(function(){e.emit("readable")}):this.read(0),this.emit("resume")},e.emit("readable")}function b(e,t){var n,i=t.buffer,r=t.length,a=!!t.decoder,s=!!t.objectMode;if(0===i.length)return null;if(0===r)n=null;else if(s)n=i.shift();else if(!e||e>=r)n=a?i.join(""):x.concat(i,r),i.length=0;else if(i[0].length>e){var o=i[0];n=o.slice(0,e),i[0]=o.slice(e)}else if(e===i[0].length)n=i.shift();else{n=a?"":new x(e);for(var l=0,c=0,u=i.length;u>c&&e>l;c++){var o=i[0],h=Math.min(e-l,o.length);a?n+=o.slice(0,h):o.copy(n,l,0,h),o.length>h?i[0]=o.slice(h):i.shift(),l+=h}}return n}function y(e){var t=e._readableState;if(t.length>0)throw Error("endReadable called on non-empty stream");!t.endEmitted&&t.calledRead&&(t.ended=!0,process.nextTick(function(){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}))}function C(e,t){for(var n=0,i=e.length;i>n;n++)t(e[n],n)}function L(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1}n.exports=r;var w=e("isarray"),x=e("buffer").Buffer;r.ReadableState=i;var M=e("events").EventEmitter;M.listenerCount||(M.listenerCount=function(e,t){return e.listeners(t).length});var E=e("stream"),S=e("core-util-is");S.inherits=e("inherits");var z;S.inherits(r,E),r.prototype.push=function(e,t){var n=this._readableState;return"string"!=typeof e||n.objectMode||(t=t||n.defaultEncoding,t!==n.encoding&&(e=new x(e,t),t="")),a(this,n,e,t,!1)},r.prototype.unshift=function(e){var t=this._readableState;return a(this,t,e,"",!0)},r.prototype.setEncoding=function(t){z||(z=e("string_decoder/").StringDecoder),this._readableState.decoder=new z(t),this._readableState.encoding=t};var T=8388608;r.prototype.read=function(e){var t=this._readableState;t.calledRead=!0;var n=e;if(("number"!=typeof e||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return h(this),null;if(e=l(e,t),0===e&&t.ended)return 0===t.length&&y(this),null;var i=t.needReadable;t.length-e<=t.highWaterMark&&(i=!0),(t.ended||t.reading)&&(i=!1),i&&(t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),i&&!t.reading&&(e=l(n,t));var r;return r=e>0?b(e,t):null,null===r&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),t.ended&&!t.endEmitted&&0===t.length&&y(this),r},r.prototype._read=function(){this.emit("error",Error("not implemented"))},r.prototype.pipe=function(e,t){function n(e){e===c&&r()}function i(){e.end()}function r(){e.removeListener("close",s),e.removeListener("finish",o),e.removeListener("drain",p),e.removeListener("error",a),e.removeListener("unpipe",n),c.removeListener("end",i),c.removeListener("end",r),(!e._writableState||e._writableState.needDrain)&&p()}function a(t){l(),e.removeListener("error",a),0===M.listenerCount(e,"error")&&e.emit("error",t)}function s(){e.removeListener("finish",o),l()}function o(){e.removeListener("close",s),l()}function l(){c.unpipe(e)}var c=this,u=this._readableState;switch(u.pipesCount){case 0:u.pipes=e;break;case 1:u.pipes=[u.pipes,e];break;default:u.pipes.push(e)}u.pipesCount+=1;var h=(!t||t.end!==!1)&&e!==process.stdout&&e!==process.stderr,d=h?i:r;u.endEmitted?process.nextTick(d):c.once("end",d),e.on("unpipe",n);var p=m(c);return e.on("drain",p),e._events&&e._events.error?w(e._events.error)?e._events.error.unshift(a):e._events.error=[a,e._events.error]:e.on("error",a),e.once("close",s),e.once("finish",o),e.emit("pipe",c),u.flowing||(this.on("readable",v),u.flowing=!0,process.nextTick(function(){g(c)})),e},r.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,this.removeListener("readable",v),t.flowing=!1,e&&e.emit("unpipe",this),this);if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,this.removeListener("readable",v),t.flowing=!1;for(var r=0;i>r;r++)n[r].emit("unpipe",this);return this}var r=L(t.pipes,e);return-1===r?this:(t.pipes.splice(r,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},r.prototype.on=function(e,t){var n=E.prototype.on.call(this,e,t);if("data"!==e||this._readableState.flowing||_(this),"readable"===e&&this.readable){var i=this._readableState;i.readableListening||(i.readableListening=!0,i.emittedReadable=!1,i.needReadable=!0,i.reading?i.length&&h(this,i):this.read(0))}return n},r.prototype.addListener=r.prototype.on,r.prototype.resume=function(){_(this),this.read(0),this.emit("resume")},r.prototype.pause=function(){_(this,!0),this.emit("pause")},r.prototype.wrap=function(e){var t=this._readableState,n=!1,i=this;e.on("end",function(){if(t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&i.push(e)}i.push(null)}),e.on("data",function(r){if(t.decoder&&(r=t.decoder.write(r)),r&&(t.objectMode||r.length)){var a=i.push(r);a||(n=!0,e.pause())}});for(var r in e)"function"==typeof e[r]&&this[r]===void 0&&(this[r]=function(t){return function(){return e[t].apply(e,arguments)}}(r));var a=["error","close","destroy","pause","resume"];return C(a,function(t){e.on(t,i.emit.bind(i,t))}),i._read=function(){n&&(n=!1,e.resume())},i},r._fromList=b}});