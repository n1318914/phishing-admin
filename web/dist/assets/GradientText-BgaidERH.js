import{cD as y,cF as s,bB as x,d as v,cG as C,z,c as i,cH as E,A as u,C as h,bL as w,H as $}from"./index-FXI03K-t.js";function k(r){const{primaryColor:t,successColor:a,warningColor:n,errorColor:c,infoColor:l,fontWeightStrong:g}=r;return{fontWeight:g,rotate:"252deg",colorStartPrimary:s(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:s(l,{alpha:.6}),colorEndInfo:l,colorStartWarning:s(n,{alpha:.6}),colorEndWarning:n,colorStartError:s(c,{alpha:.6}),colorEndError:c,colorStartSuccess:s(a,{alpha:.6}),colorEndSuccess:a}}const I={name:"GradientText",common:y,self:k},T=x("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),P=Object.assign(Object.assign({},u.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),O=v({name:"GradientText",props:P,setup(r){C();const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=z(r),n=i(()=>{const{type:e}=r;return e==="danger"?"error":e}),c=i(()=>{let e=r.size||r.fontSize;return e&&(e=E(e)),e||void 0}),l=i(()=>{const e=r.color||r.gradient;if(typeof e=="string")return e;if(e){const d=e.deg||0,p=e.from,m=e.to;return`linear-gradient(${d}deg, ${p} 0%, ${m} 100%)`}}),g=u("GradientText","-gradient-text",T,I,r,t),f=i(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:d},self:{rotate:p,[h("colorStart",e)]:m,[h("colorEnd",e)]:b,fontWeight:S}}=g.value;return{"--n-bezier":d,"--n-rotate":p,"--n-color-start":m,"--n-color-end":b,"--n-font-weight":S}}),o=a?w("gradient-text",i(()=>n.value[0]),f,r):void 0;return{mergedClsPrefix:t,compatibleType:n,styleFontSize:c,styleBgImage:l,cssVars:a?void 0:f,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:r,onRender:t}=this;return t==null||t(),$("span",{class:[`${r}-gradient-text`,`${r}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{O as _};
