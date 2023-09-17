import { Suspense } from 'react';
import { Inter } from 'next/font/google';

import { Header, Footer } from '@/layout';
import { Loader } from '@/components/Loader/Loader';
import { getMetaByLocale } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import { i18n } from 'i18n';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const metaDictionary = await getMetaByLocale(params.locale);

  return {
    title: metaDictionary.home.title,
    description: metaDictionary.home.description,
    metadataBase: new URL('https://www.ambidexterschool.com/'),
    openGraph: {
      title: metaDictionary.home.title,
      description: metaDictionary.home.description,
      url: 'https://www.ambidexterschool.com/',
      siteName: 'Ambidexter',
      locale: params.locale,
      type: 'website',
      manifest: '/meta/site.webmanifest',
      alternates: {
        canonical: 'https://www.ambidexterschool.com/',
      },
    },
    twitter: {
      card: 'summary_large_image',
    },
    icons: {
      icon: [
        {
          url: '/meta/favicon.ico',
        },
        {
          url: '/meta/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/meta/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: '/meta/favicon.ico',
      apple: '/meta/apple-touch-icon.png',
      other: {
        rel: '/meta/apple-touch-icon.png',
        url: '/meta/apple-touch-icon.png',
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const localeData = await getDictionary(locale);

  const { navBar, socialNetworks, socialMedia, contacts, siteMap } = localeData;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header
          navBar={navBar}
          siteMap={siteMap}
          socialNetworks={socialNetworks}
          socialMedia={socialMedia}
          locale={locale}
        />
        <main className="flex min-h-screen flex-col items-center">
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </main>
        <Footer
          contacts={contacts}
          navBar={navBar}
          socialMedia={socialMedia}
          locale={locale}
          goHome={siteMap.goHome}
        />
      </body>
    </html>
  );
}
