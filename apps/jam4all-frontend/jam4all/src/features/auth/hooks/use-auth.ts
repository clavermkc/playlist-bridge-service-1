"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authService, type LoginPayload, type RegisterPayload } from "@/features/auth/services/auth-service";
import { useAuthStore } from "@/shared/store/auth-store";
import { ROUTES } from "@/shared/constants/routes";

export function useLogin() {
  const router = useRouter();
  const setTokens = useAuthStore((s) => s.setTokens);
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      setUser(data.user);
      toast.success("Connexion réussie");
      router.push(ROUTES.dashboard);
    },
    onError: () => toast.error("Email ou mot de passe incorrect"),
  });
}

export function useRegister() {
  const router = useRouter();
  const setTokens = useAuthStore((s) => s.setTokens);
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authService.register(payload),
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
      setUser(data.user);
      toast.success("Bienvenue sur Jam4All");
      router.push(ROUTES.dashboard);
    },
    onError: () => toast.error("Impossible de créer le compte"),
  });
}

export function useLogout() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  return () => {
    logout();
    router.push(ROUTES.login);
  };
}
