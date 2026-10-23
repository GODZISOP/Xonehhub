import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const instant = false;

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | X ONE HUB",
    };
  }

  return {
    title: `${service.title} | X ONE HUB`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ServiceDetailClient service={service} />
    </Suspense>
  );
}
