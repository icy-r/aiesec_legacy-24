 import { motion, AnimatePresence } from 'framer-motion';
    import { Calendar, Users, Award, Star, ChevronDown, ChevronUp } from 'lucide-react';
    import { TypeAnimation } from 'react-type-animation';
    import confetti from 'canvas-confetti';
    import Timeline from "./Timeine.jsx";

    const AnimatedBackground = () => {
        return (
            <div className="fixed inset-0 z-0">
                {[...Array(10)].map((_, i) => ( // Reduced number of background elements
                    <motion.div
                        key={i}
                        className="absolute bg-blue-500 rounded-full opacity-20"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                        }}
                        animate={{
                            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
            </div>
        );
    };


    const roleMapping = {
        "OCP": { fullName: "Organizing Committee President", icon: "👑" },
        "OCVP Delegate Experience": { fullName: "OCVP Delegate Experience", icon: "🤝" },
        "OCVP Delegate Experience & MKT": { fullName: "OCVP Delegate Experience & Marketing", icon: "📣" },
        "OCVP Events": { fullName: "OCVP Events", icon: "🎉" },
        "OCVP MKT": { fullName: "OCVP Marketing", icon: "📈" },
        "OCVP PD": { fullName: "OCVP Partnership Development", icon: "🤝" },
        "OCVP Finance": { fullName: "OCVP Finance", icon: "💰" },
        "OCVP Logistics": { fullName: "OCVP Logistics", icon: "🚚" }
    };

    const jobDescriptions = {
        "Organizing Committee President": [
            "Lead the entire OC to a financially and logistically successful event.",
            "Ensure the event is meeting its goals agreed upon between the OC and the EB of AIESEC in SLIIT.",
            "Ensure correct communication and reporting with OC,PM & the EB.",
            "Set and assure the respect of a specific timeline and an action plan.",
            "Manage the OC and maintain good communication.",
            "Setting out initial timelines for all the OCVPs.",
            "Plan & track OC tasks and OC performance.",
            "Setting out PD raising plan together with LCVP PD.",
            "Plan initial marketing ad PR campaigns together with LCVP Marketing.",
            "Always keep in touch with the PM & LCVP Finance regarding the status of the ER raised.",
            "Make sure that the marketing materials are ready & the calendar is booked the day before it is supposed to be posted."
        ],
        "OCVP Delegate Experience": [
            "Delegates Management",
            "Delegate Communication (Email, Newsletters)",
            "Delegate Interaction, communication & coordination",
            "Delegates Attraction Sessions Creating",
            "Find Session Partners and Speakers",
            "In-kind Sponsors Raising and Management",
            "Create and responsible for the agendas",
            "Agenda and Speakers responsibility for Main Event",
            "Public figures handling",
            "Develop & design any required surveys"
        ],
        "OCVP Delegate Experience & Marketing": [
            "Course Content Development",
            "Develop & design any required surveys",
            "In-kind Sponsors Raising and Management",
            "Creating digital marketing materials & tools",
            "AIESEC brand alignment and coordination",
            "Collect content for showcasing",
            "Content creation",
            "Understanding and addressing synergy points with other positions as required",
            "Create and responsible for the agendas",
            "Agenda and Speakers responsibility for Main Event",
            "Public figures handling"
        ],
        "OCVP Events": [
            "Find Session Partners and Speakers",
            "In-kind Sponsors Raising and Management",
            "Create sub sessions and events on the Project",
            "Session streamlining and event flow management",
            "Create and responsible for the agendas",
            "Responsible for all event day entertainment items",
            "Responsible for arrangement of all awards and support with the smooth flow of announcing nominees"
        ],
        "OCVP Marketing": [
            "Planning event marketing timeline",
            "Creating and implementing marketing strategies",
            "Increasing virtual outreach through various platforms",
            "Creating digital marketing materials & tools",
            "AIESEC brand alignment and coordination",
            "Collect content for showcasing",
            "Content creation",
            "Understanding and addressing synergy points with other positions as required",
            "Follow up with the Agenda",
            "Manage the event page",
            "Creating digital marketing materials & tools",
            "Performing additional duties related to the project set out by the OCP"
        ],
        "OCVP Partnership Development": [
            "Develop partnerships with Stakeholders & NGOs",
            "Develop partnerships with organizations in order to get monetary or in kind support",
            "Current PD accounts management",
            "Creating and implementing PD strategies",
            "Identify potential Companies/Organisations and getting onboard",
            "Responsible for the deliveries of the partnerships",
            "Responsible for the contents published on media",
            "Understanding and Addressing synergy points with other positions as Required",
            "Performing additional duties related to the Project set out by the OCP",
            "Partnership Management"
        ],
        "OCVP Finance": [
            "Preparing event budget",
            "Collecting and documentation of all the supporting documents",
            "Responsible for budget execution",
            "Expenses an partnership tracking",
            "Ensure partnership delivery",
            "Preparing final finance report",
            "Cash Flow management of the event",
            "Understanding and addressing synergy points with other positions as required",
            "Performing additional duties related to the project set out by the OCP"
        ],
        "OCVP Logistics": [
            "Responsible for finding a suitable venue and venue management",
            "Responsible for All Logistic Requirements Before and within the Project",
            "Responsible for In -Project Event Management",
            "Responsible for taking an innovative approach in logistic supply and management",
            "Responsible for printing and supplying merchandises",
            "Responsible for technical operations of the conference",
            "Understanding and addressing synergy points with other positions as required",
            "Attending all virtual and physical meetings and presenting updates on logistics and events",
            "Any required assistance on ER related work"
        ]
    };


    // eslint-disable-next-line react/prop-types
    const JobDescription = ({ title, description, isOpen, toggleOpen }) => {
        return (
            <motion.div
                className="mb-8 bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    className="flex items-center justify-between w-full p-6 text-left text-white"
                    onClick={toggleOpen}
                >
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                            className="overflow-hidden"
                        >
                            <ul className="p-6 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {description.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="text-lg flex items-start bg-gray-800 bg-opacity-20 p-4 rounded-md"
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: index * 0.1}}
                                    >
                                        <Star className="mr-3 flex-shrink-0 text-yellow-400" size={20}/>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    const AiesecLegacy2024 = () => {
        const [openRole, setOpenRole] = useState(null);

        const toggleRole = (role) => {
            setOpenRole(openRole === role ? null : role);
        };

        const scrollToRole = (role) => {
            const element = document.getElementById(role);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
                setOpenRole(role);
            }
        };

        const triggerConfetti = () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: {y: 0.6}
            });
        };

        return (
            <div
                className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden p-8">
                <AnimatedBackground/>

                <header className="text-center mb-16 relative z-10">
                    <motion.h1
                        className="text-6xl font-bold mb-4"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        AIESEC Legacy 2024
                    </motion.h1>
                    <TypeAnimation
                        sequence={[
                            'Celebrating Excellence in Leadership',
                            2000,
                            'Empowering Future Leaders',
                            2000,
                            'Creating Global Impact',
                            2000,
                        ]}
                        wrapper="p"
                        cursor={true}
                        repeat={Infinity}
                        className="text-2xl"
                    />
                </header>

                <main className="relative z-10">
                    {/* Event Introduction section */}
                    <motion.section
                        className="mb-16"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <h2 className="text-4xl font-semibold mb-6 flex items-center">
                            <Award className="mr-3" size={32}/> Event Introduction
                        </h2>
                        <motion.p
                            className="text-xl bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm leading-relaxed"
                            whileHover={{boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"}}
                        >
                            &apos;Legacy 2024&apos; is the annual award ceremony organized by AIESEC in SLIIT to recognize and
                            celebrate the contributions and achievements of its members. It is the most prestigious night of
                            the
                            AIESEC in SLIIT&apos;s calendar, acknowledging hard work, dedication, and impact in personal and
                            professional development.
                        </motion.p>
                    </motion.section>

                    {/* Timeline section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold mb-6 flex items-center">
                            <Calendar className="mr-3" size={32}/> Timeline
                        </h2>
                        <Timeline/>
                    </section>

                    {/* Team Structure section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold mb-6 flex items-center">
                            <Users className="mr-3" size={32}/> Team Structure
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {Object.entries(roleMapping).map(([shortName, {fullName, icon}], index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white bg-opacity-20 rounded-lg p-6 text-center backdrop-blur-sm cursor-pointer flex flex-col items-center justify-center"
                                    whileHover={{scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"}}
                                    onClick={() => {
                                        scrollToRole(fullName);
                                        triggerConfetti();
                                    }}
                                >
                                    <span className="text-4xl mb-2">{icon}</span>
                                    <p className="font-semibold text-lg">{shortName}</p>
                                    <p className="text-sm mt-2">{fullName}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Job Descriptions section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold mb-6">Job Descriptions</h2>
                        {Object.entries(jobDescriptions).map(([role, description], index) => (
                            <div key={index} id={role}>
                                <JobDescription
                                    title={role}
                                    description={description}
                                    isOpen={openRole === role}
                                    toggleOpen={() => toggleRole(role)}
                                />
                            </div>
                        ))}
                    </section>

                    {/* Contact Info section */}
                    <section className="mb-16">
                        <h2 className="text-4xl font-semibold mb-6">Contact Info</h2>
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
                                    className="bg-white bg-opacity-20 rounded-lg p-8 backdrop-blur-sm"
                                    whileHover={{scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"}}
                                >
                                    <h3 className="text-2xl font-semibold mb-3">{contact.name}</h3>
                                    <p className="mb-2">{contact.position}</p>
                                    <p className="mb-2">{contact.email}</p>
                                    <p>{contact.phone}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Apply Now button */}
                    <section className="text-center">
                        <motion.button
                            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full text-2xl transition duration-300 ease-in-out transform hover:scale-105"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            onClick={triggerConfetti}
                        >
                            Apply Now
                        </motion.button>
                    </section>
                </main>

                <footer className="mt-16 text-center relative z-10">
                    <p className="text-lg">POWERED BY IM 24.25</p>
                </footer>
            </div>
        );
    };

    export default AiesecLegacy2024;