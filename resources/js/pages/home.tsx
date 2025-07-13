import { CompactNews } from '@/components/comps/compact-news';
import { FeaturedNews } from '@/components/comps/featured-news';
import { Navbar } from '@/components/comps/navbar';

export const newsItems = [
  {
    id: 1,
    title: 'Pemerintah Resmi Luncurkan Program Digitalisasi Desa',
    excerpt: 'Program ini bertujuan meningkatkan akses internet dan literasi digital di wilayah terpencil.',
    image: 'https://source.unsplash.com/96x96/?village,technology',
    category: 'Teknologi',
    time: '2 jam lalu',
    views: '1.2K',
  },
  {
    id: 2,
    title: 'Banjir Melanda Jakarta Barat, Warga Dievakuasi',
    excerpt: 'Hujan deras sejak semalam menyebabkan beberapa wilayah tergenang hingga 80 cm.',
    image: 'https://source.unsplash.com/96x96/?flood,disaster',
    category: 'Peristiwa',
    time: '3 jam lalu',
    views: '3.5K',
  },
  {
    id: 3,
    title: 'Startup Lokal Raup Investasi Rp 50 Miliar dari Investor Asing',
    excerpt: 'Pendanaan ini akan digunakan untuk ekspansi layanan ke Asia Tenggara.',
    image: 'https://source.unsplash.com/96x96/?startup,investment',
    category: 'Ekonomi',
    time: '1 jam lalu',
    views: '980',
  },
  {
    id: 4,
    title: 'Timnas Indonesia Lolos ke Final AFF U-23',
    excerpt: 'Kemenangan dramatis lewat adu penalti membawa Garuda Muda ke puncak turnamen.',
    image: 'https://source.unsplash.com/96x96/?football,indonesia',
    category: 'Olahraga',
    time: '30 menit lalu',
    views: '5.6K',
  },
  {
    id: 5,
    title: '5 Rekomendasi Film untuk Akhir Pekan',
    excerpt: 'Dari aksi hingga drama, ini dia pilihan film terbaik yang bisa kamu tonton.',
    image: 'https://source.unsplash.com/96x96/?movie,cinema',
    category: 'Hiburan',
    time: '4 jam lalu',
    views: '2.1K',
  },
];

export default () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-14 px-4 pb-8">
        <FeaturedNews />
        <div className="grid gap-4 md:gap-6">
          {newsItems.map((item) => (
            <CompactNews {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
