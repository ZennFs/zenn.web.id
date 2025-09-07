import { MetadataRoute } from "next";
import { ProjectItem } from "@/common/types/projects";
import { getProjectsData } from "@/services/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://zenn.web.id";

  const projects: ProjectItem[] = (await getProjectsData()) || [];
  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/achievements`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/chat`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
  ];

  return [...staticUrls, ...projectUrls];
}
