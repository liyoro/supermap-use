define(["./createTaskProcessorWorker","./FeatureDetection-ab6f364c","./Color-e1e9e6aa","./S3MPixelFormat-7b053795","./pako_inflate-f73548c4","./when-b60132fc","./Check-7b2a090c","./WebGLConstants-aba9fc67","./Math-31e539c2"],(function(t,e,r,n,a,i,E,o,s){"use strict";var y=14;function T(t,e,r,n,a,i){this.left=t,this.bottom=e,this.right=r,this.top=n,this.minHeight=a,this.maxHeight=i,this.width=r-t,this.length=n-e,this.height=i-a}function p(t,r,n,a,i){var E=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;var o=0,s={},y=s.vertexAttributes=[],T=s.attrLocation={};s.instanceCount=0,s.instanceMode=0;var p=0;n.getUint32(a,!0),a+=Uint32Array.BYTES_PER_ELEMENT;var A=n.getUint16(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;var _=A;A>4&&(_=A>>8,A&=15);var v=n.getUint32(a,!0);if(a+=Uint32Array.BYTES_PER_ELEMENT,v>0){var u=n.getUint16(a,!0);u=A*Float32Array.BYTES_PER_ELEMENT,a+=Uint32Array.BYTES_PER_ELEMENT,o=v*u,T.aPosition=p,y.push({index:T.aPosition,typedArray:r.subarray(a,a+o),componentsPerAttribute:A,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:u,normalize:!1}),p++,a+=o}var c=n.getUint32(a,!0);if(a+=Uint32Array.BYTES_PER_ELEMENT,c>0){var B=n.getUint16(a,!0);B=_*Float32Array.BYTES_PER_ELEMENT,a+=Uint32Array.BYTES_PER_ELEMENT,o=c*B,t.ignoreNormal||(T.aNormal=p,y.push({index:T.aNormal,typedArray:r.subarray(a,a+o),componentsPerAttribute:_,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:B,normalize:!1}),p++),a+=o}var f=n.getUint32(a,!0);if(a+=Uint32Array.BYTES_PER_ELEMENT,f>0){var l=new Uint8Array(4*f);i.push(l.buffer);var m=n.getUint32(a,!0);m=4*Float32Array.BYTES_PER_ELEMENT,a+=Uint32Array.BYTES_PER_ELEMENT,o=f*m;for(var U=new Float32Array(r.buffer,a,4*v),P=0;P<v;P++)l[4*P]=255*U[4*P],l[4*P+1]=255*U[4*P+1],l[4*P+2]=255*U[4*P+2],l[4*P+3]=255*U[4*P+3];a+=o,T.aColor=p,y.push({index:T.aColor,typedArray:l,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.UNSIGNED_BYTE,offsetInBytes:0,strideInBytes:4,normalize:!0}),p++}var L=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT,L>0&&(a+=o=16*L);var g=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;for(var d,N,M=-1,S=0;S<g;S++){d=n.getUint32(a,!0),a+=Uint32Array.BYTES_PER_ELEMENT,N=n.getUint16(a,!0),a+=Uint16Array.BYTES_PER_ELEMENT,n.getUint16(a,!0),a+=Uint16Array.BYTES_PER_ELEMENT,o=d*N*Float32Array.BYTES_PER_ELEMENT;var h,R=r.subarray(a,a+o);if(-1!=M||20!=N&&35!=N)if(-1!==M)s.instanceBounds=new Float32Array(r.buffer,a,d*N);else{var Y="aTexCoord"+S;T[Y]=p++,y.push({index:T[Y],typedArray:R,componentsPerAttribute:N,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:N*Float32Array.BYTES_PER_ELEMENT,normalize:!1})}else M=S,s.instanceCount=d,s.instanceMode=N,s.instanceBuffer=R,20===N?(h=20*Float32Array.BYTES_PER_ELEMENT,T.uv2=p++,y.push({index:T.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:h,instanceDivisor:1}),T.uv3=p++,y.push({index:T.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv4=p++,y.push({index:T.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.secondary_colour=p++,y.push({index:T.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv6=p++,y.push({index:T.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1})):35===N&&(h=35*Float32Array.BYTES_PER_ELEMENT,T.uv1=p++,y.push({index:T.uv1,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:h,instanceDivisor:1,byteLength:o}),T.uv2=p++,y.push({index:T.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv3=p++,y.push({index:T.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv4=p++,y.push({index:T.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv5=p++,y.push({index:T.uv5,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv6=p++,y.push({index:T.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:20*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv7=p++,y.push({index:T.uv7,componentsPerAttribute:3,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:24*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.secondary_colour=p++,y.push({index:T.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:27*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}),T.uv9=p++,y.push({index:T.uv9,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:31*Float32Array.BYTES_PER_ELEMENT,strideInBytes:h,instanceDivisor:1}));a+=o}s.verticesCount=v,s.instanceIndex=M;var D=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;var F=[];for(S=0;S<D;S++){var I={},b=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;var x=n.getUint8(a,!0);a+=Uint8Array.BYTES_PER_ELEMENT,n.getUint8(a,!0),a+=Uint8Array.BYTES_PER_ELEMENT;var C=n.getUint8(a,!0);a+=Uint8Array.BYTES_PER_ELEMENT,a+=1,I.indicesCount=b,I.indexType=x,I.primitiveType=C;var w=a;b>0&&(0==x?(a+=o=b*Uint16Array.BYTES_PER_ELEMENT,b%2==1&&(a+=2)):a+=o=4*b),I.indicesTypedArray=r.subarray(w,w+o);var k=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT;var O=n.getUint32(a,!0);a+=Uint32Array.BYTES_PER_ELEMENT*k,I.materialCode=O,F.push(I)}return t[E]={vertexPackage:s,arrIndexPackage:F},a}function A(t,r,n){var a=t.vertexAttributes,i=t.attrLocation,E=a.length;i[1===n?"instanceId":"batchId"]=E,a.push({index:E,typedArray:r,componentsPerAttribute:1,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:0,instanceDivisor:n})}return new r.Color,t((function(t,e){var r=t.buffer,i=t.supportCompressType,E=t.bVolume,o=null,s=null,_=null;if(E&&t.volbuffer.byteLength<8&&(E=!1),E){var v=t.volbuffer,u=new Uint8Array(v,8),c=a.pako.inflate(u).buffer,B=new Float64Array(c,0,1),f=new Uint32Array(c,48,1);if(0===B[0]||3200===f[0]||3201===f[0]){var l=0;0===B[0]&&(l=8),e.push(c);var m=new Float64Array(c,l,6),U=m[0],P=m[1],L=m[2],g=m[3],d=m[4]<m[5]?m[4]:m[5],N=m[4]>m[5]?m[4]:m[5];s={left:U,top:P,right:L,bottom:g,minHeight:d,maxHeight:N,width:(o=new T(U,g,L,P,d,N)).width,length:o.length,height:o.height};var M=new Uint32Array(c,48+l,7),S=M[0],h=M[1],R=M[2],Y=M[3];_={nFormat:S,nSideBlockCount:h,nBlockLength:R,nLength:Y,nWidth:M[4],nHeight:M[5],nDepth:M[6],imageArray:new Uint8Array(c,76+l,Y*Y*4)}}}var D=0,F=new Uint8Array(r,0,4);if(115!==F[0]||51!==F[1]||109!==F[2])return{result:!1};var I=F[3],b=(u=new Uint8Array(r,4),a.pako.inflate(u).buffer),x=new Uint8Array(b);e.push(x.buffer);var C=new DataView(b),w=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var k=new Uint8Array(b,D,w),O=w%4;O&&(O=4-O),D+=w+O;var z=n.getStringFromTypedArray(k,void 0,void 0,"gbk");z=(z=z.replace(new RegExp("\r\n","gm"),"")).replace(new RegExp(":","gm"),""),C.getUint32(D,!0),D+=Uint32Array.BYTES_PER_ELEMENT;var H=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var G={};G.ignoreNormal=t.ignoreNormal;for(var W=0;W<H;W++)D=p(G,x,C,D,e);C.getUint32(D,!0),D+=Uint32Array.BYTES_PER_ELEMENT;var V=C.getUint32(D,!0);for(D+=Uint32Array.BYTES_PER_ELEMENT,W=0;W<V;W++){var X=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var j=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var q={};if(-1==G[X].vertexPackage.instanceIndex){for(var J=new Float32Array(G[X].vertexPackage.verticesCount),K=0;K<j;K++){var Q=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var Z=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var $=0,tt=0;q[Q]={batchId:K};for(var et=0;et<Z;et++)if(tt=C.getUint32(D,!0),D+=Uint32Array.BYTES_PER_ELEMENT,$=C.getUint32(D,!0),D+=Uint32Array.BYTES_PER_ELEMENT,J.fill)J.fill(K,tt,tt+$);else for(var rt=tt+tt,nt=tt;nt<rt;nt++)J[nt]=K;q[Q].vertexColorOffset=tt,q[Q].vertexColorCount=$}A(G[X].vertexPackage,J,void 0)}else{var at=G[X].vertexPackage.instanceCount;G[X].vertexPackage.instanceBuffer,G[X].vertexPackage.instanceMode;var it=new Float32Array(at),Et=0;for(K=0;K<j;K++){Q=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;Z=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;for(et=0;et<Z;et++){var ot=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT,it[Et]=Et,void 0===q[Q]&&(q[Q]={vertexColorCount:1,instanceIds:[],vertexColorOffset:Et}),q[Q].instanceIds.push(ot),Et++}}A(G[X].vertexPackage,it,1)}G[X].pickInfo=q}C.getUint32(D,!0),D+=Uint32Array.BYTES_PER_ELEMENT;var st=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var yt={};for(W=0;W<st;W++){var Tt=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var pt=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var At=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var _t=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;Z=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var vt=C.getUint32(D,!0);D+=Uint32Array.BYTES_PER_ELEMENT;var ut=null;if(_t===y&&1!==i){var ct=null;vt>n.S3MPixelFormat.BGR||vt===n.S3MPixelFormat.LUMINANCE_ALPHA?(ct=new Uint8Array(b,D,pt*At),ut=new Uint8Array(pt*At*4)):(ct=new Uint16Array(b,D,Z/2),ut=new Uint16Array(pt*At)),n.DXTTextureDecode.decode(ut,pt,At,ct,vt),e.push(ut.buffer),_t=0}else ut=new Uint8Array(b,D,Z);yt[Tt]={id:Tt,width:pt,height:At,compressType:_t,nFormat:vt,imageBuffer:ut},D+=Z}return{result:!0,version:I,xmlDoc:z,geoPackage:G,texturePackage:yt,volImageBuffer:_,volBounds:s}}))}));
