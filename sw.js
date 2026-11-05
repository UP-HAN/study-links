// 앱 설치(공유 메뉴 등록)를 위한 최소 서비스 워커. 항상 최신 내용을 네트워크에서 가져온다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
