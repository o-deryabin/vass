(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{414:function(t,e,n){"use strict";n(7),n(8),n(5),n(10),n(6),n(11);var o=n(2),r=n(86),c=n(57),l=n(114),v=n(12),_=n(1);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(v.a)(r.a,c.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(_.l)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},439:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1b7ed03e",content,!0,{sourceMap:!1})},469:function(t,e,n){"use strict";n(439)},470:function(t,e,n){var o=n(15)(!1);o.push([t.i,".section__title--second[data-v-53c4371a]{font-family:Inter;font-style:normal;font-weight:400;font-size:25px;line-height:120%;text-transform:uppercase;color:#000;margin-top:23px}.section__img[data-v-53c4371a]{max-width:135px}.section__img--partners[data-v-53c4371a]{max-width:77px}",""]),t.exports=o},498:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isActive:!1}}},r=(n(469),n(24)),c=n(49),l=n.n(c),v=n(525),_=n(407),m=n(414),d=n(526),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--teamMobile"},[n("v-container",[n("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"scroll-y-reverse-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("h2",{staticClass:"sub-title"},[t._v("Время – деньги!")])]),t._v(" "),n("p",{staticClass:"section__description section__description--18 mt-4 mb-6"},[t._v("\n      Обратившись в нашу компанию, Вам не придется его тратить. Вам не нужно\n      дополнительно искать специалистов по рекламе и продвижению. Всю работу\n      мы берем на себя. Мы работаем под ключ.\n    ")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"section__title section__title--26 mt-1"},[t._v("\n          Станислав Васильев\n        ")]),t._v(" "),n("p",{staticClass:"section__description section__description--16 mt-4"},[t._v("\n          Основатель"),n("br"),t._v("\n          веб студии\n        ")]),t._v(" "),n("h4",{staticClass:"section__title section__title--second"},[t._v("5")]),t._v(" "),n("p",{staticClass:"section__description section__description--16 mt-4"},[t._v("\n          лет опыта в веб разработке\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("img",{staticClass:"section__img",attrs:{src:"/img/team/Ellipse 5.webp",alt:""}})])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("img",{staticClass:"section__img--partners",attrs:{src:"/img/team/image 17_2.webp",alt:"AmoCrm партнер"}})]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("img",{staticClass:"section__img--partners",attrs:{src:"/img/team/image 18_2.webp",alt:"Google партнер"}})])],1)],1)],1)}),[],!1,null,"53c4371a",null);e.default=component.exports;l()(component,{VCol:v.a,VContainer:_.a,VLazy:m.a,VRow:d.a})}}]);