'use client';

import { useSearchParams } from 'next/navigation';
import PDFAnalysisPage from '../components/PDFAnalysisPage';

export default function AnalysisPage() {
  const searchParams = useSearchParams();
  const pdfName = searchParams?.get('pdfName') || '';
  const pdfId = searchParams?.get('pdfId') || '';

  return <PDFAnalysisPage pdfName={pdfName} pdfId={pdfId} />;
}
