import{bB as f,bA as o,d as x,z as u,A as a,fv as z,c as l,bL as C,H as P}from"./index-FXI03K-t.js";const R=f("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[o("&:first-child","margin-top: 0;"),o("&:last-child","margin-bottom: 0;")]),T=Object.assign(Object.assign({},a.props),{depth:[String,Number]}),y=x({name:"P",props:T,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:i}=u(e),h=a("Typography","-p",R,z,e,r),t=l(()=>{const{depth:n}=e,p=n||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:d,pLineHeight:m,pMargin:g,pTextColor:b,[`pTextColor${p}Depth`]:v}}=h.value;return{"--n-bezier":c,"--n-font-size":d,"--n-line-height":m,"--n-margin":g,"--n-text-color":n===void 0?b:v}}),s=i?C("p",l(()=>`${e.depth||""}`),t,e):void 0;return{mergedClsPrefix:r,cssVars:i?void 0:t,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),P("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{y as _};
