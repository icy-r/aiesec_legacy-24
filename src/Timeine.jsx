import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const TimelineItem = ({ date, title, subtitle, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="flex items-center mb-16 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-1/2 text-right pr-8">
                <p className="text-sm text-cyan-300 font-semibold">{date}</p>
            </div>
            <div className="absolute left-1/2 w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center z-10 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2 pl-8">
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                {subtitle && <p className="text-sm text-cyan-200">{subtitle}</p>}
                <AnimatePresence>
                    {isHovered && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-gray-300 mt-2"
                        >
                            {description}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const events = [
        {
            date: '1st October 2024',
            title: 'Application Open',
            description: 'Start your journey with AIESEC Legacy 2024'
        },
        {
            date: '7th October 2024',
            title: 'Application Deadline',
            subtitle: 'OCP',
            description: 'Last day to apply for Organizing Committee President'
        },
        {
            date: '10th October 2024',
            title: 'Application Deadline',
            subtitle: 'OCVP',
            description: 'Final day for all OCVP position applications'
        },
        {
            date: '20th October 2024',
            title: 'OC Finalizing',
            description: 'Organizing Committee structure finalized'
        },
    ];

    return (
        <div className="max-w-4xl mx-auto relative py-12 px-4">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-400 transform -translate-x-1/2"></div>
            {events.map((event, index) => (
                <TimelineItem key={index} {...event} />
            ))}
        </div>
    );
};

const TimelineSection = () => (
    <section className="mb-16 bg-indigo-900 py-12">
        <h2 className="text-4xl font-semibold mb-12 text-center text-white flex items-center justify-center">
            <Calendar className="mr-3" size={32} /> Timeline
        </h2>
        <Timeline />
    </section>
);

export default TimelineSection;