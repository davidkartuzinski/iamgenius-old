import Link from 'next/link';
import { useTranslation } from '../i18n';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Header lng={lng} />
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/about-genius`}>{t('about-genius')}</Link>
      <Footer lng={lng} />
    </>
  );
}
