# Wapp Mesaj

Wapp Mesaj, Chrome eklentisi ile WhatsApp Web üzerinden şube bazlı sıralı mesaj gönderimi ve merkezi raporlama sağlayan React + TypeScript uygulamasıdır.

## Mevcut yapı

- React 19 + Vite + TypeScript
- Tailwind CSS
- AppDeploy backend ve veritabanı
- WebSocket tabanlı canlı durum güncellemeleri
- Merkez ve şube hesapları
- Şube bazlı kayıt ayrımı
- CSV/TXT numara içe aktarma
- Mesaj şablonları
- Canlı kampanya ilerlemesi
- Analiz filtreleri ve CSV dışa aktarma

## Önemli not

Bu depo, çalışan AppDeploy kaynak anlık görüntüsünü içerir. Frontend kodu `@appdeploy/client`, backend kodu `@appdeploy/sdk` kullanır. Bu paketler AppDeploy tarafından çalışma zamanında sağlanır.

Tam bağımsız sunucuya geçiş için backend veri katmanı ve istemci API katmanı Node.js/PostgreSQL/WebSocket altyapısına uyarlanmalıdır.

## Güvenlik

- Gerçek ortam sırlarını veya erişim anahtarlarını depoya eklemeyin.
- `.env` dosyalarını commit etmeyin.
- Üretim hesabı parolalarını kaynak kodda tutmayın.

## Çalıştırma

```bash
npm install
npm run dev
```

AppDeploy dışındaki yerel çalıştırmada platform SDK paketleri için uygun adaptör veya mock gerekir.
