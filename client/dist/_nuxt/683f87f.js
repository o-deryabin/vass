(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{408:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("fb98a0f8",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n.r(e);var r={props:["message","snackbar","timeout"]},o=n(24),c=n(49),l=n.n(c),d=n(267),f=n(501),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v("\n      Закрыть\n    ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n  "+t._s(t.message)+"\n\n  ")])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VSnackbar:f.a})},411:function(t,e,n){"use strict";n.r(e);n(7),n(8),n(5),n(10),n(6),n(11);var r=n(2),o=n(22);n(78);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{Snackbar:n(409).default},props:["dialog"],data:function(){return{valid:!1,nameRules:[function(t){return!!t||"Имя обязательно"}],telRules:[function(t){return!!t||"Телефон обязателен"}],snackbar:!1,message:"",timeout:2e3,form:{firstname:"",tel:""}}},methods:{send:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),t.form.firstname&&t.form.tel){e.next=4;break}return t.message="не все поля заполнены",e.abrupt("return",t.snackbar=!0);case 4:return e.next=6,t.$axios.$post("/api/email/send",l({},t.form));case 6:n=e.sent,t.message=n.message,t.snackbar=!0;case 9:case"end":return e.stop()}}),e)})))()}}},f=(n(412),n(24)),m=n(49),v=n.n(m),_=n(267),x=n(425),k=n(407),h=n(522),w=n(524),y=n(523),O=n(526),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"dialog__content"},[n("v-card-text",[n("h2",{staticClass:"sub-title"},[t._v("Оставить заявку")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"d-md-flex align-md-center mt-4",attrs:{md:"6",cols:"12"}},[n("h6",{staticClass:"section__title section__title--18-black"},[t._v("\n          Оставьте заявку и получите бесплатную консультауцию\n        ")])]),t._v(" "),n("v-col",{attrs:{md:"6",cols:"12"}},[n("a",{staticClass:"section__link section__link--tel",attrs:{href:"tel:+7(747)266-66-82"}},[t._v("+7 (747) 266-66-82")]),t._v(" "),n("v-row",{staticClass:"my-md-8 my-4"},[n("v-col",{attrs:{md:"6",cols:"12"}},[n("a",{staticClass:"section__link",attrs:{href:"mailto:hello@vass.kz"}},[t._v("hello@vass.kz")])]),t._v(" "),n("v-col",{attrs:{md:"6",cols:"12"}},[n("a",{staticClass:"section__link",attrs:{href:"https://www.instagram.com/vasskz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("instagram")])])],1),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Имя",required:""},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}}),t._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+7(###)###-##-##",expression:"'+7(###)###-##-##'"}],attrs:{label:"Телефон",rules:t.telRules,required:""},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}}),t._v(" "),n("button",{staticClass:"section__btn",attrs:{type:"submit"}},[t._v("Отправить")])],1)],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog.value=!1}}},[t._v("Закрыть")])],1),t._v(" "),n("Snackbar",{attrs:{message:t.message,timeout:t.timeout,snackbar:t.snackbar}})],1)}),[],!1,null,"05a675f8",null);e.default=component.exports;v()(component,{VBtn:_.a,VCard:x.a,VCardActions:k.a,VCardText:k.b,VCol:h.a,VForm:w.a,VRow:y.a,VTextField:O.a})},412:function(t,e,n){"use strict";n(408)},413:function(t,e,n){var r=n(15)(!1);r.push([t.i,".dialog__content[data-v-05a675f8]{padding:20px 0}@media(min-width:960px){.dialog__content[data-v-05a675f8]{padding:60px}}.section__btn[data-v-05a675f8]{margin-top:15px;display:block;width:100%;color:#fff}@media(min-width:960px){.section__btn[data-v-05a675f8]{margin-top:30px}}.section__link[data-v-05a675f8]{font-family:Inter;font-style:normal;font-weight:400;font-size:16px;line-height:130%;letter-spacing:.07em;color:#000;text-decoration:none}@media(min-width:960px){.section__link--tel[data-v-05a675f8]{font-size:29px}}",""]),t.exports=r},432:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1846a35a",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n(432)},459:function(t,e,n){var r=n(15)(!1);r.push([t.i,".section--request[data-v-63243ed5]{background:#fff;padding:40px 0}@media(min-width:960px){.section--request[data-v-63243ed5]{padding:120px 0;margin:80px 0}}.section__btn[data-v-63243ed5]{margin:15px 0 0;color:#fff}@media(min-width:960px){.section__btn[data-v-63243ed5]{padding:30px 100px;margin:55px 0 0;display:block}}@media(min-width:960px){.section__right[data-v-63243ed5]{padding-top:40px;padding-left:120px}}",""]),t.exports=r},491:function(t,e,n){"use strict";n.r(e);var r={components:{Modal:n(411).default}},o=(n(458),n(24)),c=n(49),l=n.n(c),d=n(522),f=n(406),m=n(527),v=n(523),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--request"},[n("v-container",[n("v-row",[n("v-col",{attrs:{md:"6",cols:"12"}},[n("h2",{staticClass:"sub-title"},[t._v("Оставить заявку")])]),t._v(" "),n("v-col",{staticClass:"section__right",attrs:{md:"6",cols:"12"}},[n("p",{staticClass:"section__description section__description--18"},[t._v("\n          Оставьте заявку и получите бесплатную консультауцию\n        ")]),t._v(" "),n("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("button",t._g(t._b({staticClass:"section__btn"},"button",o,!1),r),[t._v("\n              Оставить заявку\n            ")])]}},{key:"default",fn:function(dialog){return[n("Modal",{attrs:{dialog:dialog}})]}}])})],1)],1)],1)],1)}),[],!1,null,"63243ed5",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VDialog:m.a,VRow:v.a})}}]);