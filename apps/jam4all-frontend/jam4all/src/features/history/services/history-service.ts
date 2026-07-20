import { apiClient } from "@/shared/services/api-client";
import type { ConversionResult } from "@/shared/types";

export const historyService = {
  getAll: () => apiClient.get<ConversionResult[]>("/history").then((r) => r.data),
};
