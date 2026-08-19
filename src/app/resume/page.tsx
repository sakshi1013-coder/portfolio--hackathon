'use client';

import BackToHub from '@/components/BackToHub';
import ResumeViewer from '@/components/ResumeViewer';
import Footer from '@/components/Footer';
import SectionJourneyLayout from '@/components/SectionJourneyLayout';

export default function ResumePage() {
  return (
    <SectionJourneyLayout currentSectionId="resume">
      <div className="noise-overlay" aria-hidden="true" />
      <BackToHub />
      <main style={{ paddingTop: '64px' }}>
        <ResumeViewer />
      </main>
      <Footer />
    </SectionJourneyLayout>
  );
}
