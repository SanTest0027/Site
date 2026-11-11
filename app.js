/**
 * Direktori Staf & Bantuan Pelajar JHEP UniMAP
 * Interactive Application Logic & Data Store
 */

// ==========================================
// 1. Data Store
// ==========================================

const DEPARTMENTS = [
  {
    id: "pembiayaan",
    name: "Unit Pembiayaan",
    shortName: "Pembiayaan & PTPTN",
    category: "PTPTN, Biasiswa & Penajaan",
    icon: "file-check",
    color: "#2563eb",
    slideImage: "images/16.png",
    description: "Menguruskan pinjaman pendidikan (PTPTN, MARA, JPA), biasiswa kerajaan/swasta, semakan status bayaran dan urusan dengan agensi penaja.",
    subtabs: ["Semua", "PTPTN", "Biasiswa & Agensi Penaja", "Dokumen Perjanjian", "Pengesahan Pengajian"],
    requiredDocs: [
      "Kad Matrik Pelajar UniMAP yang sah",
      "Salinan Kad Pengenalan Pelajar & Ibu Bapa",
      "Surat Tawaran Penajaan / Pinjaman (cth: Surat Tawaran PTPTN/MARA)",
      "Borang Perjanjian Lengkap Bertandatangan",
      "Penyata Akaun Bank yang aktif (jika berkaitan)"
    ],
    urusan: [
      { title: "Pinjaman Pendidikan PTPTN / MARA / JPA", sub: "PTPTN", desc: "Permohonan baharu, semakan kelayakan, kelompok permohonan dan serahan dokumen perjanjian." },
      { title: "Biasiswa & Penajaan Kerajaan / Swasta", sub: "Biasiswa & Agensi Penaja", desc: "Hebahan biasiswa, temu duga penajaan dan urusan permohonan pelajar." },
      { title: "Semakan Status Pembayaran Pembiayaan", sub: "PTPTN", desc: "Semakan status kemasukan wang pinjaman ke akaun bank pelajar bagi setiap semester." },
      { title: "Dokumen Perjanjian & Tawaran Penajaan", sub: "Dokumen Perjanjian", desc: "Proses saksi tandatangan pegawai dan penyerahan dokumen perjanjian lengkap." },
      { title: "Pengesahan Status Pengajian untuk Penaja", sub: "Pengesahan Pengajian", desc: "Penyediaan surat pengesahan pelajar aktif untuk dihantar kepada agensi penaja." },
      { title: "Masalah Pembiayaan & Khidmat Nasihat", sub: "PTPTN", desc: "Bantuan kes penangguhan tajaan, masalah GPA/CGPA bawah syarat penaja, atau penamatan tajaan." },
      { title: "Urusan Rasmi dengan Agensi Penaja", sub: "Biasiswa & Agensi Penaja", desc: "Penyelarasan bersama wakil JPA, MARA, Yayasan Negeri dan badan korporat penaja." }
    ],
    staff: [
      {
        id: "staf-1",
        name: "Nur Fadzliah Binti Othman",
        role: "Ketua Unit Pembiayaan",
        unit: "Unit Pembiayaan, JHEP",
        room: "Kaunter Pembiayaan, Aras 1, Pejabat JHEP UniMAP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8120)",
        email: "nurfadzliah@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Bertanggungjawab mengetuai urusan penajaan pelajar universiti, menyelaras pinjaman PTPTN, MARA, JPA, biasiswa negeri serta hubungan korporat dengan agensi penaja luar.",
        tags: ["PTPTN", "MARA / JPA", "Biasiswa", "Perjanjian Tajaan", "Agensi Penaja"],
        steps: [
          "Kenal pasti agensi penaja atau isu pembiayaan anda.",
          "Sediakan surat tawaran dan salinan dokumen perjanjian.",
          "Hadir ke kaunter Unit Pembiayaan atau hubungi pegawai untuk semakan.",
          "Dapatkan pengesahan rasmi dokumen atau status penajaan."
        ]
      },
      {
        id: "staf-2",
        name: "En. Nurfahmi Bin Abdul Rahim",
        role: "Pembantu Tadbir",
        unit: "Unit Pembiayaan, JHEP",
        room: "Kaunter Pembiayaan, Aras 1, Pejabat JHEP UniMAP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8121)",
        email: "nurfahmi@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menguruskan penerimaan dan semakan borang fizikal PTPTN/penaja, pengesahan dokumen sokongan, dan semakan rekod kemasukan bayaran pelajar.",
        tags: ["Semakan PTPTN", "Penyerahan Dokumen", "Urusan Kaunter"],
        steps: [
          "Bawa dokumen perjanjian asal dan salinan yang diperlukan.",
          "Ambil nombor giliran atau maklumkan urusan di kaunter.",
          "Serahkan dokumen kepada En. Nurfahmi untuk pengesahan & cop jabatan."
        ]
      }
    ]
  },
  {
    id: "kebajikan",
    name: "Unit Kebajikan Pelajar",
    shortName: "Kebajikan & Kesihatan",
    category: "Zakat, FoodBank, Kesihatan & Bantuan",
    icon: "heart-handshake",
    color: "#059669",
    slideImage: "images/18.png",
    description: "Mengendalikan pelbagai bantuan kebajikan, zakat korporat, FoodBank, tuntutan insurans kesihatan, surat jaminan hospital (GL), dan bantuan kecemasan pelajar.",
    subtabs: ["Semua", "Skim Kebajikan", "Skim Kesihatan & Insurans", "Bantuan Kecemasan & Waris"],
    requiredDocs: [
      "Kad Pelajar UniMAP",
      "Salinan Kad Pengenalan Pelajar",
      "Laporan Polis / Laporan Perubatan Hospital (bagi tuntutan kemalangan/kecurian)",
      "Sijil Kematian (bagi permohonan khairat kematian waris)",
      "Penyata Pendapatan / Slip Gaji Ibu Bapa (bagi permohonan zakat / bantuan khas)"
    ],
    urusan: [
      { title: "Bantuan Kewangan & Kebajikan Pelajar", sub: "Skim Kebajikan", desc: "Bantuan sara hidup dan kebajikan am untuk pelajar kurang berkemampuan." },
      { title: "Bantuan Awal Pengajian & Tabung Kasih UniMAP", sub: "Skim Kebajikan", desc: "Dana sokongan kemasukan awal dan tabung kebajikan khas universiti." },
      { title: "Bantuan Sumbangan Zakat Korporat & Zakat Majlis", sub: "Skim Kebajikan", desc: "Penyelarasan agihan wang zakat pelajar asnaf peringkat universiti." },
      { title: "Bantuan Mahasiswa Orang Kurang Upaya (OKU)", sub: "Skim Kebajikan", desc: "Kemudahan elaun khas dan kebajikan mahasiswa berkeperluan khas." },
      { title: "Skim Pinjaman Komputer Riba", sub: "Skim Kebajikan", desc: "Kemudahan pinjaman laptop bagi pelajar yang memerlukan untuk sesi akademik." },
      { title: "Hadiah Kasih Cemerlang (HKC) & Bantuan Tunai", sub: "Skim Kebajikan", desc: "Insentif kecemerlangan kebajikan dan bantuan tunai segera." },
      { title: "FoodBank UniMAP & Kupon Makanan Minggu Peperiksaan", sub: "Skim Kebajikan", desc: "Pengedaran makanan percuma, pek kering FoodBank dan kupon makan semasa peperiksaan." },
      { title: "Skim Pembelian Kaca Mata & PPE", sub: "Skim Kebajikan", desc: "Subsidi bantuan cermin mata dan kelengkapan makmal PPE untuk pelajar asnaf." },
      { title: "Bantuan Kematian & Khairat Waris Pelajar", sub: "Bantuan Kecemasan & Waris", desc: "Sumbangan khairat kematian ahli keluarga terdekat dan pengurusan jenazah." },
      { title: "Tuntutan Insurans Kemalangan & Rawatan Hospital", sub: "Skim Kesihatan & Insurans", desc: "Tuntutan insurans kelompok pelajar bagi kos rawatan dan wad akibat kemalangan." },
      { title: "Surat Jaminan Pelajar (Guarantee Letter / GL)", sub: "Skim Kesihatan & Insurans", desc: "Pengeluaran surat jaminan universiti untuk rawatan wad di Hospital Kerajaan." },
      { title: "Bantuan Rawatan di Institut Jantung Negara (IJN)", sub: "Skim Kesihatan & Insurans", desc: "Urusan kebajikan khusus rawatan kardiovaskular pelajar di IJN." }
    ],
    staff: [
      {
        id: "staf-welfare-1",
        name: "Pegawai Kebajikan & Kesihatan Pelajar",
        role: "Pegawai Kebajikan Pelajar",
        unit: "Unit Kebajikan Pelajar, JHEP",
        room: "Kaunter Kebajikan, Aras 1, Bangunan JHEP UniMAP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8130)",
        email: "kebajikan.jhep@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menguruskan bantuan kewangan kecemasan, FoodBank, skim zakat dan tuntutan insurans kesihatan pelajar UniMAP sepanjang tempoh pengajian.",
        tags: ["Zakat", "FoodBank", "Insurans Hospital", "GL Kerajaan", "Khairat Kematian"],
        steps: [
          "Bawa dokumen bukti (surat doktor, bil hospital, atau laporan berkaitan).",
          "Isi borang permohonan bantuan atau tuntutan insurans di kaunter.",
          "Pegawai akan memproses semakan dan memajukan untuk kelulusan/bayaran."
        ]
      }
    ]
  },
  {
    id: "kesukarelawan",
    name: "Unit Kesukarelawan & Jati Diri",
    shortName: "Kesukarelawan & PILLARS",
    category: "PILLARS, Sukarelawan & Bencana",
    icon: "award",
    color: "#ea580c",
    slideImage: "images/12.png",
    description: "Mengendalikan penganjuran aktiviti kesukarelawanan, bantuan banjir/misi kemanusiaan, serta penyelesaian semua masalah sistem PILLARS pelajar.",
    subtabs: ["Semua", "Isu PILLARS", "Aktiviti Kesukarelawanan", "Bantuan Bencana"],
    requiredDocs: [
      "Kad Matrik Pelajar",
      "Bukti kehadiran / Sijil penyertaan program (jika isu rekod pillars)",
      "Salinan transkrip kokurikulum / slip pendaftaran diploma (bagi pindahan pillars ke degree)",
      "Kertas kerja program kesukarelawanan (bagi kelab/persatuan penganjur)"
    ],
    urusan: [
      { title: "Pillars Tak Masuk / Belum Dikemas Kini", sub: "Isu PILLARS", desc: "Dah join program tapi rekod pillars belum masuk dlm sistem portal." },
      { title: "Cari Program PILLARS untuk Disertai", sub: "Isu PILLARS", desc: "Maklumat senarai hebahan dan pautan pendaftaran program pillars terkini." },
      { title: "Pernah Sertai Program Tetapi Rekod Hilang / Tiada Bukti", sub: "Isu PILLARS", desc: "Semakan log penganjur bagi pengesahan semula kehadiran program." },
      { title: "Semakan Rekod PILLARS yang Tiba-tiba Berkurang", sub: "Isu PILLARS", desc: "Penyelarasan teknikal data sistem merit & jam pillars bersama pusat IT." },
      { title: "Permohonan PILLARS Gantian Pelajar Tahun Akhir", sub: "Isu PILLARS", desc: "Khidmat nasihat dan urusan program khas memenuhi syarat graduasi final year." },
      { title: "Pindahan (Transfer) PILLARS Diploma ke Ijazah", sub: "Isu PILLARS", desc: "Pemindahan rekod jam aktiviti daripada pengajian diploma terdahulu ke program degree." },
      { title: "Penganjuran Aktiviti Kesukarelawanan & Misi Banjir", sub: "Aktiviti Kesukarelawanan", desc: "Penyelarasan sukarelawan UniMAP Prihatin ke lokasi bencana banjir atau komuniti." }
    ],
    staff: [
      {
        id: "staf-3",
        name: "Mohammad Irhamuddin Bin Mansor",
        role: "Ketua Unit Kesukarelawan & Jati Diri",
        unit: "Unit Kesukarelawan & Jati Diri, JHEP",
        room: "Bilik Unit Kesukarelawan, Aras 2, Pejabat JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8140)",
        email: "irhamuddin@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menyelaras modul pembangunan jati diri, aktiviti kesukarelawanan luar, misi bantuan banjir universiti serta dasar pensijilan PILLARS pelajar.",
        tags: ["PILLARS", "Misi Banjir", "Sukarelawan", "Transfer Pillars", "Final Year"],
        steps: [
          "Bawa bukti kehadiran atau maklumat program berkaitan.",
          "Hadir berjumpa pegawai untuk semakan sistem pangkalan data PILLARS.",
          "Kemaskini status akan disahkan secara terus dalam portal pelajar."
        ]
      },
      {
        id: "staf-4",
        name: "Noor Mas Ayu Binti Zahir Mozni",
        role: "Pembantu Tadbir",
        unit: "Unit Kesukarelawan & Jati Diri, JHEP",
        room: "Kaunter Kesukarelawan, Aras 2, Pejabat JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8141)",
        email: "masayu@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Mengendalikan urusan semakan data manual pillars pelajar, pendaftaran fail sukarelawan, dan dokumentasi program jati diri.",
        tags: ["Semakan Sistem", "Borang Pillars", "Kaunter Pelajar"],
        steps: [
          "Kemukakan nombor matrik dan nama program.",
          "Semak bukti kehadiran atau tandatangan peserta.",
          "Pengesahan kemasukan mata pillars."
        ]
      }
    ]
  },
  {
    id: "pengangkutan",
    name: "Unit Pengangkutan",
    shortName: "Bas & Kenderaan",
    category: "Jadual Bas & Tempahan Bas/Van",
    icon: "bus",
    color: "#7c3aed",
    slideImage: "images/14.png",
    description: "Mengendalikan perkhidmatan bas ulang-alik kuliah, bas peperiksaan, bas kokurikulum dan pengurusan tempahan kenderaan rasmi program pelajar.",
    subtabs: ["Semua", "Jadual Bas Kuliah", "Bas Peperiksaan & Koko", "Tempahan Bas / Van"],
    requiredDocs: [
      "Kad Pelajar UniMAP",
      "Kertas Kerja Program yang telah diluluskan (bagi tempahan bas/van)",
      "Borang Tempahan Kenderaan JHEP (lengkap tandatangan penasihat)",
      "Senarai nama penumpang & maklumat pemandu pengiring"
    ],
    urusan: [
      { title: "Pengurusan Jadual Bas Kuliah Harian", sub: "Jadual Bas Kuliah", desc: "Jadual laluan antara kolej kediaman, kampus Pauh Putra, Wang Ulu dan cawangan." },
      { title: "Perkhidmatan Bas Waktu Peperiksaan", sub: "Bas Peperiksaan & Koko", desc: "Jadual khas pergerakan pelajar ke dewan peperiksaan universiti." },
      { title: "Bas Pengangkutan Aktiviti Kokurikulum", sub: "Bas Peperiksaan & Koko", desc: "Penyelarasan bas untuk pelajar ke kompleks sukan & latihan badan beruniform." },
      { title: "Pengurusan Tempahan Bas & Van Aktiviti Pelajar", sub: "Tempahan Bas / Van", desc: "Permohonan penggunaan bas/van rasmi bagi program persatuan luar kampus." },
      { title: "Aduan Perkhidmatan & Kerosakan Bas", sub: "Jadual Bas Kuliah", desc: "Saluran aduan kelewatan bas, laluan dan kemudahan pengangkutan pelajar." }
    ],
    staff: [
      {
        id: "staf-5",
        name: "Asmadi Bin Othman",
        role: "Ketua Unit Pengangkutan",
        unit: "Unit Pengangkutan, JHEP",
        room: "Pejabat Unit Pengangkutan, Depoh / JHEP UniMAP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8150)",
        email: "asmadi@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menyelaras operasi keseluruhan jadual laluan bas universiti, kelulusan permohonan tempahan bas program pelajar, dan keselamatan armada kenderaan.",
        tags: ["Kelulusan Bas", "Jadual Kuliah", "Tempahan Program"],
        steps: [
          "Hantar borang tempahan selewat-lewatnya 14 hari sebelum program.",
          "Sertakan salinan kertas kerja yang telah diluluskan JHEP.",
          "Dapatkan pengesahan jadual pemandu dan nombor plat kenderaan."
        ]
      },
      {
        id: "staf-6",
        name: "Mohd Syairazi Bin Saedon",
        role: "Pemandu Kanan",
        unit: "Unit Pengangkutan, JHEP",
        room: "Bilik Pemandu JHEP",
        time: "Mengikut Jadual Operasi Bas",
        phone: "04-979 8000 (Samb. 8152)",
        email: "syairazi@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menguruskan operasi pemanduan bas, laluan harian pelajar, dan penyelarasan perjalanan program luar kampus.",
        tags: ["Operasi Bas", "Pemandu", "Laluan Kampus"],
        steps: ["Sila patuhi jadual pelepasan bas di stesen kolej kediaman."]
      },
      {
        id: "staf-7",
        name: "Huzaimi Bin Mohd Rodzi",
        role: "Pembantu Khidmat Am",
        unit: "Unit Pengangkutan, JHEP",
        room: "Pejabat Unit Pengangkutan, JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8153)",
        email: "huzaimi@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Membantu urusan kaunter logistik permohonan kenderaan, semakan borang, dan rekod penyelenggaraan kenderaan.",
        tags: ["Borang Tempahan", "Kaunter Logistik"],
        steps: ["Serahkan borang permohonan kenderaan di kaunter pengangkutan."]
      }
    ]
  },
  {
    id: "aktiviti",
    name: "Unit Aktiviti & Inovasi",
    shortName: "Aktiviti, Kelab & Inovasi",
    category: "Kelab, Program, Rekacipta & Debat",
    icon: "lightbulb",
    color: "#0284c7",
    slideImage: "images/10.png",
    description: "Menyelaras pendaftaran aktiviti pelajar, kelab & persatuan, pertandingan rekacipta, pelapis debat/pengucapan awam, sistem merit & program Signature JHEP.",
    subtabs: ["Semua", "Kelab & Persatuan", "Penganjuran Aktiviti", "Rekacipta & Debat", "Sistem Merit"],
    requiredDocs: [
      "Kad Pelajar UniMAP (Wakil Pengurusan Kelab)",
      "Kertas Kerja Program lengkap mengikut templat rasmi JHEP",
      "Borang Semakan Perlembagaan & Pendaftaran Kelab",
      "Borang Permohonan Pemarkahan Sistem Merit JHEP"
    ],
    urusan: [
      { title: "Penganjuran Aktiviti & Kelulusan Kertas Kerja", sub: "Penganjuran Aktiviti", desc: "Semakan draf kertas kerja program sebelum dihantar untuk kelulusan pengarah." },
      { title: "Pengurusan Pendaftaran Kelab / Persatuan Pelajar", sub: "Kelab & Persatuan", desc: "Pendaftaran persatuan baharu, pemilihan jawatankuasa dan AGM tahunan." },
      { title: "Program Pembangunan Inovasi Mahasiswa", sub: "Rekacipta & Debat", desc: "Latihan pemikiran kreatif dan sokongan projek inovasi pelajar ke peringkat kebangsaan." },
      { title: "Pertandingan Rekacipta & Inovasi (Penyertaan)", sub: "Rekacipta & Debat", desc: "Bantuan penyertaan pertandingan seperti inovasi dan pameran sains universiti." },
      { title: "Pembangunan Pelapis Debat & Pengucapan Awam", sub: "Rekacipta & Debat", desc: "Bimbingan kemahiran komunikasi berimpak tinggi dan pasukan pendebat universiti." },
      { title: "Sistem Merit & Pengurusan Program Signature JHEP", sub: "Sistem Merit", desc: "Pemberian merit acara dan pelaksanaan siri program berimpak tinggi Signature JHEP." }
    ],
    staff: [
      {
        id: "staf-8",
        name: "Muhammad Najib Othman",
        role: "Ketua Unit Aktiviti & Inovasi",
        unit: "Unit Aktiviti & Inovasi, JHEP",
        room: "Aras 2, Pejabat JHEP UniMAP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8160)",
        email: "najib@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menerajui pengurusan kelab & persatuan, pembangunan bakat inovasi teknologi mahasiswa, program Signature JHEP serta sistem merit kokurikulum.",
        tags: ["Kertas Kerja", "Kelab & Persatuan", "Inovasi", "Debat", "Merit"],
        steps: [
          "Semak tarikh permohonan sekurang-kurangnya sebulan sebelum acara.",
          "Hantar kertas kerja lengkap bersama ulasan penasihat kelab.",
          "Hadiri sesi taklimat kelulusan aktiviti bersama pegawai."
        ]
      }
    ]
  },
  {
    id: "kepimpinan",
    name: "Unit Kepimpinan & Kecemerlangan Bakat",
    shortName: "Kepimpinan & MPP",
    category: "MPP, Jawatankuasa Pelajar & Latihan",
    icon: "users-2",
    color: "#0d9488",
    slideImage: "images/7.png",
    description: "Menjaga hal ehwal Majlis Perwakilan Pelajar (MPP), badan kepimpinan kolej kediaman, latihan kepimpinan berwibawa, dan pembangunan keterampilan sahsiah pelajar.",
    subtabs: ["Semua", "MPP & Badan Kepimpinan", "Latihan & Keterampilan", "JPPM / PERSIMA"],
    requiredDocs: [
      "Kad Pelajar UniMAP",
      "Watikah perlantikan pemimpin pelajar / surat lantikan",
      "Kertas cadangan aktiviti kepimpinan"
    ],
    urusan: [
      { title: "Hal Ehwal Majlis Perwakilan Pelajar (MPP)", sub: "MPP & Badan Kepimpinan", desc: "Pengurusan mesyuarat, usul kebajikan mahasiswa dan penyelarasan program MPP." },
      { title: "Penyelarasan Badan Kepimpinan Pelajar", sub: "MPP & Badan Kepimpinan", desc: "Penyelarasan kepimpinan fakulti, persatuan anak negeri, dan persatuan antarabangsa." },
      { title: "Pengurusan PEM, JPPM, JPMU & PERSIMA", sub: "JPPM / PERSIMA", desc: "Penyelarasan jawatankuasa kepimpinan kolej kediaman dan persatuan berkanun." },
      { title: "Program Latihan Kepimpinan Pelajar", sub: "Latihan & Keterampilan", desc: "Bengkel kepimpinan holistik, latihan protokol dan kem bina semangat kepimpinan." },
      { title: "Pembangunan Keterampilan & Bakat Kepimpinan", sub: "Latihan & Keterampilan", desc: "Bimbingan kepimpinan muda untuk mewakili universiti di peringkat antarabangsa." }
    ],
    staff: [
      {
        id: "staf-9",
        name: "Ahmad Mu'adz Bin Nazari",
        role: "Ketua Unit Kepimpinan & Kecemerlangan Bakat",
        unit: "Unit Kepimpinan & Kecemerlangan Bakat, JHEP",
        room: "Aras 2, Bangunan Hal Ehwal Pelajar",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8170)",
        email: "muadz@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Bertanggungjawab menyelaras hal ehwal MPP, pemilihan kepimpinan mahasiswa, dan memperkasakan modul bakat serta kepimpinan pelajar.",
        tags: ["MPP", "Kepimpinan Pelajar", "Latihan Bakat", "PERSIMA"],
        steps: [
          "Hubungi pegawai untuk temu janji atau perbincangan isu kepimpinan.",
          "Bawa kertas kerja atau minit mesyuarat berkaitan.",
          "Dapatkan bimbingan penyelarasan bersama pihak pengurusan universiti."
        ]
      },
      {
        id: "staf-10",
        name: "Roziana Binti Ahmad Tajuddin",
        role: "Pembantu Tadbir",
        unit: "Unit Kepimpinan & Kecemerlangan Bakat, JHEP",
        room: "Pejabat Kepimpinan Pelajar, Aras 2, JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8171)",
        email: "roziana@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menguruskan dokumentasi rasmi kepimpinan pelajar, fail MPP, dan urusan surat rasmi panggilan mesyuarat kepimpinan.",
        tags: ["Dokumentasi MPP", "Surat Rasmi", "Urusan Pentadbiran"],
        steps: ["Serahkan borang pendaftaran watikah atau surat rasmi di kaunter."]
      }
    ]
  },
  {
    id: "pentadbiran",
    name: "Bahagian Pentadbiran & Kewangan",
    shortName: "Pentadbiran & Kewangan",
    category: "Cenderahati, Kewangan & Urusan Am",
    icon: "briefcase",
    color: "#1e3a8a",
    slideImage: "images/3.png",
    description: "Mengendalikan pengurusan am pejabat JHEP, urusan kewangan & perolehan, aset/inventori, laman web rasmi, media sosial jabatan dan urusan pengambilan cenderahati.",
    subtabs: ["Semua", "Cenderahati", "Kewangan & Perolehan", "Media & Web", "Sumber Manusia"],
    requiredDocs: [
      "Kad Staf / Kad Pelajar",
      "Surat / Borang Permohonan Pengambilan Cenderahati Rasmi",
      "Invois / Pesanan Tempatan (LO) bagi urusan kewangan & perolehan"
    ],
    urusan: [
      { title: "Urusan Pengambilan Cenderahati Rasmi Jabatan", sub: "Cenderahati", desc: "Permohonan dan penyerahan cenderahati rasmi universiti/JHEP untuk tetamu dan acara." },
      { title: "Hal Ehwal Kewangan Jabatan", sub: "Kewangan & Perolehan", desc: "Pengurusan bajet jabatan, semakan pembayaran tuntutan dan peruntukan program." },
      { title: "Perolehan & Pesanan Rasmi", sub: "Kewangan & Perolehan", desc: "Proses perolehan barangan, perkhidmatan dan tender jabatan." },
      { title: "Pengurusan Aset & Inventori", sub: "Kewangan & Perolehan", desc: "Pendaftaran aset alih, pelupusan dan pengurusan bilik stor JHEP." },
      { title: "Laman Web Rasmi & Sistem JHEP", sub: "Media & Web", desc: "Penyelenggaraan portal dalam talian dan sistem maklumat pelajar JHEP." },
      { title: "Media Sosial Rasmi Jabatan", sub: "Media & Web", desc: "Hebahan visual, siaran langsung dan makluman terkini melalui Facebook, IG & TikTok JHEP." },
      { title: "Pengurusan Sumber Manusia & Pentadbiran Am", sub: "Sumber Manusia", desc: "Urusan staf, cuti, latihan kakitangan dan perkhidmatan pelanggan am." }
    ],
    staff: [
      {
        id: "staf-11",
        name: "Azfardon Zulkamal Azmi",
        role: "Ketua Unit Pentadbiran & Kewangan",
        unit: "Unit Pentadbiran & Kewangan, JHEP",
        room: "Aras 1, Pejabat Am JHEP UniMAP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8101)",
        email: "azfardon@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Mengetuai tadbir urus pengurusan am, pengagihan belanjawan JHEP, operasi kaunter perkhidmatan pelanggan dan pengurusan staf.",
        tags: ["Pentadbiran", "Kewangan", "Perolehan", "Cenderahati", "Media"],
        steps: [
          "Bawa borang permohonan atau dokumen urusan berkaitan.",
          "Hadir ke kaunter pentadbiran Aras 1 Pejabat JHEP.",
          "Dapatkan kelulusan atau serahan dokumen daripada pegawai bertugas."
        ]
      },
      {
        id: "staf-12",
        name: "Nordiana Binti Jamadin",
        role: "Pegawai Pentadbiran",
        unit: "Unit Pentadbiran & Kewangan, JHEP",
        room: "Aras 1, Pejabat JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8102)",
        email: "nordiana@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menyelaras hal ehwal pengurusan sumber manusia jabatan dan perolehan perkhidmatan.",
        tags: ["Sumber Manusia", "Pentadbiran Am"],
        steps: ["Urusan berkaitan rekod staf dan latihan kakitangan."]
      },
      {
        id: "staf-13",
        name: "Mohd Khairul Effendi Bin Che Wan",
        role: "Pegawai Kewangan",
        unit: "Unit Pentadbiran & Kewangan, JHEP",
        room: "Aras 1, Pejabat JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8103)",
        email: "khairul.effendi@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menyemak bayaran tuntutan aktiviti, perolehan jabatan, dan invois perkhidmatan.",
        tags: ["Kewangan", "Tuntutan Program", "Invois"],
        steps: ["Sila pastikan dokumen kewangan disokong resit asal yang sah."]
      },
      {
        id: "staf-14",
        name: "Nor Faezah Binti Mirdukhim @ Mustapa",
        role: "Pembantu Tadbir (Kewangan / Cenderahati)",
        unit: "Unit Pentadbiran & Kewangan, JHEP",
        room: "Kaunter Pengurusan Cenderahati, Aras 1, JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8104)",
        email: "norfaezah@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Menguruskan stok dan permohonan serahan cenderahati rasmi universiti untuk program.",
        tags: ["Cenderahati", "Stok", "Aset"],
        steps: ["Bawa borang permohonan cenderahati yang telah diluluskan oleh Pengarah/Timbalan."]
      },
      {
        id: "staf-15",
        name: "Mohd Yusri Bin Yusob Kebkamen",
        role: "Pembantu Operasi",
        unit: "Unit Pentadbiran & Kewangan, JHEP",
        room: "Pejabat Am JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8105)",
        email: "mohdyusri@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Membantu urusan logistik cenderahati, pergerakan fail dan pengurusan aset inventori fizikal.",
        tags: ["Logistik", "Aset"],
        steps: ["Pengesahan serahan barangan fizikal di stor pejabat."]
      },
      {
        id: "staf-16",
        name: "Norhafizah Binti Ismail",
        role: "Pembantu Tadbir (Media & Laman Web)",
        unit: "Unit Pentadbiran & Kewangan, JHEP",
        room: "Unit Media & Komunikasi, Aras 1, JHEP",
        time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
        phone: "04-979 8000 (Samb. 8106)",
        email: "norhafizah@unimap.edu.my",
        whatsapp: "60190000000",
        avatar: "",
        badge: "Sedia Membantu",
        bio: "Mengendalikan muat naik hebahan laman web rasmi jabatan dan reka bentuk hebahan media sosial.",
        tags: ["Laman Web", "Media Sosial", "Hebahan Rasmi"],
        steps: ["Hantar bahan hebahan sekurang-kurangnya 3 hari bekerja sebelum tarikh acara."]
      }
    ]
  }
];

