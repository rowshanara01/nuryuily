import { notFound } from "next/navigation";
import { componentsPreviewRegistry } from "./components-preview-registry";

interface PreviewPageProps {
  params: Promise<{
    component: string;
  }>;
}

export const metadata = {
  title: "Preview Component",
  description:
    "Preview and test individual UI components from the Nur UI library.",
};

// Generate static params for all available components in build time
export async function generateStaticParams() {
  return Object.keys(componentsPreviewRegistry).map((key) => ({
    component: key,
  }));
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { component: componentName } = await params;

  const Component = componentsPreviewRegistry[componentName]?.component;

  if (!Component) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <Component />
    </main>
  );
}
