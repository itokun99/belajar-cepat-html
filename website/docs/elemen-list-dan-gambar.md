---
id: elemen-list-dan-gambar
title: Elemen List dan Gambar
sidebar_label: 6. Elemen List dan Gambar
---

## Menyisipkan gambar di halaman HTML
Selain tulisan, pada HTML juga kita bisa menampilkan gambar juga. Pada part sebelumnya sudah ada beberapa contoh kode untuk menampilkan gambar. Dasar strukturnya sebagai berikut:
```html
<img src="urlgambar.jpg" title="judul untuk gambar" alt="tulisan yang muncul ketika gambar tidak termuat" />
```
Pada tag `<img>` kita bisa menampilkan gambar dari url yang ada di internet, juga gambar yang ada pada folder lokal kita
```html
<!-- menampilkan gambar dari internet -->
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/500px-Koala_climbing_tree.jpg" />

<!-- menampikan gambar dari lokal folder kita -->
<img src="images/koala.jpg" />
```

## Menggunakan `ul`, `ol`, dan `li`
Konten pada website sering kita jumpai berbentu list atau daftar isi. Nah di HTML ini kita pakai elemen tag list. Pada part sebelumnya kita juga menemui contoh penggunaan list ini. Struktur dasarnya seperti dibawah ini

```html
<ul>
	<li>Menu 1</li>
	<li>Menu 2</li>
	<li>Menu 3</li>
</ul>
```
Aturan untuk menggunakan list ini 
- Harus di awali dengan `ul` atau `ol` 
- Didalamnya harus di teks atau konten list harus bungkus dengan `li`

Jika kita ingin menggunakan list dengan menampilkan urutan angka, maka gunakan `ol` (*Ordered List*) juga tidak maka gunakan `ul` (*Unordered List*)

```html
<ol>
	<li>Daftar 1</li>
	<li>Daftar 2</li>
	<li>Daftar 3</li>
	<li>Daftar 4</li>
</ol>

<ul>
	<li>Daftar 1</li>
	<li>Daftar 2</li>
	<li>Daftar 3</li>
	<li>Daftar 4</li>
</ul>
```
Pada list juga kita bisa menambahkan list lagi didalam list (*nested list*)
```html
<ol>
	<li>Menu 1</li>
	<li>Menu 2</li>
	<li>Menu 3
		<ol>
			<li>Submenu 1</li>
			<li>Submenu 2</li>
			<li>Submenu 3
				<ol>
					<li>Child Submenu 1</li>
					<li>Child Submenu 2</li>
					<li>Child Submenu 3</li>
				</ol>
			</li>
		</ol>
	</li>
</ol>
```
Dan kita juga bisa menuliskan konten layaknya pada paragraf atau menyisipkan gambar
```html
<ul>
	<li>
		<img src="images/kuda.jpg" title="kuda" alt="kuda" />
		<h1>Nama Hewan: Kuda</h1>
		<p>Deskripsi: Kuda adalah salah satu dari sepuluh spesies modern mamalia dari genus Equus. Hewan ini telah lama merupakan salah satu hewan peliharaan yang penting secara ekonomis dan historis, dan telah memegang peranan penting dalam pengangkutan orang dan barang selama ribuan tahun.</p>
	</li>
	<li>
		<img src="images/koala.jpg" title="kuda" alt="kuda" />
		<h1>Nama Hewan: Koala</h1>
		<p>Deskripsi: Koala (Phascolarctos cinereus) adalah salah satu binatang berkantung (marsupial) khas dari Australia dan merupakan wakil satu-satunya dari keluarga Phascolarctidae.</p>
	</li>
</ul>
```