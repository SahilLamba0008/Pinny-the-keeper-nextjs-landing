"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	Lightbulb,
	Zap,
	ShieldCheck,
	Users,
	Rocket,
	Compass,
	Heart,
	Chrome,
	CheckCircle,
} from "lucide-react";
import { Footer, Navbar } from "@/components";
import { Section } from "@/components/ui";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility: standard Shadcn 'cn' function ---
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// --- Component: Custom Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "glass" | "outline";
	icon?: React.ReactNode;
}

const Button = ({
	children,
	variant = "primary",
	className,
	icon,
	...props
}: ButtonProps) => {
	const baseStyle =
		"flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer relative overflow-hidden group active:scale-95";

	const variants = {
		primary:
			"bg-gradient-to-r from-orange-600 to-red-600 text-white border border-transparent shadow-lg shadow-orange-900/20 hover:shadow-orange-600/40",
		secondary:
			"bg-zinc-900 text-white border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800",
		glass:
			"bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
		outline:
			"bg-transparent text-zinc-300 border border-zinc-700 hover:border-orange-500 hover:text-orange-500",
	};

	return (
		<button className={cn(baseStyle, variants[variant], className)} {...props}>
			<span className="relative z-10 flex items-center gap-2">
				{icon && <span>{icon}</span>}
				{children}
			</span>
			{variant === "primary" && (
				<div className="absolute inset-0 bg-white/25 translate-y-full blur-[4px] group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12" />
			)}
		</button>
	);
};

