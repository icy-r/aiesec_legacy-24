 import { motion, AnimatePresence } from 'framer-motion';
    import {
      Users,
      Award,
      Star,
      ChevronDown,
      ChevronUp,
      Briefcase,
      BarChart,
      Github,
    } from "lucide-react";
    import { TypeAnimation } from 'react-type-animation';
    import confetti from 'canvas-confetti';
    import { useState } from 'react';
    import Timeline from "./Timeine.jsx";
    import jobDescriptions from "./data-desc.js";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-500 rounded-full opacity-20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            restSpeed: 0.3,
          }}
        />
      ))}
    </div>
  );
};

const roleMapping = {
  OCP: { fullName: "Organizing Committee President", icon: "👑", count: 1 },
  "OCVP DE": { fullName: "OCVP Delegate Experience", icon: "🤝", count: 1 },
  "OCVP DE & MKT": {
    fullName: "OCVP Delegate Experience & Marketing",
    icon: "📣",
    count: 1,
  },
  "OCVP Events": { fullName: "OCVP Events", icon: "🎉", count: 1 },
  "OCVP MKT": { fullName: "OCVP Marketing", icon: "📈", count: 3 },
  "OCVP PD": { fullName: "OCVP Partnership Development", icon: "🤝", count: 4 },
  "OCVP Finance": { fullName: "OCVP Finance", icon: "💰", count: 1 },
  "OCVP Logistics": { fullName: "OCVP Logistics", icon: "🚚", count: 2 },
};

