"use client";

import { FormEvent, useEffect, useState } from "react";

const campuses = [
  {
    name: "Kelapa Gading",
    city: "Jakarta Utara",
    address:
      "Informasi alamat ibadah GSJA CiTi akan segera diperbarui.",
    services: [
      ["Sunday Service", "09:00 · 11:00 · 14:00 WIB"],
      ["Ibadah Anak", "09:00 · 11:00 · 14:00 · 17:00 WIB"],
      ["KITA — Teenagers", "14:00 WIB"],
      ["KAMU — Anak Muda", "17:00 WIB"],
    ],
    map: "https://maps.google.com/?q=Mall+Artha+Gading+Jakarta",
  },
  {
    name: "Bekasi",
    city: "Jawa Barat",
    address:
      "Informasi alamat ibadah GSJA CiTi akan segera diperbarui.",
    services: [
      ["Sunday Service", "07:30 · 09:30 · 15:00 · 17:00 WIB"],
      ["Ibadah Anak", "07:30 · 09:30 · 15:00 · 17:00 WIB"],
      ["KITA — Teenagers", "09:30 WIB"],
    ],
    map: "https://maps.google.com/?q=Mega+Bekasi+Hypermall",
  },
  {
    name: "Kuningan",
    city: "Jakarta Selatan",
    address:
      "Motivator Hall, AXA Tower — Kuningan City lantai 36, Jl. Prof. Dr. Satrio Kav. 18, Jakarta 12940",
    services: [
      ["Sunday Service", "17:00 · 19:00 WIB"],
      ["Ibadah Anak", "17:00 · 19:00 WIB"],
    ],
    map: "https://maps.google.com/?q=AXA+Tower+Kuningan+City",
  },
  {
    name: "Cibubur",
    city: "Bogor",
    address: "Living World Kota Wisata, Level 2, Cibubur.",
    services: [
      ["Sunday Service", "08:00 · 11:00 · 13:30 · 17:00 WIB"],
      ["Ibadah Anak", "08:00 · 11:00 · 13:30 · 17:00 WIB"],
      ["KITA — Teenagers", "11:00 WIB"],
    ],
    map: "https://maps.google.com/?q=Living+World+Kota+Wisata",
  },
];

const ministries = [
  {
    eyebrow: "AKU",
    title: "GSJA CiTi Kids",
    copy: "Ruang yang aman, hangat, dan menyenangkan bagi anak-anak untuk mengenal kasih Tuhan sejak dini.",
    image:
      "https://images.unsplash.com/photo-1729089049887-389a46c99546?auto=format&fit=crop&w=1200&q=82",
    alt: "Komunitas yang berdoa bersama",
  },
  {
    eyebrow: "KITA",
    title: "GSJA CiTi Teens",
    copy: "Generasi remaja yang bertumbuh dalam identitas, pertemanan sehat, dan keberanian untuk hidup dalam kebenaran.",
    image:
      "https://images.unsplash.com/photo-1729089049653-24312fdca908?auto=format&fit=crop&w=1200&q=82",
    alt: "Kelompok sahabat bertumbuh dalam iman",
  },
  {
    eyebrow: "KAMU",
    title: "GSJA CiTi Youth",
    copy: "Rumah bagi anak muda untuk terkoneksi, menemukan panggilan, dan membawa dampak di mana pun mereka berada.",
    image:
      "https://images.unsplash.com/photo-1745232391994-9dc223fe0a8e?auto=format&fit=crop&w=1200&q=82",
    alt: "Ibadah anak muda dengan pujian",
  },
];

