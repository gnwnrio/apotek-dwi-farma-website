    const mapsUrl = "https://maps.app.goo.gl/31iyLVWykcNKzFN7A";
    const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.007509545291!2d104.72936250000001!3d-4.0188570000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e393d000f660491%3A0xf73caf42ff11e36b!2sApotek%20Dwi%20Farma!5e0!3m2!1sid!2sus!4v1788116590502!5m2!1sid!2sus";
    const articles = [
      {
        category: "Kebiasaan Sehat",
        title: "Langkah sederhana menjaga kesehatan sehari-hari",
        summary: "Kebiasaan kecil yang konsisten dapat membantu mendukung kesehatan dan kebugaran dalam rutinitas harian.",
        content: "Menjaga kesehatan sehari-hari tidak selalu harus dimulai dengan perubahan besar. Cobalah membangun rutinitas yang realistis, seperti memberi waktu untuk beristirahat, menjaga kebersihan diri dan lingkungan, serta memperhatikan kebutuhan tubuh. Pilih kebiasaan yang sesuai dengan kondisi dan kemampuan Anda, lalu lakukan secara bertahap dan konsisten. Jika memiliki keluhan atau pertanyaan tentang kondisi kesehatan, konsultasikan dengan tenaga kesehatan.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Seseorang bermeditasi di alam terbuka"
      },
      {
        category: "Penggunaan Obat",
        title: "Gunakan obat dengan bijak dan sesuai petunjuk",
        summary: "Pahami aturan pakai dan jangan ragu berkonsultasi jika ada informasi penggunaan yang belum jelas.",
        content: "Sebelum menggunakan obat, baca petunjuk pada kemasan atau informasi yang diberikan oleh tenaga kesehatan. Perhatikan aturan pakai dan hal-hal yang perlu diwaspadai. Jangan mengubah cara penggunaan atau membagikan obat kepada orang lain tanpa arahan yang sesuai. Bila petunjuknya belum jelas, tanyakan kepada apoteker, dokter, atau tenaga kesehatan yang menangani Anda.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Kapsul dan tablet obat"
      },
      {
        category: "Kenali Obat",
        title: "Mengapa penting membaca label obat?",
        summary: "Label membantu Anda mengenali petunjuk penggunaan, perhatian khusus, dan informasi penting lainnya.",
        content: "Label dan kemasan obat memuat informasi penting yang perlu diperhatikan sebelum obat digunakan. Luangkan waktu untuk membaca aturan pakai serta peringatan yang tercantum. Bila ada istilah atau keterangan yang tidak dipahami, jangan menebak-nebak: mintalah penjelasan kepada tenaga kesehatan agar penggunaan obat sesuai dengan arahan yang benar.",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Kemasan dan informasi produk kesehatan"
      },
      {
        category: "Edukasi Kesehatan",
        title: "Membangun kebiasaan hidup sehat, satu langkah demi satu",
        summary: "Mulai dari rutinitas sederhana yang realistis dan pilih kebiasaan yang dapat dijaga secara konsisten.",
        content: "Kebiasaan baru lebih mudah dipertahankan jika dimulai dengan langkah kecil yang sesuai dengan rutinitas Anda. Tentukan satu perubahan sederhana, beri waktu untuk membentuk kebiasaan, dan sesuaikan bila diperlukan. Kebutuhan setiap orang dapat berbeda, sehingga mintalah saran tenaga kesehatan untuk panduan yang sesuai dengan keadaan pribadi Anda.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Bahan makanan segar untuk pola hidup sehat"
      },
      {
        category: "Penggunaan Obat",
        title: "Simpan obat dengan memperhatikan petunjuknya",
        summary: "Perhatikan keterangan penyimpanan pada kemasan dan jauhkan obat dari jangkauan anak-anak.",
        content: "Cara penyimpanan dapat berbeda untuk setiap obat. Periksa keterangan pada kemasan dan ikuti petunjuk yang menyertainya. Simpan obat dengan aman dan jauhkan dari jangkauan anak-anak. Jika kemasan atau petunjuk penyimpanan tidak tersedia, tanyakan kepada apoteker atau tenaga kesehatan sebelum menggunakannya.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Beragam tablet obat dalam kemasan"
      },
      {
        category: "Kenali Obat",
        title: "Jangan ragu bertanya kepada tenaga kesehatan",
        summary: "Bertanya membantu memastikan Anda memahami informasi dan langkah perawatan yang disarankan.",
        content: "Menyampaikan pertanyaan adalah bagian penting dari komunikasi kesehatan. Anda dapat meminta penjelasan tentang cara penggunaan obat, informasi pada kemasan, atau langkah selanjutnya yang disarankan. Ceritakan pula hal-hal yang relevan dengan kondisi Anda agar tenaga kesehatan dapat memberikan penjelasan yang lebih sesuai.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Tenaga kesehatan memberikan konsultasi kepada pasien"
      }
    ];
    function articleCard(article) {
      return '<article class="article-card">' +
        '<div class="article-cover"><img src="' + article.image + '" alt="' + article.imageAlt + '" loading="lazy" decoding="async"></div>' +
        '<div class="article-body"><div class="article-meta"><span class="category">' + article.category + '</span><span>Artikel</span></div>' +
        '<h3>' + article.title + '</h3><p>' + article.summary + '</p>' +
        '<a class="text-link article-read" href="#article" data-article-index="' + articles.indexOf(article) + '">Baca artikel <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div></article>';
    }
    document.getElementById("latest-articles").innerHTML = articles.slice(0, 3).map(articleCard).join("");
    document.getElementById("all-articles").innerHTML = articles.map(articleCard).join("");
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.querySelectorAll("[data-maps-link]").forEach(link => link.href = mapsUrl);
    document.querySelectorAll("[data-maps-embed]").forEach(frame => frame.src = mapsEmbedUrl);
    const articleDialog = document.querySelector(".article-dialog");
    document.querySelectorAll(".article-read").forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const article = articles[Number(link.dataset.articleIndex)];
        document.getElementById("dialog-category").textContent = article.category;
        document.getElementById("dialog-title").textContent = article.title;
        document.getElementById("dialog-content").textContent = article.content;
        articleDialog.showModal();
      });
    });
    document.querySelector(".dialog-close").addEventListener("click", () => articleDialog.close());

    const pages = Array.from(document.querySelectorAll("[data-page]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const revealTargets = document.querySelectorAll(
      ".hero-copy > *, .hero-art > *, .intro-row, .section-heading, .service-card, .value-card, .article-card, .location-info > *, .map-frame, .about-story > *, .vision-card, .mission-list li"
    );
    const revealObserver = "IntersectionObserver" in window
      ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" })
      : null;
    const hero = document.querySelector(".hero");
    const heroArt = document.querySelector(".hero-art");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollFrame = 0;
    function updateHeroScroll() {
      scrollFrame = 0;
      if (!hero || !heroArt || reduceMotion.matches) return;
      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, window.scrollY / (hero.offsetTop + bounds.height)));
      heroArt.style.setProperty("--hero-scroll-shift", (-progress * 42).toFixed(1) + "px");
    }
    function requestHeroScrollUpdate() {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateHeroScroll);
    }
    window.addEventListener("scroll", requestHeroScrollUpdate, { passive: true });
    window.addEventListener("resize", requestHeroScrollUpdate);
    reduceMotion.addEventListener("change", requestHeroScrollUpdate);
    updateHeroScroll();
    revealTargets.forEach(element => {
      element.classList.add("scroll-reveal");
      const group = element.parentElement;
      const siblings = Array.from(group.children).filter(child => child.matches(".scroll-reveal"));
      element.style.setProperty("--reveal-delay", Math.min(siblings.indexOf(element) * 90, 360) + "ms");
      if (revealObserver) revealObserver.observe(element);
      else element.classList.add("is-visible");
    });
    function showPage() {
      const pageName = window.location.hash.slice(1) || "home";
      const selected = pages.find(page => page.dataset.page === pageName) || pages[0];
      pages.forEach(page => {
        const active = page === selected;
        page.classList.toggle("is-active", active);
        page.setAttribute("aria-hidden", String(!active));
      });
      navLinks.forEach(link => {
        if (link.dataset.route === selected.dataset.page) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
      menuToggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
      if (revealObserver) {
        selected.querySelectorAll(".scroll-reveal").forEach(element => {
          element.classList.remove("is-visible");
          revealObserver.observe(element);
        });
      }
      requestHeroScrollUpdate();
      window.scrollTo(0, 0);
    }
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
      menuToggle.innerHTML = isOpen
        ? '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    });
    window.addEventListener("hashchange", showPage);
    showPage();
