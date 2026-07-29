import { Github, Linkedin, type LucideIcon } from "lucide-react";

import { profile } from "./profile";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
];
