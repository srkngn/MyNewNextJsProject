declare module '*.css';

interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    initDataUnsafe: {
      user?: TelegramWebAppUser; };
    requestContact: (callback: (contact: TelegramContact) => void) => void;
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }