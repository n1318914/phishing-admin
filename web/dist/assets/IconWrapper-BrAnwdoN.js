import{bB as d,A as a,d as b,z as m,eK as v,c as g,bL as f,cH as c,H as z}from"./index-CsnEiuSG.js";const C=d("icon-wrapper",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`),h=Object.assign(Object.assign({},a.props),{size:{type:Number,default:24},borderRadius:{type:Number,default:6},color:String,iconColor:String}),y=b({name:"IconWrapper",props:h,setup(r,{slots:i}){const{mergedClsPrefixRef:s,inlineThemeDisabled:l}=m(r),t=a("IconWrapper","-icon-wrapper",C,v,r,s),e=g(()=>{const{common:{cubicBezierEaseInOut:n},self:{color:p,iconColor:u}}=t.value;return{"--n-bezier":n,"--n-color":p,"--n-icon-color":u}}),o=l?f("icon-wrapper",void 0,e,r):void 0;return()=>{const n=c(r.size);return o==null||o.onRender(),z("div",{class:[`${s.value}-icon-wrapper`,o==null?void 0:o.themeClass.value],style:[e==null?void 0:e.value,{height:n,width:n,borderRadius:c(r.borderRadius),backgroundColor:r.color,color:r.iconColor}]},i)}}});export{y as N};
