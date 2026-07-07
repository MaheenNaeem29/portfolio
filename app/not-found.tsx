import { ArrowLeft } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-heading text-7xl font-bold sm:text-8xl">
        <GradientText>404</GradientText>
      </p>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="secondary" size="lg">
          <ArrowLeft size={18} />
          Back home
        </Button>
      </div>
    </div>
  );
}
