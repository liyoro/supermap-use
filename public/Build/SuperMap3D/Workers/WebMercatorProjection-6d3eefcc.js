define(["exports","./Cartesian4-b0ddc4ba","./when-b60132fc","./Check-7b2a090c","./buildModuleUrl-8cce5713","./Math-31e539c2"],(function(e,t,i,a,o,r){"use strict";function n(e){this._ellipsoid=i.defaultValue(e,o.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(n.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),n.mercatorAngleToGeodeticLatitude=function(e){return r.Math3D.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},n.geodeticLatitudeToMercatorAngle=function(e){e>n.MaximumLatitude?e=n.MaximumLatitude:e<-n.MaximumLatitude&&(e=-n.MaximumLatitude);var t=Math.sin(e);return.5*Math.log((1+t)/(1-t))},n.MaximumLatitude=n.mercatorAngleToGeodeticLatitude(Math.PI),n.prototype.project=function(e,a){var o=this._semimajorAxis,r=e.longitude*o,u=n.geodeticLatitudeToMercatorAngle(e.latitude)*o,d=e.height;return i.defined(a)?(a.x=r,a.y=u,a.z=d,a):new t.Cartesian3(r,u,d)},n.prototype.unproject=function(e,a){var o=this._oneOverSemimajorAxis,r=e.x*o,u=n.mercatorAngleToGeodeticLatitude(e.y*o),d=e.z;return i.defined(a)?(a.longitude=r,a.latitude=u,a.height=d,a):new t.Cartographic(r,u,d)},e.WebMercatorProjection=n}));
