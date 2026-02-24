import{cD as W,fB as I,bB as t,bD as d,bA as p,bC as l,d as x,z as f,A as b,a2 as D,H as s,c7 as E,c8 as A,cX as H,cG as N,c as u,C as g,cH as V,bL as G,eZ as C,f9 as $}from"./index-C_gYeop4.js";function L(e){const{textColor3:n,infoColor:o,errorColor:r,successColor:i,warningColor:a,textColor1:c,textColor2:m,railColor:z,fontWeightStrong:h,fontSize:v}=e;return Object.assign(Object.assign({},I),{contentFontSize:v,titleFontWeight:h,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${a}`,iconColor:n,iconColorInfo:o,iconColorError:r,iconColorSuccess:i,iconColorWarning:a,titleTextColor:c,contentTextColor:m,metaTextColor:n,lineColor:z})}const M={name:"Timeline",common:W,self:L},y=1.25,X=t("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${y};
`,[d("horizontal",`
 flex-direction: row;
 `,[p(">",[t("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[d("dashed-line-type",[p(">",[t("timeline-item-timeline",[l("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),p(">",[t("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[p(">",[l("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),t("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[l("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),d("right-placement",[t("timeline-item",[t("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),t("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),d("left-placement",[t("timeline-item",[t("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),t("timeline-item-timeline",`
 left: 0;
 `)])]),t("timeline-item",`
 position: relative;
 `,[p("&:last-child",[t("timeline-item-timeline",[l("line",`
 display: none;
 `)]),t("timeline-item-content",[l("meta",`
 margin-bottom: 0;
 `)])]),t("timeline-item-content",[l("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),l("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),l("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),d("dashed-line-type",[t("timeline-item-timeline",[l("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),t("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${y} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[l("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),l("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),Z=Object.assign(Object.assign({},b.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),S=E("n-timeline"),J=x({name:"Timeline",props:Z,setup(e,{slots:n}){const{mergedClsPrefixRef:o}=f(e),r=b("Timeline","-timeline",X,M,e,o);return D(S,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:i}=o;return s("div",{class:[`${i}-timeline`,e.horizontal&&`${i}-timeline--horizontal`,`${i}-timeline--${e.size}-size`,!e.horizontal&&`${i}-timeline--${e.itemPlacement}-placement`]},n)}}}),K={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Q=x({name:"TimelineItem",props:K,slots:Object,setup(e){const n=A(S);n||H("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),N();const{inlineThemeDisabled:o}=f(),r=u(()=>{const{props:{size:a,iconSize:c},mergedThemeRef:m}=n,{type:z}=e,{self:{titleTextColor:h,contentTextColor:v,metaTextColor:T,lineColor:w,titleFontWeight:_,contentFontSize:B,[g("iconSize",a)]:k,[g("titleMargin",a)]:R,[g("titleFontSize",a)]:P,[g("circleBorder",z)]:j,[g("iconColor",z)]:O},common:{cubicBezierEaseInOut:F}}=m.value;return{"--n-bezier":F,"--n-circle-border":j,"--n-icon-color":O,"--n-content-font-size":B,"--n-content-text-color":v,"--n-line-color":w,"--n-meta-text-color":T,"--n-title-font-size":P,"--n-title-font-weight":_,"--n-title-margin":R,"--n-title-text-color":h,"--n-icon-size":V(c)||k}}),i=o?G("timeline-item",u(()=>{const{props:{size:a,iconSize:c}}=n,{type:m}=e;return`${a[0]}${c||"a"}${m[0]}`}),r,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:o,$slots:r}=this;return o==null||o(),s("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},s("div",{class:`${e}-timeline-item-timeline`},s("div",{class:`${e}-timeline-item-timeline__line`}),C(r.icon,i=>i?s("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},i):s("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),s("div",{class:`${e}-timeline-item-content`},C(r.header,i=>i||this.title?s("div",{class:`${e}-timeline-item-content__title`},i||this.title):null),s("div",{class:`${e}-timeline-item-content__content`},$(r.default,()=>[this.content])),s("div",{class:`${e}-timeline-item-content__meta`},$(r.footer,()=>[this.time]))))}});export{Q as _,J as a};
