
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true
});

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  // Redirect /ar or /en (no trailing slash) to /ar/ or /en/
  if (/^\/(ar|en)$/.test(pathname)) {
    return NextResponse.redirect(new URL(`${pathname}/`, request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/ar', '/en', '/(ar|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
