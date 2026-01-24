"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Mail } from "lucide-react";
import Link from "next/link";
import { Footer, Navbar } from "@/components";
import { Section } from "@/components/ui";

// --- Component: Policy Card ---
const PolicyCard = ({
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
			<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
				{icon}
			</div>
			<h3 className="text-2xl font-bold text-white">{title}</h3>
		</div>
		<div className="text-zinc-400 leading-relaxed space-y-4">{children}</div>
	</motion.div>
);

const PrivacyPage = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
						Last Updated: January 24, 2026
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
					>
						Privacy{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-500 to-orange-900">
							Policy
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-xl text-zinc-400 leading-relaxed"
					>
						We believe in privacy by design. Pinny stores your data locally on
						your device. We don&apos;t track you, and we don&apos;t sell your
						data.
					</motion.p>
				</div>
			</section>

			{/* 3. CONTENT SECTION */}
			<Section pattern="dashed-grid">
				<div className="max-w-4xl mx-auto">
					<PolicyCard
						title="Data Collection & Usage"
						icon={<Eye size={24} />}
						delay={1}
					>
						<p>
							<strong>PinnyTheKeeper</strong> is designed to be a local-first
							extension. Unlike other tools that scrape your data to the cloud,
							Pinny keeps everything on your machine.
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>
								<span className="text-white">Pinned Messages:</span> Stored
								locally in your browser&apos;s Chrome Storage API.
							</li>
							<li>
								<span className="text-white">Tags & Categories:</span> Stored
								locally on your device.
							</li>
							<li>
								<span className="text-white">Usage Analytics:</span> We do not
								collect analytics or usage data of any kind.
							</li>
						</ul>
					</PolicyCard>

					<PolicyCard
						title="Where Your Data Lives"
						icon={<Server size={24} />}
						delay={2}
					>
						<p>
							Your data lives in your browser. Specifically, we utilize{" "}
							<code className="bg-zinc-800 px-2 py-1 rounded text-orange-200 text-sm">
								chrome.storage.local
							</code>
							.
						</p>
						<p>
							This means if you uninstall the extension, your data is removed
							from the browser. We do not have a backup server for your private
							chats because we do not transmit them to our servers in the first
							place.
						</p>
					</PolicyCard>

					<PolicyCard
						title="Third-Party Services"
						icon={<Shield size={24} />}
						delay={3}
					>
						<p>
							<strong>OpenAI / ChatGPT:</strong> Pinny interacts with the DOM of
							chatgpt.com to allow you to pin messages. We are not affiliated
							with OpenAI. We do not send your chat data to OpenAI via API; we
							simply overlay a UI on top of your existing session.
						</p>
						<p>
							<strong>Payment Processing:</strong> If you purchase the Pro plan,
							payments are processed securely via Dodo-payments. We do not store
							your credit card information.
						</p>
					</PolicyCard>

					<PolicyCard title="Security" icon={<Lock size={24} />} delay={4}>
						<p>
							Because your data is stored locally, the security of your data is
							tied to the security of your physical device and browser. We
							recommend:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>Keeping your Chrome browser updated.</li>
							<li>Using strong passwords for your computer account.</li>
							<li>
								Not installing suspicious extensions that might read your local
								storage.
							</li>
						</ul>
					</PolicyCard>

					<PolicyCard title="Contact Us" icon={<Mail size={24} />} delay={5}>
						<p>
							Have questions about your privacy? We are real developers who
							care. Reach out directly.
						</p>
						<div className="mt-4">
							<Link
								href="mailto:extensionssimplified@gmail.com"
								className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
							>
								extensionssimplified@gmail.com
							</Link>
						</div>
					</PolicyCard>
				</div>
			</Section>

			{/* 4. FOOTER (Identical to Landing) */}
			<Footer />
		</div>
	);
};

export default PrivacyPage;
