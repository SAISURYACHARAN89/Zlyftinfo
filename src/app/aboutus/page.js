'use client';

import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('../components/AboutUs.jsx'), {
  ssr: false,
});

export default function Page() {
  return <AboutUs />;
}
