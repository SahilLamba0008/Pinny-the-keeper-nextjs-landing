"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	Cpu,
	MousePointer2,
	Search,
	MessageCircle,
	Star,
	Lock,
} from "lucide-react";
import { Section, SectionHeader } from "./ui";

const StandOut = () => {
	return (
		<>
			<Section id="features">
				<SectionHeader
					title="Why Pinny Stands Out"
					subtitle="Built differently to respect your privacy and flow."
					badge="Difference"
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							icon: <Lock className="text-green-400" />,
							title: "Privacy First",
							desc: "Your data never leaves your device. Everything is stored locally in your browser storage.",
						},
						{
							icon: <Cpu className="text-blue-400" />,
							title: "Lightning Fast",
							desc: "Built with zero bloat. Pinny loads instantly and doesn't slow down your chat interface.",
						},
						{
							icon: <MousePointer2 className="text-purple-400" />,
							title: "Zero Friction",
							desc: "Integrated directly into the ChatGPT UI. No context switching or tab jumping required.",
						},
						{
							icon: <Search className="text-yellow-400" />,
							title: "Global Search",
							desc: "Don't scroll through endless history. Find that one code snippet from 3 months ago in seconds.",
						},
						{
							icon: <MessageCircle className="text-pink-400" />,
							title: "Export Ready",
							desc: "Need to share? Export your pinned collections to Markdown, JSON, or PDF instantly.",
							badge: "On the Way", // Added Badge
						},
						{
							icon: <Star className="text-orange-400" />,
							title: "Favorites",
							desc: "Star your most critical pins for quick access in the sidebar.",
							badge: "On the Way", // Added Badge
						},
					].map((item, i) => (
						<motion.div
							key={i}
							whileHover={{ scale: 1.02 }}
							className="relative p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900/80 transition-all duration-300 group"
						>
							<div className="flex justify-between items-start mb-4">
								<div className="bg-zinc-800/50 w-fit p-3 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
									{item.icon}
								</div>

								{/* Badge Rendering Logic */}
								{item.badge && (
									<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
										{item.badge}
									</span>
								)}
							</div>

							<h3 className="text-lg font-bold text-white mb-2">
								{item.title}
							</h3>
							<p className="text-zinc-400 text-sm leading-relaxed">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</Section>
		</>
	);
};

export default StandOut;
