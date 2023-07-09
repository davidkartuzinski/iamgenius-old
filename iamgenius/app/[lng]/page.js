import Link from 'next/link';
import { useTranslation } from '../i18n';
import { Traits } from './components/Core/Traits';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t('title')}</h1>
      <p>
        As originally issued in the November 13, 1979, National Enquirer, the
        front page prominently announced, "Top Russian Scientists... DISCOVER
        UFO BASE ON SATURN MOON". But the real story, was listed in the side bar
        of the front page, which stated, "Qualities Geniuses Have in Common --
        And How You Can Develop Them, page 46". and so, word for word, from page
        46, ...
      </p>
      <Traits />
      <Link href={`/${lng}/about-genius`}>{t('about-genius')}</Link>
    </>
  );
}
