import type { LucideIcon } from 'lucide-react';
import { MessageCircle, Ruler, FileText, Hammer, CheckCircle2 } from 'lucide-react';

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
  color: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Konsultasi & Inspirasi',
    description: 'Diskusi kebutuhan, gaya desain, dan referensi visual yang Anda inginkan.',
    detailedDescription:
      'Kami memulai dengan memahami visi Anda — gaya arsitektur rumah, fungsi ruang, dan referensi desain yang Anda sukai. Tim kami mendengarkan dengan seksama agar setiap detail tercatat sejak awal.',
    highlights: [
      'Diskusi kebutuhan dan preferensi desain',
      'Review referensi visual dan inspirasi',
      'Penjelasan opsi material dan finishing',
      'Estimasi awal timeline proyek',
    ],
    color: '#d4af37',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Survey & Pengukuran',
    description: 'Tim kami melakukan survey lokasi dan pengukuran detail yang presisi.',
    detailedDescription:
      'Tim lapangan kami datang ke lokasi untuk mengukur area kerja dengan presisi tinggi. Pengukuran akurat adalah fondasi agar hasil produksi pas sempurna saat instalasi.',
    highlights: [
      'Kunjungan survey ke lokasi proyek',
      'Pengukuran detail setiap sudut dan dimensi',
      'Dokumentasi foto kondisi lapangan',
      'Identifikasi kebutuhan struktural',
    ],
    color: '#daa520',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Desain & Penawaran',
    description: 'Presentasi desain lengkap dengan estimasi biaya dan timeline.',
    detailedDescription:
      'Setelah survey, kami menyusun desain konsep beserta penawaran harga yang transparan. Anda mendapat gambaran jelas sebelum produksi dimulai — tanpa biaya tersembunyi.',
    highlights: [
      'Presentasi desain konsep 3D atau sketsa',
      'Penawaran harga detail per item',
      'Timeline pengerjaan yang jelas',
      'Revisi desain sesuai feedback Anda',
    ],
    color: '#cd7f32',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Produksi Artisan',
    description: 'Proses crafting dengan detail tinggi dan quality control ketat.',
    detailedDescription:
      'Karya besi Anda dibuat di workshop oleh pengrajin berpengalaman. Setiap sambungan las, kurva, dan finishing dicek berkala agar memenuhi standar premium kami.',
    highlights: [
      'Pembuatan di workshop oleh pengrajin ahli',
      'Quality control di setiap tahap produksi',
      'Material premium dengan finishing tahan lama',
      'Update progress kepada klien',
    ],
    color: '#b8860b',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'Pemasangan Profesional',
    description: 'Instalasi rapi oleh tim ahli dengan hasil finishing sempurna.',
    detailedDescription:
      'Tim instalasi kami memasang karya besi di lokasi dengan presisi dan kebersihan. Kami memastikan hasil akhir rapi, kuat, dan siap menjadi pusat perhatian properti Anda.',
    highlights: [
      'Instalasi oleh tim berpengalaman',
      'Finishing akhir di lokasi',
      'Pembersihan area kerja setelah selesai',
      'Serah terima dan panduan perawatan',
    ],
    color: '#f0e68c',
  },
];