// Top Leadership Data (from Slide 1.png)
const LEADERSHIP = [
  {
    name: "Prof. Madya Ir. Ts. Dr. Mohamad Syahmie Bin Mohamad Rasidi",
    role: "Pengarah",
    dept: "Jabatan Hal Ehwal Pelajar & Alumni (JHEP)",
    room: "Pejabat Pengarah, Aras 2, JHEP UniMAP",
    phone: "04-979 8001",
    email: "syahmie@unimap.edu.my",
    whatsapp: "60190000000",
    avatar: "",
    bio: "Menerajui visi kepimpinan Hal Ehwal Pelajar dan Alumni UniMAP ke arah melahirkan graduan berkeperibadian tinggi, berdaya saing dan holistik.",
    tags: ["Dasar JHEP", "Pengurusan Tertinggi", "Hal Ehwal Pelajar & Alumni"]
  },
  {
    name: "Dr. Wan Safuraa Binti Wan Osman",
    role: "Timbalan Pengarah 1",
    dept: "Jabatan Hal Ehwal Pelajar & Alumni (JHEP)",
    room: "Pejabat Timbalan Pengarah 1, Aras 2, JHEP UniMAP",
    phone: "04-979 8002",
    email: "wansafuraa@unimap.edu.my",
    whatsapp: "60190000000",
    avatar: "",
    bio: "Menyelaras hal ehwal pemerkasaan pelajar, aktiviti inovasi, kelab dan pembangunan sahsiah mahasiswa universiti.",
    tags: ["Pemerkasaan Pelajar", "Pembangunan Insan"]
  },
  {
    name: "Ts. Dr. Muhamad Hafiz Bin Ab Aziz",
    role: "Timbalan Pengarah 2",
    dept: "Jabatan Hal Ehwal Pelajar & Alumni (JHEP)",
    room: "Pejabat Timbalan Pengarah 2, Aras 2, JHEP UniMAP",
    phone: "04-979 8003",
    email: "mhafiz@unimap.edu.my",
    whatsapp: "60190000000",
    avatar: "",
    bio: "Menyelaras urusan kebajikan, skim pembiayaan, logistik pengangkutan dan kemudahan asas pelajar universiti.",
    tags: ["Kebajikan", "Pembiayaan", "Pengangkutan"]
  },
  {
    name: "En. Hasrul Nizam Bin Halim",
    role: "Timbalan Pendaftar",
    dept: "Jabatan Hal Ehwal Pelajar & Alumni (JHEP)",
    room: "Pejabat Timbalan Pendaftar, Aras 2, JHEP UniMAP",
    phone: "04-979 8004",
    email: "hasrulnizam@unimap.edu.my",
    whatsapp: "60190000000",
    avatar: "",
    bio: "Menguruskan operasi tadbir urus pentadbiran, tatatertib, sumber manusia dan perkhidmatan sokongan JHEP.",
    tags: ["Pentadbiran Am", "Perkhidmatan Sokongan"]
  }
];

