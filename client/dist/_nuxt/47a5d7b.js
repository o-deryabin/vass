(window.webpackJsonp=window.webpackJsonp||[]).push([[13,19],{414:function(t,e,n){"use strict";n(7),n(8),n(5),n(10),n(6),n(11);var o=n(2),c=n(86),r=n(57),l=n(114),d=n(12),_=n(1);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(c.a,r.a).extend({name:"VLazy",directives:{intersect:l.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(_.l)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},417:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("c0fea02c",content,!0,{sourceMap:!1})},419:function(t,e,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7132a15d",content,!0,{sourceMap:!1})},420:function(t,e,n){var o=n(15)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},431:function(t,e,n){"use strict";n(417)},432:function(t,e,n){var o=n(15)(!1);o.push([t.i,"svg[data-v-22629170]{margin-left:15px}",""]),t.exports=o},433:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("47cab720",content,!0,{sourceMap:!1})},441:function(t,e,n){"use strict";n.r(e);var o={},c=(n(431),n(24)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"39",height:"39",viewBox:"0 0 39 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M33.9553 5.53253C33.9523 5.06309 33.5694 4.68494 33.0999 4.68791L25.4501 4.73616C24.9807 4.73912 24.6025 5.12207 24.6055 5.5915C24.6084 6.06094 24.9914 6.43908 25.4608 6.43612L32.2607 6.39323L32.3036 13.1931C32.3065 13.6625 32.6895 14.0407 33.1589 14.0377C33.6284 14.0348 34.0065 13.6518 34.0035 13.1824L33.9553 5.53253ZM5.60482 34.5972L33.7101 6.13513L32.5005 4.94065L4.39518 33.4028L5.60482 34.5972Z"}})])}),[],!1,null,"22629170",null);e.default=component.exports},456:function(t,e,n){"use strict";n(7),n(8),n(5),n(10),n(6),n(11);var o=n(2),c=(n(419),n(34));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},457:function(t,e,n){"use strict";n(433)},458:function(t,e,n){var o=n(15)(!1);o.push([t.i,".section__content.first .section__right[data-v-2bc301ae]{background-color:#705e55}@media(max-width:960px){.section__content.first .section__left[data-v-2bc301ae],.section__content.first .section__right[data-v-2bc301ae]{background-color:#705e55}}.section__content.second .section__right[data-v-2bc301ae]{background-color:#529bc3}@media(max-width:960px){.section__content.second .section__left[data-v-2bc301ae],.section__content.second .section__right[data-v-2bc301ae]{background-color:#529bc3}}.section__content.third .section__right[data-v-2bc301ae]{background-color:#f7f3ee}@media(max-width:960px){.section__content.third .section__left[data-v-2bc301ae],.section__content.third .section__right[data-v-2bc301ae]{background-color:#f7f3ee}}.section__content.fourth .section__right[data-v-2bc301ae]{background-color:#d95041}@media(max-width:960px){.section__content.fourth .section__left[data-v-2bc301ae],.section__content.fourth .section__right[data-v-2bc301ae]{background-color:#d95041}}.section__content.fifth .section__right[data-v-2bc301ae]{background-color:#fff}@media(max-width:960px){.section__content.fifth .section__left[data-v-2bc301ae],.section__content.fifth .section__right[data-v-2bc301ae]{background-color:#fff}}@media(min-width:960px){.section--projects .section__right[data-v-2bc301ae]{margin-left:12px;flex:0 0 calc(65.66667% - 12px);max-width:calc(65.66667% - 12px)}}.section__separator[data-v-2bc301ae]{margin-top:18px;margin-bottom:40px}@media(min-width:960px){.section__separator[data-v-2bc301ae]{margin-top:30px;margin-bottom:50px}}@media(max-width:960px){.section__content[data-v-2bc301ae]{flex-direction:column-reverse}.section__content.img-padding .section__image[data-v-2bc301ae]{padding:40px 0}.section__content:not(.text-black) .section__btn[data-v-2bc301ae],.section__content:not(.text-black) .section__text[data-v-2bc301ae],.section__content:not(.text-black) .section__title[data-v-2bc301ae],.section__content:not(.text-black) .section__title--second[data-v-2bc301ae]{color:#fff}.section__content:not(.text-black) .section__btn[data-v-2bc301ae]{border-color:#fff}.section__content:not(.text-black) .section__btn svg[data-v-2bc301ae]{fill:#fff}}.section__left[data-v-2bc301ae]{padding-bottom:40px}@media(min-width:960px){.section__left[data-v-2bc301ae]{padding:120px 30px 120px 0}}@media(min-width:960px){.section__right[data-v-2bc301ae]{margin-left:12px;flex:0 0 calc(65.66667% - 12px);max-width:calc(65.66667% - 12px)}}.section__title[data-v-2bc301ae]{font-family:Inter;line-height:130%;letter-spacing:.07em;color:#707070;font-size:18px;font-weight:400}@media(min-width:960px){.section__title[data-v-2bc301ae]{font-weight:600;font-size:24px}}.section__title--second[data-v-2bc301ae]{font-weight:600}.section__text[data-v-2bc301ae],.section__title--second[data-v-2bc301ae]{font-family:Inter;font-size:14px;line-height:130%;letter-spacing:.07em;color:#707070}@media(min-width:960px){.section__text[data-v-2bc301ae],.section__title--second[data-v-2bc301ae]{font-size:16px;font-weight:400}}.section__image[data-v-2bc301ae]{max-width:100%}@media(min-width:960px){.section__image[data-v-2bc301ae]{padding:0 90px}}.section__btn[data-v-2bc301ae]{font-size:13px;line-height:120%;color:#000;border:1px solid #aeaeae;padding:14px 25px;text-decoration:none;display:inline-flex;align-items:center;max-width:186px;transition:.3s;background:transparent;text-transform:uppercase;margin-bottom:20px}.section__btn[data-v-2bc301ae]:hover{color:#fff;background:#000}.section__btn:hover svg[data-v-2bc301ae]{fill:#fff}.section__btn svg[data-v-2bc301ae]{transition:.3s;fill:#707070}",""]),t.exports=o},492:function(t,e,n){"use strict";n.r(e);var o={components:{ProjectsSvg:n(441).default},data:function(){return{isActive:!1,projects:[{title:"AsiaThaiSpa",text:"Первый в Казахстане SPA-бутик тайского и балийского массажа.",link:"https://asiathaispa.kz",img:"/AsiaThaiSpa.webp",class:"first",task:{title:"Задача",text:"Создать сайт под ключ и вывести его в топ!"},solution:{title:"Решение",text:["Разработали сайт с уникальным дизайном.","Настроили контекстную рекламу.","Провели ряд мероприятий по СЕО оптимизации."]},result:{title:"Результат",text:"Сайт находится в топ 3. Каждый месяц более 3000 новых пользователей."}},{title:"Metalset",text:"Является стратегическим партнером ведущих металлургических заводов Казахстана и России.",link:"https://www.metalset.kz",img:"/Metalset.webp",class:"second",task:{title:"Задача",text:"Разработать интернет магазин под ключ с большим каталогом товаров."},solution:{title:"Решение",text:["Разработали интернет магазин с понятным дизайном.","Добавили около 300 000 товаров."]},result:{title:"Результат",text:"Понятный и простой в использовании для клиентов интернет магазин. И довольный заказчик."}},{title:"Greenfax",text:"Творческая мастерская. Здесь вы можете заказать деревянные изделия и собирать их всей семьей.",link:"https://greenfax.kz",img:"/Greenfax.webp",class:"third text-black img-padding",task:{title:"Задача",text:"Создать интернет магазин с оплатой и доставкой"},solution:{title:"Решение",text:["Разработали логотип.","Разработали интернет магазин под ключ.","Настроили СЕО оптимизацию.","Настроили онлайн оплату.","Подключили доставку разных курьерских служб."]},result:{title:"Результат",text:"Интернет магазин с красивым дизайном с онлайн оплатой и доставкой."}},{title:"Cауда-24",text:"Интернет-магазин с максимально низкими ценами. Девиз компании: сделать покупку товаров в интернет-магазине приятным и выгодным процессом для вас.",link:"https://www.sauda24.kz/",img:"/Cауда-24.webp",class:"fourth",task:{title:"Задача",text:"Разработать интернет магазин с большим каталогом товаров."},solution:{title:"Решение",text:["Разработали интернет магазин.","Добавили более 100 000 товаров. ","Полностью оптимизировали по СЕО.","Подключили интеграции с One Box и Каспи магазином."]},result:{title:"Результат",text:"Интернет магазин с большим каталогом и высокой посещаемостью."}},{title:"Sfera-Plast",text:"ТОО «Сфера пласт» – это качественное производство и продажа гофрированных труб по всему Казахстану.",link:"https://sfera-plast.kz/",img:"/Sfera-Plast.webp",class:"fifth text-black img-padding",task:{title:"Задача",text:"Создать сайт под ключ и вывести его в топ!"},solution:{title:"Решение",text:["Разработали сайт логичный и доступный.","Настроили контекстную рекламу."]},result:{title:"Результат",text:"Сайт имеет посещаемость порядка 1000 новых пользователей. Несмотря на узкую специализацию."}}]}}},c=(n(457),n(24)),r=n(49),l=n.n(r),d=n(525),_=n(407),v=n(456),f=n(414),h=n(526),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--projects",attrs:{id:"projects"}},[n("v-container",[n("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"scroll-y-reverse-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("h2",{staticClass:"sub-title"},[t._v("Проекты студии")])]),t._v(" "),t.width<=980?[n("v-divider",{staticClass:"section__divider"})]:t._e(),t._v(" "),t._l(t.projects,(function(e,o){return n("v-row",{key:o,staticClass:"section__content",class:[e.class,{"mt-md-16 mt-9":0===o}]},[n("v-col",{staticClass:"d-flex flex-column justify-center section__left",attrs:{md:"4"}},[n("h4",{staticClass:"section__title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"section__separator"},[n("p",{staticClass:"section__text"},[t._v(t._s(e.text))]),t._v(" "),n("h5",{staticClass:"section__title--second"},[t._v(t._s(e.task.title))]),t._v(" "),n("p",{staticClass:"section__text"},[t._v(t._s(e.task.text))]),t._v(" "),n("h5",{staticClass:"section__title--second"},[t._v(t._s(e.solution.title))]),t._v(" "),n("ul",{staticClass:"section__text mb-4"},t._l(e.solution.text,(function(text,e){return n("li",{key:e},[t._v("\n              "+t._s(text)+"\n            ")])})),0),t._v(" "),n("h5",{staticClass:"section__title--second"},[t._v(t._s(e.result.title))]),t._v(" "),n("p",{staticClass:"section__text"},[t._v(t._s(e.result.text))])]),t._v(" "),n("a",{staticClass:"section__btn",attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[t._v("Посмотреть"),n("br"),t._v("\n          проект "),n("ProjectsSvg")],1)]),t._v(" "),n("v-col",{staticClass:"section__right d-flex align-center",attrs:{md:"8"}},[n("img",{staticClass:"section__image",attrs:{src:"/img/projects"+e.img}})])],1)}))],2)],1)}),[],!1,null,"2bc301ae",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:_.a,VDivider:v.a,VLazy:f.a,VRow:h.a})}}]);