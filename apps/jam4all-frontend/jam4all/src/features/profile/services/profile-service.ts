import { apiClient } from "@/shared/services/api-client";
import type { User } from "@/shared/types";

export const profileService = {
  getProfile: () => apiClient.get<User>("/profile").then((r) => r.data),
  updateProfile: (payload: Partial<Pick<User, "displayName" | "avatarUrl">>) =>
    apiClient.patch<User>("/profile", payload).then((r) => r.data),
};