// Combine all staff into one flattened array for global search & directories
let ALL_STAFF = [];
DEPARTMENTS.forEach(dept => {
  dept.staff.forEach(s => {
    ALL_STAFF.push({ ...s, deptId: dept.id, deptName: dept.name });
  });
});
LEADERSHIP.forEach(l => {
  ALL_STAFF.push({
    ...l,
    id: "lead-" + l.name.replace(/\s+/g, '-').toLowerCase(),
    unit: l.dept,
    time: "Isnin - Jumaat (8.30 pg - 4.30 ptg)",
    deptId: "pentadbiran",
    deptName: "Pengurusan Tertinggi JHEP",
    steps: ["Sila buat temu janji rasmi melalui pejabat setiausaha sebelum hadir."]
  });
});

// ==========================================
// 2. Initialization
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryGrid();
  renderLeadershipGrid();
  lucide.createIcons();
});

// ==========================================
// 3. Render Functions
// ==========================================

function renderCategoryGrid() {
  const grid = document.getElementById("category-grid");
  if (!grid) return;

  grid.innerHTML = DEPARTMENTS.map(dept => `
    <div class="cat-card" onclick="selectUnitById('${dept.id}')">
      <div class="cat-icon-box" style="color: ${dept.color}; background-color: ${dept.color}15;">
        <i data-lucide="${dept.icon}"></i>
      </div>
      <div class="cat-card-body">
        <h3 class="cat-card-title">${dept.shortName}</h3>
        <p class="cat-card-desc">${dept.category}</p>
      </div>
      <div class="cat-arrow">
        <i data-lucide="chevron-right" class="icon-sm"></i>
      </div>
    </div>
  `).join("");
}

