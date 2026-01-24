"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { BlinkingParticles } from "./Particles";
import { Section, SectionHeader, AnimatedPrice, Button } from "./ui";

const PricingSection = () => {
	return (
		<>
			<Section id="pricing" pattern="dashed-grid">
				<BlinkingParticles />
				<SectionHeader
					title="Simple, Transparent Pricing"
					subtitle="No dark patterns. Choose the plan that fits your needs."
					badge="Pricing"
				/>

				<div className="grid md:grid-cols-3 gap-8 items-center relative max-w-[1000px] mx-auto">
					{/* Ambient Glow for Pricing */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-orange-600/5 blur-[100px] rounded-full -z-10"></div>

					{/* Free Plan */}
					<motion.div
						whileHover={{ y: -10 }}
						className="bg-zinc-950 p-8 rounded-[2rem] border border-white/10 relative z-10"
					>
						<h3 className="text-xl font-semibold text-white mb-6">Starter</h3>
						<div className="text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
							$<AnimatedPrice value={0} />{" "}
							<span className="text-lg font-normal text-zinc-500">/ mo</span>
						</div>
						<p className="text-zinc-500 mb-8 text-sm">For casual users.</p>
						<ul className="space-y-4 mb-10 text-zinc-400 text-sm">
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> 5 Pins
								limit
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Local
								storage
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Basic
								search
							</li>
						</ul>
						<Button variant="secondary" className="w-full">
							Add to Chrome
						</Button>
					</motion.div>

					{/* Lifetime Plan (Emphasized) */}
					<motion.div
						initial={{ scale: 0.95 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
						className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-orange-500/50 relative z-20 shadow-2xl shadow-orange-500/10 order-first md:order-none"
					>
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
							65% OFF Limited Time
						</div>
						<h3 className="text-xl font-semibold text-white mb-6">
							Lifetime Pro
						</h3>
						<div className="text-5xl font-bold text-white mb-2 flex items-baseline gap-1">
							$<AnimatedPrice value={27.99} />{" "}
							<span className="text-lg font-normal text-zinc-500">/ once</span>
						</div>
						<p className="text-orange-400 mb-8 text-sm font-medium line-through decoration-white/30 decoration-2">
							$79.99
						</p>

						<div className="h-px w-full bg-white/10 mb-8"></div>

						<ul className="space-y-4 mb-10 text-white text-sm">
							<li className="flex items-center gap-3">
								<CheckCircle
									className="text-orange-500 fill-orange-500/20"
									size={20}
								/>
								<span className="font-semibold">Unlimited Pins</span>
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle
									className="text-orange-500 fill-orange-500/20"
									size={20}
								/>
								Advanced Search & Filters
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle
									className="text-orange-500 fill-orange-500/20"
									size={20}
								/>
								Future Updates Included
							</li>
						</ul>
						<Button
							variant="primary"
							className="w-full py-4 text-lg shadow-lg shadow-orange-500/20"
						>
							Get Lifetime Access
						</Button>
					</motion.div>

					{/* Monthly Plan */}
					<motion.div
						whileHover={{ y: -10 }}
						className="bg-zinc-950 p-8 rounded-[2rem] border border-white/10 relative z-10"
					>
						<div className="absolute top-6 right-6 bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
							40% OFF
						</div>
						<h3 className="text-xl font-semibold text-white mb-6">Monthly</h3>
						<div className="text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
							$<AnimatedPrice value={6.66} />{" "}
							<span className="text-lg font-normal text-zinc-500">/ mo</span>
						</div>
						<p className="text-zinc-500 mb-8 text-sm line-through decoration-zinc-700">
							$11.99
						</p>
						<ul className="space-y-4 mb-10 text-zinc-400 text-sm">
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Unlimited
								Pins
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Advanced
								Search
							</li>
							<li className="flex items-center gap-3 text-zinc-600">
								<XCircle size={18} /> No Priority Support
							</li>
						</ul>
						<Button variant="secondary" className="w-full">
							Start Monthly
						</Button>
					</motion.div>
				</div>
			</Section>
		</>
	);
};

export default PricingSection;
