/**
 * JHEP Assist — Panduan Interaktif Urusan Pelajar & Staf UniMAP
 * Updated per INFO STAF JHEP.pdf & New Image Set
 */

const KEBAJIKAN_URUSAN_LIST = [
  "Bantuan Kewangan dan Kebajikan Pelajar",
  "Bantuan Awal Pengajian",
  "Bantuan Tabung Kasih UniMAP",
  "Bantuan Sumbangan Zakat Korporat",
  "Bantuan Mahasiswa Orang Kurang Upaya (OKU)",
  "Skim Pinjaman Komputer Riba",
  "Hadiah Kasih Cemerlang (HKC)",
  "Bantuan Tunai",
  "Bantuan Kecemasan (Bencana, Kemalangan dan Kecurian)",
  "FoodBank UniMAP",
  "Bantuan Kupon Makanan Percuma Minggu Peperiksaan",
  "Skim Pembelian Kaca Mata",
  "Skim Pembelian Peralatan Pelindung Diri (PPE)",
  "Bantuan Kematian dan Kecemasan Keluarga",
  "Khairat Kematian Waris",
  "Pengurusan Jenazah Pelajar Meninggal Dunia",
  "Pengurusan Perjalanan Pelajar ke Kediaman Sekiranya Berlaku Kematian Waris",
  "Bantuan Kesihatan Pelajar",
  "Tuntutan Insurans Kemalangan",
  "Tuntutan Perbelanjaan Rawatan Hospital",
  "Tuntutan Perbelanjaan Pembedahan",
  "Permohonan Surat Jaminan Pelajar (GL) ke Hospital dan Klinik Kerajaan",
  "Bantuan Rawatan di Institut Jantung Negara (IJN)",
  "e-Tabung",
  "Bantuan Ihsan (Sakit dan Masuk Wad)",
  "Skim Perlindungan Diri"
];

const PILLARS_URUSAN_LIST = [
  "Penganjuran Aktiviti Kesukarelawanan",
  "Bantuan Banjir / Kecemasan",
  "PILLARS: Penyertaan Program Tidak Dikemaskini dalam Sistem",
  "PILLARS: Carian Program PILLARS (Tidak menemui hebahan program)",
  "PILLARS: Semakan Rekod Penyertaan (Lupa nama program & tiada bukti kehadiran)",
  "PILLARS: Rekod atau Pencapaian PILLARS Hilang Semasa Semakan Semula",
  "PILLARS: PILLARS Gantian untuk Pelajar Tahun Akhir (Final Year)",
  "PILLARS: Program Tidak Diluluskan / Tiada Rekod PILLARS Tanpa Makluman Penganjur",
  "PILLARS: Pemindahan Rekod PILLARS daripada Diploma ke Ijazah Sarjana Muda"
];

