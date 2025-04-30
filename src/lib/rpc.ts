import type { AppType } from "@/server";
import { hc } from "hono/client";

import { env } from "@/lib/env";

// export const client = hc<AppType>(env.NEXT_PUBLIC_APP_URL as string);
export const client = hc<AppType>(
  env.NEXT_PUBLIC_APP_URL || ("http://localhost:3000" as string)
);
