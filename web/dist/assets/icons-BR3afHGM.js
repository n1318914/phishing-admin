import{b_ as X,b$ as I,c0 as L,c1 as Y,c2 as O,c3 as oe,c4 as G,d as P,r as k,c as C,H as s,c5 as ne,c6 as le,c7 as pt,c8 as Ie,aW as Oe,a$ as ht,c9 as de,ca as _e,cb as ze,cc as Me,cd as Te,ce as vt,bA as se,bB as f,cf as gt,bC as A,bD as je,cg as bt,bH as ft,z as mt,A as Ne,ch as xt,a2 as kt,bK as De,bJ as Ee,$ as wt,C as He,bL as yt,ci as Ct,cj as Fe,ck as $t,cl as St,cm as Ut,cn as At,T as _t,J as Xe,co as zt,bU as me,aS as pe,a3 as Mt,a1 as Dt,av as Ft,V as Vt,bW as Pt,h as he,b as Ve,f as R,w as D,i as Le,e as xe,t as Rt,ae as qt,ax as Bt,k as Ke,l as It,cp as Ot,cq as Tt,bX as jt,bY as Nt,ab as Et,_ as Ht,q as Xt}from"./index-FXI03K-t.js";import{I as Lt}from"./index-Bx5pDPUb.js";import"./PieChart-BNuHHQwM.js";import"./ArrowUpCircleOutline-stT2qoep.js";import"./BalloonOutline-z1FDlwZg.js";import"./CashOutline-bIIdno0z.js";import"./CheckmarkCircle-BFo9gGXF.js";import"./RemoveCircleOutline-CdYYxlaY.js";import"./GlassesOutline-BTXhwoZo.js";import"./HelpCircleOutline-D0GvCfu6.js";import"./PersonOutline-Dsq2whW3.js";import"./LogoVue-F9uRWUgn.js";import"./LogoWechat-Cy37gKzY.js";import"./SunnySharp-BzMp-gRa.js";import"./Sync-MsJ2tymM.js";import"./QrCodeOutline-CAJMCrR4.js";function Je(e,t,a){t/=100,a/=100;const r=t*Math.min(a,1-a)+a;return[e,r?(2-2*a/r)*100:0,r*100]}function ke(e,t,a){t/=100,a/=100;const r=a-a*t/2,n=Math.min(r,1-r);return[e,n?(a-r)/n*100:0,r*100]}function K(e,t,a){t/=100,a/=100;let r=(n,o=(n+e/60)%6)=>a-a*t*Math.max(Math.min(o,4-o,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function Pe(e,t,a){e/=255,t/=255,a/=255;let r=Math.max(e,t,a),n=r-Math.min(e,t,a),o=n&&(r==e?(t-a)/n:r==t?2+(a-e)/n:4+(e-t)/n);return[60*(o<0?o+6:o),r&&n/r*100,r*100]}function Re(e,t,a){e/=255,t/=255,a/=255;let r=Math.max(e,t,a),n=r-Math.min(e,t,a),o=1-Math.abs(r+r-n-1),i=n&&(r==e?(t-a)/n:r==t?2+(a-e)/n:4+(e-t)/n);return[60*(i<0?i+6:i),o?n/o*100:0,(r+r-n)*50]}function qe(e,t,a){t/=100,a/=100;let r=t*Math.min(a,1-a),n=(o,i=(o+e/30)%12)=>a-r*Math.max(Math.min(i-3,9-i,1),-1);return[n(0)*255,n(8)*255,n(4)*255]}function Kt(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ve(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Jt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Wt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Yt={rgb:{hex(e){return X(I(e))},hsl(e){const[t,a,r,n]=I(e);return L([...Re(t,a,r),n])},hsv(e){const[t,a,r,n]=I(e);return Y([...Pe(t,a,r),n])}},hex:{rgb(e){return O(I(e))},hsl(e){const[t,a,r,n]=I(e);return L([...Re(t,a,r),n])},hsv(e){const[t,a,r,n]=I(e);return Y([...Pe(t,a,r),n])}},hsl:{hex(e){const[t,a,r,n]=oe(e);return X([...qe(t,a,r),n])},rgb(e){const[t,a,r,n]=oe(e);return O([...qe(t,a,r),n])},hsv(e){const[t,a,r,n]=oe(e);return Y([...Je(t,a,r),n])}},hsv:{hex(e){const[t,a,r,n]=G(e);return X([...K(t,a,r),n])},rgb(e){const[t,a,r,n]=G(e);return O([...K(t,a,r),n])},hsl(e){const[t,a,r,n]=G(e);return L([...ke(t,a,r),n])}}};function We(e,t,a){return a=a||ve(e),a?a===t?e:Yt[a][t](e):null}const ge="12px",Gt=12,Z="6px",Zt=P({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=k(null);function a(o){!t.value||!e.rgba||(ne("mousemove",document,r),ne("mouseup",document,n),r(o))}function r(o){const{value:i}=t;if(!i)return;const{width:c,left:p}=i.getBoundingClientRect(),w=(o.clientX-p)/(c-Gt);e.onUpdateAlpha(Wt(w))}function n(){var o;le("mousemove",document,r),le("mouseup",document,n),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,railBackgroundImage:C(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ge,borderRadius:Z},onMousedown:this.handleMouseDown},s("div",{style:{borderRadius:Z,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},s("div",{class:`${e}-color-picker-checkboard`}),s("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&s("div",{style:{position:"absolute",left:Z,right:Z,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Z})`,borderRadius:Z,width:ge,height:ge}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:O(this.rgba),borderRadius:Z,width:ge,height:ge}}))))}}),Be=pt("n-color-picker");function Qt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function er(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function tr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function rr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function ar(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const or={paddingSmall:"0 4px"},Ye=P({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=k(""),{themeRef:a}=Ie(Be,null);Oe(()=>{t.value=r()});function r(){const{value:i}=e;if(i===null)return"";const{label:c}=e;return c==="HEX"?i:c==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function n(i){t.value=i}function o(i){let c,p;switch(e.label){case"HEX":p=rr(i),p&&e.onUpdateValue(i),t.value=r();break;case"H":c=er(i),c===!1?t.value=r():e.onUpdateValue(c);break;case"S":case"L":case"V":c=tr(i),c===!1?t.value=r():e.onUpdateValue(c);break;case"A":c=ar(i),c===!1?t.value=r():e.onUpdateValue(c);break;case"R":case"G":case"B":c=Qt(i),c===!1?t.value=r():e.onUpdateValue(c);break}}return{mergedTheme:a,inputValue:t,handleInputChange:o,handleInputUpdateValue:n}},render(){const{mergedTheme:e}=this;return s(ht,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:or,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),nr=P({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:r}=e;if(e.mode==="hex"){e.onUpdateValue((r?X:de)(a));return}let n;switch(e.valueArr===null?n=[0,0,0,0]:n=Array.from(e.valueArr),e.mode){case"hsv":n[t]=a,e.onUpdateValue((r?Y:Me)(n));break;case"rgb":n[t]=a,e.onUpdateValue((r?O:ze)(n));break;case"hsl":n[t]=a,e.onUpdateValue((r?L:_e)(n));break}}}},render(){const{clsPrefix:e,modes:t}=this;return s("div",{class:`${e}-color-picker-input`},s("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),s(Te,null,{default:()=>{const{mode:a,valueArr:r,showAlpha:n}=this;if(a==="hex"){let o=null;try{o=r===null?null:(n?X:de)(r)}catch(i){}return s(Ye,{label:"HEX",showAlpha:n,value:o,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(a+(n?"a":"")).split("").map((o,i)=>s(Ye,{label:o.toUpperCase(),value:r===null?null:r[i],onUpdateValue:c=>{this.handleUnitUpdateValue(i,c)}}))}}))}});function lr(e,t){if(t==="hsv"){const[a,r,n,o]=G(e);return O([...K(a,r,n),o])}return e}function sr(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const ir=P({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=C(()=>e.swatches.map(o=>{const i=ve(o);return{value:o,mode:i,legalValue:lr(o,i)}}));function a(o){const{mode:i}=e;let{value:c,mode:p}=o;return p||(p="hex",/^[a-zA-Z]+$/.test(c)?c=sr(c):(vt("color-picker",`color ${c} in swatches is invalid.`),c="#000000")),p===i?c:We(c,i,p)}function r(o){e.onUpdateColor(a(o))}function n(o,i){o.key==="Enter"&&r(i)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:n}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>s("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},s("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),cr=P({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=Ie(Be,null);return()=>{const{hsla:r,value:n,clsPrefix:o,onClick:i,disabled:c}=e,p=t.label||a.value;return s("div",{class:[`${o}-color-picker-trigger`,c&&`${o}-color-picker-trigger--disabled`],onClick:c?void 0:i},s("div",{class:`${o}-color-picker-trigger__fill`},s("div",{class:`${o}-color-picker-checkboard`}),s("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:r?L(r):""}}),n&&r?s("div",{class:`${o}-color-picker-trigger__value`,style:{color:r[2]>50||r[3]<.5?"black":"white"}},p?p(n):n):null))}}}),ur=P({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ve(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var r;const n=a.target.value;(r=e.onUpdateColor)===null||r===void 0||r.call(e,We(n.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-preview__preview`},s("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),s("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ie="12px",dr=12,Q="6px",pr=6,hr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",vr=P({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=k(null);function a(o){t.value&&(ne("mousemove",document,r),ne("mouseup",document,n),r(o))}function r(o){const{value:i}=t;if(!i)return;const{width:c,left:p}=i.getBoundingClientRect(),w=Jt((o.clientX-p-pr)/(c-dr)*360);e.onUpdateHue(w)}function n(){var o;le("mousemove",document,r),le("mouseup",document,n),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-slider`,style:{height:ie,borderRadius:Q}},s("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:hr,height:ie,borderRadius:Q,position:"relative"},onMousedown:this.handleMouseDown},s("div",{style:{position:"absolute",left:Q,right:Q,top:0,bottom:0}},s("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Q})`,borderRadius:Q,width:ie,height:ie}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Q,width:ie,height:ie}})))))}}),we="12px",ye="6px",gr=P({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=k(null);function a(o){t.value&&(ne("mousemove",document,r),ne("mouseup",document,n),r(o))}function r(o){const{value:i}=t;if(!i)return;const{width:c,height:p,left:w,bottom:F}=i.getBoundingClientRect(),q=(F-o.clientY)/p,T=(o.clientX-w)/c,ee=100*(T>1?1:T<0?0:T),V=100*(q>1?1:q<0?0:q);e.onUpdateSV(ee,V)}function n(){var o;le("mousemove",document,r),le("mouseup",document,n),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:t,handleColor:C(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},s("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),s("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&s("div",{class:`${e}-color-picker-handle`,style:{width:we,height:we,borderRadius:ye,left:`calc(${this.displayedSv[0]}% - ${ye})`,bottom:`calc(${this.displayedSv[1]}% - ${ye})`}},s("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ye,width:we,height:we}})))}}),br=se([f("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),f("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[gt(),f("input",`
 text-align: center;
 `)]),f("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[se("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[A("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),se("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),f("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[A("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),f("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[A("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[je("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),f("color-picker-preview",`
 display: flex;
 `,[A("sliders",`
 flex: 1 0 auto;
 `),A("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),A("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),A("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),f("color-picker-input",`
 display: flex;
 align-items: center;
 `,[f("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),A("mode",`
 width: 72px;
 text-align: center;
 `)]),f("color-picker-control",`
 padding: 12px;
 `),f("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[f("button","margin-left: 8px;")]),f("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[A("value",`
 white-space: nowrap;
 position: relative;
 `),A("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),je("disabled","cursor: not-allowed"),f("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[se("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),f("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[f("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[A("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),se("&:focus",`
 outline: none;
 `,[A("fill",[se("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),fr=Object.assign(Object.assign({},Ne.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Fe.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),mr=P({name:"ColorPicker",props:fr,slots:Object,setup(e,{slots:t}){const a=k(null);let r=null;const n=bt(e),{mergedSizeRef:o,mergedDisabledRef:i}=n,{localeRef:c}=ft("global"),{mergedClsPrefixRef:p,namespaceRef:w,inlineThemeDisabled:F}=mt(e),q=Ne("ColorPicker","-color-picker",br,xt,e,p);kt(Be,{themeRef:q,renderLabelRef:De(e,"renderLabel"),colorPickerSlots:t});const T=k(e.defaultShow),ee=Ee(De(e,"show"),T);function V(l){const{onUpdateShow:u,"onUpdate:show":h}=e;u&&me(u,l),h&&me(h,l),T.value=l}const{defaultValue:be}=e,ce=k(be===void 0?Kt(e.modes,e.showAlpha):be),m=Ee(De(e,"value"),ce),j=k([m.value]),_=k(0),z=C(()=>ve(m.value)),{modes:Ce}=e,M=k(ve(m.value)||Ce[0]||"rgb");function Ge(){const{modes:l}=e,{value:u}=M,h=l.findIndex(v=>v===u);~h?M.value=l[(h+1)%l.length]:M.value="rgb"}let $,S,te,re,N,E,H,U;const ue=C(()=>{const{value:l}=m;if(!l)return null;switch(z.value){case"hsv":return G(l);case"hsl":return[$,S,te,U]=oe(l),[...Je($,S,te),U];case"rgb":case"hex":return[N,E,H,U]=I(l),[...Pe(N,E,H),U]}}),J=C(()=>{const{value:l}=m;if(!l)return null;switch(z.value){case"rgb":case"hex":return I(l);case"hsv":return[$,S,re,U]=G(l),[...K($,S,re),U];case"hsl":return[$,S,te,U]=oe(l),[...qe($,S,te),U]}}),$e=C(()=>{const{value:l}=m;if(!l)return null;switch(z.value){case"hsl":return oe(l);case"hsv":return[$,S,re,U]=G(l),[...ke($,S,re),U];case"rgb":case"hex":return[N,E,H,U]=I(l),[...Re(N,E,H),U]}}),Ze=C(()=>{switch(M.value){case"rgb":case"hex":return J.value;case"hsv":return ue.value;case"hsl":return $e.value}}),fe=k(0),Se=k(1),Ue=k([0,0]);function Qe(l,u){const{value:h}=ue,v=fe.value,g=h?h[3]:1;Ue.value=[l,u];const{showAlpha:d}=e;switch(M.value){case"hsv":b((d?Y:Me)([v,l,u,g]),"cursor");break;case"hsl":b((d?L:_e)([...ke(v,l,u),g]),"cursor");break;case"rgb":b((d?O:ze)([...K(v,l,u),g]),"cursor");break;case"hex":b((d?X:de)([...K(v,l,u),g]),"cursor");break}}function et(l){fe.value=l;const{value:u}=ue;if(!u)return;const[,h,v,g]=u,{showAlpha:d}=e;switch(M.value){case"hsv":b((d?Y:Me)([l,h,v,g]),"cursor");break;case"rgb":b((d?O:ze)([...K(l,h,v),g]),"cursor");break;case"hex":b((d?X:de)([...K(l,h,v),g]),"cursor");break;case"hsl":b((d?L:_e)([...ke(l,h,v),g]),"cursor");break}}function tt(l){switch(M.value){case"hsv":[$,S,re]=ue.value,b(Y([$,S,re,l]),"cursor");break;case"rgb":[N,E,H]=J.value,b(O([N,E,H,l]),"cursor");break;case"hex":[N,E,H]=J.value,b(X([N,E,H,l]),"cursor");break;case"hsl":[$,S,te]=$e.value,b(L([$,S,te,l]),"cursor");break}Se.value=l}function b(l,u){u==="cursor"?r=l:r=null;const{nTriggerFormChange:h,nTriggerFormInput:v}=n,{onUpdateValue:g,"onUpdate:value":d}=e;g&&me(g,l),d&&me(d,l),h(),v(),ce.value=l}function rt(l){b(l,"input"),Mt(ae)}function ae(l=!0){const{value:u}=m;if(u){const{nTriggerFormChange:h,nTriggerFormInput:v}=n,{onComplete:g}=e;g&&g(u);const{value:d}=j,{value:y}=_;l&&(d.splice(y+1,d.length,u),_.value=y+1),h(),v()}}function at(){const{value:l}=_;l-1<0||(b(j.value[l-1],"input"),ae(!1),_.value=l-1)}function ot(){const{value:l}=_;l<0||l+1>=j.value.length||(b(j.value[l+1],"input"),ae(!1),_.value=l+1)}function nt(){b(null,"input");const{onClear:l}=e;l&&l(),V(!1)}function lt(){const{value:l}=m,{onConfirm:u}=e;u&&u(l),V(!1)}const st=C(()=>_.value>=1),it=C(()=>{const{value:l}=j;return l.length>1&&_.value<l.length-1});wt(ee,l=>{l||(j.value=[m.value],_.value=0)}),Oe(()=>{if(!(r&&r===m.value)){const{value:l}=ue;l&&(fe.value=l[0],Se.value=l[3],Ue.value=[l[1],l[2]])}r=null});const Ae=C(()=>{const{value:l}=o,{common:{cubicBezierEaseInOut:u},self:{textColor:h,color:v,panelFontSize:g,boxShadow:d,border:y,borderRadius:x,dividerColor:W,[He("height",l)]:ut,[He("fontSize",l)]:dt}}=q.value;return{"--n-bezier":u,"--n-text-color":h,"--n-color":v,"--n-panel-font-size":g,"--n-font-size":dt,"--n-box-shadow":d,"--n-border":y,"--n-border-radius":x,"--n-height":ut,"--n-divider-color":W}}),B=F?yt("color-picker",C(()=>o.value[0]),Ae,e):void 0;function ct(){var l;const{value:u}=J,{value:h}=fe,{internalActions:v,modes:g,actions:d}=e,{value:y}=q,{value:x}=p;return s("div",{class:[`${x}-color-picker-panel`,B==null?void 0:B.themeClass.value],onDragstart:W=>{W.preventDefault()},style:F?void 0:Ae.value},s("div",{class:`${x}-color-picker-control`},s(gr,{clsPrefix:x,rgba:u,displayedHue:h,displayedSv:Ue.value,onUpdateSV:Qe,onComplete:ae}),s("div",{class:`${x}-color-picker-preview`},s("div",{class:`${x}-color-picker-preview__sliders`},s(vr,{clsPrefix:x,hue:h,onUpdateHue:et,onComplete:ae}),e.showAlpha?s(Zt,{clsPrefix:x,rgba:u,alpha:Se.value,onUpdateAlpha:tt,onComplete:ae}):null),e.showPreview?s(ur,{clsPrefix:x,mode:M.value,color:J.value&&de(J.value),onUpdateColor:W=>{b(W,"input")}}):null),s(nr,{clsPrefix:x,showAlpha:e.showAlpha,mode:M.value,modes:g,onUpdateMode:Ge,value:m.value,valueArr:Ze.value,onUpdateValue:rt}),((l=e.swatches)===null||l===void 0?void 0:l.length)&&s(ir,{clsPrefix:x,mode:M.value,swatches:e.swatches,onUpdateColor:W=>{b(W,"input")}})),d!=null&&d.length?s("div",{class:`${x}-color-picker-action`},d.includes("confirm")&&s(pe,{size:"small",onClick:lt,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>c.value.confirm}),d.includes("clear")&&s(pe,{size:"small",onClick:nt,disabled:!m.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>c.value.clear})):null,t.action?s("div",{class:`${x}-color-picker-action`},{default:t.action}):v?s("div",{class:`${x}-color-picker-action`},v.includes("undo")&&s(pe,{size:"small",onClick:at,disabled:!st.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>c.value.undo}),v.includes("redo")&&s(pe,{size:"small",onClick:ot,disabled:!it.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>c.value.redo})):null)}return{mergedClsPrefix:p,namespace:w,selfRef:a,hsla:$e,rgba:J,mergedShow:ee,mergedDisabled:i,isMounted:Ct(),adjustedTo:Fe(e),mergedValue:m,handleTriggerClick(){V(!0)},handleClickOutside(l){var u;!((u=a.value)===null||u===void 0)&&u.contains($t(l))||V(!1)},renderPanel:ct,cssVars:F?void 0:Ae,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t==null||t(),s("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},s(St,null,{default:()=>[s(Ut,null,{default:()=>s(cr,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),s(At,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Fe.tdkey,to:this.adjustedTo},{default:()=>s(_t,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Xe(this.renderPanel(),[[zt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),xr={style:{color:"white"}},kr={class:"icons"},wr={class:"icons-item"},yr={class:"icons-item_content"},Cr=["onClick"],$r=P({__name:"icons",setup(e,{expose:t}){Dt(w=>({ed3c5d00:i.value}));const a=Ft(),r=Vt(),n=k([]),o=k({color:a.appTheme,size:32}),i=C(()=>o.value.color);function c(w){r.success(`\u5DF2\u590D\u5236\uFF0C${w.name}`)}function p(w){w==="antd"&&(n.value=Ot),w==="ionicons5"&&(n.value=Lt)}return t({open:p}),(w,F)=>{const q=pe,T=Tt,ee=Te,V=jt,be=mr,ce=Nt,m=Et,j=Ht,_=Pt("copy");return he(),Ve("div",null,[R(j,{segmented:{content:!0,footer:!0},"header-style":"padding:10px","footer-style":"padding:10px","content-style":""},{header:D(()=>[R(ce,{"y-gap":"20","x-gap":"10",cols:"24","item-responsive":"",responsive:"screen"},{default:D(()=>[R(V,{span:"24 m:12 l:6"},{default:D(()=>[R(ee,null,{default:D(()=>[R(q,null,{default:D(()=>[Le("\u56FE\u6807\u5927\u5C0F")]),_:1}),R(T,{style:{width:"100%"},value:o.value.size,"onUpdate:value":F[0]||(F[0]=z=>o.value.size=z)},null,8,["value"])]),_:1})]),_:1}),R(V,{span:"24 m:12 l:6"},{default:D(()=>[R(be,{modes:["hex"],style:{width:"100%"},value:o.value.color,"onUpdate:value":F[1]||(F[1]=z=>o.value.color=z),swatches:["#FFFFFF","#18A058","#2080F0","#F0A020","#D03050","#000000"]},{label:D(()=>[xe("div",xr,"\u56FE\u6807\u989C\u8272 "+Rt(o.value.color),1)]),_:1},8,["value"])]),_:1})]),_:1})]),default:D(()=>[xe("div",kr,[R(ce,{"y-gap":"20","x-gap":"0",cols:"24","item-responsive":"",responsive:"screen"},{default:D(()=>[(he(!0),Ve(qt,null,Bt(n.value,(z,Ce)=>(he(),Ke(V,{key:Ce,span:"12 m:4 l:3 xl:2"},{default:D(()=>[xe("div",wr,[xe("div",yr,[R(m,{class:"icon",color:o.value.color,size:o.value.size},{default:D(()=>[(he(),Ke(It(z)))]),_:2},1032,["color","size"]),Xe((he(),Ve("span",{class:"copy",onClick:M=>c(z)},[Le("\u590D\u5236")],8,Cr)),[[_,z.name]])])])]),_:2},1024))),128))]),_:1})])]),_:1})])}}}),Sr=Xt($r,[["__scopeId","data-v-adc330eb"]]);export{Sr as default};
