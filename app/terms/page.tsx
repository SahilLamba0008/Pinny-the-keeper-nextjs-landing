"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	FileText,
	UserCheck,
	ShieldAlert,
	ClipboardList,
	Database,
	CreditCard,
	Activity,
	AlertTriangle,
	PowerOff,
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

const TermsPage = () => {
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
						Effective Date: January 24, 2026
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
					>
						Terms of{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-500 to-orange-900">
							Service
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-xl text-zinc-400 leading-relaxed"
					>
						Welcome to <strong className="text-white">Pinny The Keeper</strong>.
						By installing or using the Pinny Chrome extension, you agree to
						these Terms of Service. If you do not agree, you should not use the
						Extension.
					</motion.p>
				</div>
			</section>

			{/* 3. CONTENT SECTION */}
			<Section pattern="dashed-grid">
				<div className="max-w-4xl mx-auto">
					<PolicyCard
						title="1. Overview"
						icon={<FileText size={24} />}
						delay={1}
					>
						<p>
							Pinny The Keeper is a Chrome browser extension that allows users
							to manually save and organize selected ChatGPT messages locally
							within their browser.
						</p>
						<p>
							Pinny is an independent tool and is{" "}
							<strong>
								not affiliated with, endorsed by, or associated with OpenAI or
								ChatGPT
							</strong>
							.
						</p>
						<p>
							Pinny does not modify, replace, or interfere with ChatGPT&apos;s
							core services.
						</p>
					</PolicyCard>

					<PolicyCard
						title="2. Eligibility"
						icon={<UserCheck size={24} />}
						delay={2}
					>
						<p>By using the Extension, you represent that:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>
								<span className="text-white">Age:</span> You are at least 13
								years old.
							</li>
							<li>
								<span className="text-white">Capacity:</span> You are legally
								capable of agreeing to these Terms.
							</li>
							<li>
								<span className="text-white">Compliance:</span> You will use the
								Extension in compliance with applicable laws.
							</li>
						</ul>
					</PolicyCard>

					<PolicyCard
						title="3. Acceptable Use"
						icon={<ShieldAlert size={24} />}
						delay={3}
					>
						<p>You agree not to use Pinny:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>In violation of any applicable laws or regulations.</li>
							<li>To store unlawful, harmful, or infringing content.</li>
							<li>
								To attempt to reverse engineer, exploit, or interfere with the
								Extension.
							</li>
							<li>
								To misuse the Extension in a way that disrupts the ChatGPT
								platform.
							</li>
						</ul>
						<p>
							Pinny is intended solely as a productivity and organization tool.
						</p>
					</PolicyCard>

					<PolicyCard
						title="4. User Content & Responsibility"
						icon={<ClipboardList size={24} />}
						delay={4}
					>
						<p>
							Pinny allows users to save selected ChatGPT messages locally. You
							are solely responsible for:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>The content you choose to save.</li>
							<li>Ensuring you have the right to store that content.</li>
							<li>
								Managing any personal or sensitive information contained in
								saved messages.
							</li>
						</ul>
						<p>
							Pinned messages may include personal or confidential information
							that you entered into ChatGPT. Pinny does not access, review,
							analyze, transmit, or process this content beyond storing it
							locally within your browser. We do not have access to your saved
							messages.
						</p>
					</PolicyCard>

					<PolicyCard
						title="5. Data Storage & Local Operation"
						icon={<Database size={24} />}
						delay={5}
					>
						<p>
							All saved messages, tags, and preferences are stored locally using
							Chrome&apos;s{" "}
							<code className="bg-zinc-800 px-2 py-1 rounded text-orange-200 text-sm">
								chrome.storage.local
							</code>{" "}
							API.
						</p>
						<p>Pinny does not:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Transmit your saved content to external servers.</li>
							<li>Sell or share your saved data.</li>
							<li>Maintain server-side backups of your content.</li>
						</ul>
						<p>Because data is stored locally:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Uninstalling the Extension removes stored data.</li>
							<li>Clearing browser data may remove saved content.</li>
							<li>
								Users are responsible for managing their own data backups.
							</li>
						</ul>
						<p>
							For more information, please refer to our{" "}
							<Link
								href="/privacy"
								className="text-orange-500 hover:text-orange-400 transition-colors"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</PolicyCard>

					<PolicyCard
						title="6. Payments & Pro Features"
						icon={<CreditCard size={24} />}
						delay={6}
					>
						<p>
							Pinny may offer optional premium (“Pro”) features. Payments are
							processed by a third-party payment provider. We do not store or
							have access to full credit card details.
						</p>
						<h4 className="text-lg font-semibold text-white mt-6 mb-2">
							Subscriptions (if applicable)
						</h4>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Subscriptions may renew automatically unless cancelled.</li>
							<li>You are responsible for managing your subscription.</li>
							<li>
								Refunds are subject to the payment provider&apos;s policies and
								applicable law.
							</li>
						</ul>
						<p>
							We reserve the right to modify, update, or discontinue Pro
							features with reasonable notice.
						</p>
					</PolicyCard>

					<PolicyCard
						title="7. Service Availability"
						icon={<Activity size={24} />}
						delay={7}
					>
						<p>
							Pinny is provided on an “AS IS” and “AS AVAILABLE” basis. We do
							not guarantee that the Extension will:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Be uninterrupted or error-free.</li>
							<li>Always remain compatible with future versions of Chrome.</li>
							<li>Remain compatible with changes made by ChatGPT or OpenAI.</li>
						</ul>
						<p>Third-party platform updates may affect functionality.</p>
					</PolicyCard>

					<PolicyCard
						title="8. Limitation of Liability"
						icon={<AlertTriangle size={24} />}
						delay={8}
					>
						<p>
							To the maximum extent permitted by law, Pinny and its developer(s)
							shall not be liable for:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Loss of locally stored data.</li>
							<li>Browser-related issues.</li>
							<li>Indirect, incidental, or consequential damages.</li>
							<li>Issues caused by third-party platform updates.</li>
						</ul>
						<p>Your use of the Extension is at your own risk.</p>
					</PolicyCard>

					<PolicyCard
						title="9. Termination"
						icon={<PowerOff size={24} />}
						delay={9}
					>
						<p>
							We may suspend or discontinue the Extension at any time. We may
							restrict access to Pro features if these Terms are violated.
						</p>
						<p>
							No refunds will be issued for violations of these Terms unless
							required by applicable law.
						</p>
					</PolicyCard>

					<PolicyCard
						title="10. Changes to These Terms"
						icon={<RefreshCw size={24} />}
						delay={10}
					>
						<p>
							We may update these Terms periodically. The updated version will
							be indicated by a revised “Effective Date” at the top of this
							page.
						</p>
						<p>
							Continued use of Pinny after changes constitutes acceptance of the
							revised Terms.
						</p>
					</PolicyCard>

					<PolicyCard title="11. Contact" icon={<Mail size={24} />} delay={11}>
						<p>
							If you have questions regarding these Terms, please contact us
							directly.
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
							Thank you for using Pinny The Keeper.
						</p>
					</div>
				</div>
			</Section>

			{/* 4. FOOTER */}
			<Footer />
		</div>
	);
};

export default TermsPage;
