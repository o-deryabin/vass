import Vue from "vue";

// As a plugin
import VueMask from "v-mask";
Vue.use(VueMask);

// Or as a directive
import { VueMaskDirective } from "v-mask";
Vue.directive("mask", VueMaskDirective);

// Or only as a filter
import { VueMaskFilter } from "v-mask";
Vue.filter("VMask", VueMaskFilter);

{
  /* <script defer>
window.onload = function() {
  !(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "206856549957627");
  fbq("track", "PageView");
};
</script>
<noscript
><img
  height="1"
  width="1"
  style="display:none"
  src="https://www.facebook.com/tr?id=206856549957627&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- Yandex.Metrika counter -->
<script type="text/javascript" defer>
window.onload = function() {
  (function(m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function() {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(
    window,
    document,
    "script",
    "https://mc.yandex.ru/metrika/tag.js",
    "ym"
  );

  ym(57713533, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: "dataLayer"
  });
};
</script>
<noscript
><div>
  <img
    src="https://mc.yandex.ru/watch/57713533"
    style="position:absolute; left:-9999px;"
    alt=""
  /></div
></noscript>
<!-- /Yandex.Metrika counter --> */
}
