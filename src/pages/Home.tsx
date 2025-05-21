
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeforeAfterImageViewer from "@/components/BeforeAfterImageViewer";

const Home = () => {
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

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50 rounded-2xl mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide the highest quality cosmetic treatments with a focus on safety, 
                  natural results, and patient satisfaction. We believe in enhancing your 
                  natural beauty rather than changing how you look.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the UK's leading aesthetic clinic known for our medical expertise, 
                  innovative treatments, and exceptional patient care. We aim to help our 
                  clients feel confident in their appearance through subtle, refined enhancements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transformations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Facial Contouring</h3>
              <BeforeAfterImageViewer
                beforeImage="/lovable-uploads/8dfa88f0-78d4-4859-8727-a4828a7e8d8a.png"
                afterImage="/lovable-uploads/c570f608-4aa7-4496-8e38-6322dfc81e16.png"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Anti-Wrinkle Treatment</h3>
              <BeforeAfterImageViewer
                beforeImage="/lovable-uploads/97e9a4a2-debd-4216-879b-d78feffa8cba.png"
                afterImage="/lovable-uploads/8fc7a776-c255-4ca9-a8d9-573f4083b7f1.png"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/treatments">
              <Button size="lg">See More Treatments</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
