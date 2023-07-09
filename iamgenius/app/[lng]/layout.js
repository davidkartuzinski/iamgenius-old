import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import '../styles/global.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './layout.module.css';
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <div className={styles.wrapper}>
          <Header lng={lng} />
          <Sidebar lng={lng} />
          <Content lng={lng}>{children}</Content>

          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}
