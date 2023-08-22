define(["./AttributeCompression-0a087f75","./EllipsoidTangentPlane-1dfa0a87","./buildModuleUrl-9085faaa","./Cartesian2-db21342c","./Cartographic-3309dd0d","./when-b60132fc","./Rectangle-dee65d21","./TerrainEncoding-bc895579","./IndexDatatype-8a5eead4","./Math-119be1a3","./FeatureDetection-806b12f0","./OrientedBoundingBox-3b145304","./Check-7b2a090c","./GeometryAttribute-c65394ac","./WebMercatorProjection-a4b885f9","./createTaskProcessorWorker","./Cartesian4-3ca25aab","./IntersectionTests-0d6905a3","./Plane-a3d8b3d2","./Event-16a2dfbf","./RuntimeError-4a5c8994","./ComponentDatatype-c140a87d","./WebGLConstants-4ae0db90","./PolygonPipeline-d83979ed","./earcut-2.2.1-20c8012f","./EllipsoidRhumbLine-30b5229b"],(function(e,t,r,i,n,o,a,s,d,c,u,h,l,I,m,g,f,v,T,p,E,y,w,N,b,x){"use strict";function M(){l.DeveloperError.throwInstantiationError()}Object.defineProperties(M.prototype,{errorEvent:{get:l.DeveloperError.throwInstantiationError},credit:{get:l.DeveloperError.throwInstantiationError},tilingScheme:{get:l.DeveloperError.throwInstantiationError},ready:{get:l.DeveloperError.throwInstantiationError},readyPromise:{get:l.DeveloperError.throwInstantiationError},hasWaterMask:{get:l.DeveloperError.throwInstantiationError},hasVertexNormals:{get:l.DeveloperError.throwInstantiationError},availability:{get:l.DeveloperError.throwInstantiationError}});var C=[];M.getRegularGridIndices=function(e,t){var r=C[e];o.defined(r)||(C[e]=r=[]);var i=r[t];return o.defined(i)||W(e,t,i=e*t<c.CesiumMath.SIXTY_FOUR_KILOBYTES?r[t]=new Uint16Array((e-1)*(t-1)*6+3*(e+t-2)):r[t]=new Uint32Array((e-1)*(t-1)*6+3*(e+t-2)),0),i},M.getRegularGridIndicesForReproject=function(e,t){var r=C[e];o.defined(r)||(C[e]=r=[]);var i=r[t];return o.defined(i)||W(e,t,i=e*t<c.CesiumMath.SIXTY_FOUR_KILOBYTES?r[t]=new Uint16Array((e-1)*(t-1)*6):r[t]=new Uint32Array((e-1)*(t-1)*6),0),i};var A=[];M.getRegularGridIndicesAndEdgeIndices=function(e,t){var r=A[e];o.defined(r)||(A[e]=r=[]);var i=r[t];if(!o.defined(i)){var n=M.getRegularGridIndices(e,t),a=P(e,t),s=a.westIndicesSouthToNorth,d=a.southIndicesEastToWest,c=a.eastIndicesNorthToSouth,u=a.northIndicesWestToEast;i=r[t]={indices:n,westIndicesSouthToNorth:s,southIndicesEastToWest:d,eastIndicesNorthToSouth:c,northIndicesWestToEast:u}}return i};var S=[];function P(e,t){var r,i=new Array(t),n=new Array(e),o=new Array(t),a=new Array(e);for(r=0;r<e;++r)a[r]=r,n[r]=e*t-1-r;for(r=0;r<t;++r)o[r]=(r+1)*e-1,i[r]=(t-r-1)*e;return{westIndicesSouthToNorth:i,southIndicesEastToWest:n,eastIndicesNorthToSouth:o,northIndicesWestToEast:a}}function W(e,t,r,i){for(var n=0,o=0;o<t-1;++o){for(var a=0;a<e-1;++a){var s=n,d=s+e,c=d+1,u=s+1;r[i++]=s,r[i++]=d,r[i++]=u,r[i++]=u,r[i++]=d,r[i++]=c,++n}++n}var h=(t-1)/2,l=(e-1)/2;n=0;for(a=0;a<l;a++)r[i++]=n,r[i++]=n+1,r[i++]=n+2,n+=2;n=e*(t-1);for(a=0;a<l;a++)r[i++]=n+1,r[i++]=n,r[i++]=n+2,n+=2;n=0;for(a=0;a<h;a++)r[i++]=n+e,r[i++]=n,r[i++]=n+2*e,n+=2*e;n=e-1;for(a=0;a<h;a++)r[i++]=n,r[i++]=n+e,r[i++]=n+2*e,n+=2*e}function B(e,t,r,i,n){for(var a=o.defined(n),s=e[0],d=e.length,c=1;c<d;++c){var u=e[c];!a||n[s+"_"+u]?(r[i++]=s,r[i++]=u,r[i++]=t,r[i++]=t,r[i++]=u,r[i++]=t+1,s=u,++t):(s=u,++t)}return i}M.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){var r=S[e];o.defined(r)||(S[e]=r=[]);var i=r[t];if(!o.defined(i)){var n=e*t,a=(e-1)*(t-1)*6,s=2*e+2*t,c=n+s,u=3*(e+t-2),h=a+6*Math.max(0,s-4)+u,l=P(e,t),I=l.westIndicesSouthToNorth,m=l.southIndicesEastToWest,g=l.eastIndicesNorthToSouth,f=l.northIndicesWestToEast,v=d.IndexDatatype.createTypedArray(c,h);W(e,t,v,0),M.addSkirtIndices(I,m,g,f,n,v,a+u),i=r[t]={indices:v,westIndicesSouthToNorth:I,southIndicesEastToWest:m,eastIndicesNorthToSouth:g,northIndicesWestToEast:f,indexCountWithoutSkirts:a}}return i},M.addSkirtIndices=function(e,t,r,i,n,o,a,s){var d=n;a=B(e,d,o,a,s),a=B(t,d+=e.length,o,a,s),a=B(r,d+=t.length,o,a,s),B(i,d+=r.length,o,a,s)},M.heightmapTerrainQuality=.25,M.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*M.heightmapTerrainQuality/(t*r)},M.prototype.requestTileGeometry=l.DeveloperError.throwInstantiationError,M.prototype.getLevelMaximumGeometricError=l.DeveloperError.throwInstantiationError,M.prototype.getTileDataAvailable=l.DeveloperError.throwInstantiationError,M.prototype.loadTileDataAvailability=l.DeveloperError.throwInstantiationError;var _=32767,F=new n.Cartesian3,D=new n.Cartesian3,k=new n.Cartesian3,H=new n.Cartographic,O=new i.Cartesian2,V=new n.Cartesian3,G=new u.Matrix4,R=new u.Matrix4;function Y(e,t,r,i,o,a,s,d,h){var l=Number.POSITIVE_INFINITY,I=o.north,m=o.south,g=o.east,f=o.west;g<f&&(g+=c.CesiumMath.TWO_PI);for(var v=e.length,T=0;T<v;++T){var p=e[T],E=r[p],y=i[p];H.longitude=c.CesiumMath.lerp(f,g,y.x),H.latitude=c.CesiumMath.lerp(m,I,y.y),H.height=E-t;var w=a.cartographicToCartesian(H,F);u.Matrix4.multiplyByPoint(s,w,w),n.Cartesian3.minimumByComponent(w,d,d),n.Cartesian3.maximumByComponent(w,h,h),l=Math.min(l,H.height)}return l}function U(t,r,i,a,s,d,h,l,g,f,v,T,p,E,y){var w=o.defined(h),N=g.north,b=g.south,x=g.east,M=g.west;x<M&&(x+=c.CesiumMath.TWO_PI);for(var C=i.length,A=0;A<C;++A){var S=i[A],P=s[S],W=d[S];H.longitude=c.CesiumMath.lerp(M,x,W.x)+E,H.latitude=c.CesiumMath.lerp(b,N,W.y)+y,H.height=P-f;var B,_=l.cartographicToCartesian(H,F);if(w){var D=2*S;if(O.x=h[D],O.y=h[D+1],1!==v){var k=e.AttributeCompression.octDecode(O.x,O.y,V),Y=I.Transforms.eastNorthUpToFixedFrame(F,l,R),U=u.Matrix4.inverseTransformation(Y,G);u.Matrix4.multiplyByPointAsVector(U,k,k),k.z*=v,n.Cartesian3.normalize(k,k),u.Matrix4.multiplyByPointAsVector(Y,k,k),n.Cartesian3.normalize(k,k),e.AttributeCompression.octEncode(k,O)}}a.hasWebMercatorT&&(B=(m.WebMercatorProjection.geodeticLatitudeToMercatorAngle(H.latitude)-T)*p),r=a.encode(t,r,_,W,H.height,O,B)}}function z(e,t){var r;return"function"==typeof e.slice&&"function"!=typeof(r=e.slice()).sort&&(r=void 0),o.defined(r)||(r=Array.prototype.slice.call(e)),r.sort(t),r}return g((function(l,g){var f,v,T=l.quantizedVertices,p=T.length/3,E=l.octEncodedNormals,y=l.westIndices.length+l.eastIndices.length+l.southIndices.length+l.northIndices.length,w=l.includeWebMercatorT,N=a.Rectangle.clone(l.rectangle),b=N.west,x=N.south,C=N.east,A=N.north,S=a.Ellipsoid.clone(l.ellipsoid),P=l.exaggeration,W=l.minimumHeight*P,B=l.maximumHeight*P,L=o.defined(l.validMinimumHeight)?l.validMinimumHeight*P:W*P,j=o.defined(l.validMaximumHeight)?l.validMaximumHeight*P:B*P,q=l.relativeToCenter,K=I.Transforms.eastNorthUpToFixedFrame(q,S),Q=u.Matrix4.inverseTransformation(K,new u.Matrix4);w&&(f=m.WebMercatorProjection.geodeticLatitudeToMercatorAngle(x),v=1/(m.WebMercatorProjection.geodeticLatitudeToMercatorAngle(A)-f));var X=T.subarray(0,p),Z=T.subarray(p,2*p),J=T.subarray(2*p,3*p),$=o.defined(E),ee=new Array(p),te=new Array(p),re=new Array(p),ie=w?new Array(p):[],ne=D;ne.x=Number.POSITIVE_INFINITY,ne.y=Number.POSITIVE_INFINITY,ne.z=Number.POSITIVE_INFINITY;var oe=k;oe.x=Number.NEGATIVE_INFINITY,oe.y=Number.NEGATIVE_INFINITY,oe.z=Number.NEGATIVE_INFINITY;for(var ae=Number.POSITIVE_INFINITY,se=Number.NEGATIVE_INFINITY,de=Number.POSITIVE_INFINITY,ce=Number.NEGATIVE_INFINITY,ue=0;ue<p;++ue){var he=X[ue],le=Z[ue],Ie=he/_,me=le/_,ge=c.CesiumMath.lerp(W,B,J[ue]/_);H.longitude=c.CesiumMath.lerp(b,C,Ie),H.latitude=c.CesiumMath.lerp(x,A,me),H.height=ge,ae=Math.min(H.longitude,ae),se=Math.max(H.longitude,se),de=Math.min(H.latitude,de),ce=Math.max(H.latitude,ce);var fe=S.cartographicToCartesian(H);ee[ue]=new i.Cartesian2(Ie,me),te[ue]=ge,re[ue]=fe,w&&(ie[ue]=(m.WebMercatorProjection.geodeticLatitudeToMercatorAngle(H.latitude)-f)*v),u.Matrix4.multiplyByPoint(Q,fe,F),n.Cartesian3.minimumByComponent(F,ne,ne),n.Cartesian3.maximumByComponent(F,oe,oe)}var ve,Te,pe=z(l.westIndices,(function(e,t){return ee[e].y-ee[t].y})),Ee=z(l.eastIndices,(function(e,t){return ee[t].y-ee[e].y})),ye=z(l.southIndices,(function(e,t){return ee[t].x-ee[e].x})),we=z(l.northIndices,(function(e,t){return ee[e].x-ee[t].x}));Te=r.BoundingSphere.fromPoints(re),ve=h.OrientedBoundingBox.fromRectangle(N,W,B,S);var Ne,be=h.OrientedBoundingBox.fromRectangle(N,L,j,S);(1!==P||W<0)&&(Ne=new s.EllipsoidalOccluder(S).computeHorizonCullingPointPossiblyUnderEllipsoid(q,re,W));var xe=W;xe=Math.min(xe,Y(l.westIndices,l.westSkirtHeight,te,ee,N,S,Q,ne,oe)),xe=Math.min(xe,Y(l.southIndices,l.southSkirtHeight,te,ee,N,S,Q,ne,oe)),xe=Math.min(xe,Y(l.eastIndices,l.eastSkirtHeight,te,ee,N,S,Q,ne,oe)),xe=Math.min(xe,Y(l.northIndices,l.northSkirtHeight,te,ee,N,S,Q,ne,oe));for(var Me=new t.AxisAlignedBoundingBox(ne,oe,q),Ce=new s.TerrainEncoding(Me,xe,B,K,$,w),Ae=Ce.getStride(),Se=new Float32Array(p*Ae+y*Ae),Pe=0,We=0;We<p;++We){if($){var Be=2*We;if(O.x=E[Be],O.y=E[Be+1],1!==P){var _e=e.AttributeCompression.octDecode(O.x,O.y,V),Fe=I.Transforms.eastNorthUpToFixedFrame(re[We],S,R),De=u.Matrix4.inverseTransformation(Fe,G);u.Matrix4.multiplyByPointAsVector(De,_e,_e),_e.z*=P,n.Cartesian3.normalize(_e,_e),u.Matrix4.multiplyByPointAsVector(Fe,_e,_e),n.Cartesian3.normalize(_e,_e),e.AttributeCompression.octEncode(_e,O)}}Pe=Ce.encode(Se,Pe,re[We],ee[We],te[We],O,ie[We])}var ke=Math.max(0,2*(y-4)),He=l.indices.length+3*ke,Oe=d.IndexDatatype.createTypedArray(p+y,He);Oe.set(l.indices,0);var Ve=1e-4,Ge=(se-ae)*Ve,Re=(ce-de)*Ve,Ye=-Ge,Ue=Ge,ze=Re,Le=-Re,je=p*Ae;U(Se,je,pe,Ce,te,ee,E,S,N,l.westSkirtHeight,P,f,v,Ye,0),U(Se,je+=l.westIndices.length*Ae,ye,Ce,te,ee,E,S,N,l.southSkirtHeight,P,f,v,0,Le),U(Se,je+=l.southIndices.length*Ae,Ee,Ce,te,ee,E,S,N,l.eastSkirtHeight,P,f,v,Ue,0),U(Se,je+=l.eastIndices.length*Ae,we,Ce,te,ee,E,S,N,l.northSkirtHeight,P,f,v,0,ze);var qe=function(e,t,r,i){if(i<12)return;for(var n={},o=e.length,a=0;a<o;a+=3){var s=e[a],d=e[a+1],c=e[a+2];(t[s]===_&&t[d]===_||0===t[s]&&0===t[d]||r[s]===_&&r[d]===_||0===r[s]&&0===r[d])&&(n[s+"_"+d]=1,n[d+"_"+s]=1),(t[d]===_&&t[c]===_||0===t[d]&&0===t[c]||r[d]===_&&r[c]===_||0===r[d]&&0===r[c])&&(n[d+"_"+c]=1,n[c+"_"+d]=1),(t[c]===_&&t[s]===_||0===t[c]&&0===t[s]||r[c]===_&&r[s]===_||0===r[c]&&0===r[s])&&(n[c+"_"+s]=1,n[s+"_"+c]=1)}return n}(l.indices,X,Z,l.level);return M.addSkirtIndices(pe,ye,Ee,we,p,Oe,l.indices.length,qe),g.push(Se.buffer,Oe.buffer),{vertices:Se.buffer,indices:Oe.buffer,westIndicesSouthToNorth:pe,southIndicesEastToWest:ye,eastIndicesNorthToSouth:Ee,northIndicesWestToEast:we,vertexStride:Ae,center:q,minimumHeight:W,maximumHeight:B,boundingSphere:Te,orientedBoundingBox:ve,validOrientedBoundingBox:be,occludeePointInScaledSpace:Ne,encoding:Ce,indexCountWithoutSkirts:l.indices.length}}))}));
