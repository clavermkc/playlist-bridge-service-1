import { NextResponse, type NextRequest } from "next/server";

// 🔧 DEV MODE — guard désactivé tant que le backend Spring Boot n'est pas connecté.
// En prod, réactiver le bloc commenté ci-dessous.

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp)).*)",
  ],
};