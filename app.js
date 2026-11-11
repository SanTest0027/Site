/**
 * JHEP UniMAP — Modern Executive & Student Vibe Portal
 * Big Upscaled Portraits, Official Email Links, Interactive Short Questions
 */

const STAFF_DATA = [
  // 1. Pembiayaan
  {
    name: "Nur Fadzliah Binti Othman",
    role: "Ketua Unit Pembiayaan",
    unit: "Unit Pembiayaan",
    tag: "PTPTN & Biasiswa",
    photo: "cropped-images/staf-nurfadzliah.png",
    location: "Kaunter Pembiayaan, Aras 1, Pejabat JHEP",
    email: "nurfadzliah@unimap.edu.my",
    helpsWith: ["PTPTN", "MARA / JPA", "Tajaan Biasiswa", "Perjanjian Penajaan", "Semakan Status"],
    keywords: "ptptn biasiswa mara jpa pinjaman semakan bayaran tajaan fadzliah pembiayaan"
  },
  {
    name: "En. Nurfahmi Bin Abdul Rahim",
    role: "Pembantu Tadbir (Pembiayaan)",
    unit: "Unit Pembiayaan",
    tag: "Kaunter PTPTN",
    photo: "cropped-images/staf-nurfahmi.png",
    location: "Kaunter Pembiayaan, Aras 1, Pejabat JHEP",
    email: "nurfahmi@unimap.edu.my",
    helpsWith: ["Serahan Dokumen", "Semakan Borang", "Pengesahan Tawaran"],
    keywords: "ptptn serahan dokumen borang perjanjian semak borang nurfahmi"
  },

  // 2. Kesukarelawan & PILLARS
  {
    name: "Mohammad Irhamuddin Bin Mansor",
    role: "Ketua Unit Kesukarelawan & Jati Diri",
    unit: "Unit Kesukarelawan & PILLARS",
    tag: "Dasar PILLARS & Sukarelawan",
    photo: "cropped-images/staf-irhamuddin.png",
    location: "Bilik Kesukarelawan, Aras 2, Pejabat JHEP",
    email: "irhamuddin@unimap.edu.my",
    helpsWith: ["Pillars Final Year", "Transfer Diploma ke Degree", "Misi Banjir", "Aktiviti Jati Diri"],
    keywords: "pillars tak masuk update hilang gantian final year transfer diploma degree sukarelawan banjir irhamuddin"
  },
  {
    name: "Noor Mas Ayu Binti Zahir Mozni",
    role: "Pembantu Tadbir (PILLARS)",
    unit: "Unit Kesukarelawan & PILLARS",
    tag: "Semakan Sistem PILLARS",
    photo: "cropped-images/staf-masayu.png",
    location: "Kaunter Kesukarelawan, Aras 2, Pejabat JHEP",
    email: "masayu@unimap.edu.my",
    helpsWith: ["Semakan Sistem Portal", "Bukti Kehadiran Program", "Log Kehadiran"],
    keywords: "pillars semakan sistem bukti kehadiran program sijil mas ayu"
  },

  // 3. Kebajikan Pelajar & Zakat
  {
    name: "Pegawai Kebajikan & Kesihatan Pelajar",
    role: "Kaunter Kebajikan Pelajar",
    unit: "Unit Kebajikan Pelajar",
    tag: "Zakat, FoodBank & Bantuan",
    photo: "",
    isFallbackIcon: true,
    location: "Kaunter Kebajikan, Aras 1, Bangunan JHEP",
    email: "kebajikan.jhep@unimap.edu.my",
    helpsWith: ["Bantuan Zakat", "FoodBank Siswa", "Tabung Kasih", "Insurans Kemalangan", "GL Hospital"],
    keywords: "zakat kebajikan foodbank kupon bantuan kewangan tabung kasih oku laptop cermin mata khairat kematian insurans kemalangan gl hospital surat jaminan ijn"
  },

  // 4. Pengangkutan
  {
    name: "Asmadi Bin Othman",
    role: "Ketua Unit Pengangkutan",
    unit: "Unit Pengangkutan",
    tag: "Jadual & Tempahan Bas",
    photo: "cropped-images/staf-asmadi.png",
    location: "Pejabat Pengangkutan / Depoh Bas JHEP",
    email: "asmadi@unimap.edu.my",
    helpsWith: ["Kelulusan Tempahan Bas", "Jadual Bas Peperiksaan", "Bas Kuliah"],
    keywords: "bas van tempahan jadual bas kuliah bas peperiksaan pengangkutan kenderaan asmadi"
  },
  {
    name: "Mohd Syairazi Bin Saedon",
    role: "Pemandu Bas Kanan",
    unit: "Unit Pengangkutan",
    tag: "Operasi Bas Kampus",
    photo: "cropped-images/staf-syairazi.png",
    location: "Depoh / Bilik Pemandu Bas JHEP",
    email: "syairazi@unimap.edu.my",
    helpsWith: ["Laluan Bas Pelajar", "Pergerakan Bas Aktiviti"],
    keywords: "pemandu bas laluan stesen kolej syairazi"
  },
  {
    name: "Huzaimi Bin Mohd Rodzi",
    role: "Pembantu Khidmat Am",
    unit: "Unit Pengangkutan",
    tag: "Kaunter Borang Bas",
    photo: "cropped-images/staf-huzaimi.png",
    location: "Kaunter Pengangkutan, Pejabat JHEP",
    email: "huzaimi@unimap.edu.my",
    helpsWith: ["Borang Tempahan Bas", "Logistik Kenderaan"],
    keywords: "borang tempahan van bas huzaimi kaunter"
  },

  // 5. Pentadbiran & Cenderahati
  {
    name: "Nor Faezah Binti Mirdukhim @ Mustapa",
    role: "Pembantu Tadbir (Cenderahati)",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Pengambilan Cenderahati",
    photo: "cropped-images/staf-faezah.png",
    location: "Kaunter Cenderahati, Aras 1, JHEP",
    email: "norfaezah@unimap.edu.my",
    helpsWith: ["Pengambilan Cenderahati Rasmi", "Borang Serahan Hadiah"],
    keywords: "cenderahati hadiah cenderamata stor faezah"
  },
  {
    name: "Azfardon Zulkamal Azmi",
    role: "Ketua Unit Pentadbiran & Kewangan",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Tadbir Urus & Perolehan",
    photo: "cropped-images/staf-azfardon.png",
    location: "Aras 1, Pejabat Am JHEP",
    email: "azfardon@unimap.edu.my",
    helpsWith: ["Pentadbiran Am", "Perolehan & Bajet Jabatan"],
    keywords: "pentadbiran perolehan cenderahati bajet azfardon"
  },
  {
    name: "Mohd Khairul Effendi Bin Che Wan",
    role: "Pegawai Kewangan",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Tuntutan & Kewangan",
    photo: "cropped-images/staf-khairul.png",
    location: "Aras 1, Pejabat Am JHEP",
    email: "khairul.effendi@unimap.edu.my",
    helpsWith: ["Tuntutan Aktiviti", "Invois & Pembayaran"],
    keywords: "kewangan tuntutan resit bayaran invois khairul effendi"
  },
  {
    name: "Nordiana Binti Jamadin",
    role: "Pegawai Pentadbiran",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Sumber Manusia",
    photo: "cropped-images/staf-nordiana.png",
    location: "Aras 1, Pejabat Am JHEP",
    email: "nordiana@unimap.edu.my",
    helpsWith: ["Hal Ehwal Staf", "Latihan & Surat Rasmi"],
    keywords: "sumber manusia pentadbiran nordiana"
  },
  {
    name: "Mohd Yusri Bin Yusob Kebkamen",
    role: "Pembantu Operasi (Aset & Stor)",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Stor & Inventori",
    photo: "cropped-images/staf-yusri.png",
    location: "Bilik Stor JHEP, Aras 1",
    email: "mohdyusri@unimap.edu.my",
    helpsWith: ["Serahan Barang Stor", "Logistik Aset"],
    keywords: "stor aset barang fizikal yusri"
  },
  {
    name: "Norhafizah Binti Ismail",
    role: "Pembantu Tadbir (Media & Web)",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Media Sosial & Web",
    photo: "cropped-images/staf-norhafizah.png",
    location: "Unit Media, Aras 1, JHEP",
    email: "norhafizah@unimap.edu.my",
    helpsWith: ["Poster Media Sosial", "Hebahan Laman Web"],
    keywords: "web media sosial poster hebahan norhafizah"
  },

  // 6. Aktiviti & Inovasi
  {
    name: "Muhammad Najib Othman",
    role: "Ketua Unit Aktiviti & Inovasi",
    unit: "Unit Aktiviti & Inovasi",
    tag: "Kelab, Program & Inovasi",
    photo: "cropped-images/staf-najib.png",
    location: "Aras 2, Pejabat Hal Ehwal Pelajar",
    email: "najib@unimap.edu.my",
    helpsWith: ["Kelulusan Kertas Kerja", "Pendaftaran Kelab / Persatuan", "Pertandingan Inovasi", "Debat & Pengucapan Awam", "Sistem Merit"],
    keywords: "kelab persatuan program kertas kerja inovasi debat rekacipta merit signature najib aktiviti"
  },

  // 7. Kepimpinan & MPP
  {
    name: "Ahmad Mu'adz Bin Nazari",
    role: "Ketua Unit Kepimpinan & Bakat",
    unit: "Unit Kepimpinan & Bakat",
    tag: "MPP & Badan Kepimpinan",
    photo: "cropped-images/staf-muadz.png",
    location: "Aras 2, Bangunan Hal Ehwal Pelajar",
    email: "muadz@unimap.edu.my",
    helpsWith: ["Majlis Perwakilan Pelajar (MPP)", "Badan Kepimpinan Kolej (PERSIMA)", "Kem Kepimpinan Pelajar"],
    keywords: "mpp pemimpin majlis perwakilan pelajar persima jppm kem kepimpinan latihan muadz"
  },
  {
    name: "Roziana Binti Ahmad Tajuddin",
    role: "Pembantu Tadbir (Kepimpinan)",
    unit: "Unit Kepimpinan & Bakat",
    tag: "Dokumentasi Kepimpinan",
    photo: "cropped-images/staf-roziana.png",
    location: "Pejabat Kepimpinan, Aras 2, JHEP",
    email: "roziana@unimap.edu.my",
    helpsWith: ["Watikah Perlantikan", "Surat & Fail MPP"],
    keywords: "mpp watikah surat fail kepimpinan roziana"
  }
];

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  renderStaffList(STAFF_DATA);
  lucide.createIcons();
});

