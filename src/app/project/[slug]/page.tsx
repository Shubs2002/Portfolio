import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Package, ShoppingCart, Brain, Video, Globe, Rocket, Leaf, Plane, Search, Building2 } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectContent from "./ProjectContent";

const iconMap: { [key: string]: React.ElementType } = {
  Package, ShoppingCart, Brain, Video, Globe, Rocket, Leaf, Plane, Search, Building2
};

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    keywords: [
      project.title,
      project.tagline,
      ...project.tech,
      "project",
      "portfolio",
      "Shubham Nakashe",
      "web development project",
      "full stack project",
      `${project.title} case study`,
    ],
    openGraph: {
      title: `${project.title} — ${project.tagline} | Built by Shubham Nakashe`,
      description: project.description,
      type: "article",
      url: `https://www.shubham-nakashe.dev/project/${project.slug}`,
      siteName: "Shubham Nakashe — Full Stack Developer Portfolio",
      locale: "en_IN",
      images: [
        {
          url: "https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png",
          width: 1200,
          height: 630,
          alt: `${project.title} — ${project.tagline} | Shubham Nakashe Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Shubham Nakashe`,
      description: project.description,
      creator: "@shubham_nakashe",
      images: ["https://res.cloudinary.com/dc3o4l7rx/image/upload/v1768034310/Untitled_design_1_uiisqp.png"],
    },
    alternates: {
      canonical: `https://www.shubham-nakashe.dev/project/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} iconName={project.icon} />;
}
