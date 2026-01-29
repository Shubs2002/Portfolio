import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/#projects" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-medium inline-block">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