/**
 * Render big portrait staff cards with location & official email
 */
function renderStaffList(list, filterTitle = "Semua Pegawai & Kaunter Bertugas") {
  const container = document.getElementById("staff-grid");
  const countBadge = document.getElementById("match-count-badge");
  const titleEl = document.getElementById("current-view-title");
  const noMatch = document.getElementById("no-match-box");

  titleEl.textContent = filterTitle;
  countBadge.textContent = `${list.length} Pegawai`;

  if (list.length === 0) {
    container.innerHTML = "";
    noMatch.style.display = "block";
    return;
  }

  noMatch.style.display = "none";

  container.innerHTML = list.map(item => `
    <div class="simple-staff-card">
      <div class="staff-thumb-big">
        ${item.photo ? `
          <img src="${item.photo}" alt="${item.name}">
        ` : `
          <div class="staff-thumb-fallback">
            <i data-lucide="heart-handshake" style="width: 38px; height: 38px;"></i>
            <span>Kaunter Kebajikan</span>
          </div>
        `}
      </div>
      <div class="staff-body">
        <div class="card-top-row">
          <span class="card-top-tag">${item.tag}</span>
        </div>
        <h4>${item.name}</h4>
        <div class="staff-sub-role">${item.role} • ${item.unit}</div>

        <div class="staff-contact-box">
          <div class="contact-line">
            <i data-lucide="map-pin" class="icon-xs"></i>
            <span><b>Jumpa di:</b> ${item.location}</span>
          </div>
          <div class="contact-line">
            <i data-lucide="mail" class="icon-xs"></i>
            <span><b>Emel:</b> <a href="mailto:${item.email}" class="email-link-pill">${item.email}</a></span>
          </div>
        </div>

        <div class="quick-answers-tags">
          ${item.helpsWith.map(hw => `<span class="ans-tag">${hw}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

/**
 * Handle clicking short question chips
 */
function askQuestion(keyword, btnEl) {
  document.querySelectorAll(".question-chip").forEach(chip => chip.classList.remove("active"));
  if (btnEl) {
    btnEl.classList.add("active");
  }

  const searchInput = document.getElementById("vibe-search-input");
  const clearBtn = document.getElementById("btn-clear-vibe");

  if (!keyword) {
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderStaffList(STAFF_DATA, "Semua Pegawai & Kaunter Bertugas");
    return;
  }

  searchInput.value = keyword;
  clearBtn.style.display = "flex";
  handleQuickSearch(keyword, false);

  const stream = document.querySelector(".staff-directory-stream");
  if (stream) {
    stream.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Fast search filter logic
 */
function handleQuickSearch(query, resetChips = true) {
  const clean = query.trim().toLowerCase();
  const clearBtn = document.getElementById("btn-clear-vibe");

  if (resetChips) {
    document.querySelectorAll(".question-chip").forEach((chip, idx) => {
      chip.classList.toggle("active", !clean && idx === 0);
    });
  }

  if (!clean) {
    clearBtn.style.display = "none";
    renderStaffList(STAFF_DATA, "Semua Pegawai & Kaunter Bertugas");
    return;
  }

  clearBtn.style.display = "flex";

  const matches = STAFF_DATA.filter(item => {
    return item.name.toLowerCase().includes(clean) ||
           item.role.toLowerCase().includes(clean) ||
           item.unit.toLowerCase().includes(clean) ||
           item.location.toLowerCase().includes(clean) ||
           item.email.toLowerCase().includes(clean) ||
           item.keywords.toLowerCase().includes(clean) ||
           item.helpsWith.some(h => h.toLowerCase().includes(clean));
  });

  renderStaffList(matches, `Hasil Carian: "${query}"`);
}

/**
 * Clear search
 */
function clearVibeSearch() {
  const input = document.getElementById("vibe-search-input");
  input.value = "";
  document.getElementById("btn-clear-vibe").style.display = "none";
  document.querySelectorAll(".question-chip").forEach((chip, idx) => {
    chip.classList.toggle("active", idx === 0);
  });
  renderStaffList(STAFF_DATA, "Semua Pegawai & Kaunter Bertugas");
}