const STAFF_DATA = [
  // 1. Setiausaha Pejabat (PDF Page 1)
  {
    name: "Nordiana Binti Jamadin",
    role: "Setiausaha Pejabat",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Setiausaha Pejabat",
    photo: "cropped-images/staf-nordiana.png",
    location: "Aras 1, Pejabat JHEP",
    email: "nordiana@unimap.edu.my",
    helpsWith: ["Temu Janji Pengarah", "Status Kelulusan Surat", "Tempahan Bilik Mesyuarat"],
    fullUrusan: [
      "Semakan Jadual Temu Janji Pengarah — Semakan jadual dan pertanyaan berkaitan urusan temu janji bersama Pengarah JHEP.",
      "Semakan Status Kelulusan Surat — Semakan status kelulusan permohonan surat yang memerlukan kelulusan Pengarah JHEP.",
      "Tempahan Bilik Mesyuarat — Pengurusan dan semakan kekosongan bagi tempahan penggunaan Bilik Mesyuarat JHEP."
    ],
    keywords: "setiausaha pejabat temu janji pengarah jadual kelulusan surat tempahan bilik mesyuarat ruang perbincangan nordiana pentadbiran"
  },

  // 2. Unit Kebajikan (PDF Pages 1-3 & 18.png)
  {
    name: "Siti Nur Idayu Binti Alias",
    role: "Ketua Unit Kebajikan",
    unit: "Unit Kebajikan",
    tag: "Unit Kebajikan",
    photo: "cropped-images/staf-idayu.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "nuridayualias@unimap.edu.my",
    helpsWith: ["Bantuan Kebajikan & Zakat", "e-Tabung & Tabung Kasih", "Bantuan Ihsan (Sakit & Wad)", "Skim Perlindungan Diri", "Skim Pembelian Kaca Mata", "FoodBank & GL Hospital"],
    fullUrusan: KEBAJIKAN_URUSAN_LIST,
    keywords: "kebajikan zakat e-tabung etabung tabung kasih bantuan ihsan sakit masuk wad skim perlindungan diri skim pembelian kaca mata awal pengajian oku laptop komputer riba hkc bantuan tunai kecemasan foodbank kupon makanan ppe kematian khairat jenazah kesihatan insurans kemalangan rawatan hospital pembedahan surat jaminan gl ijn siti nur idayu"
  },
  {
    name: "Umar Mukhtar Bin Mahamad",
    role: "Penolong Pegawai Tadbir",
    unit: "Unit Kebajikan",
    tag: "Unit Kebajikan",
    photo: "",
    initials: "UM",
    location: "Aras Bawah, Pejabat JHEP",
    email: "umarmukhtar@unimap.edu.my",
    helpsWith: ["Bantuan Kebajikan & Zakat", "e-Tabung & Tabung Kasih", "Bantuan Ihsan (Sakit & Wad)", "Skim Perlindungan Diri", "Skim Pembelian Kaca Mata", "FoodBank & GL Hospital"],
    fullUrusan: KEBAJIKAN_URUSAN_LIST,
    keywords: "kebajikan zakat e-tabung etabung tabung kasih bantuan ihsan sakit masuk wad skim perlindungan diri skim pembelian kaca mata awal pengajian oku laptop komputer riba hkc bantuan tunai kecemasan foodbank kupon makanan ppe kematian khairat jenazah kesihatan insurans kemalangan rawatan hospital pembedahan surat jaminan gl ijn umar mukhtar"
  },
  {
    name: "Diza Ewana Bt Mohamad Drapi",
    role: "Pembantu Tadbir",
    unit: "Unit Kebajikan",
    tag: "Unit Kebajikan",
    photo: "cropped-images/staf-diza.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "diza@unimap.edu.my",
    helpsWith: ["Bantuan Kebajikan & Zakat", "e-Tabung & Tabung Kasih", "Bantuan Ihsan (Sakit & Wad)", "Skim Perlindungan Diri", "Skim Pembelian Kaca Mata", "Surat Jaminan (GL)"],
    fullUrusan: KEBAJIKAN_URUSAN_LIST,
    keywords: "kebajikan zakat e-tabung etabung tabung kasih bantuan ihsan sakit masuk wad skim perlindungan diri skim pembelian kaca mata awal pengajian oku laptop komputer riba hkc bantuan tunai kecemasan foodbank kupon makanan ppe kematian khairat jenazah kesihatan insurans kemalangan rawatan hospital pembedahan surat jaminan gl ijn diza ewana"
  },

  // 3. Unit Pembiayaan (PDF Page 4 & 16.png & 17.png)
  {
    name: "Nur Fadzliah Binti Othman",
    role: "Ketua Unit Pembiayaan",
    unit: "Unit Pembiayaan",
    tag: "Unit Pembiayaan",
    photo: "cropped-images/staf-nurfadzliah.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "fadzliah@unimap.edu.my",
    helpsWith: ["PTPTN / MARA / JPA", "Biasiswa & Penajaan", "Semakan Status Bayaran", "Dokumen Perjanjian", "Agensi Penaja"],
    fullUrusan: [
      "Biasiswa & Penajaan",
      "Pinjaman Pendidikan (PTPTN / MARA / JPA)",
      "Bantuan Kewangan & Zakat",
      "Semakan Status Pembayaran",
      "Dokumen Perjanjian & Tawaran Penajaan",
      "Pengesahan Status Pengajian & Penajaan / Bantuan Kewangan & Zakat",
      "Masalah Pembiayaan & Khidmat Nasihat",
      "Urusan dengan Agensi Penaja"
    ],
    keywords: "pembiayaan ptptn mara jpa biasiswa penajaan pinjaman pendidikan semakan bayaran perjanjian pengesahan pengajian fadzliah"
  },
  {
    name: "En. Nurfahmi Bin Abdul Rahim",
    role: "Pembantu Tadbir",
    unit: "Unit Pembiayaan",
    tag: "Unit Pembiayaan",
    photo: "cropped-images/staf-nurfahmi.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "nurfahmi@unimap.edu.my",
    helpsWith: ["PTPTN / MARA / JPA", "Serahan Dokumen Perjanjian", "Semakan Status Pembayaran", "Pengesahan Pengajian"],
    fullUrusan: [
      "Biasiswa & Penajaan",
      "Pinjaman Pendidikan (PTPTN / MARA / JPA)",
      "Bantuan Kewangan & Zakat",
      "Semakan Status Pembayaran",
      "Dokumen Perjanjian & Tawaran Penajaan",
      "Pengesahan Status Pengajian & Penajaan / Bantuan Kewangan & Zakat",
      "Masalah Pembiayaan & Khidmat Nasihat",
      "Urusan dengan Agensi Penaja"
    ],
    keywords: "pembiayaan ptptn mara jpa biasiswa penajaan pinjaman semakan bayaran dokumen perjanjian nurfahmi"
  },

  // 4. Unit Kesukarelawan dan Jati Diri (PDF Pages 4-6 & 12.png)
  {
    name: "Mohammad Irhamuddin Bin Mansor",
    role: "Ketua Unit Kesukarelawan & Jati Diri",
    unit: "Unit Kesukarelawan & Jati Diri",
    tag: "Kesukarelawan & PILLARS",
    photo: "cropped-images/staf-irhamuddin.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "irhamuddin@unimap.edu.my",
    helpsWith: ["Isu Sistem PILLARS", "Transfer PILLARS Diploma-Ijazah", "PILLARS Gantian Tahun Akhir", "Aktiviti Sukarelawan", "Bantuan Banjir"],
    fullUrusan: PILLARS_URUSAN_LIST,
    keywords: "kesukarelawan jati diri pillars tak masuk sistem hilang gantian tahun akhir final year transfer diploma ijazah banjir sukarelawan irhamuddin"
  },
  {
    name: "Noor Mas Ayu Binti Zahir Mozni",
    role: "Pembantu Tadbir",
    unit: "Unit Kesukarelawan & Jati Diri",
    tag: "Kesukarelawan & PILLARS",
    photo: "cropped-images/staf-masayu.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "noormasayu@unimap.edu.my",
    helpsWith: ["Semakan Rekod PILLARS", "Carian Program PILLARS", "Pindahan PILLARS", "Aktiviti Kesukarelawanan", "Bantuan Banjir"],
    fullUrusan: PILLARS_URUSAN_LIST,
    keywords: "kesukarelawan jati diri pillars tak masuk sistem hilang gantian tahun akhir final year transfer diploma ijazah banjir sukarelawan noor mas ayu"
  },

  // 5. Unit Pengangkutan (PDF Pages 6-7 & 14.png)
  {
    name: "Asmadi Bin Othman",
    role: "Ketua Unit Pengangkutan",
    unit: "Unit Pengangkutan",
    tag: "Unit Pengangkutan",
    photo: "cropped-images/staf-asmadi.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "asmadi@unimap.edu.my",
    helpsWith: ["Tempahan Bas & Van Aktiviti", "Jadual Bas Kuliah", "Bas Peperiksaan & Kokurikulum"],
    fullUrusan: [
      "Pengurusan Tempahan Bas & Van Bagi Aktiviti / Program Pelajar",
      "Pengurusan Jadual Kuliah, Peperiksaan Dan Bas Kokurikulum"
    ],
    keywords: "pengangkutan tempahan bas van aktiviti program jadual kuliah peperiksaan kokurikulum asmadi"
  },
  {
    name: "Mohd Syairazi Bin Saedon",
    role: "Pembantu Khidmat Am",
    unit: "Unit Pengangkutan",
    tag: "Unit Pengangkutan",
    photo: "cropped-images/staf-syairazi.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "syairazi@unimap.edu.my",
    helpsWith: ["Pengurusan Tempahan Van"],
    fullUrusan: [
      "Pengurusan Tempahan Van"
    ],
    keywords: "pengangkutan tempahan van bas syairazi"
  },
  {
    name: "Huzaimi Bin Mohd Rodzi",
    role: "Pembantu Khidmat Am",
    unit: "Unit Pengangkutan",
    tag: "Unit Pengangkutan",
    photo: "cropped-images/staf-huzaimi.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "huzaimi@unimap.edu.my",
    helpsWith: ["Pengurusan Tempahan Van"],
    fullUrusan: [
      "Pengurusan Tempahan Van"
    ],
    keywords: "pengangkutan tempahan van bas huzaimi"
  },

  // 6. Unit Aktiviti & Inovasi (PDF Pages 7-8 & 10.png)
  {
    name: "Muhammad Najib Othman",
    role: "Ketua Unit Aktiviti & Inovasi",
    unit: "Unit Aktiviti & Inovasi",
    tag: "Aktiviti & Inovasi",
    photo: "cropped-images/staf-najib.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "najib@unimap.edu.my",
    helpsWith: ["Penganjuran Aktiviti", "Kelab / Persatuan", "Rekacipta & Inovasi", "Debat & Pengucapan Awam", "Sistem Merit JHEP"],
    fullUrusan: [
      "Penganjuran Aktiviti",
      "Kelab / Persatuan",
      "Program Pembangunan Inovasi",
      "Pertandingan Rekacipta & Inovasi",
      "Pembangunan Pelapis Debat & Pengucapan Awam",
      "Sistem Merit & Program Signature JHEP"
    ],
    keywords: "aktiviti inovasi kelab persatuan rekacipta debat pengucapan awam merit signature najib"
  },

  // 7. Unit Kepimpinan & Bakat (PDF Page 8 & 7.png)
  {
    name: "Ahmad Mu'adz Bin Nazari",
    role: "Ketua Unit Kepimpinan & Bakat",
    unit: "Unit Kepimpinan & Bakat",
    tag: "Kepimpinan & Bakat",
    photo: "cropped-images/staf-muadz.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "muadz@unimap.edu.my",
    helpsWith: ["Majlis Perwakilan Pelajar (MPP)", "Badan Kepimpinan Pelajar", "Pembangunan Keterampilan & Bakat"],
    fullUrusan: [
      "Majlis Perwakilan Pelajar (MPP)",
      "Badan Kepimpinan Pelajar",
      "Pembangunan Keterampilan & Bakat"
    ],
    keywords: "kepimpinan bakat mpp majlis perwakilan pelajar badan kepimpinan keterampilan muadz"
  },
  {
    name: "Roziana Binti Ahmad Tajuddin",
    role: "Pembantu Tadbir",
    unit: "Unit Kepimpinan & Bakat",
    tag: "Kepimpinan & Aktiviti",
    photo: "cropped-images/staf-roziana.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "roziana@unimap.edu.my",
    helpsWith: ["MPP & Badan Kepimpinan", "Penganjuran Aktiviti", "Kelab / Persatuan", "Rekacipta & Debat", "Sistem Merit"],
    fullUrusan: [
      "Majlis Perwakilan Pelajar (MPP)",
      "Badan Kepimpinan Pelajar",
      "Pembangunan Keterampilan & Bakat",
      "Penganjuran Aktiviti",
      "Kelab / Persatuan",
      "Program Pembangunan Inovasi",
      "Pertandingan Rekacipta & Inovasi",
      "Pembangunan Pelapis Debat & Pengucapan Awam",
      "Sistem Merit & Program Signature JHEP"
    ],
    keywords: "kepimpinan bakat mpp majlis perwakilan pelajar badan kepimpinan aktiviti kelab persatuan inovasi rekacipta debat merit signature roziana"
  },

  // 8. Unit Pentadbiran & Kewangan (PDF Page 9 & Update Set)
  {
    name: "Azfardon Zulkamal Azmi",
    role: "Ketua Unit Pentadbiran & Kewangan",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Pentadbiran, Cenderahati & Kemudahan",
    photo: "cropped-images/staf-azfardon.png",
    location: "Aras 1, Pejabat Am JHEP",
    email: "azfardon@unimap.edu.my",
    helpsWith: [
      "Cenderahati & Pakaian Rasmi (Jaket/Baju)",
      "Tempahan Bilik Gerakan JHEP",
      "Peminjaman Peralatan JHEP (Selain PA System)"
    ],
    fullUrusan: [
      "Pengambilan Cenderahati Pelajar (Pengambilan Pakaian Rasmi Pelajar Selepas Hari Pendaftaran) — Pengurusan dan penyelarasan pengambilan pakaian rasmi pelajar yang belum diterima semasa hari pendaftaran termasuk jaket rasmi pelajar, baju korporat dan baju T-shirt berkolar. Melibatkan semakan rekod penerimaan, semakan ketersediaan stok dan saiz serta penyelarasan pengambilan di Pejabat JHEP.",
      "Tempahan Ruang / Bilik (Tempahan Penggunaan Bilik Gerakan JHEP) — Pengurusan dan penyelarasan tempahan penggunaan Bilik Gerakan JHEP bagi tujuan mesyuarat, perbincangan, taklimat, bengkel dan aktiviti berkaitan. Melibatkan semakan kekosongan bilik, kelulusan penggunaan serta penyelarasan kemudahan yang disediakan.",
      "Tempahan / Peminjaman Peralatan (Selain PA System) — Pengurusan permohonan dan penyelarasan peminjaman peralatan milik JHEP selain PA System bagi kegunaan program dan aktiviti pelajar. Melibatkan semakan ketersediaan peralatan, rekod pinjaman, penyerahan dan pemulangan peralatan."
    ],
    keywords: "pentadbiran kewangan cenderahati pakaian rasmi pelajar jaket rasmi jaket pelajar baju korporat baju t-shirt berkolar tshirt pengambilan baju tuntutan pakaian pakaian belum diterima saiz baju pendaftaran pelajar bilik gerakan tempahan bilik penggunaan bilik mesyuarat perbincangan taklimat bengkel ruang mesyuarat peminjaman peralatan pinjaman barang peralatan jhep tempahan peralatan projektor skrin meja kerusi peralatan program inventori jhep azfardon"
  },
  {
    name: "Norhafizah Binti Ismail",
    role: "Pembantu Tadbir (Cenderahati)",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Cenderahati, Bilik Gerakan & Peralatan",
    photo: "cropped-images/staf-norhafizah.png",
    location: "Stor Cenderahati / Aras 1, Pejabat JHEP",
    email: "norhafizah@unimap.edu.my",
    helpsWith: [
      "Cenderahati & Pakaian Rasmi (Jaket/Baju)",
      "Tempahan Bilik Gerakan JHEP",
      "Peminjaman Peralatan JHEP (Selain PA System)"
    ],
    fullUrusan: [
      "Pengambilan Cenderahati Pelajar (Pengambilan Pakaian Rasmi Pelajar Selepas Hari Pendaftaran) — Pengurusan dan penyelarasan pengambilan pakaian rasmi pelajar yang belum diterima semasa hari pendaftaran termasuk jaket rasmi pelajar, baju korporat dan baju T-shirt berkolar. Melibatkan semakan rekod penerimaan, semakan ketersediaan stok dan saiz serta penyelarasan pengambilan di Pejabat JHEP.",
      "Tempahan Ruang / Bilik (Tempahan Penggunaan Bilik Gerakan JHEP) — Pengurusan dan penyelarasan tempahan penggunaan Bilik Gerakan JHEP bagi tujuan mesyuarat, perbincangan, taklimat, bengkel dan aktiviti berkaitan. Melibatkan semakan kekosongan bilik, kelulusan penggunaan serta penyelarasan kemudahan yang disediakan.",
      "Tempahan / Peminjaman Peralatan (Selain PA System) — Pengurusan permohonan dan penyelarasan peminjaman peralatan milik JHEP selain PA System bagi kegunaan program dan aktiviti pelajar. Melibatkan semakan ketersediaan peralatan, rekod pinjaman, penyerahan dan pemulangan peralatan."
    ],
    keywords: "pentadbiran cenderahati stor pakaian rasmi pelajar jaket rasmi jaket pelajar baju korporat baju t-shirt berkolar tshirt pengambilan baju tuntutan pakaian pakaian belum diterima saiz baju pendaftaran pelajar bilik gerakan tempahan bilik penggunaan bilik mesyuarat perbincangan taklimat bengkel ruang mesyuarat peminjaman peralatan pinjaman barang peralatan jhep tempahan peralatan projektor skrin meja kerusi peralatan program inventori jhep norhafizah"
  },
  {
    name: "Mohd Khairul Effendi Bin Che Wan",
    role: "Penolong Pegawai Tadbir",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Protokol, PA System & Grafik",
    photo: "cropped-images/staf-khairul.png",
    location: "Aras Bawah, Pejabat JHEP",
    email: "khairul.effendi@unimap.edu.my",
    helpsWith: [
      "Protokol Program (VIP/VVIP)",
      "Peminjaman PA System / Portable",
      "Semakan Grafik (Banner/Backdrop)"
    ],
    fullUrusan: [
      "Protokol Program (Semakan dan Penasihatan Protokol Penganjuran Program / Aktiviti Pelajar Peringkat Universiti) — Semakan susunan protokol, atur cara majlis, jemputan VIP/VVIP, susunan tempat duduk dan tatacara majlis.",
      "Permohonan Peminjaman PA System / Portable — Pengurusan permohonan, semakan ketersediaan dan penyelarasan peminjaman peralatan audio (PA System, Portable, speaker, mikrofon, pembesar suara).",
      "Semakan Grafik (Semakan dan Penasihatan Grafik dan Reka Bentuk Banner / Backdrop Program) — Semakan reka bentuk, penggunaan logo rasmi, warna korporat, susunan logo dan pematuhan protokol identiti universiti."
    ],
    keywords: "penolong pegawai tadbir protokol program vip vvip atur cara susunan majlis jemputan rasmi tempat duduk tatacara majlis permohonan peminjaman pinjam pa system sistem portable speaker mikrofon mic pembesar suara sound audio semakan grafik reka bentuk design banner backdrop bunting poster logo warna korporat identiti korporat universiti khairul effendi che wan"
  },
  {
    name: "Nor Faezah Binti Mirdukhim @ Mustapa",
    role: "Pembantu Tadbir (Kewangan)",
    unit: "Unit Pentadbiran & Kewangan",
    tag: "Unit Kewangan",
    photo: "cropped-images/staf-faezah.png",
    location: "Aras 1, Pejabat JHEP",
    email: "norfaezah@unimap.edu.my",
    helpsWith: ["Semakan Hal Ehwal Kewangan"],
    fullUrusan: [
      "Semakan Hal Ehwal Kewangan"
    ],
    keywords: "kewangan semakan hal ehwal kewangan tuntutan bayaran nor faezah"
  }
];

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  // Detect when embedded inside Google Sites iframe so chatbot height accounts for Google Sites header
  try {
    if (window.self !== window.top) {
      document.body.classList.add("is-embedded");
    }
  } catch (e) {
    document.body.classList.add("is-embedded");
  }

  renderStaffList(STAFF_DATA);
  updateLiveOperatingStatus();
  setInterval(updateLiveOperatingStatus, 60000);
  initAiChatbot();
  lucide.createIcons();
});

