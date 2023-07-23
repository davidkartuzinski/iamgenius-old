import Link from 'next/link';
import { useTranslation } from '../i18n';
import Trait from './components/Core/trait';
import styles from './layout.module.css';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.bodyContent}>
      <div className={styles.intro}>
        <div>
          <h1>{t('title')}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: t('introduction') }}></div>
      </div>
      <div className={styles.traits}>
        <div dangerouslySetInnerHTML={{ __html: t('24-qualities') }}></div>
        {t('traits', { returnObjects: true }).map(
          ({ number, name, content }) => (
            <Trait key={number} number={number} name={name} content={content} />
          )
        )}
      </div>
      <div className={styles.info}>
        <small>{t('articleCopyright')}</small>
        <Link href={`/${lng}/about-genius`}>{t('about-genius')}</Link>
      </div>
    </div>
  );
}
