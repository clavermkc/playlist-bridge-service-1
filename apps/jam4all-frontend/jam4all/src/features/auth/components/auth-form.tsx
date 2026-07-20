"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Music2 } from "lucide-react";
import { Input } from "@/shared/ui/input";
import { PasswordInput } from "@/shared/ui/password-input";
import { Button } from "@/shared/ui/button";
import { Loader } from "@/shared/ui/loader";
import { useLogin, useRegister } from "@/features/auth/hooks/use-auth";

const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "8 caractères minimum"),
});

const registerSchema = loginSchema.extend({
  displayName: z.string().min(2, "2 caractères minimum"),
});

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

type FormValues = LoginValues & { displayName?: string };

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const isRegister = mode === "register";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema) as never,
  });

  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const isPending = loginMutation.isPending || registerMutation.isPending;

  const onSubmit = (values: FormValues) => {
    if (isRegister) {
      registerMutation.mutate(values as RegisterValues);
    } else {
      loginMutation.mutate({ email: values.email, password: values.password });
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
          <Music2 size={20} className="text-white" />
        </div>
        <h1 className="mt-4 text-xl font-semibold text-foreground">
          {isRegister ? "Créer un compte" : "Content de te revoir"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {isRegister
            ? "Commence à convertir tes playlists en quelques secondes."
            : "Connecte-toi pour accéder à ton dashboard."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {isRegister && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Nom</label>
            <Input placeholder="Ton nom" {...register("displayName")} error={errors.displayName?.message} />
          </div>
        )}

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
          <Input type="email" placeholder="toi@exemple.com" {...register("email")} error={errors.email?.message} />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Mot de passe</label>
          <PasswordInput placeholder="••••••••" {...register("password")} error={errors.password?.message} />
        </div>

        <Button type="submit" variant="accent" className="mt-2" disabled={isPending}>
          {isPending && <Loader size={15} className="text-white" />}
          {isRegister ? "Créer mon compte" : "Se connecter"}
        </Button>
      </form>
    </div>
  );
}