/**
 * Live Malaysia-time (Asia/Kuala_Lumpur) Waktu Operasi checker per WAKTU OPERASI JHEP.pdf
 * Isnin - Jumaat: 8.30 Pagi - 4.30 Petang
 * Rehat Isnin - Khamis: 1.00 Petang - 2.00 Petang
 * Rehat Jumaat: 12.15 Petang - 2.45 Petang
 * Cuti: Sabtu / Ahad
 */
function updateLiveOperatingStatus() {
  try {
    const nowMY = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }));
    const day = nowMY.getDay(); // 0 = Sun, 1 = Mon ... 5 = Fri, 6 = Sat
    const mins = nowMY.getHours() * 60 + nowMY.getMinutes();

    const dot = document.getElementById("live-status-dot");
    const heroText = document.getElementById("live-status-text");
    const badge = document.getElementById("operasi-live-badge");

    let state = "closed"; // 'open' | 'break' | 'closed'
    let heroLabel = "Kaunter JHEP telah ditutup • Buka Isnin–Jumaat (8.30 pg – 4.30 ptg)";
    let badgeLabel = "🔴 Kaunter JHEP telah ditutup (Buka Isnin – Jumaat, 8.30 pg – 4.30 ptg)";

    if (day >= 1 && day <= 4) {
      // Monday - Thursday
      if (mins >= 510 && mins < 780) {
        state = "open";
        heroLabel = "Kaunter Dibuka Sekarang • Rehat 1.00 ptg";
        badgeLabel = "🟢 Kaunter Sedang Dibuka (8.30 Pagi – 4.30 Petang)";
      } else if (mins >= 780 && mins < 840) {
        state = "break";
        heroLabel = "Waktu Rehat (1.00 – 2.00 ptg) • Buka semula 2.00 ptg";
        badgeLabel = "🟡 Waktu Rehat Kaunter (1.00 Petang – 2.00 Petang)";
      } else if (mins >= 840 && mins < 990) {
        state = "open";
        heroLabel = "Kaunter Dibuka Sekarang • Tutup 4.30 ptg";
        badgeLabel = "🟢 Kaunter Sedang Dibuka (Tutup 4.30 Petang)";
      }
    } else if (day === 5) {
      // Friday
      if (mins >= 510 && mins < 735) {
        state = "open";
        heroLabel = "Kaunter Dibuka Sekarang • Rehat Jumaat 12.15 tgh";
        badgeLabel = "🟢 Kaunter Sedang Dibuka (Rehat Jumaat 12.15 tgh)";
      } else if (mins >= 735 && mins < 885) {
        state = "break";
        heroLabel = "Waktu Rehat Jumaat (12.15 – 2.45 ptg)";
        badgeLabel = "🟡 Waktu Rehat Jumaat (12.15 Petang – 2.45 Petang)";
      } else if (mins >= 885 && mins < 990) {
        state = "open";
        heroLabel = "Kaunter Dibuka Sekarang • Tutup 4.30 ptg";
        badgeLabel = "🟢 Kaunter Sedang Dibuka (Tutup 4.30 Petang)";
      }
    } else {
      heroLabel = "Cuti Hujung Minggu (Sabtu / Ahad)";
      badgeLabel = "🔴 Cuti Hujung Minggu (Sabtu / Ahad)";
    }

    if (dot) {
      dot.className = "status-glow" + (state === "open" ? "" : " " + state);
    }
    if (heroText) {
      heroText.textContent = heroLabel;
    }
    if (badge) {
      badge.textContent = badgeLabel;
      badge.className = "operasi-live-badge is-" + state;
    }
    const welcomeStatus = document.getElementById("welcome-live-status");
    if (welcomeStatus) {
      welcomeStatus.textContent = badgeLabel;
      welcomeStatus.className = "welcome-status-banner is-" + state;
    }
  } catch (e) {
    // Fallback static label if timezone parsing not supported
  }
}

