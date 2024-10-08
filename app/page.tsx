/* import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/App/ui/home.module.css'
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {<AcmeLogo /> }
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image 
      src="/hero-mobile.png"
      width={560}
      height={620}
      className='block md:hidden'
      alt="Screenshot of the dashboard project showing mobile version"
      />
        </div>
      </div>
    </main>
  );
}
 */
"use client";

import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/customers/createCustomer";
import { useEffect, useState } from "react";
import Head from "next/head";
import '../styles/form.css'

interface userDataFromTelegram{
  id:number;
  first_name: string;
  last_name?: string;
  username?:string;
  language_code: string;
  is_premium:boolean;
}

export default function Page () {

  const [ userDataT, setUserDataT] = useState<userDataFromTelegram | null>(null)

  useEffect(() => {
    const loadScript = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${url}`));
        document.head.appendChild(script);
      });
    };

    loadScript('https://telegram.org/js/telegram-web-app.js')
      .then(() => {
        if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
          const webApp = window.Telegram.WebApp;
          webApp.ready();
          webApp.expand();

          const userDataT = webApp.initDataUnsafe.user;
          if (userDataT) {
            setUserDataT(userDataT as userDataFromTelegram);
          }
          console.log('currentUser',userDataT)


        } else {
          console.log('Telegram Web App script is not loaded.');
        }
      })
      .catch((error) => {
        console.error('Error loading Telegram Web App script:', error);
      });
  }, []);

    return (
    <>
      <main className="main-container">
        <header className="header">
          <img src="/RoadToStudy/RoadToStudyLogo.png" alt="RoadToStudyLogo" className="logo" />
        </header>
        <div className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nullam euismod justo vel orci imperdiet, id gravida turpis fermentum. Sed suscipit turpis id nisi tincidunt, vel malesuada dolor ultricies.
        </div>
        <div className="form-container">
          <Form fromTelegram={userDataT}/>
        </div>
      </main>
  </>
  )
}

