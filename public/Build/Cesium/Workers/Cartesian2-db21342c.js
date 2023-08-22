define(["exports","./Check-7b2a090c","./when-b60132fc","./Math-119be1a3"],(function(n,e,t,r){"use strict";function u(n,e){this.x=t.defaultValue(n,0),this.y=t.defaultValue(e,0)}u.fromElements=function(n,e,r){return t.defined(r)?(r.x=n,r.y=e,r):new u(n,e)},u.clone=function(n,e){if(t.defined(n))return t.defined(e)?(e.x=n.x,e.y=n.y,e):new u(n.x,n.y)},u.fromCartesian3=u.clone,u.fromCartesian4=u.clone,u.packedLength=2,u.pack=function(n,e,r){return r=t.defaultValue(r,0),e[r++]=n.x,e[r]=n.y,e},u.unpack=function(n,e,r){return e=t.defaultValue(e,0),t.defined(r)||(r=new u),r.x=n[e++],r.y=n[e],r},u.packArray=function(n,r){var a=n.length,i=2*a;if(t.defined(r)){if(!Array.isArray(r)&&r.length!==i)throw new e.DeveloperError("If result is a typed array, it must have exactly array.length * 2 elements");r.length!==i&&(r.length=i)}else r=new Array(i);for(var o=0;o<a;++o)u.pack(n[o],r,2*o);return r},u.unpackArray=function(n,e){var r=n.length;t.defined(e)?e.length=r/2:e=new Array(r/2);for(var a=0;a<r;a+=2){var i=a/2;e[i]=u.unpack(n,a,e[i])}return e},u.fromArray=u.unpack,u.maximumComponent=function(n){return Math.max(n.x,n.y)},u.minimumComponent=function(n){return Math.min(n.x,n.y)},u.minimumByComponent=function(n,e,t){return t.x=Math.min(n.x,e.x),t.y=Math.min(n.y,e.y),t},u.maximumByComponent=function(n,e,t){return t.x=Math.max(n.x,e.x),t.y=Math.max(n.y,e.y),t},u.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},u.magnitude=function(n){return Math.sqrt(u.magnitudeSquared(n))};var a=new u;u.distance=function(n,e){return u.subtract(n,e,a),u.magnitude(a)},u.distanceSquared=function(n,e){return u.subtract(n,e,a),u.magnitudeSquared(a)},u.normalize=function(n,e){var t=u.magnitude(n);return e.x=n.x/t,e.y=n.y/t,e},u.dot=function(n,e){return n.x*e.x+n.y*e.y},u.multiplyComponents=function(n,e,t){return t.x=n.x*e.x,t.y=n.y*e.y,t},u.divideComponents=function(n,e,t){return t.x=n.x/e.x,t.y=n.y/e.y,t},u.add=function(n,e,t){return t.x=n.x+e.x,t.y=n.y+e.y,t},u.subtract=function(n,e,t){return t.x=n.x-e.x,t.y=n.y-e.y,t},u.multiplyByScalar=function(n,e,t){return t.x=n.x*e,t.y=n.y*e,t},u.divideByScalar=function(n,e,t){return t.x=n.x/e,t.y=n.y/e,t},u.negate=function(n,e){return e.x=-n.x,e.y=-n.y,e},u.abs=function(n,e){return e.x=Math.abs(n.x),e.y=Math.abs(n.y),e};var i=new u;u.lerp=function(n,e,t,r){return u.multiplyByScalar(e,t,i),r=u.multiplyByScalar(n,1-t,r),u.add(i,r,r)};var o=new u,y=new u;u.angleBetween=function(n,e){return u.normalize(n,o),u.normalize(e,y),r.CesiumMath.acosClamped(u.dot(o,y))};var c=new u;u.mostOrthogonalAxis=function(n,e){var t=u.normalize(n,c);return u.abs(t,t),e=t.x<=t.y?u.clone(u.UNIT_X,e):u.clone(u.UNIT_Y,e)},u.equals=function(n,e){return n===e||t.defined(n)&&t.defined(e)&&n.x===e.x&&n.y===e.y},u.equalsArray=function(n,e,t){return n.x===e[t]&&n.y===e[t+1]},u.equalsEpsilon=function(n,e,u,a){return n===e||t.defined(n)&&t.defined(e)&&r.CesiumMath.equalsEpsilon(n.x,e.x,u,a)&&r.CesiumMath.equalsEpsilon(n.y,e.y,u,a)},u.ZERO=Object.freeze(new u(0,0)),u.UNIT_X=Object.freeze(new u(1,0)),u.UNIT_Y=Object.freeze(new u(0,1)),u.prototype.clone=function(n){return u.clone(this,n)},u.prototype.equals=function(n){return u.equals(this,n)},u.prototype.equalsEpsilon=function(n,e,t){return u.equalsEpsilon(this,n,e,t)},u.prototype.toString=function(){return"("+this.x+", "+this.y+")"},n.Cartesian2=u}));
