import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const privateRoutes = ['/booking', '/my-bookings'];

// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req });
  const reqPath = req.nextUrl.pathname;
  const isAuthenticated = Boolean(token);
  const isUser = token?.role === 'user';
  const isPrivate = privateRoutes.some((route) => reqPath.startsWith(route));

  if (!isAuthenticated && isPrivate) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', reqPath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ['/booking/:path*', '/my-bookings/:path*'],
};
