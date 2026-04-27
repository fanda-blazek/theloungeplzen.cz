import { MetadataRoute } from "next";
import { app } from "@/config/app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: app.site.name,
    short_name: app.site.name,
    start_url: "/cs",
    theme_color: "#10111d",
    background_color: "#10111d",
  };
}
