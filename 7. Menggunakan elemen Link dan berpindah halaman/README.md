## Menggunakan Elemen Link
Untuk berpindah halaman atau menuju halaman yang dituju, kita bisa menggunakan tag `<a>` .  Sintaknya seperti berikut

```html
<a href="url-tujuan-a">Halaman A</a> 
<a href="url-tujuan-b">Halaman B</a> 
```

### Pindah halaman ke halaman lain
Untuk bepindah halaman ke halaman yang kita buat di satu folder. Sebagai contoh dalam 1 folder ada 4 file html dengan struktur:
```
mywebsite/
	assets/
	index.html
	about.html
	contact.html
	posts/
		tutorial-programming.html
```

Maka penggunaan tag `a` seperti berikut ini
```html
<a href="/">Homepage</a>
<a href="about.html">About</a>
<a href="contact.html">Contact</a>
<a href="posts/tutorial-programming.html">Tutorial Programming</a>
```

### Pindah halaman ke url yang di tuju
Misalnya kita ingin ketika klik link diarahkan ke situs Google maka kode yang kita tulis seperti berikut ini
```html
<a href="https://www.google.com">Pencarian Google</a>
```

Elemen tag `a` memiliki beberapa atribut bisa dilihat di sini 
[https://www.w3schools.com/tags/tag_a.asp](https://www.w3schools.com/tags/tag_a.asp)
