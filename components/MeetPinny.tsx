"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BlinkingParticles } from "./Particles";
import { Section, SectionHeader } from "./ui";

const MeetPinny = () => {
	/* 1. Setup Motion Values (Place these before the return statement of your component) */
	const x = useMotionValue(0.44);
	const y = useMotionValue(-0.26);

	// Spring creates the smooth "floating" return effect
	const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
	const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

	// Transform map: When mouse goes down (+Y), card tilts up (-RotateX) to look like it's being pushed back
	const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
	const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;
		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return (
		<>
			<Section className="border-y border-white/5 bg-zinc-900/20">
				<SectionHeader
					title="Meet Pinny The Keeper"
					subtitle="Your quiet guardian inside the AI revolution."
					badge="Mascot"
				/>

				<div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1080px] mx-auto bg-zinc-900/60 border-2 border-orange-600/10 p-8 rounded-3xl">
					<BlinkingParticles />
					{/* Added 'perspective' to parent so 3D rotation looks correct */}
					<div
						className="lg:w-1/2 relative order-2 lg:order-1"
						style={{ perspective: 1000 }}
					>
						{/* Converted to motion.div and added tilt logic */}
						<motion.div
							style={{
								rotateX, // Calculated from yPct: -0.26
								rotateY, // Calculated from xPct: 0.44
								transformStyle: "preserve-3d", // Keeps children in 3D space
							}}
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							className="relative z-10 bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl cursor-pointer"
						>
							{/* Added subtle Z-translation to text so it 'floats' off the card surface */}
							<div style={{ transform: "translateZ(20px)" }}>
								<h3 className="text-2xl font-bold text-white mb-6">
									The Story
								</h3>
								<div className="space-y-4 text-zinc-400 leading-relaxed">
									<p>
										<strong className="text-orange-400">
											Pinny the Keeper
										</strong>{" "}
										is your quiet guardian inside ChatGPT. When conversations
										get long and important answers disappear into the endless
										scroll, Pinny steps in.
									</p>
									<p>
										With a single click, Pinny helps you pin, save, and protect
										the messages that matter, so you can come back to them
										anytime—instantly.
									</p>
									<p>
										Built for developers, writers, founders, and learners, Pinny
										doesn’t interrupt your flow. He simply keeps watch, holding
										onto your most valuable insights while you move forward. No
										accounts. No tracking. No noise.
									</p>
								</div>
								<div className="mt-8 flex gap-4">
									<div className="flex flex-col">
										<span className="text-2xl font-bold text-white">10k+</span>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">
											Messages Saved
										</span>
									</div>
									<div className="w-px bg-white/10 mx-2"></div>
									<div className="flex flex-col">
										<span className="text-2xl font-bold text-white">0s</span>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">
											Cloud Latency
										</span>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Decorative background element moved slightly deeper in Z-space */}
						<div className="absolute top-10 -left-10 w-full h-full bg-orange-500/10 rounded-3xl -z-10 blur-xl transform translate-z-[-20px]"></div>
					</div>

					<div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
						<motion.img
							src="pinnywave.png"
							alt="Pinny"
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="rounded-3xl w-80 lg:w-96 drop-shadow-[0_0_50px_rgba(249,115,22,0.3)] scale-x-[-1]"
						/>
					</div>
				</div>
			</Section>
		</>
	);
};

export default MeetPinny;
