import { ReactNode } from 'react';
import KontaktNav from '@/components/kontakt/KontaktNav';

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return (
    <main className="pageContainer">
      <div className="sectionBox">
        <KontaktNav />
        {children}
      </div>
    </main>
  );
}
