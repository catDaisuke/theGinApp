// self.addEventListener('activate', event => {
//     console.log('V1 now ready to handle fetches!');
// });

self.addEventListener("fetch", function(event) {
    console.log("fetch method is gone");
 });

self.addEventListener("push", function(event) {
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription.endpoint
          }
          throw new Error('User not subscribed')
      })
      .then(function(res) {
        console.log(test)
        return self.registration.showNotification('theGinApp', {
          icon: 'static/img/icons/android-chrome-192x192.png',
          body: 'test'
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