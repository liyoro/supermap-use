define(["./buildModuleUrl-8cce5713","./PolygonPipeline-f2f37e26","./Cartesian4-b0ddc4ba","./when-b60132fc","./Check-7b2a090c","./TerrainEncoding-0e08edec","./Math-31e539c2","./OrientedBoundingBox-a6c2fb0f","./GeometryAttribute-923c2729","./WebMercatorProjection-6d3eefcc","./WebGLConstants-aba9fc67","./createTaskProcessorWorker","./Plane-5716a082","./earcut-2.2.1-20c8012f","./FeatureDetection-ab6f364c","./EllipsoidRhumbLine-3ee4574a","./AttributeCompression-399750a1"],(function(e,t,a,i,r,n,s,l,o,f,u,c,d,h,m,g,p){"use strict";var w=Object.freeze({NONE:0,LERC:1}),x={};x.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var k=new a.Cartesian3,y=new e.Matrix4,I=new a.Cartesian3,b=new a.Cartesian3;x.computeVertices=function(r){var u,c,d,h,m=Math.cos,g=Math.sin,p=Math.sqrt,w=Math.atan,v=Math.exp,U=s.Math3D.PI_OVER_TWO,M=s.Math3D.toRadians,T=r.heightmap,V=r.width,A=r.height,D=r.skirtHeight,B=i.defaultValue(r.isGeographic,!0),S=i.defaultValue(r.ellipsoid,e.Ellipsoid.WGS84),P=1/S.maximumRadius,E=r.nativeRectangle,F=r.rectangle;i.defined(F)?(u=F.west,c=F.south,d=F.east,h=F.north):B?(u=M(E.west),c=M(E.south),d=M(E.east),h=M(E.north)):(u=E.west*P,c=U-2*w(v(-E.south*P)),d=E.east*P,h=U-2*w(v(-E.north*P)));var C=r.relativeToCenter,L=i.defined(C);C=L?C:a.Cartesian3.ZERO;var O=i.defaultValue(r.exaggeration,1),N=i.defaultValue(r.includeWebMercatorT,!1),z=i.defaultValue(r.structure,x.DEFAULT_STRUCTURE),R=i.defaultValue(z.heightScale,x.DEFAULT_STRUCTURE.heightScale),_=i.defaultValue(z.heightOffset,x.DEFAULT_STRUCTURE.heightOffset),H=i.defaultValue(z.elementsPerHeight,x.DEFAULT_STRUCTURE.elementsPerHeight),Y=i.defaultValue(z.stride,x.DEFAULT_STRUCTURE.stride),W=i.defaultValue(z.elementMultiplier,x.DEFAULT_STRUCTURE.elementMultiplier),X=i.defaultValue(z.isBigEndian,x.DEFAULT_STRUCTURE.isBigEndian),Z=e.Rectangle.computeWidth(E),j=e.Rectangle.computeHeight(E),G=Z/(V-1),q=j/(A-1);B||(Z*=P,j*=P);var Q,J,K=S.radiiSquared,$=K.x,ee=K.y,te=K.z,ae=65536,ie=-65536,re=o.Transforms.eastNorthUpToFixedFrame(C,S),ne=e.Matrix4.inverseTransformation(re,y);N&&(Q=f.WebMercatorProjection.geodeticLatitudeToMercatorAngle(c),J=1/(f.WebMercatorProjection.geodeticLatitudeToMercatorAngle(h)-Q));var se=I;se.x=Number.POSITIVE_INFINITY,se.y=Number.POSITIVE_INFINITY,se.z=Number.POSITIVE_INFINITY;var le=b;le.x=Number.NEGATIVE_INFINITY,le.y=Number.NEGATIVE_INFINITY,le.z=Number.NEGATIVE_INFINITY;var oe=Number.POSITIVE_INFINITY,fe=V*A,ue=fe+(D>0?2*V+2*A:0),ce=new Array(ue),de=new Array(ue),he=new Array(ue),me=N?new Array(ue):[],ge=0,pe=A,we=0,xe=V;D>0&&(--ge,++pe,--we,++xe);for(var ke=1e-5,ye=ge;ye<pe;++ye){var Ie=ye;Ie<0&&(Ie=0),Ie>=A&&(Ie=A-1);var be=E.north-q*Ie,ve=((be=B?M(be):U-2*w(v(-be*P)))-c)/(h-c);ve=s.Math3D.clamp(ve,0,1);var Ue=ye===ge,Me=ye===pe-1;D>0&&(Ue?be+=ke*j:Me&&(be-=ke*j));var Te,Ve=m(be),Ae=g(be),De=te*Ae;N&&(Te=(f.WebMercatorProjection.geodeticLatitudeToMercatorAngle(be)-Q)*J);for(var Be=we;Be<xe;++Be){var Se=Be;Se<0&&(Se=0),Se>=V&&(Se=V-1);var Pe,Ee,Fe=Ie*(V*Y)+Se*Y;if(1===H)Pe=T[Fe];else if(Pe=0,X)for(Ee=0;Ee<H;++Ee)Pe=Pe*W+T[Fe+Ee];else for(Ee=H-1;Ee>=0;--Ee)Pe=Pe*W+T[Fe+Ee];Pe=(Pe*R+_)*O,ie=Math.max(ie,Pe),ae=Math.min(ae,Pe);var Ce=E.west+G*Se;B?Ce=M(Ce):Ce*=P;var Le=(Ce-u)/(d-u);Le=s.Math3D.clamp(Le,0,1);var Oe=Ie*V+Se;if(D>0){var Ne=Be===we,ze=Be===xe-1,Re=Ue||Me||Ne||ze;if((Ue||Me)&&(Ne||ze))continue;Re&&(Pe-=D,Ne?(Oe=fe+(A-Ie-1),Ce-=ke*Z):Me?Oe=fe+A+(V-Se-1):ze?(Oe=fe+A+V+Ie,Ce+=ke*Z):Ue&&(Oe=fe+A+V+A+Se))}var _e=Ve*m(Ce),He=Ve*g(Ce),Ye=$*_e,We=ee*He,Xe=1/p(Ye*_e+We*He+De*Ae),Ze=Ye*Xe,je=We*Xe,Ge=De*Xe,qe=new a.Cartesian3;qe.x=Ze+_e*Pe,qe.y=je+He*Pe,qe.z=Ge+Ae*Pe,ce[Oe]=qe,de[Oe]=Pe,he[Oe]=new e.Cartesian2(Le,ve),N&&(me[Oe]=Te),e.Matrix4.multiplyByPoint(ne,qe,k),a.Cartesian3.minimumByComponent(k,se,se),a.Cartesian3.maximumByComponent(k,le,le),oe=Math.min(oe,Pe)}}var Qe,Je,Ke=e.BoundingSphere.fromPoints(ce);(i.defined(F)&&(Qe=l.OrientedBoundingBox.fromRectangle(F,ae,ie,S)),L)&&(Je=new n.EllipsoidalOccluder(S).computeHorizonCullingPointPossiblyUnderEllipsoid(C,ce,ae));for(var $e=new t.AxisAlignedBoundingBox(se,le,C),et=new n.TerrainEncoding($e,oe,ie,re,!1,N),tt=new Float32Array(ue*et.getStride()),at=0,it=0;it<ue;++it)at=et.encode(tt,at,ce[it],he[it],de[it],void 0,me[it]);return{vertices:tt,maximumHeight:ie,minimumHeight:ae,encoding:et,boundingSphere3D:Ke,orientedBoundingBox:Qe,occludeePointInScaledSpace:Je}};
/* Copyright 2015-2018 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */
var v={};!function(){var e,t,a,i,r,n,s,l,o,f,u,c,d,h,m,g,p=(e={defaultNoDataValue:-34027999387901484e22,decode:function(n,s){var l=(s=s||{}).encodedMaskData||null===s.encodedMaskData,o=r(n,s.inputOffset||0,l),f=null!==s.noDataValue?s.noDataValue:e.defaultNoDataValue,u=t(o,s.pixelType||Float32Array,s.encodedMaskData,f,s.returnMask),c={width:o.width,height:o.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:o.pixels.maxValue,noDataValue:f};return u.resultMask&&(c.maskData=u.resultMask),s.returnEncodedMask&&o.mask&&(c.encodedMaskData=o.mask.bitset?o.mask.bitset:null),s.returnFileInfo&&(c.fileInfo=a(o),s.computeUsedBitDepths&&(c.fileInfo.bitDepths=i(o))),c}},t=function(e,t,a,i,r){var s,l,o,f=0,u=e.pixels.numBlocksX,c=e.pixels.numBlocksY,d=Math.floor(e.width/u),h=Math.floor(e.height/c),m=2*e.maxZError,g=Number.MAX_VALUE;a=a||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),r&&a&&(o=new Uint8Array(e.width*e.height));for(var p,w,x=new Float32Array(d*h),k=0;k<=c;k++){var y=k!==c?h:e.height%c;if(0!==y)for(var I=0;I<=u;I++){var b=I!==u?d:e.width%u;if(0!==b){var v,U,M,T,V=k*e.width*h+I*d,A=e.width-b,D=e.pixels.blocks[f];if(D.encoding<2?(0===D.encoding?v=D.rawData:(n(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,m,x,e.pixels.maxValue),v=x),U=0):M=2===D.encoding?0:D.offset,a)for(w=0;w<y;w++){for(7&V&&(T=a[V>>3],T<<=7&V),p=0;p<b;p++)7&V||(T=a[V>>3]),128&T?(o&&(o[V]=1),g=g>(s=D.encoding<2?v[U++]:M)?s:g,l[V++]=s):(o&&(o[V]=0),l[V++]=i),T<<=1;V+=A}else if(D.encoding<2)for(w=0;w<y;w++){for(p=0;p<b;p++)g=g>(s=v[U++])?s:g,l[V++]=s;V+=A}else for(g=g>M?M:g,w=0;w<y;w++){for(p=0;p<b;p++)l[V++]=M;V+=A}if(1===D.encoding&&U!==D.numValidPixels)throw"Block and Mask do not match";f++}}}return{resultPixels:l,resultMask:o,minValue:g}},a=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},i=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,a={},i=0;i<t;i++){var r=e.pixels.blocks[i];0===r.encoding?a.float32=!0:1===r.encoding?a[r.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},r=function(e,t,a){var i={},r=new Uint8Array(e,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),t+=24,!a)if(n=new DataView(e,t,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),t+=16,i.mask.numBytes>0){var s=new Uint8Array(Math.ceil(i.width*i.height/8)),l=(n=new DataView(e,t,i.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(l>0)for(;l--;)s[f++]=n.getUint8(o++);else{var u=n.getUint8(o++);for(l=-l;l--;)s[f++]=u}l=n.getInt16(o,!0),o+=2}while(o<i.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=s,t+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,t,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),t+=16;var c=i.pixels.numBlocksX,d=i.pixels.numBlocksY,h=c+(i.width%c>0?1:0),m=d+(i.height%d>0?1:0);i.pixels.blocks=new Array(h*m);for(var g=0,p=0;p<m;p++)for(var w=0;w<h;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};i.pixels.blocks[g++]=y;var I=n.getUint8(0);if(x++,y.encoding=63&I,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==I&&2!==I){if(I>>=6,y.offsetType=I,2===I)y.offset=n.getInt8(1),x++;else if(1===I)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==I)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(I=n.getUint8(x),x++,y.bitsPerPixel=63&I,I>>=6,y.numValidPixelsType=I,2===I)y.numValidPixels=n.getUint8(x),x++;else if(1===I)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==I)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var b;if(t+=x,3!==y.encoding)if(0===y.encoding){var v=(i.pixels.numBytes-1)/4;if(v!==Math.floor(v))throw"uncompressed block has invalid length";b=new ArrayBuffer(4*v),new Uint8Array(b).set(new Uint8Array(e,t,4*v));var U=new Float32Array(b);y.rawData=U,t+=4*v}else if(1===y.encoding){var M=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),T=Math.ceil(M/4);b=new ArrayBuffer(4*T),new Uint8Array(b).set(new Uint8Array(e,t,M)),y.stuffedData=new Uint32Array(b),t+=M}}else t++}return i.eofOffset=t,i},n=function(e,t,a,i,r,n,s){var l,o,f,u=(1<<t)-1,c=0,d=0,h=Math.ceil((s-i)/r),m=4*e.length-Math.ceil(t*a/8);for(e[e.length-1]<<=8*m,l=0;l<a;l++){if(0===d&&(f=e[c++],d=32),d>=t)o=f>>>d-t&u,d-=t;else{var g=t-d;o=(f&u)<<g&u,o+=(f=e[c++])>>>(d=32-g)}n[l]=o<h?i+o*r:s}return n},e),w=(s=function(e,t,a,i,r,n,s,l){var o,f,u,c,d,h=(1<<a)-1,m=0,g=0,p=4*e.length-Math.ceil(a*i/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<i;o++)0===g&&(u=e[m++],g=32),g>=a?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=r[f];else for(d=Math.ceil((l-n)/s),o=0;o<i;o++)0===g&&(u=e[m++],g=32),g>=a?(f=u>>>g-a&h,g-=a):(f=(u&h)<<(c=a-g)&h,f+=(u=e[m++])>>>(g=32-c)),t[o]=f<d?n+f*s:l},l=function(e,t,a,i,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,c=0,d=0,h=[],m=4*e.length-Math.ceil(t*a/8);e[e.length-1]<<=8*m;var g=Math.ceil((n-i)/r);for(f=0;f<a;f++)0===c&&(s=e[o++],c=32),c>=t?(d=s>>>c-t&l,c-=t):(d=(s&l)<<(u=t-c)&l,d+=(s=e[o++])>>>(c=32-u)),h[f]=d<g?i+d*r:n;return h.unshift(i),h},o=function(e,t,a,i,r,n,s,l){var o,f,u,c,d=(1<<a)-1,h=0,m=0,g=0;if(r)for(o=0;o<i;o++)0===m&&(u=e[h++],m=32,g=0),m>=a?(f=u>>>g&d,m-=a,g+=a):(f=u>>>g&d,m=32-(c=a-m),f|=((u=e[h++])&(1<<c)-1)<<a-c,g=c),t[o]=r[f];else{var p=Math.ceil((l-n)/s);for(o=0;o<i;o++)0===m&&(u=e[h++],m=32,g=0),m>=a?(f=u>>>g&d,m-=a,g+=a):(f=u>>>g&d,m=32-(c=a-m),f|=((u=e[h++])&(1<<c)-1)<<a-c,g=c),t[o]=f<p?n+f*s:l}return t},f=function(e,t,a,i,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,c=0,d=0,h=0,m=[],g=Math.ceil((n-i)/r);for(f=0;f<a;f++)0===c&&(s=e[o++],c=32,h=0),c>=t?(d=s>>>h&l,c-=t,h+=t):(d=s>>>h&l,c=32-(u=t-c),d|=((s=e[o++])&(1<<u)-1)<<t-u,h=u),m[f]=d<g?i+d*r:n;return m.unshift(i),m},u=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=4*e.length-Math.ceil(a*i/8);for(e[e.length-1]<<=8*c,r=0;r<i;r++)0===u&&(s=e[f++],u=32),u>=a?(n=s>>>u-a&o,u-=a):(n=(s&o)<<(l=a-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},c=function(e,t,a,i){var r,n,s,l,o=(1<<a)-1,f=0,u=0,c=0;for(r=0;r<i;r++)0===u&&(s=e[f++],u=32,c=0),u>=a?(n=s>>>c&o,u-=a,c+=a):(n=s>>>c&o,u=32-(l=a-u),n|=((s=e[f++])&(1<<l)-1)<<a-l,c=l),t[r]=n;return t},d={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,a=65535,i=e.length,r=Math.floor(i/2),n=0;r;){var s=r>=359?359:r;r-=s;do{t+=e[n++]<<8,a+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),a=(65535&a)+(a>>>16)}return 1&i&&(a+=t+=e[n]<<8),((a=(65535&a)+(a>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var a=t.ptr,i=new Uint8Array(e,a,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,i),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;a+=6;var n,s=new DataView(e,a,8),l=s.getInt32(0,!0);if(r.fileVersion=l,a+=4,l>=3&&(r.checksum=s.getUint32(4,!0),a+=4),s=new DataView(e,a,12),r.height=s.getUint32(0,!0),r.width=s.getUint32(4,!0),a+=8,l>=4?(r.numDims=s.getUint32(8,!0),a+=4):r.numDims=1,s=new DataView(e,a,40),r.numValidPixel=s.getUint32(0,!0),r.microBlockSize=s.getInt32(4,!0),r.blobSize=s.getInt32(8,!0),r.imageType=s.getInt32(12,!0),r.maxZError=s.getFloat64(16,!0),r.zMin=s.getFloat64(24,!0),r.zMax=s.getFloat64(32,!0),a+=40,t.headerInfo=r,t.ptr=a,l>=3&&(n=l>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,a-n,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var a=t.headerInfo,i=this.getDataTypeArray(a.imageType),r=a.numDims*this.getDataTypeSize(a.imageType),n=this.readSubArray(e,t.ptr,i,r),s=this.readSubArray(e,t.ptr+r,i,r);t.ptr+=2*r;var l,o=!0;for(l=0;l<a.numDims;l++)if(n[l]!==s[l]){o=!1;break}return a.minValues=n,a.maxValues=s,o},readSubArray:function(e,t,a,i){var r;if(a===Uint8Array)r=new Uint8Array(e,t,i);else{var n=new ArrayBuffer(i);new Uint8Array(n).set(new Uint8Array(e,t,i)),r=new a(n)}return r},readMask:function(e,t){var a,i,r=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,o=new DataView(e,r,4),f={};if(f.numBytes=o.getUint32(0,!0),r+=4,(0===l||s===l)&&0!==f.numBytes)throw"invalid mask";if(0===l)a=new Uint8Array(Math.ceil(s/8)),f.bitset=a,i=new Uint8Array(s),t.pixels.resultMask=i,r+=f.numBytes;else if(f.numBytes>0){a=new Uint8Array(Math.ceil(s/8));var u=(o=new DataView(e,r,f.numBytes)).getInt16(0,!0),c=2,d=0,h=0;do{if(u>0)for(;u--;)a[d++]=o.getUint8(c++);else for(h=o.getUint8(c++),u=-u;u--;)a[d++]=h;u=o.getInt16(c,!0),c+=2}while(c<f.numBytes);if(-32768!==u||d<a.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(s);var m=0,g=0;for(g=0;g<s;g++)7&g?(m=a[g>>3],m<<=7&g):m=a[g>>3],128&m&&(i[g]=1);t.pixels.resultMask=i,f.bitset=a,r+=f.numBytes}return t.ptr=r,t.mask=f,!0},readDataOneSweep:function(e,t,a){var i,r=t.ptr,n=t.headerInfo,s=n.numDims,l=n.width*n.height,o=n.imageType,f=n.numValidPixel*d.getDataTypeSize(o)*s,u=t.pixels.resultMask;if(a===Uint8Array)i=new Uint8Array(e,r,f);else{var c=new ArrayBuffer(f);new Uint8Array(c).set(new Uint8Array(e,r,f)),i=new a(c)}if(i.length===l*s)t.pixels.resultPixels=i;else{t.pixels.resultPixels=new a(l*s);var h=0,m=0,g=0,p=0;if(s>1)for(g=0;g<s;g++)for(p=g*l,m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[p+m]=i[h++]);else for(m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[m]=i[h++])}return r+=f,t.ptr=r,!0},readHuffmanTree:function(e,t){var a=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(e,t.ptr,16);if(t.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=i.getInt32(4,!0),n=i.getInt32(8,!0),s=i.getInt32(12,!0);if(n>=s)return!1;var l=new Uint32Array(s-n);d.decodeBits(e,t,l);var o,f,u,c,m=[];for(o=n;o<s;o++)m[f=o-(o<r?0:r)]={first:l[o-n],second:null};var g=e.byteLength-t.ptr,p=Math.ceil(g/4),w=new ArrayBuffer(4*p);new Uint8Array(w).set(new Uint8Array(e,t.ptr,g));var x,k=new Uint32Array(w),y=0,I=0;for(x=k[0],o=n;o<s;o++)(c=m[f=o-(o<r?0:r)].first)>0&&(m[f].second=x<<y>>>32-c,32-y>=c?32===(y+=c)&&(y=0,x=k[++I]):(y+=c-32,x=k[++I],m[f].second|=x>>>32-y));var b=0,v=0,U=new h;for(o=0;o<m.length;o++)void 0!==m[o]&&(b=Math.max(b,m[o].first));v=b>=a?a:b,b>=30&&console.log("WARning, large NUM LUT BITS IS "+b);var M,T,V,A,D,B=[];for(o=n;o<s;o++)if((c=m[f=o-(o<r?0:r)].first)>0)if(M=[c,f],c<=v)for(T=m[f].second<<v-c,V=1<<v-c,u=0;u<V;u++)B[T|u]=M;else for(T=m[f].second,D=U,A=c-1;A>=0;A--)T>>>A&1?(D.right||(D.right=new h),D=D.right):(D.left||(D.left=new h),D=D.left),0!==A||D.val||(D.val=M[1]);return{decodeLut:B,numBitsLUTQick:v,numBitsLUT:b,tree:U,stuffedData:k,srcPtr:I,bitPos:y}},readHuffman:function(e,t,a){var i,r,n,s,l,o,f,u,c,d=t.headerInfo,h=d.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,w=this.readHuffmanTree(e,t),x=w.decodeLut,k=w.tree,y=w.stuffedData,I=w.srcPtr,b=w.bitPos,v=w.numBitsLUTQick,U=w.numBitsLUT,M=0===t.headerInfo.imageType?128:0,T=t.pixels.resultMask,V=0;b>0&&(I++,b=0);var A,D=y[I],B=1===t.encodeMode,S=new a(p*h),P=S;for(A=0;A<d.numDims;A++){if(h>1&&(P=new a(S.buffer,p*A,p),V=0),t.headerInfo.numValidPixel===g*m)for(u=0,o=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=D<<b>>>32-v,32-b<v&&(l=s|=y[I+1]>>>64-b-v),x[l])r=x[l][1],b+=x[l][0];else for(l=s=D<<b>>>32-U,32-b<U&&(l=s|=y[I+1]>>>64-b-U),i=k,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,b=b+c+1;break}b>=32&&(b-=32,D=y[++I]),n=r-M,B?(n+=f>0?V:o>0?P[u-g]:V,n&=255,P[u]=n,V=n):P[u]=n}else for(u=0,o=0;o<m;o++)for(f=0;f<g;f++,u++)if(T[u]){if(r=0,l=s=D<<b>>>32-v,32-b<v&&(l=s|=y[I+1]>>>64-b-v),x[l])r=x[l][1],b+=x[l][0];else for(l=s=D<<b>>>32-U,32-b<U&&(l=s|=y[I+1]>>>64-b-U),i=k,c=0;c<U;c++)if(!(i=s>>>U-c-1&1?i.right:i.left).left&&!i.right){r=i.val,b=b+c+1;break}b>=32&&(b-=32,D=y[++I]),n=r-M,B?(f>0&&T[u-1]?n+=V:o>0&&T[u-g]?n+=P[u-g]:n+=V,n&=255,P[u]=n,V=n):P[u]=n}t.ptr=t.ptr+4*(I+1)+(b>0?4:0)}t.pixels.resultPixels=S},decodeBits:function(e,t,a,i,r){var n=t.headerInfo,d=n.fileVersion,h=0,m=e.byteLength-t.ptr>=5?5:e.byteLength-t.ptr,g=new DataView(e,t.ptr,m),p=g.getUint8(0);h++;var w=p>>6,x=0===w?4:3-w,k=(32&p)>0,y=31&p,I=0;if(1===x)I=g.getUint8(h),h++;else if(2===x)I=g.getUint16(h,!0),h+=2;else{if(4!==x)throw"Invalid valid pixel count type";I=g.getUint32(h,!0),h+=4}var b,v,U,M,T,V,A,D,B,S=2*n.maxZError,P=n.numDims>1?n.maxValues[r]:n.zMax;if(k){for(t.counter.lut++,D=g.getUint8(h),h++,M=Math.ceil((D-1)*y/8),T=Math.ceil(M/4),v=new ArrayBuffer(4*T),U=new Uint8Array(v),t.ptr+=h,U.set(new Uint8Array(e,t.ptr,M)),A=new Uint32Array(v),t.ptr+=M,B=0;D-1>>>B;)B++;M=Math.ceil(I*B/8),T=Math.ceil(M/4),v=new ArrayBuffer(4*T),(U=new Uint8Array(v)).set(new Uint8Array(e,t.ptr,M)),b=new Uint32Array(v),t.ptr+=M,V=d>=3?f(A,y,D-1,i,S,P):l(A,y,D-1,i,S,P),d>=3?o(b,a,B,I,V):s(b,a,B,I,V)}else t.counter.bitstuffer++,B=y,t.ptr+=h,B>0&&(M=Math.ceil(I*B/8),T=Math.ceil(M/4),v=new ArrayBuffer(4*T),(U=new Uint8Array(v)).set(new Uint8Array(e,t.ptr,M)),b=new Uint32Array(v),t.ptr+=M,d>=3?null===i?c(b,a,B,I):o(b,a,B,I,!1,i,S,P):null===i?u(b,a,B,I):s(b,a,B,I,!1,i,S,P))},readTiles:function(e,t,a){var i=t.headerInfo,r=i.width,n=i.height,s=i.microBlockSize,l=i.imageType,o=d.getDataTypeSize(l),f=Math.ceil(r/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=f,t.pixels.ptr=0;var c,h,m,g,p,w,x,k,y=0,I=0,b=0,v=0,U=0,M=0,T=0,V=0,A=0,D=0,B=0,S=0,P=0,E=0,F=0,C=new a(s*s),L=n%s||s,O=r%s||s,N=i.numDims,z=t.pixels.resultMask,R=t.pixels.resultPixels;for(b=0;b<u;b++)for(U=b!==u-1?s:L,v=0;v<f;v++)for(D=b*r*s+v*s,B=r-(M=v!==f-1?s:O),k=0;k<N;k++){if(N>1&&(R=new a(t.pixels.resultPixels.buffer,r*n*k*o,r*n)),T=e.byteLength-t.ptr,h={},F=0,F++,A=(V=(c=new DataView(e,t.ptr,Math.min(10,T))).getUint8(0))>>6&255,(V>>2&15)!=(v*s>>3&15))throw"integrity issue";if((p=3&V)>3)throw t.ptr+=F,"Invalid block encoding ("+p+")";if(2!==p)if(0===p){if(t.counter.uncompressed++,t.ptr+=F,S=(S=U*M*o)<(P=e.byteLength-t.ptr)?S:P,m=new ArrayBuffer(S%o==0?S:S+o-S%o),new Uint8Array(m).set(new Uint8Array(e,t.ptr,S)),g=new a(m),E=0,z)for(y=0;y<U;y++){for(I=0;I<M;I++)z[D]&&(R[D]=g[E++]),D++;D+=B}else for(y=0;y<U;y++){for(I=0;I<M;I++)R[D++]=g[E++];D+=B}t.ptr+=E*o}else if(w=d.getDataTypeUsed(l,A),x=d.getOnePixel(h,F,w,c),F+=d.getDataTypeSize(w),3===p)if(t.ptr+=F,t.counter.constantoffset++,z)for(y=0;y<U;y++){for(I=0;I<M;I++)z[D]&&(R[D]=x),D++;D+=B}else for(y=0;y<U;y++){for(I=0;I<M;I++)R[D++]=x;D+=B}else if(t.ptr+=F,d.decodeBits(e,t,C,x,k),F=0,z)for(y=0;y<U;y++){for(I=0;I<M;I++)z[D]&&(R[D]=C[F++]),D++;D+=B}else for(y=0;y<U;y++){for(I=0;I<M;I++)R[D++]=C[F++];D+=B}else t.counter.constant++,t.ptr+=F}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:d.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,a=e.headerInfo.numDims,i=e.headerInfo.height*e.headerInfo.width,r=i*a,n=0,s=0,l=0,o=e.pixels.resultMask;if(o)if(a>1)for(n=0;n<a;n++)for(l=n*i,s=0;s<i;s++)o[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<i;s++)o[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<r;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:default:t=Float32Array;break;case 7:t=Float64Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:default:t="F32";break;case 7:t="F64"}return t},isValidPixelValue:function(e,t){if(null===t)return!1;var a;switch(e){case 0:a=t>=-128&&t<=127;break;case 1:a=t>=0&&t<=255;break;case 2:a=t>=-32768&&t<=32767;break;case 3:a=t>=0&&t<=65536;break;case 4:a=t>=-2147483648&&t<=2147483647;break;case 5:a=t>=0&&t<=4294967296;break;case 6:a=t>=-34027999387901484e22&&t<=34027999387901484e22;break;case 7:a=t>=5e-324&&t<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var a=e;switch(e){case 2:case 4:a=e-t;break;case 3:case 5:a=e-2*t;break;case 6:a=0===t?e:1===t?2:1;break;case 7:a=0===t?e:e-2*t+1;break;default:a=e}return a},getOnePixel:function(e,t,a,i){var r=0;switch(a){case 0:r=i.getInt8(t);break;case 1:r=i.getUint8(t);break;case 2:r=i.getInt16(t,!0);break;case 3:r=i.getUint16(t,!0);break;case 4:r=i.getInt32(t,!0);break;case 5:r=i.getUInt32(t,!0);break;case 6:r=i.getFloat32(t,!0);break;case 7:r=i.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},h=function(e,t,a){this.val=e,this.left=t,this.right=a},{decode:function(e,t){var a=(t=t||{}).noDataValue,i=0,r={};r.ptr=t.inputOffset||0,r.pixels={},d.readHeaderInfo(e,r);var n=r.headerInfo,s=n.fileVersion,l=d.getDataTypeArray(n.imageType);d.readMask(e,r),n.numValidPixel===n.width*n.height||r.pixels.resultMask||(r.pixels.resultMask=t.maskData);var o,f=n.width*n.height;if(r.pixels.resultPixels=new l(f*n.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)d.constructConstantSurface(r);else if(s>=4&&d.checkMinMaxRanges(e,r))d.constructConstantSurface(r);else{var u=new DataView(e,r.ptr,2),c=u.getUint8(0);if(r.ptr++,c)d.readDataOneSweep(e,r,l);else if(s>1&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var h=u.getUint8(1);if(r.ptr++,r.encodeMode=h,h>2||s<4&&h>1)throw"Invalid Huffman flag "+h;h?d.readHuffman(e,r,l):d.readTiles(e,r,l)}else d.readTiles(e,r,l)}r.eofOffset=r.ptr,t.inputOffset?(o=r.headerInfo.blobSize+t.inputOffset-r.ptr,Math.abs(o)>=1&&(r.eofOffset=t.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,Math.abs(o)>=1&&(r.eofOffset=r.headerInfo.blobSize));var m={width:n.width,height:n.height,pixelData:r.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&d.isValidPixelValue(n.imageType,a)){var g=r.pixels.resultMask;for(i=0;i<f;i++)g[i]||(m.pixelData[i]=a);m.noDataValue=a}return r.noDataValue=a,t.returnFileInfo&&(m.fileInfo=d.formatFileInfo(r)),m},getBandCount:function(e){for(var t=0,a=0,i={ptr:0,pixels:{}};a<e.byteLength-58;)d.readHeaderInfo(e,i),a+=i.headerInfo.blobSize,t++,i.ptr=a;return t}}),x=(m=new ArrayBuffer(4),g=new Uint8Array(m),new Uint32Array(m)[0]=1,1===g[0]),k={decode:function(e,t){if(!x)throw"Big endian system is not supported.";var a,i,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())a=p,i=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;a=w,i=2}for(var l,o,f,u,c,d,h=0,m=e.byteLength-10,g=[],k={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<m;){var y=a.decode(e,{inputOffset:r,encodedMaskData:l,maskData:f,returnMask:0===h,returnEncodedMask:0===h,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});r=y.fileInfo.eofOffset,0===h&&(l=y.encodedMaskData,f=y.maskData,k.width=y.width,k.height=y.height,k.dimCount=y.dimCount||1,k.pixelType=y.pixelType||y.fileInfo.pixelType,k.mask=y.maskData),i>1&&y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&g.push(y.maskData),h++,k.pixels.push(y.pixelData),k.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}if(i>1&&g.length>1){for(d=k.width*k.height,k.bandMasks=g,(f=new Uint8Array(d)).set(g[0]),u=1;u<g.length;u++)for(o=g[u],c=0;c<d;c++)f[c]=f[c]&o[c];k.maskData=f}return k}};v.Lerc=k}();var U=v.Lerc;return c((function(t,a){if(t.encoding===w.LERC){var i;try{i=U.decode(t.heightmap)}catch(e){throw new u.RuntimeError(e)}if(i.statistics[0].minValue===Number.MAX_VALUE)throw new u.RuntimeError("Invalid tile data");t.heightmap=i.pixels[0],t.width=i.width,t.height=i.height}t.ellipsoid=e.Ellipsoid.clone(t.ellipsoid),t.rectangle=e.Rectangle.clone(t.rectangle);var r=x.computeVertices(t),n=r.vertices;return a.push(n.buffer),{vertices:n.buffer,numberOfAttributes:r.encoding.getStride(),minimumHeight:r.minimumHeight,maximumHeight:r.maximumHeight,gridWidth:t.width,gridHeight:t.height,boundingSphere3D:r.boundingSphere3D,orientedBoundingBox:r.orientedBoundingBox,occludeePointInScaledSpace:r.occludeePointInScaledSpace,encoding:r.encoding,westIndicesSouthToNorth:r.westIndicesSouthToNorth,southIndicesEastToWest:r.southIndicesEastToWest,eastIndicesNorthToSouth:r.eastIndicesNorthToSouth,northIndicesWestToEast:r.northIndicesWestToEast}}))}));