/**
 * Render big portrait staff cards with location, official email, copy button & expandable urusan drawer
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

  container.innerHTML = list.map((item, idx) => `
    <div class="simple-staff-card">
      <div class="staff-card-top-flex">
        <div class="staff-thumb-big">
          ${item.photo ? `
            <img src="${item.photo}" alt="${item.name}">
          ` : `
            <div class="staff-thumb-fallback">
              <div class="fallback-initials">${item.initials || "JH"}</div>
              <span>${item.unit}</span>
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
              <span><b>Lokasi Pegawai:</b> ${item.location}</span>
            </div>
            <div class="contact-line">
              <i data-lucide="mail" class="icon-xs"></i>
              <span><b>Emel:</b> <a href="mailto:${item.email}" class="email-link-pill">${item.email}</a></span>
              <button class="btn-copy-email" onclick="copyEmail('${item.email}')" title="Salin Emel">
                <i data-lucide="copy" style="width:11px;height:11px;"></i> Salin
              </button>
            </div>
          </div>

          <div class="quick-answers-tags">
            ${item.helpsWith.map(hw => `<span class="ans-tag">${hw}</span>`).join("")}
          </div>
        </div>
      </div>

      ${item.fullUrusan && item.fullUrusan.length > 0 ? `
        <div class="urusan-drawer-wrap">
          <button class="btn-toggle-urusan" onclick="toggleUrusanDrawer('drawer-${idx}', this)">
            <span class="left-label">
              <i data-lucide="list-checks" class="icon-xs"></i>
              <span>Lihat Senarai Penuh Urusan (${item.fullUrusan.length})</span>
            </span>
            <i data-lucide="chevron-down" class="icon-xs"></i>
          </button>
          <div id="drawer-${idx}" class="urusan-full-list">
            <ol>
              ${item.fullUrusan.map(u => `<li>${u}</li>`).join("")}
            </ol>
          </div>
        </div>
      ` : ""}
    </div>
  `).join("");

  lucide.createIcons();
}

/**
 * Toggle expandable full urusan list on a card
 */
function toggleUrusanDrawer(drawerId, btnEl) {
  const drawer = document.getElementById(drawerId);
  if (!drawer) return;
  const isOpen = drawer.classList.toggle("open");
  btnEl.style.background = isOpen ? "#fef3c7" : "";
  btnEl.style.borderColor = isOpen ? "#e5a00d" : "";
}

/**
 * Copy email to clipboard with fun toast notification
 */
function copyEmail(email) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email);
  }
  const toast = document.getElementById("copy-toast");
  const toastText = document.getElementById("copy-toast-text");
  if (toast && toastText) {
    toastText.textContent = `Disalin: ${email}`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }
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
 * Smart Natural-Language & Any-Keyword Search Engine
 * Handles conversational sentences (e.g., "nak pinjam pa system", "ambil baju jaket")
 * and matches if ANY meaningful keyword hits, ranked by relevance.
 */
const SEARCH_STOP_WORDS = new Set([
  "nak", "saya", "kami", "kita", "awak", "anda", "dia", "mereka",
  "macam", "mana", "bagaimana", "kenapa", "mengapa", "bila", "siapa", "apa",
  "kat", "dekat", "di", "ke", "dari", "daripada", "pada", "untuk", "bagi",
  "dengan", "dan", "atau", "serta", "yang", "ada", "tiada", "tak", "tidak", "x",
  "boleh", "tolong", "minta", "mintak", "tanya", "bertanya", "berkaitan",
  "pasal", "tentang", "isu", "masalah", "urusan", "kes", "hal", "ehwal",
  "cara", "langkah", "proses", "buat", "dapatkan", "dapat", "cari", "jumpa",
  "berjumpa", "hubungi", "pegawai", "staf", "staff", "kaunter", "unit",
  "bahagian", "jabatan", "pejabat", "jhep", "unimap", "pelajar", "mahasiswa",
  "universiti", "ya", "ye", "ni", "ini", "itu", "tu", "lah", "la", "je", "ja",
  "sahaja", "saja", "dah", "sudah", "belum", "masih", "lagi", "pun", "juga",
  "kalau", "jika", "sekiranya", "i", "want", "to", "need", "how", "where",
  "who", "can", "get", "the", "a", "an", "for", "in", "on", "at", "of", "and", "or"
]);

