declare module '*.css';

interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    initDataUnsafe: {
      user?: TelegramWebAppUser; };
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }