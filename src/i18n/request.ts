import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined and valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en'; // Fallback to English
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