const highlights = [
  {
    tag: "Pesan Minggu Ini",
    title: "Hidup dalam kasih yang memulihkan",
    copy: "Iman bukan hanya sesuatu yang kita ucapkan—iman nyata melalui kasih yang hadir dan memulihkan.",
    accent: "highlight-gold",
  },
  {
    tag: "Teman Seperjalanan",
    title: "Kita bertumbuh lebih baik bersama",
    copy: "Temukan kelompok kecil tempat Anda dapat berbagi cerita, belajar firman, dan saling menguatkan.",
    accent: "highlight-blue",
  },
  {
    tag: "Prayer Care",
    title: "Anda tidak berjalan sendirian",
    copy: "Tim kami siap berdiri bersama Anda dalam doa—di setiap musim kehidupan.",
    accent: "highlight-coral",
  },
];

const faqs = [
  {
    question: "Apakah saya harus mendaftar sebelum datang?",
    answer:
      "Tidak. Anda dapat langsung datang ke lokasi dan jam ibadah yang paling nyaman. Tim penyambut kami akan membantu ketika Anda tiba.",
  },
  {
    question: "Apakah tersedia ibadah untuk anak?",
    answer:
      "Ya. Ibadah anak tersedia di lokasi tertentu. Pilih lokasi di bagian jadwal untuk melihat detailnya.",
  },
  {
    question: "Bagaimana jika saya ingin bergabung dalam komunitas?",
    answer:
      "Klik tombol Gabung Komunitas dan hubungi tim kami. Kami akan membantu mencarikan kelompok yang sesuai dengan lokasi dan fase hidup Anda.",
  },
];