function renderLeadershipGrid() {
  const grid = document.getElementById("leadership-grid");
  if (!grid) return;

  grid.innerHTML = LEADERSHIP.map(l => `
    <div class="leader-card">
      <div class="leader-avatar-wrap">
        <div class="leader-avatar-fallback">
          ${getInitials(l.name)}
        </div>
      </div>
      <h4 class="leader-name">${l.name}</h4>
      <div class="leader-role">${l.role}</div>
      <button class="btn-view-profile-sm" onclick="openStaffModalByName('${l.name}')">Lihat Profil</button>
    </div>
  `).join("");
}

// ==========================================
// 4. Navigation & View Switching
// ==========================================

function navigateToHome(e) {
  if (e) e.preventDefault();
  document.getElementById("home-view").style.display = "block";
  document.getElementById("unit-detail-view").style.display = "none";
  document.getElementById("all-staff-view").style.display = "none";
  document.getElementById("breadcrumb-bar").style.display = "none";
  clearSearch();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectUnitById(deptId) {
  const dept = DEPARTMENTS.find(d => d.id === deptId);
  if (!dept) return;

  // Hide home, show detail
  document.getElementById("home-view").style.display = "none";
  document.getElementById("all-staff-view").style.display = "none";
  document.getElementById("search-results-section").style.display = "none";
  
  const unitView = document.getElementById("unit-detail-view");
  unitView.style.display = "block";

  // Breadcrumbs
  const bcBar = document.getElementById("breadcrumb-bar");
  bcBar.style.display = "block";
  document.getElementById("bc-current").textContent = dept.name;

  // Header
  document.getElementById("unit-badge-tag").textContent = "JABATAN HAL EHWAL PELAJAR";
  document.getElementById("unit-hero-title").textContent = dept.name;
  document.getElementById("unit-hero-subtitle").textContent = dept.description;

  // Slide photo if exists
  const photoContainer = document.getElementById("unit-hero-photo-container");
  if (dept.slideImage) {
    photoContainer.innerHTML = `<img src="${dept.slideImage}" alt="${dept.name}" onerror="this.parentElement.style.display='none'">`;
    photoContainer.style.display = "block";
  } else {
    photoContainer.style.display = "none";
  }

  // Subtabs
  const subtabsContainer = document.getElementById("unit-sub-tabs");
  subtabsContainer.innerHTML = dept.subtabs.map((tab, idx) => `
    <button class="unit-subtab ${idx === 0 ? 'active' : ''}" onclick="filterUnitSubtab('${dept.id}', '${tab}', this)">
      ${tab}
    </button>
  `).join("");

  // Populate Staff Cards
  renderUnitStaff(dept.staff, dept.name);

  // Populate Urusan items
  renderUnitUrusan(dept.urusan);

  // Populate Required Docs
  const docsList = document.getElementById("unit-docs-checklist");
  docsList.innerHTML = dept.requiredDocs.map(doc => `
    <li><i data-lucide="check-circle-2" class="icon-check"></i> ${doc}</li>
  `).join("");

  lucide.createIcons();
  window.scrollTo({ top: 180, behavior: 'smooth' });
}

function filterUnitSubtab(deptId, tabName, btnEl) {
  const dept = DEPARTMENTS.find(d => d.id === deptId);
  if (!dept) return;

  // Toggle active class
  const buttons = document.querySelectorAll(".unit-subtab");
  buttons.forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");

  if (tabName === "Semua") {
    renderUnitUrusan(dept.urusan);
  } else {
    const filtered = dept.urusan.filter(u => u.sub === tabName || u.title.toLowerCase().includes(tabName.toLowerCase()));
    renderUnitUrusan(filtered.length > 0 ? filtered : dept.urusan);
  }
  lucide.createIcons();
}

function renderUnitStaff(staffList, unitName) {
  const container = document.getElementById("unit-staff-grid");
  document.getElementById("staff-count-badge").textContent = `${staffList.length} Pegawai`;

  container.innerHTML = staffList.map(s => `
    <div class="staff-card">
      <div class="staff-header-area">
        <div class="staff-avatar-box">
          <div class="initials">${getInitials(s.name)}</div>
        </div>
        <div class="staff-meta">
          <h4>${s.name}</h4>
          <div class="staff-role-tag">${s.role}</div>
          <div class="staff-unit-tag">${s.unit || unitName}</div>
        </div>
      </div>
      
      <p class="staff-summary-text">${s.bio}</p>

      <div class="staff-contact-list">
        <div class="staff-contact-row">
          <i data-lucide="map-pin" class="icon-xs"></i>
          <span>${s.room}</span>
        </div>
        <div class="staff-contact-row">
          <i data-lucide="phone" class="icon-xs"></i>
          <span>${s.phone}</span>
        </div>
        <div class="staff-contact-row">
          <i data-lucide="mail" class="icon-xs"></i>
          <span>${s.email}</span>
        </div>
      </div>

      <div class="staff-card-actions">
        <button class="btn-card-details" onclick="openStaffModalById('${s.id}')">
          <i data-lucide="info" class="icon-xs"></i>
          <span>Lihat Butiran</span>
        </button>
        <a href="https://wa.me/${s.whatsapp}?text=Salam%20En%2FPuan%2C%20saya%20pelajar%20UniMAP%20ingin%20bertanya%20mengenai%20urusan%20di%20JHEP" target="_blank" class="btn-card-whatsapp">
          <i data-lucide="message-circle" class="icon-xs"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  `).join("");
}

function renderUnitUrusan(urusanList) {
  const container = document.getElementById("unit-urusan-items");
  if (!urusanList || urusanList.length === 0) {
    container.innerHTML = `<p style="grid-column: span 2; color: #64748b; font-size: 0.85rem;">Tiada urusan disenaraikan untuk kategori ini.</p>`;
    return;
  }

  container.innerHTML = urusanList.map(u => `
    <div class="urus-item-pill">
      <div class="urus-item-dot"></div>
      <div>
        <strong class="urus-item-text">${u.title}</strong>
        ${u.desc ? `<p style="font-size: 0.76rem; color: #64748b; margin-top: 2px;">${u.desc}</p>` : ''}
      </div>
    </div>
  `).join("");
}

// ==========================================
// 5. Global Search Functionality
// ==========================================

function handleSearch(query) {
  const clearBtn = document.getElementById("clear-search-btn");
  const searchSection = document.getElementById("search-results-section");
  const resultsContainer = document.getElementById("search-results-container");
  const queryDisplay = document.getElementById("search-query-text");

  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) {
    clearBtn.style.display = "none";
    searchSection.style.display = "none";
    return;
  }

  clearBtn.style.display = "flex";
  searchSection.style.display = "block";
  queryDisplay.textContent = query;

  // Search through Staff, Units, and Urusan
  let results = [];

  // 1. Search in Departments / Units
  DEPARTMENTS.forEach(dept => {
    if (dept.name.toLowerCase().includes(cleanQuery) || 
        dept.category.toLowerCase().includes(cleanQuery) ||
        dept.description.toLowerCase().includes(cleanQuery)) {
      results.push({
        type: "Unit JHEP",
        title: dept.name,
        desc: dept.description,
        action: () => selectUnitById(dept.id)
      });
    }

    // Search in Urusan inside this dept
    dept.urusan.forEach(u => {
      if (u.title.toLowerCase().includes(cleanQuery) || (u.desc && u.desc.toLowerCase().includes(cleanQuery))) {
        results.push({
          type: `Urusan (${dept.shortName})`,
          title: u.title,
          desc: u.desc || `Di bawah pengurusan ${dept.name}`,
          action: () => selectUnitById(dept.id)
        });
      }
    });
  });

  // 2. Search in Staff
  ALL_STAFF.forEach(staff => {
    if (staff.name.toLowerCase().includes(cleanQuery) || 
        staff.role.toLowerCase().includes(cleanQuery) ||
        (staff.tags && staff.tags.some(t => t.toLowerCase().includes(cleanQuery)))) {
      results.push({
        type: "Pegawai / Staf",
        title: staff.name,
        desc: `${staff.role} — ${staff.unit || staff.deptName}`,
        action: () => openStaffModalById(staff.id)
      });
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 20px; text-align: center; color: #64748b;">
        <i data-lucide="help-circle" style="width: 36px; height: 36px; margin-bottom: 8px; color: #94a3b8;"></i>
        <p>Tiada padanan dijumpai untuk carian "<b>${query}</b>".</p>
        <p style="font-size: 0.82rem; margin-top: 4px;">Cuba kata kunci lain seperti <i>PTPTN, Pillars, bas, kebajikan, zakat, biasiswa</i> atau rujuk Kaunter Utama JHEP.</p>
      </div>
    `;
  } else {
    resultsContainer.innerHTML = results.slice(0, 9).map(r => `
      <div class="search-result-card" onclick="(${r.action.toString()})()">
        <div class="search-res-type">${r.type}</div>
        <h4 class="search-res-title">${r.title}</h4>
        <p class="search-res-desc">${r.desc}</p>
      </div>
    `).join("");
  }

  lucide.createIcons();
}

function clearSearch() {
  const input = document.getElementById("global-search-input");
  if (input) input.value = "";
  document.getElementById("clear-search-btn").style.display = "none";
  document.getElementById("search-results-section").style.display = "none";
}

function quickSearch(kw) {
  const input = document.getElementById("global-search-input");
  input.value = kw;
  handleSearch(kw);
  window.scrollTo({ top: 320, behavior: 'smooth' });
}

function triggerSearch() {
  const input = document.getElementById("global-search-input");
  handleSearch(input.value);
}

// ==========================================
// 6. Modal Functions (Profile & Guides)
// ==========================================

function openStaffModalById(staffId) {
  const staff = ALL_STAFF.find(s => s.id === staffId);
  if (!staff) return;
  displayStaffInModal(staff);
}

function openStaffModalByName(name) {
  const staff = ALL_STAFF.find(s => s.name.toLowerCase().includes(name.toLowerCase()));
  if (!staff) return;
  displayStaffInModal(staff);
}

function displayStaffInModal(staff) {
  const modalContent = document.getElementById("staff-modal-content");
  
  modalContent.innerHTML = `
    <div class="profile-modal-grid">
      <!-- Left Column: Details -->
      <div class="profile-main-card">
        <div class="profile-top-info">
          <div class="profile-avatar-lg">
            <div class="profile-avatar-fallback-lg">
              ${getInitials(staff.name)}
            </div>
          </div>
          <div class="profile-header-meta">
            <div class="profile-badge-row">
              <span class="status-badge">
                <i data-lucide="check-circle" class="icon-xs"></i>
                <span>${staff.badge || 'Sedia Membantu'}</span>
              </span>
            </div>
            <h3 class="profile-name">${staff.name}</h3>
            <div class="profile-role-title">${staff.role}</div>

            <table class="profile-info-table">
              <tr>
                <td class="label-col"><i data-lucide="building" class="icon-xs"></i> Unit</td>
                <td class="val-col">: ${staff.unit || staff.deptName}</td>
              </tr>
              <tr>
                <td class="label-col"><i data-lucide="map-pin" class="icon-xs"></i> Lokasi Pejabat</td>
                <td class="val-col">: ${staff.room}</td>
              </tr>
              <tr>
                <td class="label-col"><i data-lucide="clock" class="icon-xs"></i> Waktu Pejabat</td>
                <td class="val-col">: ${staff.time || 'Isnin – Jumaat, 8.30 pagi – 4.30 petang'}</td>
              </tr>
              <tr>
                <td class="label-col"><i data-lucide="phone" class="icon-xs"></i> Telefon</td>
                <td class="val-col">: ${staff.phone}</td>
              </tr>
              <tr>
                <td class="label-col"><i data-lucide="mail" class="icon-xs"></i> Emel</td>
                <td class="val-col">: ${staff.email}</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="profile-section-block">
          <h5><i data-lucide="user" class="icon-xs"></i> Biodata & Bidang Tugas</h5>
          <p>${staff.bio}</p>
        </div>

        <div class="profile-section-block">
          <h5><i data-lucide="tag" class="icon-xs"></i> Bidang Bantuan & Skop Tugas</h5>
          <div class="tags-cloud">
            ${(staff.tags || []).map(t => `<span class="tag-badge"><i data-lucide="check" class="icon-xs"></i> ${t}</span>`).join("")}
          </div>
        </div>

        <div class="profile-section-block">
          <h5><i data-lucide="check-square" class="icon-xs"></i> Cara Berurusan & Langkah Disyorkan</h5>
          <ol style="margin-left: 20px; font-size: 0.85rem; color: #475569; display: flex; flex-direction: column; gap: 6px;">
            ${(staff.steps || [
              "Sediakan dokumen pengenalan diri (Kad Pelajar & Kad Pengenalan).",
              "Hubungi pegawai melalui telefon, emel atau WhatsApp terlebih dahulu jika perlu.",
              "Nyatakan tujuan urusan dan maklumat pelajar dengan jelas.",
              "Ikuti arahan seterusnya atau hadir ke kaunter pejabat JHEP."
            ]).map(st => `<li>${st}</li>`).join("")}
          </ol>
        </div>
      </div>

      <!-- Right Column: Quick Contact & Required Docs -->
      <div class="profile-sidebar">
        <div class="contact-action-box">
          <h5><i data-lucide="message-square" class="icon-xs"></i> Hubungi Pegawai Ini</h5>
          <div class="btn-contact-grid">
            <a href="tel:${staff.phone}" class="btn-contact-action primary">
              <i data-lucide="phone-call" class="icon-xs"></i>
              <span>Hubungi Pejabat</span>
            </a>
            <a href="mailto:${staff.email}?subject=Pertanyaan%20Pelajar%20JHEP%20UniMAP" class="btn-contact-action">
              <i data-lucide="mail" class="icon-xs"></i>
              <span>Emel</span>
            </a>
            <a href="https://wa.me/${staff.whatsapp}?text=Salam%20${encodeURIComponent(staff.name)}%2C%20saya%20pelajar%20UniMAP%20ingin%20bertanya%20urusan%20di%20JHEP" target="_blank" class="btn-contact-action whatsapp">
              <i data-lucide="message-circle" class="icon-xs"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="sidebar-docs-card" style="margin-bottom: 0;">
          <h4><i data-lucide="file-check-2" class="icon-sm"></i> Dokumen yang Perlu Dibawa</h4>
          <ul class="doc-checklist">
            <li><i data-lucide="check-circle-2" class="icon-check"></i> Kad Matrik Pelajar Asal</li>
            <li><i data-lucide="check-circle-2" class="icon-check"></i> Salinan Kad Pengenalan Pelajar</li>
            <li><i data-lucide="check-circle-2" class="icon-check"></i> Surat Tawaran / Pengesahan Pengajian</li>
            <li><i data-lucide="check-circle-2" class="icon-check"></i> Dokumen berkaitan urusan (cth: borang, resit, slip gaji)</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.getElementById("staff-modal").style.display = "flex";
  lucide.createIcons();
}

function closeStaffModal() {
  document.getElementById("staff-modal").style.display = "none";
}

function openQuickGuideModal() {
  document.getElementById("guide-modal").style.display = "flex";
  lucide.createIcons();
}

function closeGuideModal() {
  document.getElementById("guide-modal").style.display = "none";
}

// ==========================================
// 7. All Staff Directory View
// ==========================================

function openAllStaffView() {
  document.getElementById("home-view").style.display = "none";
  document.getElementById("unit-detail-view").style.display = "none";
  document.getElementById("search-results-section").style.display = "none";
  
  const allStaffView = document.getElementById("all-staff-view");
  allStaffView.style.display = "block";

  // Breadcrumbs
  const bcBar = document.getElementById("breadcrumb-bar");
  bcBar.style.display = "block";
  document.getElementById("bc-current").textContent = "Direktori Lengkap Staf";

  // Filter pills
  const pillsContainer = document.getElementById("staff-filter-pills");
  const uniqueDepts = ["Semua", "Pengurusan Tertinggi", "Pembiayaan", "Kebajikan", "Kesukarelawan", "Pengangkutan", "Aktiviti", "Kepimpinan", "Pentadbiran"];
  
  pillsContainer.innerHTML = uniqueDepts.map((d, i) => `
    <button class="filter-pill-btn ${i === 0 ? 'active' : ''}" onclick="filterAllStaffList('${d}', this)">
      ${d}
    </button>
  `).join("");

  renderAllStaffCards(ALL_STAFF);
  lucide.createIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterAllStaffList(category, btnEl) {
  document.querySelectorAll(".filter-pill-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");

  if (category === "Semua") {
    renderAllStaffCards(ALL_STAFF);
  } else if (category === "Pengurusan Tertinggi") {
    renderAllStaffCards(ALL_STAFF.filter(s => s.deptName && s.deptName.includes("Pengurusan Tertinggi")));
  } else {
    renderAllStaffCards(ALL_STAFF.filter(s => (s.unit && s.unit.toLowerCase().includes(category.toLowerCase())) || (s.deptName && s.deptName.toLowerCase().includes(category.toLowerCase()))));
  }
  lucide.createIcons();
}

function renderAllStaffCards(list) {
  const grid = document.getElementById("all-staff-grid");
  grid.innerHTML = list.map(s => `
    <div class="staff-card">
      <div class="staff-header-area">
        <div class="staff-avatar-box">
          <div class="initials">${getInitials(s.name)}</div>
        </div>
        <div class="staff-meta">
          <h4>${s.name}</h4>
          <div class="staff-role-tag">${s.role}</div>
          <div class="staff-unit-tag">${s.unit || s.deptName}</div>
        </div>
      </div>
      <p class="staff-summary-text">${s.bio ? (s.bio.length > 90 ? s.bio.substring(0, 90) + '...' : s.bio) : 'Pegawai bertugas di JHEP.'}</p>
      
      <div class="staff-contact-list">
        <div class="staff-contact-row">
          <i data-lucide="phone" class="icon-xs"></i>
          <span>${s.phone}</span>
        </div>
        <div class="staff-contact-row">
          <i data-lucide="mail" class="icon-xs"></i>
          <span>${s.email}</span>
        </div>
      </div>

      <div class="staff-card-actions">
        <button class="btn-card-details" onclick="openStaffModalById('${s.id}')">
          <i data-lucide="info" class="icon-xs"></i>
          <span>Lihat Profil</span>
        </button>
        <a href="https://wa.me/${s.whatsapp}?text=Salam%20En%2FPuan%2C%20saya%20pelajar%20UniMAP%20ingin%20bertanya%20mengenai%20urusan%20di%20JHEP" target="_blank" class="btn-card-whatsapp">
          <i data-lucide="message-circle" class="icon-xs"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  `).join("");
}

// ==========================================
// 8. Utility Helpers
// ==========================================

function getInitials(name) {
  if (!name) return "ST";
  // Filter out honorary titles
  const clean = name.replace(/^(Prof\.|Madya|Ir\.|Ts\.|Dr\.|En\.|Pn\.|Cik)\s+/gi, '').trim();
  const parts = clean.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
