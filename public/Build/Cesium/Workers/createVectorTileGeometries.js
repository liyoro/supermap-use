define(["./buildModuleUrl-9085faaa","./BoxGeometry-97759c2d","./Cartographic-3309dd0d","./Color-2a095a27","./CylinderGeometry-3abda6bb","./when-b60132fc","./EllipsoidGeometry-c2107184","./IndexDatatype-8a5eead4","./FeatureDetection-806b12f0","./createTaskProcessorWorker","./Check-7b2a090c","./Rectangle-dee65d21","./Math-119be1a3","./Event-16a2dfbf","./RuntimeError-4a5c8994","./arrayFill-4513d7ad","./ComponentDatatype-c140a87d","./WebGLConstants-4ae0db90","./GeometryAttribute-c65394ac","./Cartesian2-db21342c","./Cartesian4-3ca25aab","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./VertexFormat-6446fca0","./CylinderGeometryLibrary-aa453214"],(function(e,t,a,n,r,i,o,d,s,c,f,l,u,h,b,p,y,g,v,x,C,m,I,k,M){"use strict";function B(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var w=new a.Cartesian3,A=s.Matrix4.packedLength+a.Cartesian3.packedLength,O=s.Matrix4.packedLength+2,L=s.Matrix4.packedLength+a.Cartesian3.packedLength,E=a.Cartesian3.packedLength+1,U={modelMatrix:new s.Matrix4,boundingVolume:new e.BoundingSphere};function G(e,t){var n=t*A,r=a.Cartesian3.unpack(e,n,w);n+=a.Cartesian3.packedLength;var i=s.Matrix4.unpack(e,n,U.modelMatrix);s.Matrix4.multiplyByScale(i,r,i);var o=U.boundingVolume;return a.Cartesian3.clone(a.Cartesian3.ZERO,o.center),o.radius=Math.sqrt(3),U}function F(e,t){var n=t*O,r=e[n++],i=e[n++],o=a.Cartesian3.fromElements(r,r,i,w),d=s.Matrix4.unpack(e,n,U.modelMatrix);s.Matrix4.multiplyByScale(d,o,d);var c=U.boundingVolume;return a.Cartesian3.clone(a.Cartesian3.ZERO,c.center),c.radius=Math.sqrt(2),U}function S(e,t){var n=t*L,r=a.Cartesian3.unpack(e,n,w);n+=a.Cartesian3.packedLength;var i=s.Matrix4.unpack(e,n,U.modelMatrix);s.Matrix4.multiplyByScale(i,r,i);var o=U.boundingVolume;return a.Cartesian3.clone(a.Cartesian3.ZERO,o.center),o.radius=1,U}function V(e,t){var n=t*E,r=e[n++],i=a.Cartesian3.unpack(e,n,w),o=s.Matrix4.fromTranslation(i,U.modelMatrix);s.Matrix4.multiplyByUniformScale(o,r,o);var d=U.boundingVolume;return a.Cartesian3.clone(a.Cartesian3.ZERO,d.center),d.radius=1,U}var R=new a.Cartesian3;function T(t,r,o,d,c){if(i.defined(r)){for(var f=o.length,l=d.attributes.position.values,u=d.indices,h=t.positions,b=t.vertexBatchIds,p=t.indices,y=t.batchIds,g=t.batchTableColors,v=t.batchedIndices,x=t.indexOffsets,C=t.indexCounts,m=t.boundingVolumes,I=t.modelMatrix,k=t.center,M=t.positionOffset,w=t.batchIdIndex,A=t.indexOffset,O=t.batchedIndicesOffset,L=0;L<f;++L){var E=c(r,L),U=E.modelMatrix;s.Matrix4.multiply(I,U,U);for(var G=o[L],F=l.length,S=0;S<F;S+=3){var V=a.Cartesian3.unpack(l,S,R);s.Matrix4.multiplyByPoint(U,V,V),a.Cartesian3.subtract(V,k,V),a.Cartesian3.pack(V,h,3*M+S),b[w++]=G}for(var T=u.length,D=0;D<T;++D)p[A+D]=u[D]+M;var Z=L+O;v[Z]=new B({offset:A,count:T,color:n.Color.fromRgba(g[G]),batchIds:[G]}),y[Z]=G,x[Z]=A,C[Z]=T,m[Z]=e.BoundingSphere.transform(E.boundingVolume,U),M+=F/3,A+=T}t.positionOffset=M,t.batchIdIndex=w,t.indexOffset=A,t.batchedIndicesOffset+=f}}var D=new a.Cartesian3,Z=new s.Matrix4;function P(t,a,r){var i=r.length,o=2+i*e.BoundingSphere.packedLength+1+function(e){for(var t=e.length,a=0,r=0;r<t;++r)a+=n.Color.packedLength+3+e[r].batchIds.length;return a}(a),d=new Float64Array(o),s=0;d[s++]=t,d[s++]=i;for(var c=0;c<i;++c)e.BoundingSphere.pack(r[c],d,s),s+=e.BoundingSphere.packedLength;var f=a.length;d[s++]=f;for(var l=0;l<f;++l){var u=a[l];n.Color.pack(u.color,d,s),s+=n.Color.packedLength,d[s++]=u.offset,d[s++]=u.count;var h=u.batchIds,b=h.length;d[s++]=b;for(var p=0;p<b;++p)d[s++]=h[p]}return d}return c((function(e,n){var c=i.defined(e.boxes)?new Float32Array(e.boxes):void 0,f=i.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,l=i.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,u=i.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,h=i.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,b=i.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,p=i.defined(e.spheres)?new Float32Array(e.spheres):void 0,y=i.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,g=i.defined(c)?f.length:0,v=i.defined(l)?u.length:0,x=i.defined(h)?b.length:0,C=i.defined(p)?y.length:0,m=t.BoxGeometry.getUnitBox(),I=r.CylinderGeometry.getUnitCylinder(),k=o.EllipsoidGeometry.getUnitEllipsoid(),M=m.attributes.position.values,B=I.attributes.position.values,w=k.attributes.position.values,A=M.length*g;A+=B.length*v,A+=w.length*(x+C);var O=m.indices,L=I.indices,E=k.indices,U=O.length*g;U+=L.length*v,U+=E.length*(x+C);var R=new Float32Array(A),q=new Uint16Array(A/3),W=d.IndexDatatype.createTypedArray(A/3,U),_=g+v+x+C,N=new Uint16Array(_),Y=new Array(_),j=new Uint32Array(_),z=new Uint32Array(_),H=new Array(_);!function(e){var t=new Float64Array(e),n=0;a.Cartesian3.unpack(t,n,D),n+=a.Cartesian3.packedLength,s.Matrix4.unpack(t,n,Z)}(e.packedBuffer);var J={batchTableColors:new Uint32Array(e.batchTableColors),positions:R,vertexBatchIds:q,indices:W,batchIds:N,batchedIndices:Y,indexOffsets:j,indexCounts:z,boundingVolumes:H,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:Z,center:D};T(J,c,f,m,G),T(J,l,u,I,F),T(J,h,b,k,S),T(J,p,y,k,V);var K=P(W.BYTES_PER_ELEMENT,Y,H);return n.push(R.buffer,q.buffer,W.buffer),n.push(N.buffer,j.buffer,z.buffer),n.push(K.buffer),{positions:R.buffer,vertexBatchIds:q.buffer,indices:W.buffer,indexOffsets:j.buffer,indexCounts:z.buffer,batchIds:N.buffer,packedBuffer:K.buffer}}))}));
