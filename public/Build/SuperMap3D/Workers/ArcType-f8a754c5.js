define(["exports","./Check-7b2a090c","./when-b60132fc","./Math-31e539c2"],(function(e,t,r,a){"use strict";var f=a.Math3D.EPSILON10;var n=Object.freeze({NONE:0,GEODESIC:1,RHUMB:2});e.ArcType=n,e.arrayRemoveDuplicates=function(e,t,a,n){if(r.defined(e)){n=r.defaultValue(n,f),a=r.defaultValue(a,!1);var c,i,u,l=e.length;if(l<2)return e;for(c=1;c<l&&!t(i=e[c-1],u=e[c],n);++c);if(c===l)return a&&t(e[0],e[e.length-1],n)?e.slice(1):e;for(var h=e.slice(0,c);c<l;++c)t(i,u=e[c],n)||(h.push(u),i=u);return a&&h.length>1&&t(h[0],h[h.length-1],n)&&h.shift(),h}}}));
