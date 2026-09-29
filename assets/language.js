(() => {
  'use strict';

  const SUPPORTED_LANGUAGES = ['en', 'ja', 'ko', 'zh-Hant'];
  const articles = Array.from(document.querySelectorAll('main > article[lang]'));
  const buttons = Array.from(document.querySelectorAll('[data-language]'));

  function getBrowserLanguage() {
    const languages = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || 'en'];
    for (const language of languages) {
      const base = language.toLowerCase().split(/[-_]/)[0];
      if (base === 'zh') return 'zh-Hant';
      if (SUPPORTED_LANGUAGES.includes(base)) return base;
    }
    return 'en';
  }

  function getRequestedLanguage() {
    const language = window.location.hash.slice(1);
    return SUPPORTED_LANGUAGES.includes(language) ? language : getBrowserLanguage();
  }

  function showLanguage(language) {
    for (const article of articles) article.hidden = article.lang !== language;
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    }
    document.documentElement.lang = language;
    const heading = document.getElementById(`title-${language}`);
    if (heading) document.title = `${heading.textContent} | Catch the Capybara`;
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      showLanguage(language);
      // Preserve explicit language links without jumping down past the controls.
      window.history.replaceState(null, '', `#${language}`);
    });
  }
  window.addEventListener('hashchange', () => showLanguage(getRequestedLanguage()));
  showLanguage(getRequestedLanguage());
  for (const button of buttons) button.hidden = false;
})();