// eslint-disable-next-line react/prop-types
const JobDescription = ({ title, description, isOpen, toggleOpen }) => {
  return (
    <motion.div
      className="mb-8 bg-opacity-10 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex items-center bg-black justify-between w-full p-6 text-left text-white"
        onClick={toggleOpen}
      >
        <h3 className="text-2xl font-semibold text-yellow-100">{title}</h3>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-8">
              <section>
                <h4 className="text-xl text-white font-semibold mb-4 flex items-center">
                  <Star className="mr-2 " size={24} />
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {description.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-lg text-white flex items-start bg-gray-800 bg-opacity-20 p-4 rounded-md"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Star className="mr-3 flex-shrink-0 " size={20} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="text-xl text-white font-semibold mb-4 flex items-center">
                  <Briefcase className="mr-2 text-blue-400" size={24} />
                  Experience
                </h4>
                <ul className="space-y-2">
                  {description.experience.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-lg text-white flex items-start bg-gray-800 bg-opacity-20 p-4 rounded-md"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Briefcase
                        className="mr-3 flex-shrink-0 text-blue-400"
                        size={20}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="text-xl text-white font-semibold mb-4 flex items-center">
                  <BarChart className="mr-2  text-green-400" size={24} />
                  KPIs / MoS
                </h4>
                <ul className="space-y-2">
                  {description.kpis.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-lg text-white flex items-start bg-gray-800 bg-opacity-20 p-4 rounded-md"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <BarChart
                        className="mr-3 flex-shrink-0 text-green-400"
                        size={20}
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AiesecLegacy2024 = () => {
  const [openRole, setOpenRole] = useState(null);

  const toggleRole = (role) => {
    role = role.replace(/\s+/g, "-");
    setOpenRole(openRole === role ? null : role);
  };

  const scrollToRole = (role) => {
    const element = document.getElementById(role.replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenRole(role.replace(/\s+/g, "-"));
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FFA500", "#FFFF00"], // Gold-like colors for confetti
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden p-8">
      <AnimatedBackground />

      <header className="text-center mb-16 relative z-10">
        <motion.h1
          className="text-6xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LEGACY 2024
        </motion.h1>
        <motion.h4
          className="text-xl font-semibold mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          by AIESEC in SLIIT
        </motion.h4>
        <TypeAnimation
          sequence={[
            "Celebrating Excellence in Leadership",
            2000,
            "Empowering Future Leaders",
            2000,
            "Creating Global Impact",
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-2xl text-white"
        />
      </header>

      <main className="relative z-10">
        {/* Event Introduction section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400 flex items-center ">
            <Award className="mr-3 text-yellow-400" size={32} /> Event
            Introduction
          </h2>
          <motion.p
            className="text-xl bg-blue-800 bg-opacity-30 rounded-lg p-8 text-white backdrop-blur-sm leading-relaxed"
            whileHover={{ boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" }}
          >
            &apos;Legacy 2024&apos; is the annual award ceremony organized by
            AIESEC in SLIIT to recognize and celebrate the contributions and
            achievements of its members. It is the most prestigious night of the
            AIESEC in SLIIT&apos;s calendar, acknowledging hard work,
            dedication, and impact in personal and professional development.
          </motion.p>
        </motion.section>

        {/* Timeline section */}
        <section className="mb-16">
          {/*<h2 className="text-4xl text-yellow-400 font-semibold mb-6 flex items-center ">*/}
          {/*    <Calendar className="mr-3 text-yellow-400" size={32}/> Timeline*/}
          {/*</h2>*/}
          <Timeline />
        </section>

        {/* Team Structure section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-yellow-400 mb-6 flex items-center ">
            <Users className="mr-3" size={32} /> Team Structure
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(roleMapping).map(
              ([shortName, { fullName, icon, count }], index) => (
                <motion.div
                  key={index}
                  className="bg-blue-800 bg-opacity-30 rounded-lg p-6 text-center backdrop-blur-sm cursor-pointer flex flex-col items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                  }}
                  onClick={() => {
                    scrollToRole(fullName.replace(/\s+/g, "-"));
                    triggerConfetti();
                    setTimeout(
                      () => scrollToRole(fullName.replace(/\s+/g, "-")),
                      300
                    );
                  }}
                >
                  <span className="text-4xl mb-2">{icon}</span>
                  <p className="font-semibold text-lg text-yellow-300">
                    {shortName}
                  </p>
                  <p className="text-sm mt-2 text-white">{fullName}</p>
                  <p className="text-sm mt-2 font-bold text-white">
                    Positions: {count}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* Job Descriptions section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400">
            Job Descriptions
          </h2>
          {Object.entries(jobDescriptions).map(([role, description], index) => (
            <div key={index} id={role.replace(/\s+/g, "-")}>
              <JobDescription
                title={role}
                description={description}
                isOpen={openRole === role.replace(/\s+/g, "-")}
                toggleOpen={() => toggleRole(role)}
              />
            </div>
          ))}
        </section>

        {/* Contact Info section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-yellow-400">
            Contact Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Udara Amarasinghe",
                position: "LCVP EM & IM – AIESEC in SLIIT",
                email: "udara.amarasinghe@aiesec.net",
                phone: "+94 77 659 8854",
              },
              {
                name: "Thilini Perera",
                position: "LCVP PM – AIESEC in SLIIT",
                email: "thilinip@aiesec.net",
                phone: "+94 78 352 6773",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="bg-blue-800 bg-opacity-30 rounded-lg p-8 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                }}
              >
                <h3 className="text-2xl text-white font-semibold mb-3 ">
                  {contact.name}
                </h3>
                <p className="mb-2 text-white">{contact.position}</p>
                <p className="mb-2 text-white">{contact.email}</p>
                <p className="text-white">{contact.phone}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Apply Now button */}
        <section className="text-center">
          <motion.button
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full text-2xl transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setTimeout(() => {
                triggerConfetti();
                window.open("https://forms.gle/nK465GXWfMEaGJTS9", "_blank");
              }, 1000);
            }}
          >
            Apply Now
          </motion.button>
        </section>
      </main>

      <footer className="mt-16 text-center flex flex-col relative z-10">
        <p className="text-lg">POWERED BY IM 24.25</p>
        <a
          href="https://github.com/icy-r"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <Github size={24} className="text-white mx-auto" />
        </a>
      </footer>
    </div>
  );
};

 export default AiesecLegacy2024;