/* ==========================================================================
   VolFix Global · Pro — конфигурация.
   Лендинг под практикующих трейдеров. Всё изменяемое — здесь.
   ========================================================================== */
window.SITE_CONFIG = {

  /* --- Цена. Меняется здесь, подставляется во все блоки. ------------------ */
  price: {
    amount: 10000,          // подтвердить тариф для опытной аудитории
    currency: '₸',
    period: 'month',        // month | quarter | year (см. i18n)
    oldAmount: null
  },

  /* --- Бонус VolFix: длительность в неделях. ------------------------------
     Если менять число — проверить форму слова в i18n.js ({weeks} недели). */
  volfixBonusWeeks: 2,

  /* --- Оплата: заглушка до выбора эквайринга и оформления юрлица. -------- */
  payment: {
    provider: 'stub',
    payUrl: ''
  },

  /* --- Лиды. Пусто = localStorage + консоль. ------------------------------ */
  leads: {
    endpoint: '',
    storeLocally: true
  },

  /* --- Квиз выключен: опытной аудитории лишний шаг перед оплатой мешает.
     Поставить true, если понадобится сегментация лидов.                     */
  quizEnabled: false,

  /* --- Честный urgency. null = блок скрыт. -------------------------------- */
  seats: {
    total: 30,
    left: 8
  },

  links: {
    telegram: 'https://t.me/',
    support: 'https://t.me/',
    volfix: 'https://volfix.net/',
    basic: 'https://kebillla.github.io/vfglobaltesting/',  // поток для новичков
    privacy: '#',
    offer: '#'
  },

  analytics: {
    gtmId: '',
    ga4Id: '',
    metaPixelId: '',
    tiktokPixelId: ''
  },

  i18n: {
    default: 'ru',
    available: ['ru', 'kk']
  }
};
