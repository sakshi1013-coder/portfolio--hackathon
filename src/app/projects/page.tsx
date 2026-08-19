'use client';

import BackToHub from '@/components/BackToHub';
import ProjectGallery from '@/components/ProjectGallery';
import Footer from '@/components/Footer';
import SectionJourneyLayout from '@/components/SectionJourneyLayout';

export default function ProjectsPage() {
  return (
    <SectionJourneyLayout currentSectionId="projects">
      <div className="noise-overlay" aria-hidden="true" />
      <BackToHub />
      <main style={{ paddingTop: '64px' }}>
        <ProjectGallery />
      </main>
      <Footer />
    </SectionJourneyLayout>
  );
}
