import { createI18n } from 'vue-i18n';

// Chargement des traductions
import en from './locales/en.json';
import fr from './locales/fr.json';

const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en', // Définit la langue actuelle
  fallbackLocale: 'en', // Langue par défaut en cas de traduction manquante
  messages: {
    en,
    fr,
  },
});

export default i18n;