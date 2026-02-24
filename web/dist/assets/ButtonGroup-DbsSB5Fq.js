import{bB as s,eL as d,bA as o,bD as i,bC as n,d as g,z as p,eM as f,a2 as c,eN as $,B as h,H as m}from"./index-CsnEiuSG.js";const t="0!important",u="-1px!important";function e(r){return i(`${r}-type`,[o("& +",[s("button",{},[i(`${r}-type`,[n("border",{borderLeftWidth:t}),n("state-border",{left:u})])])])])}function a(r){return i(`${r}-type`,[o("& +",[s("button",[i(`${r}-type`,[n("border",{borderTopWidth:t}),n("state-border",{top:u})])])])])}const x=s("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[s("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),e("default"),i("ghost",[e("primary"),e("info"),e("success"),e("warning"),e("error")])])])]),i("vertical",{flexDirection:"column"},[s("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),a("default"),i("ghost",[a("primary"),a("info"),a("success"),a("warning"),a("error")])])])]),y={size:{type:String,default:void 0},vertical:Boolean},v=g({name:"ButtonGroup",props:y,setup(r){const{mergedClsPrefixRef:l,mergedRtlRef:b}=p(r);return f("-button-group",x,l),c($,r),{rtlEnabled:h("ButtonGroup",b,l),mergedClsPrefix:l}},render(){const{mergedClsPrefix:r}=this;return m("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});export{v as N};
