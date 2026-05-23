import PageBanner from '../components/PageBanner';
import ProcessSection from '../components/ProcessSection';

export default function ProsesPage() {
  return (
    <>
      <PageBanner
        label="Proses Kerja"
        title="Alur Pengerjaan Profesional"
        description="Dari konsultasi hingga instalasi, setiap tahap dirancang untuk hasil presisi dan pengalaman premium."
      />
      <ProcessSection variant="full" showHeader={false} />
    </>
  );
}
