import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      setEmail(inputRef.current.value);
      setOpen(true);
    }
  }, []);

  return (
    <div className="page-container">
      <section className="py-24">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to CosmeDocs
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your premier destination for cosmetic treatments.
        </motion.p>
        <div className="flex justify-center">
          <motion.div
            className="inline-flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/treatments">
              <Button size="lg">View Treatments</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Stay Updated with Our Latest Offers
          </h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter to receive exclusive deals, treatment
            updates, and more.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={inputRef}
            />
            <Button type="submit" className="md:w-auto w-full">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Subscription Confirmed</DialogTitle>
            <DialogDescription>
              Thank you for subscribing! You will receive updates at{" "}
              {email || "your email address"}.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
