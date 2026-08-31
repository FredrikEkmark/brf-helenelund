import { ReactNode } from 'react';
import BoendeInfoNav from '@/components/boendeinfo/BoendeInfoNav';

export default function BoendeInfoLayout({ children }: { children: ReactNode }) {
  return (
    <main className="pageContainer">
      <div className="sectionBox">
        <BoendeInfoNav />
        {children}
      </div>
    </main>
  );
}
