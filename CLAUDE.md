# CLAUDE.md

File ini memberikan panduan kepada Claude Code (claude.ai/code) saat bekerja dengan kode di repositori ini.

---

## Perintah

| Tujuan | Perintah | Catatan |
|---|---|---|
| **Melayani pratinjau** | `npx serve` *(atau instal secara global dengan `npm i -g serve` kemudian `serve .`)* | Menyajikan direktori saat ini sebagai situs statis pada port lokal. Berfungsi untuk semua file HTML/CSS/JS di repositori ini. |
| **Live Server VS Code** | Gunakan ekstensi *Live Server* → klik kanan pada file `.html` → **Open with Live Server** | Tidak memerlukan skrip npm; ideal untuk melihat halaman pelajaran dengan cepat. |
| **Build / Deploy** | *TODO* – tambahkan langkah build yang sesuai bila bundler atau generator situs statis ditambahkan di masa mendatang. |
| **Lint / Tes** | *Tidak ada* – repositori saat ini hanya berisi file statis dan tidak memiliki kerangka pengujian. Tambahkan konfigurasi linting atau testing di sini bila tooling tersebut ditambahkan. |

---

## Arsitektur Tingkat Tinggi

- **Modul Pembelajaran** – setiap folder tingkat atas mengelompokkan sekumpulan pelajaran statis:
  - `belajar-html-dasar/` – Dasar‑dasar HTML (heading, tabel, media, form, dll.). Satu file HTML per konsep.
  - `belajar-html-form/` – Kontrol form HTML, masing‑masing ditunjukkan dalam file terpisah.
  - `belajar-css-dasar/` – Konsep inti CSS (selector, box‑model, background, media query).
  - `belajar-css-layout/` – Teknik layout CSS (Flexbox, Grid, Float, Positioning).
  - `belajar-javascript-dasar/` – Dasar‑dasar JavaScript (variabel, loop, fungsi, manipulasi DOM).
  - `javascript-deaafrizal/` – Latihan JavaScript mengikuti tutorial “Dea Afrizal”.
  - `Training/` – Proyek kecil seperti toko online sederhana (`training.html`) dan kalkulator (`calculator.html`). Menggunakan file `.css` dan `.js` terpisah.
  - `Testing/` – Contoh yang lebih lengkap: halaman landing IPDC Finance yang dikloning (`index.html`) beserta `style.css` dan `main.js`.
  - `coba-coba/` – Halaman percobaan atau eksperimental (komposit gambar, efek glow CSS, dll.).
  - `Revo/` – Portofolio React yang telah dikompilasi (asset bundel direferensikan via `/assets/...`). Ini satu‑satunya folder yang menyerupai artefak output build.

- **Gambaran Pola**
  - *Satu‑file‑per‑konsep*: pelajaran disajikan dalam file HTML yang mandiri dengan skrip inline atau aset minimal.
  - *CSS/JS eksternal untuk mini‑proyek*: ketika sebuah halaman berkembang menjadi lebih besar (mis. `Training`, `Testing`), file `.css` dan `.js` yang bersesuaian ditempatkan berdampingan.
  - *Aset bersama*: beberapa file CSS (mis. `hello.css`) dipakai ulang di beberapa demo, namun kebanyakan aset berada bersama HTML yang menggunakannya.
  - *Statik saja*: tidak ada manajer paket, bundler, atau kode sisi server; semuanya dijalankan langsung di browser.

---

## Dokumentasi & Aturan yang Hilang

- **Tidak ada `README.md`** – repositori tidak memiliki gambaran tingkat atas; pengembang harus merujuk pada `CLAUDE.md` ini untuk petunjuk.
- **Tidak ada aturan Cursor atau Copilot** – tidak ada file `.cursor/` atau `.github/copilot‑instructions.md`, sehingga tidak ada aturan khusus format, linting, atau CI yang diterapkan.
- **Implikasi** – gunakan konvensi folder dan perintah yang tercantum di atas sebagai alur kerja pengembangan.

---

## Catatan Pengembang & Tips

- **Membuka file** – klik dua kali file `.html` di VS Code atau browser mana pun; halaman akan langsung dirender.
- **Pratinjau live** – jalankan `npx serve` (atau gunakan Live Server) dan buka `http://localhost:3000/<folder>/<file>.html`.
- **Konvensi penamaan file** – gunakan huruf kecil, dipisahkan dengan tanda hubung, dan deskriptif tentang konsep (mis. `background-image.html`).
- **Penempatan aset** – simpan gambar, audio, atau video yang terkait di dalam folder yang sama dengan HTML yang menggunakannya untuk menghindari link yang rusak.
- **Ekstensi di masa depan** – ketika menambahkan pipeline build (mis. versi React dari pelajaran), perbarui bagian **Perintah** dengan skrip `npm` yang tepat dan dokumentasikan direktori output.
- **Kontrol versi** – perlakukan setiap file pelajaran sebagai unit independen; perubahan pada satu konsep tidak memengaruhi yang lain.

---

## Bagian Placeholder (akan diisi nanti)

```markdown
## Build / Deployment
*TODO: tambahkan skrip npm, konfigurasi bundler, atau langkah generator situs statis.*

## Linting / Testing
*TODO: definisikan konfigurasi ESLint/Stylelint atau tes Jest jika JavaScript diperkenalkan.*

## Pedoman Kontribusi
*TODO: jelaskan proses PR, aturan gaya kode, dan cara menambahkan file pelajaran baru.*
```

---

*Akhir CLAUDE.md*