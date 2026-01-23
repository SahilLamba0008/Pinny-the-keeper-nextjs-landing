"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bookmark, Zap, Search } from "lucide-react";
import { ContainedParticles } from "./Particles";
import { Section, SectionHeader } from "./ui";

const HowItWorks = () => {
	return (
		<>
			<Section
				id="how-it-works"
				className="bg-zinc-950 relative border-t border-white/5"
			>
				<div className="relative">
					{/* Fixed Gradient Blob Background */}
					<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

					<SectionHeader
						title="Three Steps to Clarity"
						subtitle="Transform your screen recordings into conversion-focused demos."
						badge="Workflow"
						className="relative z-10"
					/>

					<div className="grid md:grid-cols-3 gap-8 relative z-10">
						{/* Connecting Lines (Desktop) */}
						<div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0 border-t border-dashed border-zinc-700 opacity-50"></div>

						{[
							{
								icon: <Bookmark />,
								title: "1. Pin",
								desc: "Click the pin icon that appears on any ChatGPT message.",
								step: "01",
							},
							{
								icon: <Zap />,
								title: "2. Organize",
								desc: "Smart auto-tags and custom collections applied automatically.",
								step: "02",
							},
							{
								icon: <Search />,
								title: "3. Recall",
								desc: "Search globally across all your AI conversations in milliseconds.",
								step: "03",
							},
						].map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="relative bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl group hover:border-orange-500/40 transition-all duration-500 overflow-hidden hover:-translate-y-2"
							>
								{/* Particles inside the card */}
								<ContainedParticles />

								<div className="relative z-10">
									<div className="absolute top-0 right-0 text-6xl font-bold text-white/5 select-none font-mono">
										{step.step}
									</div>

									<div className="w-14 h-14 bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
										<span className="text-orange-500 w-6 h-6 flex items-center justify-center">
											{step.icon}
										</span>
									</div>
									<h3 className="text-xl font-bold text-white mb-3">
										{step.title}
									</h3>
									<p className="text-zinc-400 text-sm leading-relaxed">
										{step.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Section>
		</>
	);
};

export default HowItWorks;
