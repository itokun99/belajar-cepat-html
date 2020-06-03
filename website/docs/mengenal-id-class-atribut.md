---
id: mengenal-id-class-atribut
title: Mengenal id, class, dan Atribut HTML Lainnya
sidebar_label: 4. Mengenal id, class, dan Atribut HTML Lainnya
---

Seiring bertambahnya konten dan tag yang kamu buat di halaman HTML, jika tidak diberi penanda akan sulit untuk mengelompokan bagian-bagiannya. nah ini dia peran dari `id` dan `class` di HTML

## Atribut ID
`id` adalah sebuah atribut html untuk memberikan nilai uniq pada elemen tag yang kita buat. Dalam 1 halaman HTML, `id` harus benar-benar unik dan tidak boleh ada tag degan id yang sama.
```html
<div id="section-feature">
	...
	<!-- html content -->
	...
</div>
```
Pada kasus tertentu seperti menerapkan tema atau [link anchor hash](https://stackoverflow.com/questions/2835140/how-do-i-link-to-part-of-a-page-hash) memberikan atribut `id` pada `div` sangat berguna. Ini akan dibahas lebih lanjut jika sempat

## Atribut CLASS
`class` adalah atribut html yang memberikan nilai sebagai nilai dari pengelompokan bagian pada elemen. Dalam 1 halaman HTML kita bisa menbuat banyak elemen dengan nama `class` yang sama.

```html
<div class="card">
  <h4 class="card-title">Card Title</h4>
  <p class="card-description">Card Description</P>
</div>
<div class="card">
  <h4 class="card-title">Card Title</h4>
  <p class="card-description">Card Description</P>
</div>
<div class="card">
  <h4 class="card-title">Card Title</h4>
  <p class="card-description">Card Description</P>
</div>
```
Penggunaan `class` akan sangat berguna untuk kedepannya, apalagi jika kita udah masuk tahap mendesain halaman (CSS) atau menggunakan UI interaktif (Javascript).

## Atribut DATA
`data-x` atribut yang biasa digunakan untuk memberikan data pada elemen tag tertentu untuk memanipulasi UI atau pengolahan data yang terjadi di Belakang (Backend).
```html
<div data-negara="indonesia" data-kode-negara="id">
	<h1>Indonesia</h1>
	<p>Sejarah: ....</p>
	<img src="images/flag/bendera-indonesia.png" />
</div>
<div data-negara="singapura" data-kode-negara="sg">
	<h1>Singapura</h1>
	<p>Sejarah: ....</p>
	<img src="images/flag/bendera-singapura.png" />
</div>
```
Tahap penggunaan atribut data pada html ini bisa kamu pahami jika sudah menyentuh materi ke pemogramman dasar web dan sangat berguna dalam beberapa kasus.