"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// --- Component: Accordion Item ---
export const AccordionItem = ({
	question,
	answer,
	isOpen,
	onClick,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}) => {
	return (
		<motion.div
			initial={false}
			animate={{
				backgroundColor: isOpen ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0)",
			}}
			className={cn(
				"border-b border-white/10 overflow-hidden transition-colors duration-300",
				isOpen ? "rounded-lg border-none" : "",
			)}
		>
			<button
				onClick={onClick}
				className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none group"
			>
				<span
					className={cn(
						"text-lg font-medium transition-colors duration-300",
						isOpen ? "text-orange-400" : "text-white group-hover:text-zinc-300",
					)}
				>
					{question}
				</span>
				<motion.span
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
					className={cn(
						"ml-6 flex-shrink-0",
						isOpen ? "text-orange-400" : "text-zinc-500",
					)}
				>
					<ChevronDown size={20} />
				</motion.span>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto", marginBottom: 24 },
							collapsed: { opacity: 0, height: 0, marginBottom: 0 },
						}}
						transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<p className="text-zinc-400 leading-relaxed px-6">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
