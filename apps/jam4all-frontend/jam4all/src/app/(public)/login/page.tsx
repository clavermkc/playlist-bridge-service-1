import Link from "next/link";
import { AuthForm } from "@/features/auth/components/auth-form";
import { ROUTES } from "@/shared/constants/routes";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-16">
      <AuthForm mode="login" />
      <p className="mt-6 text-sm text-muted-foreground">
        Pas encore de compte ?{" "}
        <Link href={ROUTES.register} className="font-medium text-primary hover:underline">
          Créer un compte
        </Link>
      </p>
    </div>
  );
}
