import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../../../i18n';
import { languages } from '../../../i18n/settings';
import Logo from '../Logo';
import styles from './header.module.css';

export const Header = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'footer');
  return (
    <header className={styles.header}>
      <Link href={`/${lng}`}>
        <Logo />
      </Link>

      <Trans i18nKey='languageSwitcher' t={t}>
        Switch from <strong>{{ lng }}</strong> to:{' '}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </header>
  );
};