// --- Component: Content Card ---
const ContentCard = ({
	title,
	icon,
	children,
	delay,
}: {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	delay: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: delay * 0.1, duration: 0.5 }}
		className="bg-zinc-900/30 backdrop-blur-md border border-white/10 p-8 rounded-2xl mb-6 hover:border-orange-500/30 transition-colors"
	>
		<div className="flex items-center gap-4 mb-6">
			<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
				{icon}
			</div>
			<h3 className="text-2xl font-bold text-white">{title}</h3>
		</div>
		<div className="text-zinc-400 leading-relaxed space-y-4">{children}</div>
	</motion.div>
);

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 selection:text-orange-100 overflow-x-hidden">
			{/* Background Ambience */}
			<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-900/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

			{/* 1. NAVBAR */}
			<Navbar />

			{/* 2. HEADER SECTION */}
			<section className="relative pt-40 pb-20">
				<div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-block py-1.5 px-4 rounded-full bg-orange-950/20 border border-orange-500/30 text-xs font-bold text-orange-400 mb-6 uppercase tracking-widest"
					>
						Our Story
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
					>
						About{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-500 to-orange-900">
							Pinny
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-xl text-zinc-400 leading-relaxed"
					>
						Pinny is a lightweight Chrome extension designed to help you{" "}
						<strong className="text-white">
							pin, organize, and revisit important ChatGPT messages
						</strong>{" "}
						— without clutter, screenshots, or copy-pasting into notes apps.
					</motion.p>
				</div>
			</section>

			{/* 3. CONTENT SECTION */}
			<Section pattern="dashed-grid">
				<div className="max-w-4xl mx-auto">
					<ContentCard
						title="Why Pinny Exists"
						icon={<Lightbulb size={24} />}
						delay={1}
					>
						<p>
							ChatGPT conversations move fast. Important answers get buried.
							Brilliant ideas disappear in scroll history. Useful prompts are
							hard to retrieve later.
						</p>
						<p>Pinny was built to solve one simple problem:</p>
						<blockquote className="border-l-4 border-orange-500 pl-4 py-1 my-4 text-lg font-medium text-white italic bg-orange-500/5 rounded-r-lg">
							Save what matters. Instantly. Privately. Locally.
						</blockquote>
						<p>
							No exporting. No cloud syncing. No complicated dashboards. Just
							click, pin, and access anytime.
						</p>
					</ContentCard>

					<ContentCard
						title="How Pinny Works"
						icon={<Zap size={24} />}
						delay={2}
					>
						<p>
							Pinny integrates directly into your ChatGPT interface and allows
							you to:
						</p>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
							<li className="flex items-center gap-3 text-white bg-zinc-800/50 p-3 rounded-lg border border-white/5">
								<span className="text-xl">📌</span> Pin specific messages
							</li>
							<li className="flex items-center gap-3 text-white bg-zinc-800/50 p-3 rounded-lg border border-white/5">
								<span className="text-xl">🗂</span> Organize saved responses
								with tags
							</li>
							<li className="flex items-center gap-3 text-white bg-zinc-800/50 p-3 rounded-lg border border-white/5">
								<span className="text-xl">🔎</span> Quickly revisit important
								insights
							</li>
							<li className="flex items-center gap-3 text-white bg-zinc-800/50 p-3 rounded-lg border border-white/5">
								<span className="text-xl">🧠</span> Build your own searchable
								base
							</li>
						</ul>
						<p className="mt-4">
							All pinned content is stored locally in your browser. Your data
							stays on your device.
						</p>
					</ContentCard>

					<ContentCard
						title="Privacy by Design"
						icon={<ShieldCheck size={24} />}
						delay={3}
					>
						<p>
							Pinny is built with a <strong>local-first architecture</strong>.
						</p>
						<ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-400">
							<li>No analytics tracking</li>
							<li>No background data collection</li>
							<li>No external servers storing your chats</li>
							<li>No selling or sharing user data</li>
						</ul>
						<p className="mt-4">
							Pinned messages are saved using{" "}
							<code className="bg-zinc-800 px-2 py-1 rounded text-orange-200 text-sm">
								chrome.storage.local
							</code>
							, meaning your data remains inside your browser, you have full
							control, and uninstalling the extension removes stored data. We do
							not transmit your conversations to any external service.
						</p>
					</ContentCard>

					<ContentCard
						title="Who Is Pinny For?"
						icon={<Users size={24} />}
						delay={4}
					>
						<p className="mb-4">
							If ChatGPT is part of your workflow, Pinny becomes your memory
							layer. It is ideal for:
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{[
								"Developers saving code snippets",
								"Students organizing study material",
								"Founders capturing business ideas",
								"Writers collecting inspiration",
								"Researchers preserving key insights",
								"Anyone who uses ChatGPT seriously",
							].map((item, i) => (
								<div key={i} className="flex items-start gap-2">
									<CheckCircle
										size={18}
										className="text-orange-500 mt-0.5 flex-shrink-0"
									/>
									<span className="text-zinc-300">{item}</span>
								</div>
							))}
						</div>
					</ContentCard>

					<div className="grid md:grid-cols-2 gap-6">
						<ContentCard
							title="The Pro Vision"
							icon={<Rocket size={24} />}
							delay={5}
						>
							<p>
								Pinny is evolving. Future enhancements may include advanced
								organization tools, smart filtering, and enhanced productivity
								features.
							</p>
							<p className="mt-4">
								Any premium features will always maintain the exact same
								privacy-first principles.
							</p>
						</ContentCard>

						<ContentCard
							title="Independent & Focused"
							icon={<Compass size={24} />}
							delay={6}
						>
							<p>
								Pinny is an independent tool and is not affiliated with OpenAI.
							</p>
							<p className="mt-4">
								It simply enhances your browsing experience by helping you
								manage your own content more efficiently.
							</p>
						</ContentCard>
					</div>

					<ContentCard
						title="Our Philosophy"
						icon={<Heart size={24} />}
						delay={7}
					>
						<p className="text-xl text-white font-medium mb-4">
							Simple tools. Clear value. No hidden tracking.
						</p>
						<p>
							We believe productivity software should feel invisible, fast, and
							respectful of user privacy.
						</p>
					</ContentCard>
				</div>
			</Section>

			{/* 4. CTA SECTION */}
			<section className="relative py-32 overflow-hidden border-t border-white/5">
				{/* Background with heavy bottom orange glow */}
				<div className="absolute inset-0 bg-black">
					<div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-orange-600/20 via-red-600/5 to-transparent blur-[120px] pointer-events-none"></div>
					<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')]"></div>
				</div>

				<div className="max-w-[1080px] mx-auto px-6 relative z-10 text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="bg-zinc-900/50 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-orange-500/20 shadow-2xl shadow-orange-500/10"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
							Get Started Today
						</h2>
						<p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
							Because great answers deserve to be saved. Install Pinny from the
							Chrome Web Store and start building your own personal knowledge
							archive.
						</p>
						<Button
							variant="primary"
							icon={<Chrome size={20} />}
							className="text-lg px-10 py-4 shadow-xl shadow-orange-500/30 mx-auto"
						>
							Add Pinny to Chrome
						</Button>
					</motion.div>
				</div>
			</section>

			{/* 5. FOOTER */}
			<Footer />
		</div>
	);
};

export default AboutPage;
