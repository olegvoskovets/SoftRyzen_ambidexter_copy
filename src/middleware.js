import { NextResponse } from 'next/server';

import { i18n } from '../i18n';

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${i18n.defaultLocale}${
          pathname.startsWith('/') ? '' : '/'
        }${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|images|icons|meta|favicon.ico).*)',
  ],
};
