# Bağımsız Sürüm Geçiş Planı

Bu branch, çalışan AppDeploy sürümünü bozmadan bağımsız Node.js + PostgreSQL mimarisine geçiş için hazırlanmıştır.

## Hedef mimari

- React/Vite frontend
- Node.js HTTP API
- PostgreSQL veritabanı
- WebSocket tabanlı gerçek zamanlı güncelleme
- Docker tabanlı yerel ve sunucu kurulumu
- Nginx reverse proxy ve HTTPS
- GitHub Actions ile otomatik test ve dağıtım

## Geçiş aşamaları

1. AppDeploy `api` istemcisini bağımsız HTTP istemcisiyle değiştirme.
2. AppDeploy `db` kayıtlarını PostgreSQL tablolarına taşıma.
3. Oturum, kullanıcı, şube ve gönderim kayıtları için SQL şeması oluşturma.
4. Gerçek zamanlı güncelleme katmanını bağımsız WebSocket sunucusuna taşıma.
5. Chrome eklentisinin panel alan adı ayarını ortam değişkenine bağlama.
6. Mevcut davranış testlerini yeni backend üzerinde çalıştırma.
7. AppDeploy ve bağımsız sürümü paralel test etme.
8. Veri aktarımı ve özel domain geçişi.

## Temel tablolar

- `users`
- `sessions`
- `branches`
- `campaigns`
- `message_logs`
- `realtime_subscriptions`

## Güvenli geçiş ilkesi

`main` branch AppDeploy üzerinde çalışan sürümü temsil eder. Bağımsızlaştırma çalışmaları yalnızca `develop/standalone` branch üzerinde yapılır. Testler tamamlanmadan `main` branch ile birleştirilmez.

## Eksik kaynak

Chrome eklentisinin kaynak dosyaları AppDeploy uygulama snapshot'ında bulunmamaktadır. Eklenti kaynakları ayrıca bu repository altındaki `chrome-extension/` klasörüne eklenmelidir.
