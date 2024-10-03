'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PDFAnalysisPage from '../components/PDFAnalysisPage';

function AnalysisPageContent() {
  const searchParams = useSearchParams();
  const pdfName = searchParams?.get('pdfName') || '';
  const pdfId = searchParams?.get('pdfId') || '';

  return <PDFAnalysisPage pdfName={pdfName} pdfId={pdfId} />;
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnalysisPageContent />
    </Suspense>
  );
}
