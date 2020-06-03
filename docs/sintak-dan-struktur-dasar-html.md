---
id: sintak-dan-struktur-dasar-html
title: Sintak dan Struktur dasar HTML
sidebar_label: 2. Sintak dan Struktur dasar HTML
---

Dimateri sebelumnya, dijelaskan bahwa HTML ini bahasa markup yang didalamnya ada ***HTML tag***. HTML tag (seterusnya akan di sebut *tag*) adalah nama elemen yang dibungkus dengan *bracet* (tanda kurung sikut) , contohnya seperti ini:

    <p>Halo dunia!, aku lagi belajar HTML</p>
Disini kita bisa jelaskan
- `<p>` sebuah tag dan sebagai pembuka
- `Halo dunia!, aku lagi belajar HTML` adalah nilai
- `</p>` sebuah tag dan sebagai penutup

Jadi kita bisa simpulkan sintak dasar dari HTML ini 
```html
<namatag>
   Nilai dalam tag
</namatag>
```

Adapun aturan menulis Tag HTML:
- Tag harus memiliki pembuka dan penutup
- Nilai harus ada didalam atau di antara pembuka dan penutup
- nama elemen dalam tag bisa di tulis dengan huruf besar dan kecil (`<DIV>` = `<div>`)
- Hasil dari tag HTML bisa terbaca dalam file berektensi **.html** (contoh: homepage.html)

Adapun referensi yang membantukamu menambah wawasan tentang Tag HTML ini bisa kunjungi URL [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)

### Struktur dasar HTML
Secara default, struktur dasar HTML yang ada di internet sebagai berikut


```html
<!DOCTYPE HTML>
<html>
	<head>
		<title>Judul Halaman Web</title>
	</head>
	<body>
	   Isi konten halaman web
	</body>
</html>
```

Penjelasan: 
- `<!DOCTYPE HTML>` sebagai penanda kalau file ini berbentuk HTML5
- `<html />` tag pembukaan untuk file html. tag ini harus ada paling atas sebelum tag-tag html lainnya
- `<head>` adalah bagian kepala dari halaman HTML. Bagian ini memuat tag judul `<title>` halaman, meta, link, dan juga script. Bagian head hanya terbaca oleh browser, tapi tidak ditampilkan sebagai konten di user.
- `<body>` isi atau konten dari halaman web
