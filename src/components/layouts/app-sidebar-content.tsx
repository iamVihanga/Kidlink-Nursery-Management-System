"use client";

import React, { useEffect, useTransition } from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  GraduationCapIcon,
  UsersIcon,
  LayoutDashboard,
  BookOpenIcon,
  LibraryBigIcon,
  FileQuestionIcon,
  ShieldIcon,
  UserCog2Icon,
  School2Icon,
  Shield
} from "lucide-react";

import { type Session } from "@/lib/auth";
import { NavMain } from "@/components/layouts/nav-groups/nav-main";
import { NavNurseryManagement } from "./nav-groups/nav-nursery-management";
import { NavContent } from "./nav-groups/nav-content";
import { NavSettings } from "./nav-groups/nav-settings";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

type Props = {
  activeMember: any;
  session: Session;
};

export default function AppSidebarContent({ activeMember, session }: Props) {
  const activeOrganization = authClient.useActiveOrganization();
  const router = useRouter();

  useEffect(() => {
    if (activeOrganization) router.refresh();
  }, [activeOrganization]);

  let data = {
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise"
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup"
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free"
      }
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard
      }
    ],
    nurseryManagement: [
      {
        name: "Nurseries",
        url: "/dashboard/nurseries",
        icon: School2Icon
      },
      {
        name: "Admins", // Nursery Admins
        url: "/dashboard/nurseries/admins",
        icon: ShieldIcon,
        roles: ["owner"] // owner -> nursery admin
      },
      {
        name: "Teachers", // Nursery Teachers
        url: "/dashboard/nurseries/teachers",
        icon: GraduationCapIcon,
        roles: ["owner"] // owner -> nursery admin
      },
      {
        name: "Parents",
        url: "/dashboard/nurseries/Parents",
        icon: UsersIcon,
        roles: ["admin", "owner"]
      }
    ],
    getContents: (isAdmin: boolean) => [
      // {
      //   title: "Lessons",
      //   url: "/dashboard/lessons",
      //   icon: BookOpenIcon
      // },
      // {
      //   title: "Materials",
      //   url: "/dashboard/materials",
      //   icon: LibraryBigIcon
      // },
      // {
      //   title: "Quizzes",
      //   url: "/dashboard/quizzes",
      //   icon: FileQuestionIcon,
      //   items: [
      //     {
      //       title: "All Quizzes",
      //       url: "/dashboard/quizzes"
      //     },
      //     ...(isAdmin
      //       ? [
      //           {
      //             title: "Categories",
      //             url: "/dashboard/quizzes/tags"
      //           }
      //         ]
      //       : [])
      //   ]
      // }
    ],
    getSettings: (isAdmin: boolean) => [
      ...(isAdmin
        ? [
            {
              title: "User Management",
              url: "/dashboard/user-management",
              icon: UserCog2Icon
            }
          ]
        : []),
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "/dashboard/settings"
          }
        ]
      }
    ]
  };

  return (
    <>
      <NavMain items={data.navMain} />

      <NavNurseryManagement
        cmLinks={data.nurseryManagement}
        activeMemberRole={activeMember?.role || null}
      />

      <NavContent
        items={data.getContents(
          activeMember?.role === "owner" || activeMember?.role === "admin"
        )}
      />

      <NavSettings items={data.getSettings(session.user.role === "admin")} />
    </>
  );
}