const GENERIC_ACTION_WORDS = new Set([
  "pinjam", "peminjaman", "meminjam", "pinjaman",
  "tempah", "tempahan", "menempah", "book", "booking",
  "semak", "semakan", "menyemak", "check", "cek",
  "mohon", "permohonan", "memohon", "apply",
  "daftar", "pendaftaran", "mendaftar",
  "tuntut", "tuntutan", "claim",
  "ambil", "pengambilan", "mengambil",
  "hantar", "serah", "serahan", "masuk", "kemasukan",
  "penganjuran", "pengurusan", "penyelarasan",
  "program", "aktiviti", "borang", "dokumen", "surat", "status", "rekod", "sistem",
  "rasmi", "korporat", "majlis"
]);

const SYNONYM_EXPAND = {
  "pinjam": ["pinjam", "peminjaman", "pinjaman"],
  "peminjaman": ["peminjaman", "pinjam"],
  "tempah": ["tempah", "tempahan"],
  "tempahan": ["tempahan", "tempah"],
  "book": ["tempah", "tempahan"],
  "booking": ["tempah", "tempahan"],
  "semak": ["semak", "semakan"],
  "semakan": ["semakan", "semak"],
  "check": ["semak", "semakan"],
  "cek": ["semak", "semakan"],
  "mohon": ["mohon", "permohonan"],
  "permohonan": ["permohonan", "mohon"],
  "tuntut": ["tuntut", "tuntutan"],
  "tuntutan": ["tuntutan", "tuntut"],
  "claim": ["tuntutan", "insurans"],
  "bayar": ["bayar", "bayaran", "pembayaran"],
  "bayaran": ["bayaran", "pembayaran"],
  "rawat": ["rawat", "rawatan"],
  "pindah": ["pindah", "pindahan", "pemindahan", "transfer"],
  "pakai": ["pakai", "pakaian", "baju"],
  "pakaian": ["pakaian", "baju", "jaket"],
  "tshirt": ["tshirt", "shirt", "baju"],
  "jacket": ["jaket"],
  "mic": ["mikrofon", "pa"],
  "sound": ["audio", "speaker", "pa"],
  "spek": ["kaca", "mata"],
  "cermin": ["kaca", "mata"],
  "ward": ["wad", "hospital"],
  "bus": ["bas"],
  "room": ["bilik"],
  "gift": ["cenderahati"],
  "souvenir": ["cenderahati"]
};

function buildStaffSearchIndex(item) {
  const cleanNegations = (str) => (str || "").toLowerCase().replace(/selain\s+pa\s+system/g, "");
  const primaryText = cleanNegations(`${item.name} ${item.tag} ${(item.helpsWith || []).join(" ")} ${item.keywords || ""}`);
  const secondaryText = cleanNegations(`${item.role} ${item.location} ${item.email} ${(item.fullUrusan || []).join(" ")}`);
  const fullText = `${primaryText} ${secondaryText}`;
  const words = fullText.split(/[^a-z0-9]+/).filter(Boolean);
  const primaryWords = new Set(primaryText.split(/[^a-z0-9]+/).filter(Boolean));
  return { fullText, primaryText, words, wordSet: new Set(words), primaryWords };
}

function tokenMatchesDoc(token, doc) {
  const variants = SYNONYM_EXPAND[token] || [token];
  let bestWeight = 0;

  for (const v of variants) {
    if (!v) continue;
    if (v.length <= 3) {
      // Short words (e.g. "pa", "gl", "oku", "mpp", "vip", "van", "bas", "ijn") MUST match exact whole word
      if (doc.primaryWords.has(v)) {
        bestWeight = Math.max(bestWeight, 14);
      } else if (doc.wordSet.has(v)) {
        bestWeight = Math.max(bestWeight, 9);
      }
    } else {
      // 4+ char words match exact whole word first, then prefix match on words >= 4 chars (avoids "janji" matching "perjanjian")
      if (doc.primaryWords.has(v)) {
        bestWeight = Math.max(bestWeight, 15);
      } else if (doc.wordSet.has(v)) {
        bestWeight = Math.max(bestWeight, 10);
      } else {
        for (const w of doc.words) {
          if (w.length >= 4 && (w.startsWith(v) || (v.length >= 5 && v.startsWith(w)))) {
            bestWeight = Math.max(bestWeight, doc.primaryWords.has(w) ? 8 : 5);
            break;
          }
        }
      }
    }
  }
  return bestWeight;
}

function computeMatchingStaff(query) {
  const clean = (query || "").trim().toLowerCase();
  if (!clean) return STAFF_DATA;

  const rawTokens = clean.split(/[^a-z0-9]+/).filter(Boolean);
  let meaningfulTokens = rawTokens.filter(t => !SEARCH_STOP_WORDS.has(t));
  if (meaningfulTokens.length === 0) {
    meaningfulTokens = rawTokens;
  }

  const topicTokens = meaningfulTokens.filter(t => !GENERIC_ACTION_WORDS.has(t));
  const actionTokens = meaningfulTokens.filter(t => GENERIC_ACTION_WORDS.has(t));

  const scoredMatches = [];

  STAFF_DATA.forEach((item, originalIndex) => {
    const doc = buildStaffSearchIndex(item);
    let score = 0;
    let matchedTopicCount = 0;
    let matchedActionCount = 0;

    if (clean.length >= 3 && doc.fullText.includes(clean)) {
      score += 50;
    }

    for (const tok of topicTokens) {
      const w = tokenMatchesDoc(tok, doc);
      if (w > 0) {
        score += w * 3;
        matchedTopicCount++;
      }
    }

    for (const tok of actionTokens) {
      const w = tokenMatchesDoc(tok, doc);
      if (w > 0) {
        score += w;
        matchedActionCount++;
      }
    }

    const isMatch = topicTokens.length > 0
      ? matchedTopicCount > 0
      : (matchedActionCount > 0 || score > 0);

    if (isMatch) {
      score += matchedTopicCount * 20;
      scoredMatches.push({ item, score, originalIndex });
    }
  });

  scoredMatches.sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);
  return scoredMatches.map(m => m.item);
}

function handleQuickSearch(query, resetChips = true) {
  const clean = query.trim().toLowerCase();
  const clearBtn = document.getElementById("btn-clear-vibe");
  const bridgeEl = document.getElementById("ask-ai-bridge");
  const bridgePreview = document.getElementById("bridge-query-preview");

  if (resetChips) {
    document.querySelectorAll(".question-chip").forEach((chip, idx) => {
      chip.classList.toggle("active", !clean && idx === 0);
    });
  }

  if (!clean) {
    if (clearBtn) clearBtn.style.display = "none";
    if (bridgeEl) bridgeEl.style.display = "none";
    renderStaffList(STAFF_DATA, "Semua Pegawai & Kaunter Bertugas");
    return;
  }

  if (clearBtn) clearBtn.style.display = "flex";
  if (bridgeEl && bridgePreview) {
    bridgePreview.textContent = `"${query.trim()}"`;
    bridgeEl.style.display = "block";
  }

  const matches = computeMatchingStaff(query);
  renderStaffList(matches, `Hasil Carian JHEP Assist: "${query}"`);
}

/**
 * Clear search
 */
function clearVibeSearch() {
  const input = document.getElementById("vibe-search-input");
  if (input) input.value = "";
  const clearBtn = document.getElementById("btn-clear-vibe");
  if (clearBtn) clearBtn.style.display = "none";
  const bridgeEl = document.getElementById("ask-ai-bridge");
  if (bridgeEl) bridgeEl.style.display = "none";
  document.querySelectorAll(".question-chip").forEach((chip, idx) => {
    chip.classList.toggle("active", idx === 0);
  });
  renderStaffList(STAFF_DATA, "Semua Pegawai & Kaunter Bertugas");
}

