// @ts-no-check
"use client";
import { motion } from "framer-motion";

export const ContainedParticles = () => {
	const particles = Array.from({ length: 8 }).map((_, i) => ({
		id: i,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		duration: Math.random() * 5 + 5,
	}));

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
			{particles.map((p) => (
				<motion.div
					key={p.id}
					className="absolute w-1 h-1 bg-orange-400/30 rounded-full blur-[1px]"
					initial={{ top: p.top, left: p.left, opacity: 0 }}
					animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0, 1, 0] }}
					transition={{
						duration: p.duration,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			))}
		</div>
	);
};

export const BlinkingParticles = () => {
	const particles = Array.from({ length: 15 }).map((_, i) => ({
		id: i,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		delay: Math.random() * 5,
		duration: Math.random() * 3 + 2,
	}));

	return (
		<div className="absolute inset-0 pointer-events-none overflow-hidden">
			{particles.map((p) => (
				<motion.div
					key={p.id}
					className="absolute w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
					style={{ top: p.top, left: p.left }}
					animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
					transition={{
						duration: p.duration,
						repeat: Infinity,
						delay: p.delay,
					}}
				/>
			))}
		</div>
	);
};
