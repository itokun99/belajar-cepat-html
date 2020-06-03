## Membuat Layout HTML
Pada bagian terakhir ini kita akan membuat tata letak (*layout*) HTML yang nantinya akan mempermudah kita mendesain halaman web kita ketika kita sudah mempelajari CSS. 

Berikut ini kita akan membuat layout sederhana yang umum di gunakan untuk web

```html
<!DOCTYPE  html>
<html  lang="en">
<head>
	<meta  charset="UTF-8">
	<meta  name="viewport"  content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>

<body>
	<!-- HEADER -->
	<header  id="SiteHeader"  class="site-header">
		<h1>Site Title</h1>
	</header>
	
	<!-- NAVBAR -->
	<nav>
		<ul>
			<li>Menu 1</li>
			<li>Menu 2</li>
			<li>Menu 3</li>
			<li>Menu 4</li>
		</ul>
  </nav>
  
	<!-- SIDEBAR -->
	<aside>
		<ul>
			<li>Sidemenu 1</li>
			<li>Sidemenu 2</li>
			<li>Sidemenu 3</li>
		</ul>
	</aside>

	<!-- MAIN -->
	<main  id="SiteMain">
		<!-- disini bagian konten -->
		<article>
			<h1>Judul artikel</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet consectetur metus, convallis tempor
			magna. </p>
		</article>
	</main>
	
	<!-- FOOTER -->
	<footer>
		<h3>Footer site</h3>
	</footer>
</body>
</html>
```