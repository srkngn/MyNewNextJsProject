declare module '*.css';

interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    initDataUnsafe: { first_name?: string;
      last_name?: string;
      email?: string;
      phone_number?: string;};
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }