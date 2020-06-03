/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Jika ada pertanyaan silahkan kontak saya [disini.](https://www.facebook.com/profile.php?id=100019655381248)`,
      title: 'Bantuan',
    },
    {
      content: 'Kita ngobrol bareng para sohib kabayan di [Kabayan Coding](https://discord.gg/SNM343j)',
      title: 'Gabung Kabayan Coding',
    },
    {
      content: "Kalau ada masukan silahkan pull-request ke [repository](https://github.com/itokun99/belajar-cepat-html)",
      title: 'Feedback',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Tentang Modul</h1>
          </header>
          <p>Belajar Cepat HTML adalah modul belajar untuk cepat menguasai HTML. dengan modul ini kamu akan di pandu dengan cepat mulai dari pengenalan, teori, background dan langsung coding.</p>
          <p>Tujuan dari modul Belajar Cepat dibuat adalah untuk mengarahkan kamu yang ingin menjadi web desainer atau belajar membuat website langsung terjun ke teknik-nya (Ngoding).</p>
          <p>Berikut ini beberapa daftar jalur belajar yang ada pada modul ini:</p>
          <ol>
            <li>Pengenalan dan Apa itu HTML ✋</li>
            <li>Sintak dan struktur dasar HTML</li>
            <li>Membuat Tag dan Elemen HTML</li>
            <li>Mengenal id, class dan atribut HTML, dan cara menerapkannya</li>
            <li>Semantik HTML</li>
            <li>Menggunakan elemen list ul, ol, li dan menyisipkan gambar</li>
            <li>Menggunakan element link a untuk bepindah halaman</li>
            <li>Mengenal dan membuat formulir HTML</li>
            <li>Menyisipkan Audio, Video, dan Menggunakan iframe</li>
            <li>Membuat Struktur Layout HTML dan HTML Lanjutan</li>
          </ol>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
