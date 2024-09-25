'use client';

import PDFViewer from './components/PDFViewer';
import Auth from './components/Auth';
import { AuthProvider, useAuth } from './context/AuthContext';

function HomeContent() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      {isAuthenticated ? <PDFViewer /> : <Auth />}
    </main>
  );
}

export default function Home() {
  return (
    <AuthProvider>
      <HomeContent />
    </AuthProvider>
  );
}