import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import '../styles/global.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {
  frank_ruhl_libre,
  source_sans_3,
  tempo_heavy,
  tempo_standard,
  work_sans,
} from './fonts/fonts';

import styles from './layout.module.css';
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${source_sans_3.variable} ${frank_ruhl_libre.variable} ${work_sans.variable} ${tempo_standard.variable} ${tempo_heavy.variable}`}
    >
      <head />

      <body>
        <div className={styles.wrapper}>
          <Header lng={lng} />
          <Content lng={lng}>{children}</Content>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}