// ============================================================================
// UNIFIED HUB MODE SWITCHER & TANYAJHEP AI CHATBOT ENGINE (Bilingual + PIC Escalation)
// ============================================================================

let aiCurrentLang = "ms";
let aiHasStartedChat = false;

const AI_COPY = {
  ms: {
    newChat: "+ Perbualan Baharu",
    topicsHeader: "Soalan Lazim HEPA & Pembiayaan",
    emergencyPicLabel: "Kecemasan / Rujuk PIC Kebajikan",
    viewAllPicLabel: "Lihat Semua 18 Pegawai (PIC)",
    modelSubtag: "Pembantu Pintar HEPA & Pembiayaan UniMAP",
    placeholder: "Tanya tentang PTPTN, Kelas Pertama 2026, Zakat/GL Hospital, PILLARS, Baju Korporat, PA System...",
    caption: "Pembantu AI Rasmi HEPA UniMAP • Setiap jawapan disertakan pautan terus kepada Pegawai Bertanggungjawab (PIC) jika perlukan bantuan lanjut / kecemasan.",
    heroBadge: "PEMBANTU AI PINTAR HEPA UNIMAP",
    heroTitle: "Apa yang boleh saya bantu hari ini?",
    heroSub: "Tanya apa sahaja mengenai HEPA, PTPTN, Kebajikan/Kecemasan, PILLARS & Kemudahan JHEP dalam Bahasa Melayu atau English.",
    picHeader: "👤 Pegawai Bertanggungjawab (PIC) — Rujuk Jika Kecemasan / Info Lanjut:",
    picJumpBtn: "Lihat Penuh di Direktori PIC →",
    picAllBtn: "Lihat Semua 18 PIC JHEP →",
    starters: [
      {
        title: "🎓 Permohonan PTPTN, WPP (RM1,500) & Bank RHB",
        sub: "Jadual mohon, SSPN Prime (RM20), Tandatangan Digital RM25 & Kelas Pertama 2026",
        q: "Bagaimanakah cara memohon pinjaman PTPTN?"
      },
      {
        title: "🚨 Kecemasan, GL Hospital, Zakat & e-Tabung",
        sub: "Bantuan Ihsan masuk wad, surat jaminan hospital kerajaan, insurans, FoodBank & khairat",
        q: "Bagaimana cara memohon bantuan kecemasan, Bantuan Ihsan (sakit/masuk wad), Surat Jaminan (GL) Hospital, tuntutan insurans atau khairat kematian?"
      },
      {
        title: "⭐ Masalah Rekod PILLARS & Tahun Akhir",
        sub: "Pillars tak masuk sistem, hilang, gantian final year & pindahan Diploma ke Ijazah",
        q: "Bagaimana menyelesaikan masalah rekod PILLARS tidak dikemaskini, hilang, PILLARS gantian tahun akhir, atau pindahan PILLARS Diploma ke Ijazah?"
      },
      {
        title: "👕 Jaket/Baju Korporat, PA System & Tempahan Bilik",
        sub: "Ambil pakaian rasmi pelajar, pinjam PA System/peralatan, semak banner & bilik gerakan",
        q: "Bagaimana cara mengambil pakaian rasmi pelajar (jaket/baju korporat), menempah Bilik Gerakan/Mesyuarat, atau meminjam peralatan JHEP?"
      }
    ],
    greetingReply: `Waalaikumussalam dan salam sejahtera! 👋\n\nSaya ialah **TanyaJHEP AI**, pembantu pintar bersepadu **HEPA UniMAP**. Anda boleh bertanya kepada saya mengenai:\n- **Pembiayaan & PTPTN**: Permohonan myPTPTN, bank panel **RHB Islamic**, **Tandatangan Digital (RM25)**, **WPP (RM1,500)**, **BAeK eKasih**, **Dermasiswa SULUNG**, serta **Pengecualian Kelas Pertama (Syarat 2026)**.\n- **Kebajikan & Kecemasan**: **Surat Jaminan (GL) Hospital**, **Bantuan Ihsan (Sakit/Masuk Wad)**, Zakat, **e-Tabung**, FoodBank, Khairat Kematian & Skim Kaca Mata.\n- **PILLARS, Aktiviti & Kemudahan**: Penyelesaian **7 isu PILLARS**, tempahan **Bas/Van**, kelab/inovasi/MPP, **Pakaian Rasmi (Jaket/Baju)**, **PA System**, Protokol VIP & Bilik Gerakan.\n\n💡 *Setiap jawapan saya turut memaparkan Pegawai Bertanggungjawab (PIC) jika anda memerlukan rujukan lanjut atau kecemasan!*`,
    fallbackWithPic: (q) => `Berikut ialah maklumat **Pegawai Bertanggungjawab (PIC)** di JHEP UniMAP yang paling berkaitan dengan pertanyaan anda mengenai **"${q}"**.\n\nSila rujuk kad PIC di bawah untuk hadir ke kaunter atau berhubung terus melalui emel rasmi (terutamanya bagi kes kecemasan):`,
    fallbackNoPic: (q) => `Harap maaf, saya belum mempunyai artikel khusus bagi **"${q}"**.\n\nAnda boleh:\n1. Cuba kata kunci seperti *PTPTN*, *Kelas Pertama 2026*, *WPP RM1500*, *GL Hospital*, *e-Tabung*, *PILLARS*, *Baju Korporat*, *PA System*, atau *Tempahan Bas*.\n2. Atau klik butang di bawah untuk menyemak terus **Senarai 18 Pegawai Bertanggungjawab (PIC)** di Direktori JHEP Assist:`
  },
  en: {
    newChat: "+ New Conversation",
    topicsHeader: "HEPA & Financial Aid FAQs",
    emergencyPicLabel: "Emergency / Welfare PIC",
    viewAllPicLabel: "View All 18 JHEP Officers (PIC)",
    modelSubtag: "UniMAP HEPA & Financial Aid Smart Assistant",
    placeholder: "Ask about PTPTN, First Class 2026, Hospital GL / Zakat, PILLARS, Corporate Shirt, PA System...",
    caption: "Official UniMAP HEPA AI Assistant • Every reply includes direct Person-In-Charge (PIC) contacts for further help or emergencies.",
    heroBadge: "UNIMAP HEPA SMART AI ASSISTANT",
    heroTitle: "How can I help you today?",
    heroSub: "Ask anything about HEPA, PTPTN, Student Welfare/Emergencies, PILLARS & JHEP Facilities in English or Bahasa Melayu.",
    picHeader: "👤 Person-In-Charge (PIC) — Contact for Emergencies / Further Info:",
    picJumpBtn: "View Full PIC Card in Directory →",
    picAllBtn: "View All 18 JHEP PICs →",
    starters: [
      {
        title: "🎓 PTPTN Application, WPP (RM1,500) & RHB Bank",
        sub: "Application schedule, SSPN Prime (RM20), Digital Signature RM25 & First Class 2026",
        q: "How do I apply for a PTPTN education loan online?"
      },
      {
        title: "🚨 Emergency Aid, Hospital GL, Zakat & e-Tabung",
        sub: "Ward admission aid, government hospital GL, accident insurance, FoodBank & bereavement",
        q: "How do I apply for emergency aid, Hospital Guarantee Letter (GL), medical/accident insurance claims, or bereavement aid?"
      },
      {
        title: "⭐ PILLARS System Issues & Final-Year Transfer",
        sub: "Unupdated/missing PILLARS, final-year replacement & Diploma-to-Degree transfer",
        q: "How do I resolve missing/unupdated PILLARS records, final-year replacement PILLARS, or transferring Diploma PILLARS to Degree?"
      },
      {
        title: "👕 Student Jacket/Shirt, PA System & Room Booking",
        sub: "Official attire collection, PA System/equipment loan, banner vetting & meeting rooms",
        q: "How do I collect official student attire (jacket/corporate shirt), book JHEP meeting rooms, or borrow JHEP equipment?"
      }
    ],
    greetingReply: `Hello and Salam Sejahtera! 👋\n\nI am **TanyaJHEP AI**, the unified **UniMAP HEPA Smart Assistant**. Feel free to ask me about:\n- **Financial Aid & PTPTN**: myPTPTN applications, **RHB Islamic** panel bank, **Digital Signature (RM25)**, **WPP (RM1,500)**, **BAeK eKasih**, **Dermasiswa SULUNG**, and **First Class Exemption (2026 Rules)**.\n- **Welfare & Emergencies**: **Hospital Guarantee Letters (GL)**, **Ward Admission Aid (Bantuan Ihsan)**, Zakat, **e-Tabung**, FoodBank, Bereavement Aid & Spectacles Scheme.\n- **PILLARS, Activities & Facilities**: Resolving **7 PILLARS issues**, **Bus/Van** bookings, clubs/MPP, **Official Attire (Jacket/Shirt)**, **PA Systems**, VIP Protocol & Meeting Rooms.\n\n💡 *Every reply automatically links you to the exact Person-In-Charge (PIC) if you need further assistance or emergency support!*`,
    fallbackWithPic: (q) => `Here are the **Person-In-Charge (PIC)** officers at JHEP UniMAP most relevant to your inquiry about **"${q}"**.\n\nPlease refer to the PIC card(s) below to visit the counter or reach out via official email (especially for urgent cases):`,
    fallbackNoPic: (q) => `Sorry, I couldn't find a specific article for **"${q}"**.\n\nYou can:\n1. Try asking with keywords like *PTPTN*, *First Class 2026*, *WPP RM1500*, *Hospital GL*, *e-Tabung*, *PILLARS*, *Corporate Shirt*, *PA System*, or *Bus Booking*.\n2. Or click below to browse all **18 Person-In-Charge (PIC)** officers in the JHEP Assist Directory:`
  }
};

