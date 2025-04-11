import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

// Define public routes
const publicRoutes = ['/', '/api/webhooks/stripe/'];

export default clerkMiddleware((auth, req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  // Allow access to public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // For all other routes, Clerk will enforce authentication
  return NextResponse.next();
});

// Configuration for the middleware
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
