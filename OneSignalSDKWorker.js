importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
// رقم المهام المفتوحة على أيقونة التطبيق
self.addEventListener("push", function (e) {
  try {
    var d = e.data && e.data.json();
    var a = d && d.custom && d.custom.a;
    var n = a && a.badge;
    if (n != null && self.navigator && self.navigator.setAppBadge) {
      n = Number(n) || 0;
      e.waitUntil(n > 0 ? self.navigator.setAppBadge(n) : self.navigator.clearAppBadge());
    }
  } catch (x) {}
});
