
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Cosmedocs London</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Cosmedocs for expert aesthetic medicine on Harley Street, London." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-24">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200 rounded-full px-8"
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
    </>
  );
};

export default NotFound;
