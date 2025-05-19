import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const Home = () => {
  return <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              COSMEDOCS
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl italic mb-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }}>
              *Our aesthetics is invisible art
            </motion.p>
            <motion.div className="mb-8 max-w-xl mx-auto" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              <p className="text-gray-300 mb-1">Refined. Controlled. Precise.</p>
              <p className="text-gray-400 text-sm mt-4">
                Aesthetic medicine by Cosmedocs is minimal.<br />
                Quiet, not loud.<br />
                Invisible, not exaggerated.<br />
                It's transformation that speaks — without saying a word.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9,
            duration: 0.6
          }}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Treatments Section */}
      <section className="py-20 bg-black">
        <div className="page-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Botox",
            description: "Anti-wrinkle injections for frown lines, crows feet & forehead lines"
          }, {
            title: "Dermal Fillers",
            description: "Restore volume and enhance facial features"
          }, {
            title: "Lip Fillers",
            description: "Subtle enhancement for natural-looking fullness"
          }, {
            title: "Non-Surgical Nose Job",
            description: "Reshape without surgery"
          }, {
            title: "Skin Boosters",
            description: "Deep hydration and rejuvenation"
          }, {
            title: "PDO Threads",
            description: "Lift and tighten for a youthful appearance"
          }].map((treatment, index) => <motion.div key={treatment.title} className="bg-accent rounded-lg p-6" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
                <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{treatment.description}</p>
                <Button variant="link" className="p-0 h-auto text-white hover:text-gray-300">
                  Learn more →
                </Button>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 className="text-3xl font-bold mb-8" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              Our Philosophy
            </motion.h2>
            <motion.div className="space-y-4 text-lg text-gray-300" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <p>
                At Cosmedocs, we believe that the best aesthetic treatments are the ones nobody notices.
              </p>
              <p>
                Our approach is guided by subtlety and precision, ensuring that every treatment enhances your natural beauty without announcing itself.
              </p>
              <p className="text-white font-medium italic">
                "It's transformation that speaks — without saying a word."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111]">
        <div className="page-container">
          <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to discover your refined aesthetic?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert practitioners and begin your journey toward subtle, controlled transformation.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;