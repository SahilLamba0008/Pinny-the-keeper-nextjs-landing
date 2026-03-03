"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	Eye,
	ClipboardList,
	Database,
	ShieldOff,
	Globe,
	Archive,
	UserCog,
	UserMinus,
	Lock,
	RefreshCw,
	Mail,
} from "lucide-react";
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
			<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
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
						Pinny The Keeper (“Pinny”, “we”, “our”) is committed to privacy by
						design. This Privacy Policy explains what data the extension
						handles, how it is stored, and your rights regarding that data.
					</motion.p>
				</div>
			</section>

			{/* 3. CONTENT SECTION */}
			<Section pattern="dashed-grid">
				<div className="max-w-4xl mx-auto">
					<PolicyCard title="1. Overview" icon={<Eye size={24} />} delay={1}>
						<p>
							Pinny is a local-first Chrome extension that allows users to
							manually save selected ChatGPT messages.
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mt-4">
							<li>
								Pinny does <strong>not</strong> operate external servers to
								store your chats.
							</li>
							<li>
								Pinny does <strong>not</strong> track your browsing behavior.
							</li>
							<li>
								Pinny does <strong>not</strong> sell or share your personal
								data.
							</li>
						</ul>
					</PolicyCard>

					<PolicyCard
						title="2. Information We Handle"
						icon={<ClipboardList size={24} />}
						delay={2}
					>
						<p>
							Pinny only handles data that you explicitly choose to save. This
							may include:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Pinned ChatGPT messages</li>
							<li>Tags and categories you create</li>
							<li>Basic extension settings or preferences</li>
						</ul>
						<p>
							Pinned messages may contain personal or sensitive information that
							you entered into ChatGPT.
						</p>
						<p>
							Pinny does not analyze, profile, or process this information
							beyond storing it locally at your request.
						</p>
					</PolicyCard>

					<PolicyCard
						title="3. How Data Is Stored"
						icon={<Database size={24} />}
						delay={3}
					>
						<p>
							All saved messages, tags, and preferences are stored locally in
							your browser using:
						</p>
						<div className="my-4">
							<code className="bg-zinc-800 px-3 py-1.5 rounded-lg text-orange-200 text-sm border border-white/10 shadow-inner">
								chrome.storage.local
							</code>
						</div>
						<p>This means:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>
								<span className="text-white">
									Your data remains on your device
								</span>
							</li>
							<li>We do not maintain server-side copies</li>
							<li>We cannot access your saved messages</li>
							<li>We cannot retrieve or restore your data</li>
						</ul>
						<p>
							If you uninstall the extension or clear browser storage, your
							saved data may be permanently removed.
						</p>
					</PolicyCard>

					<PolicyCard
						title="4. No Background Data Collection"
						icon={<ShieldOff size={24} />}
						delay={4}
					>
						<p>Pinny does not:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Automatically collect user data</li>
							<li>Run background analytics</li>
							<li>Transmit saved messages to external servers</li>
							<li>Monitor browsing activity outside user interaction</li>
						</ul>
						<p>
							Pinny reads visible content on chatgpt.com{" "}
							<strong>only when you choose to pin a message</strong>.
						</p>
						<p>No automated scraping or background data extraction occurs.</p>
					</PolicyCard>

					<PolicyCard
						title="5. Third-Party Services"
						icon={<Globe size={24} />}
						delay={5}
					>
						<h4 className="text-lg font-semibold text-white mt-2 mb-2">
							ChatGPT / OpenAI
						</h4>
						<p>
							Pinny interacts with visible page content on chatgpt.com to enable
							pinning functionality. Pinny:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-6">
							<li>Does not use OpenAI APIs</li>
							<li>Does not transmit your chat history to OpenAI</li>
							<li>Is not affiliated with OpenAI</li>
						</ul>

						<h4 className="text-lg font-semibold text-white mb-2">
							Payment Processing (If Applicable)
						</h4>
						<p>
							If you purchase Pro features, payments are processed securely by a
							third-party payment provider. We:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Do not store credit card details</li>
							<li>Do not receive full payment card information</li>
							<li>Only receive confirmation of successful transactions</li>
						</ul>
						<p className="text-sm">
							Payment providers operate under their own privacy policies.
						</p>
					</PolicyCard>

					<PolicyCard
						title="6. Data Retention"
						icon={<Archive size={24} />}
						delay={6}
					>
						<p>Because all data is stored locally:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Data is retained until you delete it manually</li>
							<li>Uninstalling the extension removes locally stored data</li>
							<li>We do not retain server-side backups</li>
						</ul>
						<p>We have no ability to retain or recover deleted data.</p>
					</PolicyCard>

					<PolicyCard
						title="7. Your Rights & Control"
						icon={<UserCog size={24} />}
						delay={7}
					>
						<p>You have full control over your saved content. You may:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>View all saved messages within the extension</li>
							<li>Delete individual messages</li>
							<li>Delete all stored data</li>
							<li>Uninstall the extension at any time</li>
						</ul>
						<p>
							Because data is stored locally, we cannot access or modify your
							saved content.
						</p>
					</PolicyCard>

					<PolicyCard
						title="8. Children’s Privacy"
						icon={<UserMinus size={24} />}
						delay={8}
					>
						<p>Pinny is not intended for children under the age of 13.</p>
						<p>
							We do not knowingly collect personal information from children.
						</p>
						<p>
							Since data is stored locally and not transmitted to us, we do not
							maintain user profiles or accounts.
						</p>
					</PolicyCard>

					<PolicyCard title="9. Security" icon={<Lock size={24} />} delay={9}>
						<p>
							Because your data is stored locally in your browser, its security
							depends on:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Your device security</li>
							<li>Your Chrome browser security</li>
							<li>Other installed extensions</li>
						</ul>
						<p>
							We recommend keeping your browser updated and avoiding untrusted
							extensions.
						</p>
					</PolicyCard>

					<PolicyCard
						title="10. Changes to This Policy"
						icon={<RefreshCw size={24} />}
						delay={10}
					>
						<p>We may update this Privacy Policy from time to time.</p>
						<p>
							The updated version will reflect a revised “Last Updated” date.
						</p>
						<p>
							Continued use of Pinny after changes constitutes acceptance of the
							updated policy.
						</p>
					</PolicyCard>

					<PolicyCard title="11. Contact" icon={<Mail size={24} />} delay={11}>
						<p>
							If you have questions regarding this Privacy Policy, please
							contact:
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

					<div className="text-center pt-12 pb-8">
						<p className="text-xl text-zinc-500">
							Pinny The Keeper is built with privacy-first principles and local
							storage by design.
						</p>
					</div>
				</div>
			</Section>

			{/* 4. FOOTER */}
			<Footer />
		</div>
	);
};

export default PrivacyPage;
