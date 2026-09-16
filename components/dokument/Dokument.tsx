import { IconFolder, IconReportAnalytics } from '@tabler/icons-react';
import Card from '@/components/boendeinfo/Card';
import DocumentRow from './DocumentRow';
import styles from './Dokument.module.css';

const foreningensDokument = [
  {
    title: 'Stadgar Brf Grusgropen',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2024/10/Stadgar.pdf',
    size: '8,5 MB',
  },
  {
    title: 'Ekonomisk plan.pdf',
    href: 'https://www.grusgropen.se/documents/Ekonomisk_plan_Grusgropen.pdf',
    size: '1,5 MB',
  },
  {
    title: 'Föreningsstämma fullmakt.pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2025/05/Foreningsstamma-fullmakt.pdf',
    size: '< 0,1 MB',
  },
  {
    title: 'Andrahandsuthyrning bostadsrätt.pdf',
    href: 'https://www.grusgropen.se/documents/AndrahandsuthyrningBostadsratt_Grusgropen.pdf',
    size: '< 0,1 MB',
  },
];

const arsredovisningar = [
  {
    title: 'Årsredovisning (2025).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2026/06/Arsredovisning-2025-Brf-Grusgropen.pades_.pdf',
    size: '0,7 MB',
  },
  {
    title: 'Revisionsberättelse (2025).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2026/08/Revisionsberattelse.pades_2025_Sign.pdf',
    size: '0,5 MB',
  },
  {
    title: 'Årsredovisning (2024).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2025/05/Arsredovisning-2024-Brf-Grusgropen.pades_.pdf',
    size: '0,7 MB',
  },
  {
    title: 'Revisionsberättelse (2024).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2025/05/Sign-Grusgropen-Revisionsberattelse.pdf',
    size: '0,5 MB',
  },
  {
    title: 'Årsredovisning (2023).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2025/05/AR-Brf-Grusgropen-2023-Ver2.pdf',
    size: '3,8 MB',
  },
  {
    title: 'Årsredovisning (2022).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2023/06/Arsredovisning2022.pdf',
    size: '5,0 MB',
  },
  {
    title: 'Årsredovisning (2021).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2022/07/Arsredovisning2021.pdf',
    size: '0,7 MB',
  },
  {
    title: 'Årsredovisning (2020).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2021/06/Årsredovisning2020.pdf',
    size: '0,2 MB',
  },
  {
    title: 'Årsredovisning (2019).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2020/12/Årsredovisning-2019.pdf',
    size: '5,0 MB',
  },
  {
    title: 'Årsredovisning (2018).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2019/11/Årsredovisning2018.pdf',
    size: '1,0 MB',
  },
  {
    title: 'Årsredovisning (2017).pdf',
    href: undefined,
    size: undefined,
  },
  {
    title: 'Årsredovisning (2016).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2017/07/Årsredovisning-2016.pdf',
    size: '25,6 MB',
  },
  {
    title: 'Årsredovisning (2015).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2014/10/Årsredovisning-2015.pdf.pdf',
    size: '18,0 MB',
  },
  {
    title: 'Årsredovisning (2014).pdf',
    href: 'https://usercontent.one/wp/www.grusgropen.se/wp-content/uploads/2014/10/Årsredovisning-2014.pdf',
    size: '0,5 MB',
  },
  {
    title: 'Årsredovisning (2013).pdf',
    href: 'https://www.grusgropen.se/documents/Arsredovisning%282013%29_Grusgropen.pdf',
    size: '17,3 MB',
  },
  {
    title: 'Årsredovisning (2012).pdf',
    href: 'https://www.grusgropen.se/documents/Arsredovisning%282012%29_Grusgropen.pdf',
    size: '8,7 MB',
  },
  {
    title: 'Årsredovisning (2011).pdf',
    href: 'https://www.grusgropen.se/documents/Arsredovisning%282011%29_Grusgropen.pdf',
    size: '10,2 MB',
  },
  {
    title: 'Årsredovisning (2010).pdf',
    href: 'https://www.grusgropen.se/documents/Arsredovisning%282010%29_Grusgropen.pdf',
    size: '9,7 MB',
  },
  {
    title: 'Årsredovisning (2009).pdf',
    href: 'https://www.grusgropen.se/documents/Arsredovisning%282009%29_Grusgropen.pdf',
    size: '7,6 MB',
  },
  {
    title: 'Årsredovisning (2008).pdf',
    href: 'https://www.grusgropen.se/documents/Arsredovisning%282008%29_Grusgropen.pdf',
    size: '0,3 MB',
  },
];

export default function Dokument() {
  return (
    <>
      <Card title="Föreningens dokument" icon={IconFolder}>
        <div className={styles.list}>
          {foreningensDokument.map((doc) => (
            <DocumentRow key={doc.title} title={doc.title} href={doc.href} size={doc.size} />
          ))}
        </div>
      </Card>

      <Card title="Årsredovisningar" icon={IconReportAnalytics}>
        <div className={styles.list}>
          {arsredovisningar.map((doc) => (
            <DocumentRow key={doc.title} title={doc.title} href={doc.href} size={doc.size} />
          ))}
        </div>
      </Card>
    </>
  );
}
