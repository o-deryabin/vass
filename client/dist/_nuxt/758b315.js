(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{402:function(t,e,r){"use strict";r(9),r(5),r(6),r(14),r(8),r(15);var n=r(2),o=r(84),c=r(53),l=r(112),d=r(10),v=r(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(o.a,c.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(v.l)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},407:function(t,e,r){var content=r(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7132a15d",content,!0,{sourceMap:!1})},408:function(t,e,r){var n=r(12)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},428:function(t,e,r){var content=r(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("46dd7d70",content,!0,{sourceMap:!1})},444:function(t,e,r){"use strict";r(9),r(5),r(6),r(14),r(8),r(15);var n=r(2),o=(r(407),r(32));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},459:function(t,e,r){"use strict";r(428)},460:function(t,e,r){var n=r(12)(!1);n.push([t.i,".section__content[data-v-36ca4d37]{margin-top:25px}@media(min-width:960px){.section__content[data-v-36ca4d37]{border-bottom:1px solid #aeaeae;margin-top:55px;padding-bottom:25px}}.section__index[data-v-36ca4d37]{font-family:Inter;font-style:normal;font-weight:700;line-height:130%;letter-spacing:.07em;color:#e9e9e9;font-size:25px}@media(min-width:960px){.section__index[data-v-36ca4d37]{font-size:55px}}@media(max-width:960px){.section__title[data-v-36ca4d37]{margin-bottom:45px}}",""]),t.exports=n},487:function(t,e,r){"use strict";r.r(e);var n={props:["width"],data:function(){return{isActive:!1,benefits:[{title:"Проводим глубокий анализ конкурентов. Выявляем слабые и сильные стороны, продумываем как отстроится от конкурентов и выглядеть более выигрышно. "},{title:"Мы создаем профессиональные сайты всего за 2 недели. Это самый высокий показатель по Казахстану. Мы знаем насколько важна скорость для наших клиентов, ведь Ваше время это деньги. "},{title:"Проводим личные встречи или онлайн. Делаем встречу максимально удобной и комфортной для Вас."}]}}},o=(r(459),r(31)),c=r(46),l=r.n(c),d=r(509),v=r(395),h=r(444),f=r(402),m=r(510),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section section--benefits"},[r("v-container",[r("v-lazy",{attrs:{options:{threshold:.5},transition:"scroll-y-reverse-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("h2",{staticClass:"sub-title"},[t._v("Преимущества")])]),t._v(" "),r("v-divider",{staticClass:"section__divider"}),t._v(" "),t._l(t.benefits,(function(e,n){return r("v-row",{key:n,staticClass:"section__content align-md-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("h4",{staticClass:"section__index"},[t._v(t._s("0"+(n+1)))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"8"}},[r("p",{staticClass:"section__title section__title--18-grey"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),t.width<=980?[r("v-divider")]:t._e()],2)],1)}))],2)],1)}),[],!1,null,"36ca4d37",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VDivider:h.a,VLazy:f.a,VRow:m.a})}}]);