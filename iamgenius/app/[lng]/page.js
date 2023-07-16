import Link from 'next/link';
import { useTranslation } from '../i18n';
import Trait from './components/Core/trait';
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t('title')}</h1>
      <div dangerouslySetInnerHTML={{ __html: t('introduction') }}></div>
      {t('traits', { returnObjects: true }).map(({ number, name, content }) => (
        <Trait key={number} number={number} name={name} content={content} />
      ))}
      <div>
        <small>{t('articleCopyright')}</small>
      </div>
      <Link href={`/${lng}/about-genius`}>{t('about-genius')}</Link>
    </>
  );
}
