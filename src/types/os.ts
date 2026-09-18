import React from "react";

export type AppId =
  | "about"
  | "projects"
  | "terminal"
  | "experience"
  | "skills"
  | "resume"
  | "contact";

export interface WindowConfig {
  id: AppId;
  titleKey: { en: string; fr: string };
  iconName: string;
  defaultWidth?: string;
  defaultHeight?: string;
}
