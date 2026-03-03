"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	Mail,
	Bug,
	CreditCard,
	Clock,
	Shield,
	CheckCircle,
	ArrowRight,
	MessageSquare,
} from "lucide-react";
import Link from "next/link";
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
	className,
}: {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	delay: number;
	className?: string;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: delay * 0.1, duration: 0.5 }}
		className={cn(
			"bg-zinc-900/30 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-orange-500/30 transition-colors h-full flex flex-col",
			className,
		)}
	>
		<div className="flex items-center gap-4 mb-6">
			<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
				{icon}
			</div>
			<h3 className="text-2xl font-bold text-white">{title}</h3>
		</div>
		<div className="text-zinc-400 leading-relaxed space-y-4 flex-grow">
			{children}
		</div>
	</motion.div>
);

const ContactPage = () => {
	return (
		<div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 selection:text-orange-100 overflow-x-hidden">
			{/* Background Ambience */}
			<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-900/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

			{/* 1. NAVBAR */}
			<Navbar />

			{/* 2. HEADER SECTION */}
			<section className="relative pt-40 pb-16">
				<div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-block py-1.5 px-4 rounded-full bg-orange-950/20 border border-orange-500/30 text-xs font-bold text-orange-400 mb-6 uppercase tracking-widest"
					>
						Support & Inquiries
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
					>
						Contact{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-500 to-orange-900">
							Pinny
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
					>
						Pinny is built and maintained by real developers who care about
						quality, performance, and privacy. If something isn&apos;t working
						as expected, we want to know.
					</motion.p>
				</div>
			</section>

			{/* 3. CONTENT SECTION */}
			<Section pattern="dashed-grid" className="pt-8">
				<div className="max-w-5xl mx-auto space-y-8">
					{/* Featured Email Support Card (Full Width) */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="bg-gradient-to-br from-zinc-900/80 to-black backdrop-blur-xl border border-orange-500/30 p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-orange-900/10 relative overflow-hidden group"
					>
						<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full -z-10 group-hover:bg-orange-500/20 transition-colors duration-500"></div>

						<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
							<div>
								<div className="flex items-center gap-3 mb-4">
									<Mail className="text-orange-500" size={32} />
									<h2 className="text-3xl font-bold text-white">
										Email Support
									</h2>
								</div>
								<p className="text-zinc-400 text-lg mb-6 max-w-lg">
									The fastest way to reach us. Whether it&apos;s a bug report,
									feature request, or payment issue, we&apos;re here to help.
								</p>
								<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400">
									<span className="flex items-center gap-2">
										<CheckCircle size={14} className="text-orange-500" /> Bug
										reports
									</span>
									<span className="flex items-center gap-2">
										<CheckCircle size={14} className="text-orange-500" />{" "}
										Feature suggestions
									</span>
									<span className="flex items-center gap-2">
										<CheckCircle size={14} className="text-orange-500" />{" "}
										Payment issues
									</span>
									<span className="flex items-center gap-2">
										<CheckCircle size={14} className="text-orange-500" />{" "}
										Technical support
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-4 w-full md:w-auto">
								<a href="mailto:extensionssimplified@gmail.com">
									<Button
										variant="primary"
										className="w-full md:w-auto py-4 px-8 text-lg"
										icon={<MessageSquare size={20} />}
									>
										Email Us Directly
									</Button>
								</a>
								<div className="text-center md:text-left">
									<p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">
										Direct Address
									</p>
									<p className="text-white font-mono bg-black/50 px-4 py-2 rounded-lg border border-white/10 select-all">
										extensionssimplified@gmail.com
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Grid of Information Cards */}
					<div className="grid md:grid-cols-2 gap-8">
						<ContentCard
							title="When Reporting a Bug"
							icon={<Bug size={24} />}
							delay={4}
						>
							<p>
								To help us resolve issues quickly, please include the following
								details in your email:
							</p>
							<ul className="space-y-3 mt-4">
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										Your Chrome browser version
									</span>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										A short description of the issue
									</span>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										Steps to reproduce the problem
									</span>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										Screenshots (if applicable)
									</span>
								</li>
							</ul>
							<p className="mt-4 italic text-sm text-zinc-500">
								This helps us diagnose and fix issues significantly faster.
							</p>
						</ContentCard>

						<ContentCard
							title="Payment & Subscription"
							icon={<CreditCard size={24} />}
							delay={5}
						>
							<p>
								Experiencing issues related to payments or upgrading to the Pro
								plan? Please provide:
							</p>
							<ul className="space-y-3 mt-4 mb-6">
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										The email used for purchase
									</span>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										Transaction reference (if available)
									</span>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
									<span className="text-zinc-300">
										A clear description of the issue
									</span>
								</li>
							</ul>
							<div className="bg-zinc-800/50 p-4 rounded-xl border border-white/5">
								<p className="text-xs text-zinc-400">
									<strong className="text-white">Note:</strong> We do not store
									credit card information. Payments are processed securely
									through our payment provider.
								</p>
							</div>
						</ContentCard>

						<ContentCard
							title="Response Time"
							icon={<Clock size={24} />}
							delay={6}
						>
							<p>We value your time and aim to be as responsive as possible.</p>
							<div className="flex items-center gap-4 my-6 bg-black/40 p-4 rounded-xl border border-white/5">
								<div className="text-3xl font-bold text-white">
									24-48
									<span className="text-lg text-zinc-500 font-normal">hrs</span>
								</div>
								<div className="text-sm text-zinc-400">
									Typical response time on standard business days.
								</div>
							</div>
							<p className="text-sm">
								Please note that response times may vary slightly during
								weekends or major holidays.
							</p>
						</ContentCard>

						<ContentCard
							title="Privacy Matters"
							icon={<Shield size={24} />}
							delay={7}
						>
							<p>
								If your inquiry is privacy-related, we take those requests with
								the utmost seriousness.
							</p>
							<p className="mt-4">
								We are committed to keeping Pinny secure, transparent, and
								absolutely privacy-first. Your data stays local, and your trust
								is our priority.
							</p>
							<div className="mt-6 pt-6 border-t border-white/5">
								<Link
									href="/privacy"
									className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors font-medium text-sm group"
								>
									Read our full Privacy Policy
									<ArrowRight
										size={16}
										className="group-hover:translate-x-1 transition-transform"
									/>
								</Link>
							</div>
						</ContentCard>
					</div>

					{/* Closing Note */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8 }}
						className="text-center pt-12"
					>
						<p className="text-2xl font-medium text-white mb-2">
							Thank you for using Pinny.
						</p>
						<p className="text-zinc-500">We appreciate your support.</p>
					</motion.div>
				</div>
			</Section>

			{/* 4. FOOTER */}
			<Footer />
		</div>
	);
};

export default ContactPage;
