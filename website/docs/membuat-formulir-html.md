---
id: membuat-formulir-html
title: Membuat Formulir HTML
sidebar_label: 8. Membuat Formulir HTML
---

Membuat halaman website, tak luput dengan yang namanya formulir (inggrisnya *form*). Form pada website biasanya kita lihat sebagai halaman login seperti kita login Facebook dan Google, atau halaman registrasi. 

Nah berikut ini ada sintak dasar untuk membuat formulir di HTML

```html
<form method="post" action="action_url">
  <!-- form element like input|button|textarea -->
  <label>Label Name</label>
	<input type="text" name="form_name" placeholder="Placeholder"  />
	<textarea placeholder="write here ..."></textarea>
	<button type="submit">Submit Button</button>
</form>
```

Diawali dengan tag `<form>` yang memiliki method `post` dan action hit ke `action_url`. Form seperti ini biasanya khusus form yang berinteraksi dengan server. Karena ketika kita submit form akan menjalankan `action`-nya sesuai `action_url`. 

Adapun *text field* seperti `<input>` dan `<textarea>`. Field ini menampung konten tulisan yang di ketik oleh kita. Dan `<button >` sebagai submisi ketika kita ingin menyelesaikan aksi form. 

```html
...
<input type="text" placeholder="Input untuk text"/>
<input type="number" placeholder="Input untuk nomor"/>
<input type="password" placeholder="input untuk password"/>
<input type="radio" placeholder="input untuk tipe radio"/>
<input type="checkbox" placeholder="input untuk cekbox"/>

<!-- button -->
<input type="button" title="Button Title" placholder="input untuk button" />
<!--  atau -->
<button type="submit|button">Button Title</button>

<!-- input select -->
<select>
	<option value="1">Manusia</option>
	<option value="2">Hewan</option>
	<option value="3">Tumbuhan</option>
</select>
...
```

Formulir elemen `<input>` memiliki banyak atribute seperti `type` untuk menentukan tipe input apa yang ingin di tampikan di depan. dan `placeholder` untuk text bayang ketika field input kosong/ tidak diisi. Referensi tentang input kamu bisa lihat semua disini [https://www.w3schools.com/tags/tag_input.asp](https://www.w3schools.com/tags/tag_input.asp)
