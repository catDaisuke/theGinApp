// importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.4/firebase-messaging.js');

// firebase.initializeApp({
//     'messagingSenderId': '734668707013'
// });

// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: 'static/img/icons/android-chrome-192x192.png'
//     };
//     return self.registration.showNotification(notificationTitle, notificationOptions);
// });

// self.addEventListener('activate', event => {
//     console.log('V1 now ready to handle fetches!');
// });

self.addEventListener("fetch", function(event) {
    console.log("fetch method is gone");
 });

self.addEventListener("push", function(event) {
    console.log(event)
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription.endpoint
          }
          throw new Error('User not subscribed')
      })
      .then(function(res) {
        console.log('test')
        return self.registration.showNotification('theGinApp', {
          icon: 'static/img/icons/android-chrome-192x192.png',
          body: 'メンバーの勤務先情報が更新されました！'
        })
      })
    )
})

self.addEventListener("notificationclick", function(event) {
  event.notification.close()
  clients.openWindow("/theGinApp/#/member")
}, false)

// self.addEventListener('notificationclick', function (event) {
//     event.notification.close();
// }, false);