import Link from "next/link";
import { AuthForm } from "@/features/auth/components/auth-form";
import { ROUTES } from "@/shared/constants/routes";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-16">
      <AuthForm mode="register" />
      <p className="mt-6 text-sm text-muted-foreground">
        Déjà un compte ?{" "}
        <Link href={ROUTES.login} className="font-medium text-primary hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}
