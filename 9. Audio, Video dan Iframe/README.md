## Menyisipkan File Audio dan Video
Pada generasi HTML5, selain hanya tulisan dan gambar kita juga bisa menyisipkan file audio dan video. ini disebut dengan istilah HTML Media.

dibawah ini beberapa contoh sintak dasar untuk menyisipkan audio dan video:
#### Audio
```html
<audio controls>  
	<source src="example.mp3"  type="audio/mpeg">   
</audio>
```
Keterangan:
- Menyisipkan audio kita menggunakan tag `<audio>` dan `<source>`.
- Atribut `controls` pada tag `<audio>` berfungsi memunculkan UI kontrol seperti *play*, *pause* dan *volume*.
- Atribute `src` untuk sumber / file audio-nya dan `type` untuk tipe media yang kita sisipkan
- Lanjutannya bisa dilihat [disini](https://www.w3schools.com/html/html5_audio.asp) 

#### Video 
```html
<video width="320"  height="240"  controls>  
	<source src="movie.mp4"  type="video/mp4">  
</video>
```
Keterangan:
- Menyisipkan video kita menggunakan tag `<video>` dan `<video>`.
- Atribut `controls` pada tag `<video>` berfungsi memunculkan UI kontrol seperti *play*, *pause* dan *volume*.
- Atribute `src` untuk sumber / file video-nya dan `type` untuk tipe media yang kita sisipkan
- Lanjutannya bisa dilihat [disini](https://www.w3schools.com/html/html5_video.asp) 

### Menyisipkan Video Youtube dengan iframe
Ada beberapa video yang kita tidak bisa menampilkannya dengan mengunduhnya, seperti halnya pada Youtube. agar video dari youtube bisa di share ke halaman web kita, harus menggunakan embed tag `<iframe>`.

`<iframe>` adalah tag yang embed untuk memunculkan halaman web dalam halaman web. Dengan `iframe` juga salah satu cara mengembed video youtube.

contoh sintaknya seperti berikut:
```html
<iframe width="420"  height="315"  
	src="https://www.youtube.com/embed/tgbNymZ7vqY">  
</iframe>

<iframe width="420"  height="315"  
	src="url-website">  
</iframe>
```
kamu dapat mempelajari `iframe` lebih lanjut [disini](https://www.w3schools.com/html/html_iframe.asp) 

