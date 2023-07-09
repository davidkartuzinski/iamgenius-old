import { useTranslation } from '../../../../i18n';
import styles from './traits.module.css';

// TODO: need to creat a traits.json file with the translations
// need to loop through the traits to display them on the page
// need to add supplementary text outside of the loops.

export const Traits = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'traits');
  return (
    <>
      <h2 className={styles.p}>Trait</h2>
    </>
  );
};
