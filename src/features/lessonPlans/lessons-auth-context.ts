/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface SuccessResponse {
  activeOrganization: any;
  activeMember: any;
  // permissions: Record<string, boolean | undefined>;
}

interface ErrorResponse {
  error: string;
}

type ReturnType = SuccessResponse | ErrorResponse;

export type LessonsAuthContext = ReturnType;

export async function lessonsAuthContext(): Promise<ReturnType> {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) {
      throw new Error("Unauthorized");
    }

    // Get Active Organization
    const activeOrganizationId = session.session.activeOrganizationId;

    if (!activeOrganizationId) {
      throw new Error("No active organization found");
    }

    const activeOrganization = await auth.api.getFullOrganization({
      headers: await headers(),
      query: {
        organizationId: activeOrganizationId
      }
    });

    // Get Active Member
    const activeMember = await auth.api.getActiveMember({
      headers: await headers()
    });

    // Get Permissions
    // const actions = ["create", "read", "update", "delete"];
    // const permissionsObject: Record<string, boolean | undefined> = {};

    // // Check permissions
    // await Promise.all(
    //   actions.map(async (action) => {
    //     const { success } = await auth.api.hasPermission({
    //       headers: await headers(),
    //       body: {
    //         permission: {
    //           lesson: [action] as any
    //         }
    //       }
    //     })

    //     permissionsObject[action] = success;
    //   })
    // );

    return { activeOrganization, activeMember };
  } catch (err) {
    const error = err as Error;

    return { error: error.message };
  }
}
