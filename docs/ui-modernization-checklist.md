# UI Modernization Safety Checklist

Bu çalışma yalnızca görsel katmanı modernize eder. `main` ve canlı AppDeploy dağıtımı, test ve onay tamamlanmadan değiştirilmez.

## Değiştirilmeyecek alanlar

- Backend endpoint adresleri ve payload yapıları
- Giriş, çıkış ve şube yetkilendirme akışı
- Kampanya oluşturma ve log kayıtları
- Chrome eklentisi `window.postMessage` mesaj tipleri
- 5–9 saniye gönderim aralığı
- CSV/TXT içe aktarma ve CSV dışa aktarma mantığı
- Şablonların localStorage yapısı
- Pause, Resume, Cancel ve Retry işlevleri

## Görsel kontrol

- [ ] Giriş ekranı masaüstü ve mobil görünüm
- [ ] Admin ve şube başlıkları
- [ ] Chrome eklentisi bağlantı durumu
- [ ] Mesaj Gönder / Analiz / Şubeler navigasyonu
- [ ] Alıcı listesi ve geçersiz numara göstergeleri
- [ ] Mesaj alanı ve şablon kontrolleri
- [ ] Görsel yükleme ve önizleme
- [ ] Onay kutusu ve gönder butonu durumları
- [ ] Kampanya ilerleme alanı
- [ ] Analiz filtreleri ve tablo taşması
- [ ] Şube oluşturma ve listeleme ekranı
- [ ] Detay penceresi

## Fonksiyonel regresyon kontrolü

- [ ] Başarılı giriş ve hatalı giriş mesajı
- [ ] Şube seçimi
- [ ] CSV/TXT dosyasından numara alma
- [ ] Numara normalizasyonu ve 50 kişi sınırı
- [ ] Mesaj şablonu kaydetme ve geri yükleme
- [ ] Görsel ekleme ve kaldırma
- [ ] Kampanya başlatma
- [ ] Duraklatma, devam ettirme ve iptal
- [ ] Başarısız kayıtları yeniden deneme
- [ ] Rapor filtreleme
- [ ] CSV rapor indirme
- [ ] Realtime log yenilenmesi

## Birleştirme koşulu

PR ancak yukarıdaki kontroller tamamlandıktan ve canlı sistemden bağımsız bir önizleme ortamında onaylandıktan sonra `main` branch'e alınır.
