"use client";
import React, { useRef } from "react";
import { Button } from "./ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Chrome, PlayCircle, Bookmark } from "lucide-react";
import { BlinkingParticles } from "./Particles";

const HeroSection = () => {
	const videoContainerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: videoContainerRef,
		offset: ["start end", "end start"],
	});

	const videoY = useTransform(scrollYProgress, [0, 1], [100, -50]);

	return (
		<>
			<section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
				<BlinkingParticles />

				{/* Ambient Hero Gradient */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-orange-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

				{/* Hero Top "Pill" Badge */}
				<div className="relative z-10 flex justify-center mb-6">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-4 py-1 hover:border-orange-500/30 transition-colors cursor-default"
					>
						<span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
							<Sparkles size={10} /> NEW
						</span>
						<span className="text-sm text-zinc-300">
							Save 65% on Lifetime Plan
						</span>
					</motion.div>
				</div>

				<div className="max-w-[1080px] mx-auto px-6 relative z-10 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
					>
						Never lose important <br className="hidden md:block" />
						<span className="text-transparent bg-clip-text bg-linear-to-br from-orange-200 via-orange-500 to-orange-900 animate-text drop-shadow-2xl">
							ChatGPT messages
						</span>{" "}
						again.
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed"
					>
						Turn your raw chats into a personal knowledge base. Pin, organize,
						and search instantly with Pinny.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Button
							variant="primary"
							icon={<Chrome size={20} />}
							className="text-lg px-8 py-3 shadow-2xl shadow-orange-500/30"
						>
							Start Creating Free
						</Button>
						<Button
							variant="secondary"
							icon={<PlayCircle size={20} />}
							className="text-lg px-8 py-3"
						>
							How it works
						</Button>
					</motion.div>

					{/* Visual Product Video */}
					<motion.div
						ref={videoContainerRef}
						style={{ y: videoY }}
						className="mt-12 relative max-w-[1000px] mx-auto rounded-t-2xl p-3 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border-t border-x border-white/10 shadow-2xl"
					>
						{/* Glow Behind Video */}
						<div className="absolute -inset-4 top-10 bg-gradient-to-r from-orange-600/30 via-red-600/30 to-yellow-600/20 blur-[100px] -z-10 rounded-[3rem] opacity-60"></div>

						{/* Video Player Container */}
						<div className="relative rounded-t-xl overflow-hidden bg-zinc-950 aspect-[16/9] flex items-center justify-center border-b border-white/5 shadow-inner">
							<video
								src="/pinnyrecroding.mp4"
								autoPlay
								loop
								muted
								playsInline
								controls // Added this to enable play/pause and timeframe slider
								preload="metadata" // Only loads video metadata initially to speed up page load
								className="w-full h-full object-cover bg-zinc-900"
							/>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
