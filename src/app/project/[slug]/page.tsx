import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Package, ShoppingCart, Brain, Video, Globe, Rocket, Leaf, Plane, Search } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectContent from "./ProjectContent";

const iconMap: { [key: string]: React.ElementType } = {
  Package, ShoppingCart, Brain, Video, Globe, Rocket, Leaf, Plane, Search
};

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.tagline}`,
    description: project.description,
    keywords: [project.title, ...project.tech, "project", "portfolio", "Shubham Nakashe"],
    openGraph: {
      title: `${project.title} | Shubham Nakashe`,
      description: project.description,
      type: "website",
      url: `https://www.shubham-nakashe.dev/project/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Shubham Nakashe`,
      description: project.description,
    },
    alternates: {
      canonical: `https://www.shubham-nakashe.dev/project/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const IconComponent = iconMap[project.icon] || Package;

  return <ProjectContent project={project} IconComponent={IconComponent} />;
}