function LogoMark() {
  return (
    <img className="logo-mark" src="/img/logo/logo.jpg" alt="Lambang GSJA" />
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [campusIndex, setCampusIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const activeCampus = campuses[campusIndex];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      setHeaderVisible(currentScrollY < 24 || currentScrollY < previousScrollY);
      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handlePrayerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className={`site-header ${headerVisible || menuOpen ? "" : "is-hidden"}`}>
        <a className="brand" href="#home" aria-label="GSJA CiTi — Beranda">
          <LogoMark />
          <span>
            <b>GSJA</b>
            <small>CiTi</small>
          </span>
        </a>

        <a className="header-cta" href="#prayer">
          Contact
        </a>

        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Navigasi seluler">
          <a href="#about" onClick={closeMenu}>Tentang <span>01</span></a>
          <a href="#campuses" onClick={closeMenu}>Campus <span>02</span></a>
          <a href="#ministries" onClick={closeMenu}>Ministry <span>03</span></a>
          <a href="#highlights" onClick={closeMenu}>Highlights <span>04</span></a>
          <a href="#prayer" onClick={closeMenu}>Permohonan Doa <span>05</span></a>
        </nav>
        <p>GSJA CiTi · Gereja bagi keluarga dan komunitas</p>
      </div>

      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1776091104217-02e3732a4a81?auto=format&fit=crop&w=2200&q=88"
          alt="Jemaat mengangkat tangan dalam ibadah"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-kicker"><span /> Selamat datang di rumah</div>
          <h1>
            Sebuah tempat<br />
            untuk <em>bertumbuh.</em>
          </h1>
          <p>
            Mengenal Kristus, menemukan keluarga, dan membawa kasih-Nya ke setiap ruang kehidupan.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#campuses">Rencanakan Kunjungan <ArrowIcon /></a>
            <a className="text-link" href="#about">Kenal kami lebih dekat <span>↘</span></a>
          </div>
        </div>
        <div className="hero-service-card">
          <div className="service-card-icon"><ClockIcon /></div>
          <div>
            <span>Ibadah berikutnya</span>
            <strong>Minggu · 09:00 WIB</strong>
            <small>Kelapa Gading Campus</small>
          </div>
          <a href="#campuses" aria-label="Lihat semua jadwal"><ArrowIcon /></a>
        </div>
        <div className="scroll-note"><span /> Geser untuk menjelajah</div>
      </section>

      <section className="welcome section-shell" id="about">
        <div className="section-label">01 · Tentang Kami</div>
        <div className="welcome-grid">
          <div className="welcome-title">
            <span className="eyebrow">Welcome home</span>
            <h2>Lebih dari sebuah gedung. <em>Ini tentang keluarga.</em></h2>
          </div>
          <div className="welcome-copy">
            <p className="lead">
              Kami percaya setiap orang berharga, setiap cerita berarti, dan tidak ada seorang pun yang harus berjalan sendirian.
            </p>
            <p>
              GSJA CiTi hadir sebagai pintu yang terbuka bagi siapa saja untuk mengenal dan mengalami Kristus—dalam komunitas yang tulus, pengajaran yang relevan, dan kasih yang nyata.
            </p>
            <a className="underline-link" href="#vision">Temukan cerita kami <ArrowIcon /></a>
          </div>
        </div>
        <div className="welcome-stats" aria-label="Ringkasan GSJA CiTi">
          <div><strong>4</strong><span>Campus</span></div>
          <div><strong>1</strong><span>Keluarga</span></div>
          <div><strong>∞</strong><span>Ruang untuk bertumbuh</span></div>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="vision-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1745232391994-9dc223fe0a8e?auto=format&fit=crop&w=1600&q=84"
            alt="Pujian bersama dalam ibadah gereja"
          />
          <div className="vision-verse">
            <span>“</span>
            <p>Let your light shine before others.</p>
            <small>Matthew 5:16</small>
          </div>
        </div>
        <div className="vision-content">
          <span className="eyebrow">Visi & Misi</span>
          <div className="vision-block">
            <span className="vision-number">01</span>
            <div>
              <h3>Visi</h3>
              <p>Memberitakan kasih dan anugerah Kristus, membawa pengharapan baru dan perubahan positif bagi kehidupan banyak orang.</p>
            </div>
          </div>
          <div className="vision-block">
            <span className="vision-number">02</span>
            <div>
              <h3>Misi</h3>
              <p>Memperlengkapi jemaat untuk menjadi pelaku firman, hidup dalam pertobatan, dan menghadirkan kasih Kristus di setiap aspek kehidupan.</p>
            </div>
          </div>
          <div className="pastor-note">
            <p>“Di sini, Anda akan menemukan tempat di mana kasih Tuhan mengalir dan setiap hati dapat merasakan kedamaian serta pengharapan yang baru.”</p>
            <div><span>GS</span><span>AZ</span><small>Ps. Dr. Gideon Simanjuntak<br />& Ps. Amanda Zevannya</small></div>
          </div>
        </div>
      </section>

      <section className="campuses section-shell" id="campuses">
        <div className="section-heading-row">
          <div>
            <div className="section-label">02 · Temukan Kami</div>
            <span className="eyebrow">Satu gereja, beberapa lokasi</span>
            <h2>Pilih campus <em>terdekat.</em></h2>
          </div>
          <p>Datang apa adanya. Tim kami siap menyambut dan membantu Anda merasa seperti di rumah sejak kunjungan pertama.</p>
        </div>

        <div className="campus-tabs" role="tablist" aria-label="Pilih campus">
          {campuses.map((campus, index) => (
            <button
              key={campus.name}
              role="tab"
              aria-selected={campusIndex === index}
              className={campusIndex === index ? "active" : ""}
              onClick={() => setCampusIndex(index)}
            >
              <span>0{index + 1}</span>{campus.name}
            </button>
          ))}
        </div>

        <div className="campus-panel" role="tabpanel">
          <div className="campus-map-art" aria-hidden="true">
            <div className="map-grid" />
            <div className="map-road road-one" />
            <div className="map-road road-two" />
            <div className="map-road road-three" />
            <div className="map-pin"><PinIcon /></div>
            <span className="map-city">{activeCampus.name}</span>
            <span className="map-code">{String(campusIndex + 1).padStart(2, "0")} / 04</span>
          </div>
          <div className="campus-details">
            <div className="campus-title-row">
              <div><span>{activeCampus.city}</span><h3>{activeCampus.name}</h3></div>
              <a href={activeCampus.map} target="_blank" rel="noreferrer" aria-label={`Buka peta ${activeCampus.name}`}><PinIcon /></a>
            </div>
            <p className="campus-address">{activeCampus.address}</p>
            <div className="service-list">
              {activeCampus.services.map(([name, time]) => (
                <div className="service-row" key={name}>
                  <span>{name}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>
            <a className="button button-dark" href={activeCampus.map} target="_blank" rel="noreferrer">
              Lihat Arah <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="ministries section-shell" id="ministries">
        <div className="section-heading-row compact">
          <div>
            <div className="section-label">03 · Bertumbuh Bersama</div>
            <span className="eyebrow">Ada ruang untuk semua</span>
            <h2>Temukan tempatmu. <em>Mulai bertumbuh.</em></h2>
          </div>
          <a className="underline-link" href="#contact">Lihat semua ministry <ArrowIcon /></a>
        </div>
        <div className="ministry-grid">
          {ministries.map((ministry, index) => (
            <article className="ministry-card" key={ministry.title}>
              <div className="ministry-image">
                <img src={ministry.image} alt={ministry.alt} />
                <span>0{index + 1}</span>
              </div>
              <div className="ministry-content">
                <span className="eyebrow">{ministry.eyebrow}</span>
                <h3>{ministry.title}</h3>
                <p>{ministry.copy}</p>
                <a href="#contact" aria-label={`Pelajari ${ministry.title}`}>Pelajari lebih lanjut <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="community-banner">
        <div className="community-photo">
          <img
            src="https://images.unsplash.com/photo-1729089049653-24312fdca908?auto=format&fit=crop&w=1600&q=84"
            alt="Komunitas yang saling mendoakan"
          />
        </div>
        <div className="community-content">
          <span className="eyebrow">Teman Seperjalanan</span>
          <h2>Kehidupan lebih baik saat dijalani <em>bersama.</em></h2>
          <p>Temukan persaudaraan untuk berbagi cerita, bertumbuh dalam iman, dan saling menguatkan melalui setiap musim.</p>
          <a className="button button-light" href="#contact">Gabung Komunitas <ArrowIcon /></a>
          <div className="community-script">You belong here.</div>
        </div>
      </section>

      <section className="highlights section-shell" id="highlights">
        <div className="section-heading-row compact">
          <div>
            <div className="section-label">04 · Jangan Lewatkan</div>
            <span className="eyebrow">Yang sedang terjadi</span>
            <h2>Highlights <em>minggu ini.</em></h2>
          </div>
          <div className="slider-controls" aria-label="Kontrol highlights">
            <button onClick={() => setHighlightIndex((highlightIndex + highlights.length - 1) % highlights.length)} aria-label="Highlight sebelumnya">←</button>
            <span>0{highlightIndex + 1} / 0{highlights.length}</span>
            <button onClick={() => setHighlightIndex((highlightIndex + 1) % highlights.length)} aria-label="Highlight berikutnya">→</button>
          </div>
        </div>

        <div className="highlight-stage">
          {highlights.map((item, index) => (
            <article
              className={`highlight-card ${item.accent} ${highlightIndex === index ? "active" : ""}`}
              key={item.title}
              aria-hidden={highlightIndex !== index}
            >
              <div className="highlight-orbit"><span /><span /><span /></div>
              <div className="highlight-card-content">
                <span className="eyebrow">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a href="#contact">Pelajari lebih lanjut <ArrowIcon /></a>
              </div>
              <span className="highlight-number">0{index + 1}</span>
            </article>
          ))}
        </div>
        <div className="slider-dots">
          {highlights.map((item, index) => (
            <button
              key={item.title}
              className={highlightIndex === index ? "active" : ""}
              onClick={() => setHighlightIndex(index)}
              aria-label={`Tampilkan ${item.title}`}
            />
          ))}
        </div>
      </section>

      <section className="prayer" id="prayer">
        <div className="prayer-intro">
          <div className="prayer-icon"><HeartIcon /></div>
          <span className="eyebrow">Kami siap berdoa bersama Anda</span>
          <h2>Can we pray<br /><em>for you?</em></h2>
          <p>Setiap permohonan diperlakukan dengan penuh kasih dan kerahasiaan oleh tim pastoral kami.</p>
          <div className="verse-line"><span>Matthew 18:19–20</span><i /></div>
        </div>
        <div className="prayer-form-wrap">
          {submitted ? (
            <div className="form-success" role="status">
              <span>✓</span>
              <h3>Terima kasih sudah berbagi.</h3>
              <p>Permohonan doa Anda telah dicatat. Tim kami akan berdiri bersama Anda dalam doa.</p>
              <button onClick={() => setSubmitted(false)}>Kirim permohonan lain</button>
            </div>
          ) : (
            <form onSubmit={handlePrayerSubmit} className="prayer-form">
              <label>
                <span>Nama</span>
                <input name="name" placeholder="Nama Anda" required />
              </label>
              <label>
                <span>Email / WhatsApp</span>
                <input name="contact" placeholder="Untuk kabar lanjutan (opsional)" />
              </label>
              <label>
                <span>Permohonan Doa</span>
                <textarea name="message" placeholder="Ceritakan yang dapat kami doakan..." rows={5} required />
              </label>
              <label className="privacy-check">
                <input type="checkbox" required />
                <span>Saya memahami bahwa informasi ini akan diterima oleh tim pelayanan doa.</span>
              </label>
              <button className="button button-lime" type="submit">Kirim Permohonan <ArrowIcon /></button>
            </form>
          )}
        </div>
      </section>

      <section className="faq section-shell">
        <div>
          <div className="section-label">05 · Kunjungan Pertama</div>
          <span className="eyebrow">Pertanyaan umum</span>
          <h2>Datang dengan <em>tenang.</em></h2>
          <p>Kami ingin kunjungan pertama Anda terasa mudah, hangat, dan bermakna.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article className={openFaq === index ? "open" : ""} key={item.question}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>0{index + 1}</span>{item.question}<i>{openFaq === index ? "−" : "+"}</i>
              </button>
              <div><p>{item.answer}</p></div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="#home"><LogoMark /><span><b>GSJA</b><small>CiTi</small></span></a>
            <p>Menjadi rumah rohani yang terbuka bagi setiap jiwa untuk mengenal dan mengalami Kristus.</p>
            <div className="socials">
              <a href="#contact" aria-label="Instagram GSJA CiTi">IG</a>
              <a href="#contact" aria-label="YouTube GSJA CiTi">YT</a>
              <a href="#contact" aria-label="Facebook GSJA CiTi">FB</a>
            </div>
          </div>
          <div className="footer-links">
            <div><span>Navigasi</span><a href="#about">Tentang</a><a href="#campuses">Campus</a><a href="#ministries">Ministry</a><a href="#highlights">Highlights</a></div>
            <div><span>Terhubung</span><a href="#prayer">Permohonan Doa</a><a href="#contact">Gabung Komunitas</a><a href="#contact">Hubungi Sekretariat</a></div>
          </div>
          <div className="footer-contact">
            <span>Sekretariat</span>
            <p>Alamat dan kontak resmi<br />GSJA CiTi akan segera<br />diperbarui.</p>
            <a href="#prayer">Kirim permohonan doa</a>
            <a href="#contact">Hubungi sekretariat</a>
            <small>Selasa–Jumat · 10.00–17.00 WIB</small>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GSJA CiTi. All rights reserved.</span>
          <span>Dibangun untuk menjangkau · melayani · mengasihi</span>
          <a href="#home">Kembali ke atas ↑</a>
        </div>
      </footer>
    </main>
  );
}
