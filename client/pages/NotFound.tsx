import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 pt-16 text-center">
      <div>
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
          Coming soon
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground">
          This page is still in progress
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Keep prompting to let me know what you'd like on this page, and
          I'll fill it in.
        </p>
        <Button asChild className="mt-8 rounded-full bg-brand-gradient text-white">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
