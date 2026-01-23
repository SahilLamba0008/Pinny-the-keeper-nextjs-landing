"use client";
import React from "react";
import { motion } from "framer-motion";
import { Chrome, CheckCircle } from "lucide-react";
import { Button } from "./ui";

const FinalCTA = () => {
	return (
		<>
			<section className="relative py-40 overflow-hidden">
				{/* Background with heavy bottom orange glow */}
				<div className="absolute inset-0 bg-black">
					<div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-orange-600/30 via-red-600/10 to-transparent blur-[120px] pointer-events-none"></div>
					{/* Subtle grid pattern overlay */}
					<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')]"></div>
				</div>

				<div className="max-w-[1080px] mx-auto px-6 relative z-10 text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="bg-zinc-900/50 backdrop-blur-xl p-16 rounded-[3rem] border border-orange-500/20 shadow-2xl shadow-orange-500/20"
					>
						<h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
							Ready to stop losing <br />
							important answers?
						</h2>
						<p className="text-xl text-zinc-300 mb-12 max-w-xl mx-auto">
							Join thousands of power users saving hours of scrolling every
							week. Install in seconds.
						</p>
						<Button
							variant="primary"
							icon={<Chrome size={20} />}
							className="text-xl px-12 py-5 shadow-2xl shadow-orange-500/40 mx-auto"
						>
							Add Pinny to Chrome
						</Button>
						<p className="text-zinc-500 mt-8 text-sm flex items-center justify-center gap-2">
							<CheckCircle size={14} className="text-green-500" /> Free forever
							plan available. No credit card required.
						</p>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default FinalCTA;
