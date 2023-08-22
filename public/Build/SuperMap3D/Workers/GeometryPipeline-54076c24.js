define(["exports","./AttributeCompression-399750a1","./buildModuleUrl-8cce5713","./Cartesian4-b0ddc4ba","./Check-7b2a090c","./when-b60132fc","./Math-31e539c2","./FeatureDetection-ab6f364c","./EncodedCartesian3-ac3717ed","./GeometryAttribute-923c2729","./IndexDatatype-3565e02d","./Plane-5716a082"],(function(e,t,r,a,n,i,s,o,u,p,d,l){"use strict";var v=new a.Cartesian3,y=new a.Cartesian3,f=new a.Cartesian3;var c={calculateACMR:function(e){var t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=i.defaultValue(e.cacheSize,24),n=t.length;if(!i.defined(r)){r=0;for(var s=0,o=t[s];s<n;)o>r&&(r=o),o=t[++s]}for(var u=[],p=0;p<r+1;p++)u[p]=0;for(var d=a+1,l=0;l<n;++l)d-u[t[l]]>a&&(u[t[l]]=d,++d);return(d-a+1)/(n/3)}};c.tipsify=function(e){var t,r=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).indices,a=e.maximumIndex,n=i.defaultValue(e.cacheSize,24);function s(e,r,a,n,i,s,o){for(var u,p=-1,d=-1,l=0;l<a.length;){var v=a[l];n[v].numLiveTriangles&&(u=0,i-n[v].timeStamp+2*n[v].numLiveTriangles<=r&&(u=i-n[v].timeStamp),(u>d||-1===d)&&(d=u,p=v)),++l}return-1===p?function(e,r,a,n){for(;r.length>=1;){var i=r[r.length-1];if(r.splice(r.length-1,1),e[i].numLiveTriangles>0)return i}for(;t<n;){if(e[t].numLiveTriangles>0)return++t-1;++t}return-1}(n,s,0,o):p}var o=r.length,u=0,p=0,d=r[p],l=o;if(i.defined(a))u=a+1;else{for(;p<l;)d>u&&(u=d),d=r[++p];if(-1===u)return 0;++u}var v,y=[];for(v=0;v<u;v++)y[v]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};p=0;for(var f=0;p<l;)y[r[p]].vertexTriangles.push(f),++y[r[p]].numLiveTriangles,y[r[p+1]].vertexTriangles.push(f),++y[r[p+1]].numLiveTriangles,y[r[p+2]].vertexTriangles.push(f),++y[r[p+2]].numLiveTriangles,++f,p+=3;var c=0,m=n+1;t=1;var h,C,b,g,A=[],T=[],x=0,P=[],w=o/3,S=[];for(v=0;v<w;v++)S[v]=!1;for(;-1!==c;){A=[],g=(C=y[c]).vertexTriangles.length;for(var D=0;D<g;++D)if(!S[f=C.vertexTriangles[D]]){S[f]=!0,p=f+f+f;for(var I=0;I<3;++I)b=r[p],A.push(b),T.push(b),P[x]=b,++x,--(h=y[b]).numLiveTriangles,m-h.timeStamp>n&&(h.timeStamp=m,++m),++p}c=s(0,n,A,y,m,T,u)}return P};var m={};function h(e,t,r,a,n){e[t++]=r,e[t++]=a,e[t++]=a,e[t++]=n,e[t++]=n,e[t]=r}function C(e){var t={};for(var r in e)if(e.hasOwnProperty(r)&&i.defined(e[r])&&i.defined(e[r].values)){var a=e[r];t[r]=new p.GeometryAttribute({componentDatatype:a.componentDatatype,componentsPerAttribute:a.componentsPerAttribute,normalize:a.normalize,values:[]})}return t}function b(e,t,r){for(var a in t)if(t.hasOwnProperty(a)&&i.defined(t[a])&&i.defined(t[a].values))for(var n=t[a],s=0;s<n.componentsPerAttribute;++s)e[a].values.push(n.values[r*n.componentsPerAttribute+s])}m.toWireframe=function(e){var t=e.indices;if(i.defined(t)){switch(e.primitiveType){case r.PrimitiveType.TRIANGLES:e.indices=function(e){for(var t=e.length,r=t/3*6,a=d.IndexDatatype.createTypedArray(t,r),n=0,i=0;i<t;i+=3,n+=6)h(a,n,e[i],e[i+1],e[i+2]);return a}(t);break;case r.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(t>=3){var r=6*(t-2),a=d.IndexDatatype.createTypedArray(t,r);h(a,0,e[0],e[1],e[2]);for(var n=6,i=3;i<t;++i,n+=6)h(a,n,e[i-1],e[i],e[i-2]);return a}return new Uint16Array}(t);break;case r.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){for(var t=e.length-1,r=6*(t-1),a=d.IndexDatatype.createTypedArray(t,r),n=e[0],i=0,s=1;s<t;++s,i+=6)h(a,i,n,e[s],e[s+1]);return a}return new Uint16Array}(t)}e.primitiveType=r.PrimitiveType.LINES}return e},m.createLineSegmentsForVectors=function(e,t,a){t=i.defaultValue(t,"normal"),a=i.defaultValue(a,1e4);for(var n,s=e.attributes.position.values,u=e.attributes[t].values,d=s.length,l=new Float64Array(2*d),v=0,y=0;y<d;y+=3)l[v++]=s[y],l[v++]=s[y+1],l[v++]=s[y+2],l[v++]=s[y]+u[y]*a,l[v++]=s[y+1]+u[y+1]*a,l[v++]=s[y+2]+u[y+2]*a;var f=e.boundingSphere;return i.defined(f)&&(n=new r.BoundingSphere(f.center,f.radius+a)),new p.Geometry({attributes:{position:new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},primitiveType:r.PrimitiveType.LINES,boundingSphere:n})},m.createAttributeLocations=function(e){var t,r=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],a=e.attributes,n={},s=0,o=r.length;for(t=0;t<o;++t){var u=r[t];i.defined(a[u])&&(n[u]=s++)}for(var p in a)a.hasOwnProperty(p)&&!i.defined(n[p])&&(n[p]=s++);return n},m.reorderForPreVertexCache=function(e){var t=p.Geometry.computeNumberOfVertices(e),r=e.indices;if(i.defined(r)){for(var a=new Int32Array(t),n=0;n<t;n++)a[n]=-1;for(var s,u=r,l=u.length,v=d.IndexDatatype.createTypedArray(t,l),y=0,f=0,c=0;y<l;)-1!==(s=a[u[y]])?v[f]=s:(a[s=u[y]]=c,v[f]=c,++c),++y,++f;e.indices=v;var m=e.attributes;for(var h in m)if(m.hasOwnProperty(h)&&i.defined(m[h])&&i.defined(m[h].values)){for(var C=m[h],b=C.values,g=0,A=C.componentsPerAttribute,T=o.ComponentDatatype.createTypedArray(C.componentDatatype,c*A);g<t;){var x=a[g];if(-1!==x)for(var P=0;P<A;P++)T[A*x+P]=b[A*g+P];++g}C.values=T}}return e},m.reorderForPostVertexCache=function(e,t){var a=e.indices;if(e.primitiveType===r.PrimitiveType.TRIANGLES&&i.defined(a)){for(var n=a.length,s=0,o=0;o<n;o++)a[o]>s&&(s=a[o]);e.indices=c.tipsify({indices:a,maximumIndex:s,cacheSize:t})}return e},m.fitToUnsignedShortIndices=function(e){var t=[],a=p.Geometry.computeNumberOfVertices(e);if(i.defined(e.indices)&&a>=s.Math3D.SIXTY_FOUR_KILOBYTES){var n,o=[],u=[],d=0,l=C(e.attributes),v=e.indices,y=v.length;e.primitiveType===r.PrimitiveType.TRIANGLES?n=3:e.primitiveType===r.PrimitiveType.LINES?n=2:e.primitiveType===r.PrimitiveType.POINTS&&(n=1);for(var f=0;f<y;f+=n){for(var c=0;c<n;++c){var m=v[f+c],h=o[m];i.defined(h)||(h=d++,o[m]=h,b(l,e.attributes,m)),u.push(h)}d+n>=s.Math3D.SIXTY_FOUR_KILOBYTES&&(t.push(new p.Geometry({attributes:l,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),o=[],u=[],d=0,l=C(e.attributes))}0!==u.length&&t.push(new p.Geometry({attributes:l,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};var g=new a.Cartesian3,A=new a.Cartographic;m.projectTo2D=function(e,t,n,s,u){for(var d=e.attributes[t],l=(u=i.defined(u)?u:new r.GeographicProjection).ellipsoid,v=d.values,y=new Float64Array(v.length),f=0,c=0;c<v.length;c+=3){var m=a.Cartesian3.fromArray(v,c,g),h=l.cartesianToCartographic(m,A),C=u.project(h,g);y[f++]=C.x,y[f++]=C.y,y[f++]=C.z}return e.attributes[n]=d,e.attributes[s]=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y}),delete e.attributes[t],e};var T={high:0,low:0};m.encodeAttribute=function(e,t,r,a){for(var n=e.attributes[t],i=n.values,s=i.length,d=new Float32Array(s),l=new Float32Array(s),v=0;v<s;++v)u.EncodedCartesian3.encode(i[v],T),d[v]=T.high,l[v]=T.low;var y=n.componentsPerAttribute;return e.attributes[r]=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:y,values:d}),e.attributes[a]=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:y,values:l}),delete e.attributes[t],e};var x=new a.Cartesian3;function P(e,t){if(i.defined(t))for(var n=t.values,s=n.length,o=0;o<s;o+=3)a.Cartesian3.unpack(n,o,x),r.Matrix4.multiplyByPoint(e,x,x),a.Cartesian3.pack(x,n,o)}function w(e,t){if(i.defined(t))for(var n=t.values,s=n.length,o=0;o<s;o+=3)a.Cartesian3.unpack(n,o,x),r.Matrix3.multiplyByVector(e,x,x),x=a.Cartesian3.normalize(x,x),a.Cartesian3.pack(x,n,o)}var S=new r.Matrix4,D=new r.Matrix3;m.transformToWorldCoordinates=function(e){var t=e.modelMatrix;if(r.Matrix4.equals(t,r.Matrix4.IDENTITY))return e;var a=e.geometry.attributes;P(t,a.position),P(t,a.prevPosition),P(t,a.nextPosition),(i.defined(a.normal)||i.defined(a.tangent)||i.defined(a.bitangent))&&(r.Matrix4.inverse(t,S),r.Matrix4.transpose(S,S),r.Matrix4.getRotation(S,D),w(D,a.normal),w(D,a.tangent),w(D,a.bitangent));var n=e.geometry.boundingSphere;return i.defined(n)&&(e.geometry.boundingSphere=r.BoundingSphere.transform(n,t,n)),e.modelMatrix=r.Matrix4.clone(r.Matrix4.IDENTITY),e};var I=new a.Cartesian3;function O(e,t){var n,s,u,l,v=e.length;e[0].modelMatrix;var y,f,c,m,h=i.defined(e[0][t].indices),C=e[0][t].primitiveType,b=function(e,t){var r,a=e.length,n={},s=e[0][t].attributes;for(r in s)if(s.hasOwnProperty(r)&&i.defined(s[r])&&i.defined(s[r].values)){for(var u=s[r],d=u.values.length,l=!0,v=1;v<a;++v){var y=e[v][t].attributes[r];if(!i.defined(y)||u.componentDatatype!==y.componentDatatype||u.componentsPerAttribute!==y.componentsPerAttribute||u.normalize!==y.normalize){l=!1;break}d+=y.values.length}l&&(n[r]=new p.GeometryAttribute({componentDatatype:u.componentDatatype,componentsPerAttribute:u.componentsPerAttribute,normalize:u.normalize,values:o.ComponentDatatype.createTypedArray(u.componentDatatype,d)}))}return n}(e,t);for(n in b)if(b.hasOwnProperty(n))for(y=b[n].values,l=0,s=0;s<v;++s)for(c=(f=e[s][t].attributes[n].values).length,u=0;u<c;++u)y[l++]=f[u];if(h){var g=0;for(s=0;s<v;++s)g+=e[s][t].indices.length;var A=p.Geometry.computeNumberOfVertices(new p.Geometry({attributes:b,primitiveType:r.PrimitiveType.POINTS})),T=d.IndexDatatype.createTypedArray(A,g),x=0,P=0;for(s=0;s<v;++s){var w=e[s][t].indices,S=w.length;for(l=0;l<S;++l)T[x++]=P+w[l];P+=p.Geometry.computeNumberOfVertices(e[s][t])}m=T}var D,O=new a.Cartesian3,E=0;for(s=0;s<v;++s){if(D=e[s][t].boundingSphere,!i.defined(D)){O=void 0;break}a.Cartesian3.add(D.center,O,O)}if(i.defined(O))for(a.Cartesian3.divideByScalar(O,v,O),s=0;s<v;++s){D=e[s][t].boundingSphere;var N=a.Cartesian3.magnitude(a.Cartesian3.subtract(D.center,O,I))+D.radius;N>E&&(E=N)}return new p.Geometry({attributes:b,indices:m,primitiveType:C,boundingSphere:i.defined(O)?new r.BoundingSphere(O,E):void 0})}m.combineInstances=function(e){for(var t=[],r=[],a=e.length,n=0;n<a;++n){var s=e[n];i.defined(s.geometry)?t.push(s):i.defined(s.westHemisphereGeometry)&&i.defined(s.eastHemisphereGeometry)&&r.push(s)}var o=[];return t.length>0&&o.push(O(t,"geometry")),r.length>0&&(o.push(O(r,"westHemisphereGeometry")),o.push(O(r,"eastHemisphereGeometry"))),o};var E=new a.Cartesian3,N=new a.Cartesian3,L=new a.Cartesian3,z=new a.Cartesian3;m.computeNormal=function(e){var t,r=e.indices,n=e.attributes,i=n.position.values,u=n.position.values.length/3,d=r.length,l=new Array(u),v=new Array(d/3),y=new Array(d);for(t=0;t<u;t++)l[t]={indexOffset:0,count:0,currentCount:0};var f=0;for(t=0;t<d;t+=3){var c=r[t],m=r[t+1],h=r[t+2],C=3*c,b=3*m,g=3*h;N.x=i[C],N.y=i[C+1],N.z=i[C+2],L.x=i[b],L.y=i[b+1],L.z=i[b+2],z.x=i[g],z.y=i[g+1],z.z=i[g+2],l[c].count++,l[m].count++,l[h].count++,a.Cartesian3.subtract(L,N,L),a.Cartesian3.subtract(z,N,z),v[f]=a.Cartesian3.cross(L,z,new a.Cartesian3),f++}var A,T=0;for(t=0;t<u;t++)l[t].indexOffset+=T,T+=l[t].count;for(f=0,t=0;t<d;t+=3){var x=(A=l[r[t]]).indexOffset+A.currentCount;y[x]=f,A.currentCount++,y[x=(A=l[r[t+1]]).indexOffset+A.currentCount]=f,A.currentCount++,y[x=(A=l[r[t+2]]).indexOffset+A.currentCount]=f,A.currentCount++,f++}var P=new Float32Array(3*u);for(t=0;t<u;t++){var w=3*t;if(A=l[t],a.Cartesian3.clone(a.Cartesian3.ZERO,E),A.count>0){for(f=0;f<A.count;f++)a.Cartesian3.add(E,v[y[A.indexOffset+f]],E);a.Cartesian3.equalsEpsilon(a.Cartesian3.ZERO,E,s.Math3D.EPSILON10)&&a.Cartesian3.clone(v[y[A.indexOffset]],E)}a.Cartesian3.equalsEpsilon(a.Cartesian3.ZERO,E,s.Math3D.EPSILON10)&&(E.z=1),a.Cartesian3.normalize(E,E),P[w]=E.x,P[w+1]=E.y,P[w+2]=E.z}return e.attributes.normal=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:P}),e};var M=new a.Cartesian3,G=new a.Cartesian3,R=new a.Cartesian3;m.computeTangentAndBitangent=function(e){e.attributes;var t,r,n,i,s=e.indices,u=e.attributes.position.values,d=e.attributes.normal.values,l=e.attributes.st.values,v=e.attributes.position.values.length/3,y=s.length,f=new Array(3*v);for(t=0;t<f.length;t++)f[t]=0;for(t=0;t<y;t+=3){var c=s[t],m=s[t+1],h=s[t+2];n=3*m,i=3*h;var C=2*c,b=2*m,g=2*h,A=u[r=3*c],T=u[r+1],x=u[r+2],P=l[C],w=l[C+1],S=l[b+1]-w,D=l[g+1]-w,I=1/((l[b]-P)*D-(l[g]-P)*S),O=(D*(u[n]-A)-S*(u[i]-A))*I,E=(D*(u[n+1]-T)-S*(u[i+1]-T))*I,N=(D*(u[n+2]-x)-S*(u[i+2]-x))*I;f[r]+=O,f[r+1]+=E,f[r+2]+=N,f[n]+=O,f[n+1]+=E,f[n+2]+=N,f[i]+=O,f[i+1]+=E,f[i+2]+=N}var L=new Float32Array(3*v),z=new Float32Array(3*v);for(t=0;t<v;t++){n=(r=3*t)+1,i=r+2;var V=a.Cartesian3.fromArray(d,r,M),F=a.Cartesian3.fromArray(f,r,R),B=a.Cartesian3.dot(V,F);a.Cartesian3.multiplyByScalar(V,B,G),a.Cartesian3.normalize(a.Cartesian3.subtract(F,G,F),F),L[r]=F.x,L[n]=F.y,L[i]=F.z,a.Cartesian3.normalize(a.Cartesian3.cross(V,F,F),F),z[r]=F.x,z[n]=F.y,z[i]=F.z}return e.attributes.tangent=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L}),e.attributes.bitangent=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:z}),e};var V=new r.Cartesian2,F=new a.Cartesian3,B=new a.Cartesian3,k=new a.Cartesian3,_=new r.Cartesian2;function U(e){switch(e.primitiveType){case r.PrimitiveType.TRIANGLE_FAN:return function(e){var t=p.Geometry.computeNumberOfVertices(e),a=d.IndexDatatype.createTypedArray(t,3*(t-2));a[0]=1,a[1]=0,a[2]=2;for(var n=3,i=3;i<t;++i)a[n++]=i-1,a[n++]=0,a[n++]=i;return e.indices=a,e.primitiveType=r.PrimitiveType.TRIANGLES,e}(e);case r.PrimitiveType.TRIANGLE_STRIP:return function(e){var t=p.Geometry.computeNumberOfVertices(e),a=d.IndexDatatype.createTypedArray(t,3*(t-2));a[0]=0,a[1]=1,a[2]=2,t>3&&(a[3]=0,a[4]=2,a[5]=3);for(var n=6,i=3;i<t-1;i+=2)a[n++]=i,a[n++]=i-1,a[n++]=i+1,i+2<t&&(a[n++]=i,a[n++]=i+1,a[n++]=i+2);return e.indices=a,e.primitiveType=r.PrimitiveType.TRIANGLES,e}(e);case r.PrimitiveType.TRIANGLES:return function(e){if(i.defined(e.indices))return e;for(var t=p.Geometry.computeNumberOfVertices(e),r=d.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e);case r.PrimitiveType.LINE_STRIP:return function(e){var t=p.Geometry.computeNumberOfVertices(e),a=d.IndexDatatype.createTypedArray(t,2*(t-1));a[0]=0,a[1]=1;for(var n=2,i=2;i<t;++i)a[n++]=i-1,a[n++]=i;return e.indices=a,e.primitiveType=r.PrimitiveType.LINES,e}(e);case r.PrimitiveType.LINE_LOOP:return function(e){var t=p.Geometry.computeNumberOfVertices(e),a=d.IndexDatatype.createTypedArray(t,2*t);a[0]=0,a[1]=1;for(var n=2,i=2;i<t;++i)a[n++]=i-1,a[n++]=i;return a[n++]=t-1,a[n]=0,e.indices=a,e.primitiveType=r.PrimitiveType.LINES,e}(e);case r.PrimitiveType.LINES:return function(e){if(i.defined(e.indices))return e;for(var t=p.Geometry.computeNumberOfVertices(e),r=d.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e)}return e}function q(e,t){Math.abs(e.y)<s.Math3D.EPSILON6&&(e.y=t?-s.Math3D.EPSILON6:s.Math3D.EPSILON6)}m.compressVertices=function(e){var n,s,u=e.attributes.extrudeDirection;if(i.defined(u)){var d=u.values;s=d.length/3;var l=new Float32Array(2*s),v=0;for(n=0;n<s;++n)a.Cartesian3.fromArray(d,3*n,F),a.Cartesian3.equals(F,a.Cartesian3.ZERO)?v+=2:(_=t.AttributeCompression.octEncodeInRange(F,65535,_),l[v++]=_.x,l[v++]=_.y);return e.attributes.compressedAttributes=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:l}),delete e.attributes.extrudeDirection,e}var y=e.attributes.normal,f=e.attributes.st,c=i.defined(y),m=i.defined(f);if(!c&&!m)return e;var h,C,b,g,A=e.attributes.tangent,T=e.attributes.bitangent,x=i.defined(A),P=i.defined(T);c&&(h=y.values),m&&(C=f.values),x&&(b=A.values),P&&(g=T.values);var w=s=(c?h.length:C.length)/(c?3:2),S=m&&c?2:1;S+=x||P?1:0;var D=new Float32Array(w*=S),I=0;for(n=0;n<s;++n){m&&(r.Cartesian2.fromArray(C,2*n,V),D[I++]=t.AttributeCompression.compressTextureCoordinates(V));var O=3*n;c&&i.defined(b)&&i.defined(g)?(a.Cartesian3.fromArray(h,O,F),a.Cartesian3.fromArray(b,O,B),a.Cartesian3.fromArray(g,O,k),t.AttributeCompression.octPack(F,B,k,V),D[I++]=V.x,D[I++]=V.y):(c&&(a.Cartesian3.fromArray(h,O,F),D[I++]=t.AttributeCompression.octEncodeFloat(F)),x&&(a.Cartesian3.fromArray(b,O,F),D[I++]=t.AttributeCompression.octEncodeFloat(F)),P&&(a.Cartesian3.fromArray(g,O,F),D[I++]=t.AttributeCompression.octEncodeFloat(F)))}return e.attributes.compressedAttributes=new p.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:S,values:D}),c&&delete e.attributes.normal,m&&delete e.attributes.st,P&&delete e.attributes.bitangent,x&&delete e.attributes.tangent,e};var Y=new a.Cartesian3;function Z(e,t,r,n){a.Cartesian3.add(e,a.Cartesian3.multiplyByScalar(a.Cartesian3.subtract(t,e,Y),e.y/(e.y-t.y),Y),r),a.Cartesian3.clone(r,n),q(r,!0),q(n,!1)}var H=new a.Cartesian3,W=new a.Cartesian3,X=new a.Cartesian3,j=new a.Cartesian3,J={positions:new Array(7),indices:new Array(9)};function K(e,t,r){if(!(e.x>=0||t.x>=0||r.x>=0)){!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return q(e,e.y<0),q(t,t.y<0),void q(r,r.y<0);var a=Math.abs(e.y),n=Math.abs(t.y),i=Math.abs(r.y),o=(a>n?a>i?s.Math3D.sign(e.y):s.Math3D.sign(r.y):n>i?s.Math3D.sign(t.y):s.Math3D.sign(r.y))<0;q(e,o),q(t,o),q(r,o)}(e,t,r);var a=e.y<0,n=t.y<0,i=r.y<0,o=0;o+=a?1:0,o+=n?1:0;var u=J.indices;1===(o+=i?1:0)?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,a?(Z(e,t,H,X),Z(e,r,W,j),u[0]=0,u[3]=1,u[4]=2,u[6]=1):n?(Z(t,r,H,X),Z(t,e,W,j),u[0]=1,u[3]=2,u[4]=0,u[6]=2):i&&(Z(r,e,H,X),Z(r,t,W,j),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===o&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,a?n?i||(Z(r,e,H,X),Z(r,t,W,j),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(Z(t,r,H,X),Z(t,e,W,j),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(Z(e,t,H,X),Z(e,r,W,j),u[0]=1,u[1]=2,u[3]=1,u[6]=0));var p=J.positions;return p[0]=e,p[1]=t,p[2]=r,p.length=3,1!==o&&2!==o||(p[3]=H,p[4]=W,p[5]=X,p[6]=j,p.length=7),J}}function Q(e,t){var a=e.attributes;if(0!==a.position.values.length){for(var n in a)if(a.hasOwnProperty(n)&&i.defined(a[n])&&i.defined(a[n].values)){var s=a[n];s.values=o.ComponentDatatype.createTypedArray(s.componentDatatype,s.values)}var u=p.Geometry.computeNumberOfVertices(e);return e.indices=d.IndexDatatype.createTypedArray(u,e.indices),t&&(e.boundingSphere=r.BoundingSphere.fromVertices(a.position.values)),e}}function $(e){var t=e.attributes,r={};for(var a in t)if(t.hasOwnProperty(a)&&i.defined(t[a])&&i.defined(t[a].values)){var n=t[a];r[a]=new p.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return new p.Geometry({attributes:r,indices:[],primitiveType:e.primitiveType})}function ee(e,t,r){var a=i.defined(e.geometry.boundingSphere);t=Q(t,a),r=Q(r,a),i.defined(r)&&!i.defined(t)?e.geometry=r:!i.defined(r)&&i.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function te(e,t){var r=new e,a=new e,n=new e;return function(i,s,o,u,p,d,l,v){var y=e.fromArray(p,i*t,r),f=e.fromArray(p,s*t,a),c=e.fromArray(p,o*t,n);e.multiplyByScalar(y,u.x,y),e.multiplyByScalar(f,u.y,f),e.multiplyByScalar(c,u.z,c);var m=e.add(y,f,y);e.add(m,c,m),v&&e.normalize(m,m),e.pack(m,d,l*t)}}var re=te(a.Cartesian4,4),ae=te(a.Cartesian3,3),ne=te(r.Cartesian2,2),ie=new a.Cartesian3,se=new a.Cartesian3,oe=new a.Cartesian3,ue=new a.Cartesian3;function pe(e,t,n,o,u,p,d,l,c,m,h,C,b,g,A,T){if(i.defined(p)||i.defined(d)||i.defined(l)||i.defined(c)||i.defined(m)||0!==g){var x=function(e,t,n,o,u){var p,d,l,c,m,h,C,b;if(i.defined(u)||(u=new a.Cartesian3),i.defined(t.z)){if(a.Cartesian3.equalsEpsilon(e,t,s.Math3D.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_X,u);if(a.Cartesian3.equalsEpsilon(e,n,s.Math3D.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Y,u);if(a.Cartesian3.equalsEpsilon(e,o,s.Math3D.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Z,u);p=a.Cartesian3.subtract(n,t,v),d=a.Cartesian3.subtract(o,t,y),l=a.Cartesian3.subtract(e,t,f),c=a.Cartesian3.dot(p,p),m=a.Cartesian3.dot(p,d),h=a.Cartesian3.dot(p,l),C=a.Cartesian3.dot(d,d),b=a.Cartesian3.dot(d,l)}else{if(r.Cartesian2.equalsEpsilon(e,t,s.Math3D.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_X,u);if(r.Cartesian2.equalsEpsilon(e,n,s.Math3D.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Y,u);if(r.Cartesian2.equalsEpsilon(e,o,s.Math3D.EPSILON14))return a.Cartesian3.clone(a.Cartesian3.UNIT_Z,u);p=r.Cartesian2.subtract(n,t,v),d=r.Cartesian2.subtract(o,t,y),l=r.Cartesian2.subtract(e,t,f),c=r.Cartesian2.dot(p,p),m=r.Cartesian2.dot(p,d),h=r.Cartesian2.dot(p,l),C=r.Cartesian2.dot(d,d),b=r.Cartesian2.dot(d,l)}u.y=C*h-m*b,u.z=c*b-m*h;var g=c*C-m*m;return 0!==u.y&&(u.y/=g),0!==u.z&&(u.z/=g),u.x=1-u.y-u.z,u}(o,a.Cartesian3.fromArray(u,3*e,ie),a.Cartesian3.fromArray(u,3*t,se),a.Cartesian3.fromArray(u,3*n,oe),ue);if(i.defined(p)&&ae(e,t,n,x,p,C.normal.values,T,!0),i.defined(m)){var P,w=a.Cartesian3.fromArray(m,3*e,ie),S=a.Cartesian3.fromArray(m,3*t,se),D=a.Cartesian3.fromArray(m,3*n,oe);a.Cartesian3.multiplyByScalar(w,x.x,w),a.Cartesian3.multiplyByScalar(S,x.y,S),a.Cartesian3.multiplyByScalar(D,x.z,D),a.Cartesian3.equals(w,a.Cartesian3.ZERO)&&a.Cartesian3.equals(S,a.Cartesian3.ZERO)&&a.Cartesian3.equals(D,a.Cartesian3.ZERO)?((P=ie).x=0,P.y=0,P.z=0):(P=a.Cartesian3.add(w,S,w),a.Cartesian3.add(P,D,P),a.Cartesian3.normalize(P,P)),a.Cartesian3.pack(P,C.extrudeDirection.values,3*T)}if(i.defined(h)&&function(e,t,r,a,n,i,o){var u=n[e]*a.x,p=n[t]*a.y,d=n[r]*a.z;i[o]=u+p+d>s.Math3D.EPSILON6?1:0}(e,t,n,x,h,C.applyOffset.values,T),i.defined(d)&&ae(e,t,n,x,d,C.tangent.values,T,!0),i.defined(l)&&ae(e,t,n,x,l,C.bitangent.values,T,!0),i.defined(c)&&ne(e,t,n,x,c,C.st.values,T),g>0)for(var I=0;I<g;I++){var O=b[I];de(e,t,n,x,T,A[O],C[O])}}}function de(e,t,r,a,n,i,s){var o=i.componentsPerAttribute,u=i.values,p=s.values;switch(o){case 4:re(e,t,r,a,u,p,n,!1);break;case 3:ae(e,t,r,a,u,p,n,!1);break;case 2:ne(e,t,r,a,u,p,n,!1);break;default:p[n]=u[e]*a.x+u[t]*a.y+u[r]*a.z}}function le(e,t,r,a,n,i){var s=e.position.values.length/3;if(-1!==n){var o=a[n],u=r[o];return-1===u?(r[o]=s,e.position.values.push(i.x,i.y,i.z),t.push(s),s):(t.push(u),u)}return e.position.values.push(i.x,i.y,i.z),t.push(s),s}var ve={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function ye(e){var t=e.geometry,r=t.attributes,n=r.position.values,s=i.defined(r.normal)?r.normal.values:void 0,o=i.defined(r.bitangent)?r.bitangent.values:void 0,u=i.defined(r.tangent)?r.tangent.values:void 0,p=i.defined(r.st)?r.st.values:void 0,d=i.defined(r.extrudeDirection)?r.extrudeDirection.values:void 0,l=i.defined(r.applyOffset)?r.applyOffset.values:void 0,v=t.indices,y=[];for(var f in r)r.hasOwnProperty(f)&&!ve[f]&&i.defined(r[f])&&y.push(f);var c,m,h,C,b=y.length,g=$(t),A=$(t),T=[];T.length=n.length/3;var x=[];for(x.length=n.length/3,C=0;C<T.length;++C)T[C]=-1,x[C]=-1;var P=v.length;for(C=0;C<P;C+=3){var w=v[C],S=v[C+1],D=v[C+2],I=a.Cartesian3.fromArray(n,3*w),O=a.Cartesian3.fromArray(n,3*S),E=a.Cartesian3.fromArray(n,3*D),N=K(I,O,E);if(i.defined(N)&&N.positions.length>3)for(var L=N.positions,z=N.indices,M=z.length,G=0;G<M;++G){var R=z[G],V=L[R];V.y<0?(c=A.attributes,m=A.indices,h=T):(c=g.attributes,m=g.indices,h=x),pe(w,S,D,V,n,s,u,o,p,d,l,c,y,b,r,le(c,m,h,v,R<3?C+R:-1,V))}else i.defined(N)&&(I=N.positions[0],O=N.positions[1],E=N.positions[2]),I.y<0?(c=A.attributes,m=A.indices,h=T):(c=g.attributes,m=g.indices,h=x),pe(w,S,D,I,n,s,u,o,p,d,l,c,y,b,r,le(c,m,h,v,C,I)),pe(w,S,D,O,n,s,u,o,p,d,l,c,y,b,r,le(c,m,h,v,C+1,O)),pe(w,S,D,E,n,s,u,o,p,d,l,c,y,b,r,le(c,m,h,v,C+2,E))}ee(e,A,g)}var fe=l.Plane.fromPointNormal(a.Cartesian3.ZERO,a.Cartesian3.UNIT_Y),ce=new a.Cartesian3,me=new a.Cartesian3;function he(e,t,r,n,o,u,p){if(i.defined(p)){var d=a.Cartesian3.fromArray(n,3*e,ie);a.Cartesian3.equalsEpsilon(d,r,s.Math3D.EPSILON10)?u.applyOffset.values[o]=p[e]:u.applyOffset.values[o]=p[t]}}function Ce(e){var t,r=e.geometry,n=r.attributes,o=n.position.values,u=i.defined(n.applyOffset)?n.applyOffset.values:void 0,p=r.indices,d=$(r),v=$(r),y=p.length,f=[];f.length=o.length/3;var c=[];for(c.length=o.length/3,t=0;t<f.length;++t)f[t]=-1,c[t]=-1;for(t=0;t<y;t+=2){var m=p[t],h=p[t+1],C=a.Cartesian3.fromArray(o,3*m,ie),b=a.Cartesian3.fromArray(o,3*h,se);Math.abs(C.y)<s.Math3D.EPSILON6&&(C.y<0?C.y=-s.Math3D.EPSILON6:C.y=s.Math3D.EPSILON6),Math.abs(b.y)<s.Math3D.EPSILON6&&(b.y<0?b.y=-s.Math3D.EPSILON6:b.y=s.Math3D.EPSILON6);var g=d.attributes,A=d.indices,T=c,x=v.attributes,P=v.indices,w=f,S=l.IntersectionTests.lineSegmentPlane(C,b,fe,oe);if(i.defined(S)){var D=a.Cartesian3.multiplyByScalar(a.Cartesian3.UNIT_Y,5*s.Math3D.EPSILON9,ce);C.y<0&&(a.Cartesian3.negate(D,D),g=v.attributes,A=v.indices,T=f,x=d.attributes,P=d.indices,w=c);var I=a.Cartesian3.add(S,D,me);he(m,h,C,o,le(g,A,T,p,t,C),g,u),he(m,h,I,o,le(g,A,T,p,-1,I),g,u),a.Cartesian3.negate(D,D),a.Cartesian3.add(S,D,I),he(m,h,I,o,le(x,P,w,p,-1,I),x,u),he(m,h,b,o,le(x,P,w,p,t+1,b),x,u)}else{var O,E,N;C.y<0?(O=v.attributes,E=v.indices,N=f):(O=d.attributes,E=d.indices,N=c),he(m,h,C,o,le(O,E,N,p,t,C),O,u),he(m,h,b,o,le(O,E,N,p,t+1,b),O,u)}}ee(e,v,d)}var be=new r.Cartesian2,ge=new r.Cartesian2,Ae=new a.Cartesian3,Te=new a.Cartesian3,xe=new a.Cartesian3,Pe=new a.Cartesian3,we=new a.Cartesian3,Se=new a.Cartesian3,De=new a.Cartesian3,Ie=new a.Cartesian4;function Oe(e){for(var t=e.attributes,r=t.position.values,n=t.prevPosition.values,i=t.nextPosition.values,s=r.length,o=0;o<s;o+=3){var u=a.Cartesian3.unpack(r,o,Ae);if(!(u.x>0)){var p=a.Cartesian3.unpack(n,o,Te);(u.y<0&&p.y>0||u.y>0&&p.y<0)&&(o-3>0?(n[o]=r[o-3],n[o+1]=r[o-2],n[o+2]=r[o-1]):a.Cartesian3.pack(u,n,o));var d=a.Cartesian3.unpack(i,o,xe);(u.y<0&&d.y>0||u.y>0&&d.y<0)&&(o+3<s?(i[o]=r[o+3],i[o+1]=r[o+4],i[o+2]=r[o+5]):a.Cartesian3.pack(u,i,o))}}}var Ee=5*s.Math3D.EPSILON9,Ne=s.Math3D.EPSILON6;m.splitLongitude=function(e){var t=e.geometry,n=t.boundingSphere;if(i.defined(n)&&(n.center.x-n.radius>0||r.BoundingSphere.intersectPlane(n,l.Plane.ORIGIN_ZX_PLANE)!==r.Intersect.INTERSECTING))return e;if(t.geometryType!==p.GeometryType.NONE)switch(t.geometryType){case p.GeometryType.POLYLINES:!function(e){var t,n,o,u=e.geometry,p=u.attributes,d=p.position.values,v=p.prevPosition.values,y=p.nextPosition.values,f=p.expandAndWidth.values,c=i.defined(p.st)?p.st.values:void 0,m=i.defined(p.color)?p.color.values:void 0,h=i.defined(p.dist)?p.dist.values:void 0,C=$(u),b=$(u),g=!1,A=d.length/3;for(t=0;t<A;t+=4){var T=t,x=t+2,P=a.Cartesian3.fromArray(d,3*T,Ae),w=a.Cartesian3.fromArray(d,3*x,Te);if(Math.abs(P.y)<Ne)for(P.y=Ne*(w.y<0?-1:1),d[3*t+1]=P.y,d[3*(t+1)+1]=P.y,n=3*T;n<3*T+12;n+=3)v[n]=d[3*t],v[n+1]=d[3*t+1],v[n+2]=d[3*t+2];if(Math.abs(w.y)<Ne)for(w.y=Ne*(P.y<0?-1:1),d[3*(t+2)+1]=w.y,d[3*(t+3)+1]=w.y,n=3*T;n<3*T+12;n+=3)y[n]=d[3*(t+2)],y[n+1]=d[3*(t+2)+1],y[n+2]=d[3*(t+2)+2];var S=C.attributes,D=C.indices,I=b.attributes,O=b.indices,E=l.IntersectionTests.lineSegmentPlane(P,w,fe,Pe);if(i.defined(E)){g=!0;var N=a.Cartesian3.multiplyByScalar(a.Cartesian3.UNIT_Y,Ee,we);P.y<0&&(a.Cartesian3.negate(N,N),S=b.attributes,D=b.indices,I=C.attributes,O=C.indices);var L=a.Cartesian3.add(E,N,Se);S.position.values.push(P.x,P.y,P.z,P.x,P.y,P.z),S.position.values.push(L.x,L.y,L.z),S.position.values.push(L.x,L.y,L.z),S.prevPosition.values.push(v[3*T],v[3*T+1],v[3*T+2]),S.prevPosition.values.push(v[3*T+3],v[3*T+4],v[3*T+5]),S.prevPosition.values.push(P.x,P.y,P.z,P.x,P.y,P.z),S.nextPosition.values.push(L.x,L.y,L.z),S.nextPosition.values.push(L.x,L.y,L.z),S.nextPosition.values.push(L.x,L.y,L.z),S.nextPosition.values.push(L.x,L.y,L.z),a.Cartesian3.negate(N,N),a.Cartesian3.add(E,N,L),I.position.values.push(L.x,L.y,L.z),I.position.values.push(L.x,L.y,L.z),I.position.values.push(w.x,w.y,w.z,w.x,w.y,w.z),I.prevPosition.values.push(L.x,L.y,L.z),I.prevPosition.values.push(L.x,L.y,L.z),I.prevPosition.values.push(L.x,L.y,L.z),I.prevPosition.values.push(L.x,L.y,L.z),I.nextPosition.values.push(w.x,w.y,w.z,w.x,w.y,w.z),I.nextPosition.values.push(y[3*x],y[3*x+1],y[3*x+2]),I.nextPosition.values.push(y[3*x+3],y[3*x+4],y[3*x+5]);var z=r.Cartesian2.fromArray(f,2*T,be),M=Math.abs(z.y);S.expandAndWidth.values.push(-1,M,1,M),S.expandAndWidth.values.push(-1,-M,1,-M),I.expandAndWidth.values.push(-1,M,1,M),I.expandAndWidth.values.push(-1,-M,1,-M);var G=a.Cartesian3.magnitudeSquared(a.Cartesian3.subtract(E,P,xe));if(G/=a.Cartesian3.magnitudeSquared(a.Cartesian3.subtract(w,P,xe)),i.defined(m)){var R=a.Cartesian4.fromArray(m,4*T,Ie),V=a.Cartesian4.fromArray(m,4*x,Ie),F=s.Math3D.lerp(R.x,V.x,G),B=s.Math3D.lerp(R.y,V.y,G),k=s.Math3D.lerp(R.z,V.z,G),_=s.Math3D.lerp(R.w,V.w,G);for(n=4*T;n<4*T+8;++n)S.color.values.push(m[n]);for(S.color.values.push(F,B,k,_),S.color.values.push(F,B,k,_),I.color.values.push(F,B,k,_),I.color.values.push(F,B,k,_),n=4*x;n<4*x+8;++n)I.color.values.push(m[n])}if(i.defined(c)){var U=r.Cartesian2.fromArray(c,2*T,be),q=r.Cartesian2.fromArray(c,2*(t+3),ge),Y=s.Math3D.lerp(U.x,q.x,G);for(n=2*T;n<2*T+4;++n)S.st.values.push(c[n]);for(S.st.values.push(Y,U.y),S.st.values.push(Y,q.y),I.st.values.push(Y,U.y),I.st.values.push(Y,q.y),n=2*x;n<2*x+4;++n)I.st.values.push(c[n])}if(i.defined(h)){var Z=a.Cartesian3.fromArray(h,3*T,De),H=a.Cartesian3.fromArray(h,3*x,De),W=s.Math3D.lerp(Z.x,H.x,G);for(n=3*T;n<3*T+6;++n)S.dist.values.push(h[n]);for(S.dist.values.push(W,Z.y,Z.z),S.dist.values.push(W,Z.y,Z.z),I.dist.values.push(W,H.y,H.z),I.dist.values.push(W,H.y,H.z),n=3*x;n<3*x+6;++n)I.dist.values.push(h[n])}o=S.position.values.length/3-4,D.push(o,o+2,o+1),D.push(o+1,o+2,o+3),o=I.position.values.length/3-4,O.push(o,o+2,o+1),O.push(o+1,o+2,o+3)}else{var X,j;for(P.y<0?(X=b.attributes,j=b.indices):(X=C.attributes,j=C.indices),X.position.values.push(P.x,P.y,P.z),X.position.values.push(P.x,P.y,P.z),X.position.values.push(w.x,w.y,w.z),X.position.values.push(w.x,w.y,w.z),n=3*t;n<3*t+12;++n)X.prevPosition.values.push(v[n]),X.nextPosition.values.push(y[n]);for(n=2*t;n<2*t+8;++n)X.expandAndWidth.values.push(f[n]),i.defined(c)&&X.st.values.push(c[n]);if(i.defined(m))for(n=4*t;n<4*t+16;++n)X.color.values.push(m[n]);if(i.defined(h))for(n=3*t;n<3*t+12;++n)X.dist.values.push(h[n]);o=X.position.values.length/3-4,j.push(o,o+2,o+1),j.push(o+1,o+2,o+3)}}g&&(Oe(b),Oe(C)),ee(e,b,C)}(e);break;case p.GeometryType.TRIANGLES:ye(e);break;case p.GeometryType.LINES:Ce(e)}else U(t),t.primitiveType===r.PrimitiveType.TRIANGLES?ye(e):t.primitiveType===r.PrimitiveType.LINES&&Ce(e);return e},e.GeometryPipeline=m}));