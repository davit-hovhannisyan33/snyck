(self.webpackChunke_bankruptcy=self.webpackChunke_bankruptcy||[]).push([[54796],{55548:function(e,t,r){var n=r.g.BlobBuilder||r.g.WebKitBlobBuilder||r.g.MSBlobBuilder||r.g.MozBlobBuilder,o=function(){try{return 2===new Blob(["hi"]).size}catch(e){return!1}}(),u=o&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(e){return!1}}(),b=n&&n.prototype.append&&n.prototype.getBlob;function f(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}e[t]=n}}}e.exports=o?u?r.g.Blob:function(e,t){return f(e),new Blob(e,t||{})}:b?function(e,t){t=t||{};var r=new n;f(e);for(var o=0;o<e.length;o++)r.append(e[o]);return t.type?r.getBlob(t.type):r.getBlob()}:void 0}}]);