let currentHubMode = "directory";

function closeWelcomeModal() {
  const modal = document.getElementById("welcome-entry-modal");
  if (modal) modal.classList.add("hidden");
}

function selectInitialMode(mode) {
  closeWelcomeModal();
  switchHubMode(mode, false);
}

function toggleHubMode() {
  switchHubMode(currentHubMode === "chatbot" ? "directory" : "chatbot", false);
}

function toggleMobileFaqDrawer(open) {
  const drawer = document.getElementById("aiSidebarDrawer");
  const backdrop = document.getElementById("aiSidebarBackdrop");
  if (!drawer || !backdrop) return;
  const shouldOpen = typeof open === "boolean" ? open : !drawer.classList.contains("drawer-open");
  drawer.classList.toggle("drawer-open", shouldOpen);
  backdrop.classList.toggle("open", shouldOpen);
}

function switchHubMode(mode, shouldScroll = false) {
  const isChat = mode === "chatbot";
  currentHubMode = isChat ? "chatbot" : "directory";

  const dirWrap = document.getElementById("view-directory-wrapper");
  const chatWrap = document.getElementById("view-chatbot-wrapper");
  const modeDock = document.getElementById("floating-mode-dock");
  const dockDir = document.getElementById("dockBtnDirectory");
  const dockChat = document.getElementById("dockBtnChatbot");

  // Always close mobile FAQ drawer & welcome modal when switching modes
  toggleMobileFaqDrawer(false);
  closeWelcomeModal();

  if (dirWrap) dirWrap.style.display = isChat ? "none" : "block";
  if (chatWrap) chatWrap.style.display = isChat ? "block" : "none";

  // Keep bottom-right vertical Up/Down dock ALWAYS visible & highlight active mode
  if (modeDock) modeDock.classList.toggle("in-chat-mode", isChat);
  if (dockDir) dockDir.classList.toggle("active", !isChat);
  if (dockChat) dockChat.classList.toggle("active", isChat);

  // Lock background page scrolling while inside full-screen chatbot
  if (typeof document !== "undefined" && document.body) {
    document.body.style.overflow = isChat ? "hidden" : "";
  }

  if (isChat) {
    setTimeout(() => {
      const input = document.getElementById("aiUserInput");
      if (input && window.innerWidth > 768) input.focus();
    }, 200);
  } else if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function bridgeSearchToChatbot() {
  const searchInput = document.getElementById("vibe-search-input");
  const q = searchInput ? searchInput.value.trim() : "";
  switchHubMode("chatbot", true);
  if (q) {
    setTimeout(() => askAiChatbot(q), 180);
  }
}

function escalateToPicDirectory(picFilterQuery) {
  switchHubMode("directory", false);
  const searchInput = document.getElementById("vibe-search-input");
  if (picFilterQuery) {
    if (searchInput) searchInput.value = picFilterQuery;
    handleQuickSearch(picFilterQuery, true);
  } else {
    clearVibeSearch();
  }

  const dirSec = document.getElementById("staff-directory-section");
  if (dirSec) {
    dirSec.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Highlight matched PIC cards with a subtle golden spotlight pulse
  setTimeout(() => {
    document.querySelectorAll("#staff-grid .simple-staff-card").forEach(card => {
      card.classList.add("pic-spotlight-pulse");
      setTimeout(() => card.classList.remove("pic-spotlight-pulse"), 1800);
    });
  }, 250);
}

function renderMarkdownClean(md) {
  if (!md) return "";
  let html = md
    .replace(/^###\s?(.*$)/gim, "<h3>$1</h3>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");

  const lines = html.split("\n");
  let out = "";
  let inUl = false;
  let inOl = false;

  lines.forEach(line => {
    const t = line.trim();
    if (/^\d+[\.\)]\s+/.test(t)) {
      if (inUl) { out += "</ul>"; inUl = false; }
      if (!inOl) { out += "<ol>"; inOl = true; }
      out += `<li>${t.replace(/^\d+[\.\)]\s+/, "")}</li>`;
    } else if (/^[-•]\s+/.test(t)) {
      if (inOl) { out += "</ol>"; inOl = false; }
      if (!inUl) { out += "<ul>"; inUl = true; }
      out += `<li>${t.replace(/^[-•]\s+/, "")}</li>`;
    } else {
      if (inUl) { out += "</ul>"; inUl = false; }
      if (inOl) { out += "</ol>"; inOl = false; }
      if (t.startsWith("<h3>")) {
        out += t;
      } else if (t.length > 0) {
        out += `<p>${t}</p>`;
      }
    }
  });
  if (inUl) out += "</ul>";
  if (inOl) out += "</ol>";
  return out;
}

function initAiChatbot() {
  if (typeof UNIT_PEMBIAYAAN_DATA === "undefined") return;
  setAiLanguage("ms");

  const form = document.getElementById("aiComposerForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("aiUserInput");
      if (!input || !input.value.trim()) return;
      askAiChatbot(input.value);
      input.value = "";
    });
  }
}

function setAiLanguage(lang) {
  aiCurrentLang = lang;
  const btnMs = document.getElementById("aiBtnMs");
  const btnEn = document.getElementById("aiBtnEn");
  if (btnMs) btnMs.classList.toggle("active", lang === "ms");
  if (btnEn) btnEn.classList.toggle("active", lang === "en");

  const c = AI_COPY[lang];
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt("aiNewChatLabel", c.newChat);
  setTxt("aiTopicsHeader", c.topicsHeader);
  setTxt("aiEmergencyPicLabel", c.emergencyPicLabel);
  setTxt("aiViewAllPicLabel", c.viewAllPicLabel);
  setTxt("aiModelSubtag", c.modelSubtag);
  setTxt("aiComposerCaption", c.caption);

  const input = document.getElementById("aiUserInput");
  if (input) input.placeholder = c.placeholder;

  renderAiSidebarFAQs();
  if (!aiHasStartedChat) {
    renderAiHeroEmptyState();
  }
}

