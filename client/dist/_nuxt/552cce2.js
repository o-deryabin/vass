(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{414:function(t,e,n){"use strict";n(7),n(8),n(5),n(10),n(6),n(11);var o=n(2),c=n(86),r=n(57),l=n(114),d=n(12),_=n(1);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(c.a,r.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(_.l)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},436:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2a79887d",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";n(436)},464:function(t,e,n){var o=n(15)(!1);o.push([t.i,".section__content[data-v-22d2ce1c]{margin-top:60px}.section__about[data-v-22d2ce1c]{margin-top:50px}.section__description[data-v-22d2ce1c],.section__text[data-v-22d2ce1c],.section__title[data-v-22d2ce1c]{font-family:Inter}.section__text[data-v-22d2ce1c]{font-size:18px;line-height:130%;color:#707070}.section__title--first[data-v-22d2ce1c]{font-weight:600;font-size:26px;line-height:130%;color:#000;margin-top:50px}.section__title--second[data-v-22d2ce1c]{font-size:48px;line-height:120%;font-weight:400;text-transform:uppercase;color:#000}.section__description[data-v-22d2ce1c]{font-weight:400;font-size:16px;line-height:120%;color:#707070}.section__description--second[data-v-22d2ce1c]{margin-top:20px}.section__img[data-v-22d2ce1c]{max-width:280px}.section__img--partners[data-v-22d2ce1c]{max-width:105px}",""]),t.exports=o},495:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isActive:!1}}},c=(n(463),n(24)),r=n(49),l=n.n(r),d=n(525),_=n(407),v=n(414),f=n(526),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--team"},[n("v-container",[n("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"scroll-y-reverse-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("h2",{staticClass:"sub-title"},[t._v("Время – деньги!")])]),t._v(" "),n("v-row",[n("v-col",{staticClass:"ml-auto",attrs:{md:"8"}},[n("v-row",{staticClass:"section__content"},[n("v-col",{attrs:{cols:"7"}},[n("p",{staticClass:"section__text"},[t._v("\n              Обратившись в нашу компанию, Вы не потратите время и деньги в\n              пустую. Вам не нужно дополнительно искать специалистов по\n              рекламе и продвижению. Всю работу мы берем на себя. Мы работаем\n              под ключ.\n            ")]),t._v(" "),n("h4",{staticClass:"section__title section__title--first"},[t._v("\n              Станислав Васильев\n            ")]),t._v(" "),n("h6",{staticClass:"section__description mt-3"},[t._v("Основатель веб студии")]),t._v(" "),n("v-row",{staticClass:"section__about"},[n("v-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"section__title section__title--second"},[t._v("5")]),t._v(" "),n("h6",{staticClass:"section__description section__description--second"},[t._v("\n                  лет опыта в веб разработке\n                ")])]),t._v(" "),n("v-col",{staticClass:"d-md-flex flex-md-column justify-md-end align-md-end",attrs:{cols:"6"}},[n("img",{staticClass:"section__img--partners",attrs:{src:"/img/team/image 17_2.webp",alt:"AmoCrm партнер"}}),t._v(" "),n("img",{staticClass:"section__img--partners mt-5",attrs:{src:"/img/team/image 18_2.webp",alt:"Google партнер"}})])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"5"}},[n("img",{staticClass:"section__img",attrs:{src:"/img/team/Ellipse 5.webp",alt:""}})])],1)],1)],1)],1)],1)}),[],!1,null,"22d2ce1c",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:_.a,VLazy:v.a,VRow:f.a})}}]);