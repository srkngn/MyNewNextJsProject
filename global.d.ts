declare module '*.css';

interface TelegramWebAppUser {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
}

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