function renderAiSidebarFAQs() {
  const container = document.getElementById("aiSidebarTopics");
  if (!container || typeof UNIT_PEMBIAYAAN_DATA === "undefined") return;

  // Put HEPA-wide featured items + Unit Pembiayaan featured items in a balanced order
  const featured = UNIT_PEMBIAYAAN_DATA.filter(item => item.featuredFaq);
  const hepaFeatured = featured.filter(item => item.id && item.id.startsWith("hepa_"));
  const financeFeatured = featured.filter(item => !item.id || !item.id.startsWith("hepa_"));
  const ordered = [...hepaFeatured, ...financeFeatured];

  container.innerHTML = ordered.map(item => {
    const title = (item.faqLabel && (item.faqLabel[aiCurrentLang] || item.faqLabel.ms)) || item.soalan_utama;
    const q = aiCurrentLang === "en" ? item.soalan_en : item.soalan_utama;
    const safeQ = q.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    return `
      <button type="button" class="ai-faq-btn" onclick="toggleMobileFaqDrawer(false); askAiChatbot('${safeQ}')">
        <span class="ai-faq-q">Q.</span>
        <span>${title}</span>
      </button>
    `;
  }).join("");
}

function renderAiHeroEmptyState() {
  const col = document.getElementById("aiChatColumn");
  if (!col) return;
  const c = AI_COPY[aiCurrentLang];
  col.innerHTML = `
    <div class="ai-hero-greeting">
      <div class="ai-hero-badge">✨ ${c.heroBadge}</div>
      <h3>${c.heroTitle}</h3>
      <p>${c.heroSub}</p>
      <div class="ai-starter-grid">
        ${c.starters.map(s => {
          const safeQ = s.q.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
          return `
            <div class="ai-starter-card" onclick="askAiChatbot('${safeQ}')">
              <div class="ai-starter-title">${s.title}</div>
              <div class="ai-starter-sub">${s.sub}</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function startNewAiChat() {
  aiHasStartedChat = false;
  if (typeof lastMatchedItem !== "undefined") {
    lastMatchedItem = null;
  }
  renderAiHeroEmptyState();
}

function findPicsForChatbotReply(kbItem, rawQuery) {
  // 1. Check if the user's raw query pinpoints specific PICs directly
  const directMatches = computeMatchingStaff(rawQuery);

  if (kbItem) {
    // If kbItem explicitly specifies picQuery === "", it's general JHEP info (like Waktu Operasi)
    if (kbItem.picQuery === "") {
      return { pics: directMatches.length <= 4 ? directMatches.slice(0, 3) : [], filterKey: "" };
    }
    const filterKey = kbItem.picQuery || "PTPTN";
    const kbPics = computeMatchingStaff(filterKey);
    return { pics: kbPics.slice(0, 3), filterKey };
  }

  // Fallback query: use smart PIC matching on rawQuery!
  if (directMatches.length > 0 && directMatches.length < STAFF_DATA.length) {
    return { pics: directMatches.slice(0, 3), filterKey: rawQuery };
  }
  return { pics: [], filterKey: "" };
}

function buildPicHandoffHtml(pics, filterKey, lang) {
  const c = AI_COPY[lang] || AI_COPY.ms;
  const safeFilter = (filterKey || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");

  if (!pics || pics.length === 0) {
    return `
      <div class="ai-pic-handoff-box">
        <div class="ai-pic-handoff-header" style="margin-bottom:0;">
          <strong>${c.picHeader}</strong>
          <button type="button" class="btn-jump-pic-dir" onclick="escalateToPicDirectory('')">${c.picAllBtn}</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="ai-pic-handoff-box">
      <div class="ai-pic-handoff-header">
        <strong>${c.picHeader}</strong>
        <button type="button" class="btn-jump-pic-dir" onclick="escalateToPicDirectory('${safeFilter}')">${c.picJumpBtn}</button>
      </div>
      <div class="ai-pic-mini-list">
        ${pics.map(p => `
          <div class="ai-pic-mini-card">
            ${p.photo
              ? `<img src="${p.photo}" alt="${p.name}" class="ai-pic-mini-avatar">`
              : `<div class="ai-pic-mini-fallback">${p.initials || "JH"}</div>`
            }
            <div class="ai-pic-mini-info">
              <strong>${p.name}</strong>
              <span>📍 ${p.location}</span>
              <a href="mailto:${p.email}">✉️ ${p.email}</a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function askAiChatbot(text) {
  const query = (text || "").trim();
  if (!query || typeof searchKnowledgeBase === "undefined") return;

  const col = document.getElementById("aiChatColumn");
  const scroll = document.getElementById("aiChatScroll");
  if (!col || !scroll) return;

  if (!aiHasStartedChat) {
    col.innerHTML = "";
    aiHasStartedChat = true;
  }

  // 1. User Bubble
  const userBubble = document.createElement("div");
  userBubble.className = "ai-turn-user";
  userBubble.textContent = query;
  col.appendChild(userBubble);

  // 2. Assistant Typing Turn
  const assistantTurn = document.createElement("div");
  assistantTurn.className = "ai-turn-assistant";
  assistantTurn.innerHTML = `
    <div class="ai-turn-avatar">AI</div>
    <div class="ai-turn-body">
      <div class="ai-typing-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  col.appendChild(assistantTurn);
  scroll.scrollTo({ top: Math.max(0, userBubble.offsetTop - 14), behavior: "smooth" });

  // 3. Search Unified HEPA + Pembiayaan Knowledge Base
  const result = searchKnowledgeBase(query, aiCurrentLang);
  const lang = result.lang || aiCurrentLang;
  const c = AI_COPY[lang] || AI_COPY.ms;

  setTimeout(() => {
    const bodyEl = assistantTurn.querySelector(".ai-turn-body");
    let answerMd = "";
    let sourceRef = "";
    let links = [];
    let relatedItems = [];
    let picData = { pics: [], filterKey: "" };

    if (result.type === "greeting") {
      answerMd = c.greetingReply;
      picData = { pics: [], filterKey: "" };
    } else if (result.type === "match") {
      const heading = lang === "en" ? result.item.soalan_en : result.item.soalan_utama;
      const bodyText = lang === "en" ? result.item.jawapan_en : result.item.jawapan_rasmi;
      answerMd = `### ${heading}\n${bodyText}`;
      sourceRef = `JHEP UniMAP • ${result.item.section}`;
      links = result.item.pautan || [];
      relatedItems = result.related || [];
      picData = findPicsForChatbotReply(result.item, query);
    } else {
      picData = findPicsForChatbotReply(null, query);
      answerMd = picData.pics.length > 0 ? c.fallbackWithPic(query) : c.fallbackNoPic(query);
    }

    let html = renderMarkdownClean(answerMd);

    if (links.length > 0) {
      html += `<div class="ai-links-box">` +
        links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="ai-official-link">🔗 ${l.label} ↗</a>`).join("") +
        `</div>`;
    }

    if (sourceRef) {
      html += `<div class="ai-source-note">✓ ${sourceRef}</div>`;
    }

    // Inject Live PIC Handoff Card (so students can escalate to the responsible officer anytime!)
    if (result.type !== "greeting") {
      html += buildPicHandoffHtml(picData.pics, picData.filterKey, lang);
    }

    bodyEl.innerHTML = html;

    // Related follow-up question pills
    if (relatedItems.length > 0) {
      const fRow = document.createElement("div");
      fRow.className = "ai-followup-row";
      relatedItems.slice(0, 2).forEach(rel => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ai-followup-pill";
        const qText = lang === "en" ? rel.soalan_en : rel.soalan_utama;
        btn.textContent = "↪ " + qText;
        btn.onclick = () => askAiChatbot(qText);
        fRow.appendChild(btn);
      });
      bodyEl.appendChild(fRow);
    }

    // Gemini-style scroll: keep the user's question anchored at the top so the full answer reads naturally downward
    const targetTop = Math.max(0, userBubble.offsetTop - 14);
    scroll.scrollTo({ top: targetTop, behavior: "smooth" });
  }, 260);
}
