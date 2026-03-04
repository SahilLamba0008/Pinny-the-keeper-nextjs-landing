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
	Key,
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
						Last Updated: March 4, 2026
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
						Pinny – The Keeper (“Pinny”, “we”, “our”, or “the extension”) is
						designed with a privacy-first approach. This Privacy Policy explains
						what data the extension handles, how it is stored, and how users
						maintain control of their information.
					</motion.p>
				</div>
			</section>

			{/* 3. CONTENT SECTION */}
			<Section pattern="dashed-grid">
				<div className="max-w-4xl mx-auto">
					<PolicyCard title="1. Overview" icon={<Eye size={24} />} delay={1}>
						<p>
							Pinny is a Chrome extension that allows users to save and organize
							selected messages from their ChatGPT conversations.
						</p>
						<p>
							Pinny is built using a <strong>local-first design</strong>,
							meaning user data is stored directly on the user&apos;s device and
							not on external servers.
						</p>
						<p>Pinny does not:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>Track browsing behavior</li>
							<li>Collect personal user accounts</li>
							<li>Sell or share user data with third parties</li>
							<li>Store conversations on external servers</li>
						</ul>
					</PolicyCard>

					<PolicyCard
						title="2. Data Collection"
						icon={<ShieldOff size={24} />}
						delay={2}
					>
						<p>
							Pinny{" "}
							<strong>does not collect personal information from users</strong>.
						</p>
						<p>
							The extension only processes information that users explicitly
							choose to save while using the extension.
						</p>
						<p>Pinny does not collect:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>Names</li>
							<li>Email addresses</li>
							<li>Passwords</li>
							<li>Payment information</li>
							<li>Device identifiers</li>
							<li>Browsing history outside of ChatGPT pages</li>
						</ul>
						<p>
							All information processed by the extension remains local to the
							user&apos;s browser.
						</p>
					</PolicyCard>

					<PolicyCard
						title="3. Information the Extension Handles"
						icon={<ClipboardList size={24} />}
						delay={3}
					>
						<p>
							The extension may handle the following information when the user
							interacts with it:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>ChatGPT messages that the user manually chooses to pin</li>
							<li>Tags or labels created by the user</li>
							<li>Categories created for organizing pinned messages</li>
							<li>Basic extension settings or preferences</li>
						</ul>
						<p>
							Pinned messages may contain text that users previously entered
							into ChatGPT conversations.
						</p>
						<p>
							Pinny does not analyze, profile, or process this information
							beyond storing it locally at the user&apos;s request.
						</p>
					</PolicyCard>

					<PolicyCard
						title="4. How Data Is Stored"
						icon={<Database size={24} />}
						delay={4}
					>
						<p>
							All saved messages, tags, and preferences are stored locally in
							the user&apos;s browser using the following browser storage
							system:
						</p>
						<div className="my-4">
							<code className="bg-zinc-800 px-3 py-1.5 rounded-lg text-orange-200 text-sm border border-white/10 shadow-inner">
								chrome.storage.local
							</code>
						</div>
						<p>This means:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400">
							<li>
								<span className="text-white">
									Data remains on the user&apos;s device
								</span>
							</li>
							<li>No external servers store or process this data</li>
							<li>
								The developer of Pinny cannot access the stored information
							</li>
							<li>
								The extension does not transmit saved content to external
								systems
							</li>
						</ul>
						<p>
							If the user clears browser storage or uninstalls the extension,
							stored data may be permanently deleted.
						</p>
					</PolicyCard>

					<PolicyCard
						title="5. Data Sharing"
						icon={<Globe size={24} />}
						delay={5}
					>
						<p>
							Pinny{" "}
							<strong>
								does not sell, transfer, or share user data with third parties
							</strong>
							.
						</p>
						<p>The extension does not send user data to:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Advertising networks</li>
							<li>Analytics providers</li>
							<li>External APIs</li>
							<li>Data brokers</li>
							<li>Marketing services</li>
						</ul>
						<p>All processed information remains on the user&apos;s device.</p>
					</PolicyCard>

					<PolicyCard title="6. Permissions" icon={<Key size={24} />} delay={6}>
						<p>
							Pinny requires permission to access content on ChatGPT pages in
							order to enable message pinning functionality.
						</p>
						<p>This permission allows the extension to:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Detect messages visible in the ChatGPT interface</li>
							<li>
								Allow users to select and save messages they choose to pin
							</li>
							<li>Display saved messages inside the extension interface</li>
						</ul>
						<p>
							The extension only interacts with content on ChatGPT pages when
							the user actively uses the pin feature.
						</p>
						<p>Pinny does not monitor activity on unrelated websites.</p>
					</PolicyCard>

					<PolicyCard
						title="7. Data Retention"
						icon={<Archive size={24} />}
						delay={7}
					>
						<p>Because Pinny uses local storage:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>Data is retained only on the user&apos;s device</li>
							<li>Data remains stored until the user deletes it</li>
							<li>The developer does not maintain backups of user content</li>
							<li>The developer cannot recover deleted information</li>
						</ul>
						<p>Users control how long their saved messages remain stored.</p>
					</PolicyCard>

					<PolicyCard
						title="8. User Control"
						icon={<UserCog size={24} />}
						delay={8}
					>
						<p>
							Users have full control over the data stored by the extension.
						</p>
						<p>Users can:</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>View all saved messages</li>
							<li>Delete individual pinned messages</li>
							<li>Clear all stored data</li>
							<li>Uninstall the extension at any time</li>
						</ul>
						<p>
							Uninstalling the extension removes locally stored extension data.
						</p>
					</PolicyCard>

					<PolicyCard title="9. Security" icon={<Lock size={24} />} delay={9}>
						<p>
							Pinny does not transmit user data externally. Because all
							information is stored locally in the browser, security depends on:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-4">
							<li>The security of the user&apos;s device</li>
							<li>The security of the Chrome browser</li>
							<li>Other extensions installed in the browser</li>
						</ul>
						<p>
							Users are encouraged to keep their browser updated and avoid
							installing untrusted extensions.
						</p>
					</PolicyCard>

					<PolicyCard
						title="10. Children's Privacy"
						icon={<UserMinus size={24} />}
						delay={10}
					>
						<p>Pinny is not intended for children under the age of 13.</p>
						<p>
							The extension does not knowingly collect personal information from
							children.
						</p>
						<p>
							Because Pinny does not collect personal information or maintain
							user accounts, it does not maintain profiles for any users.
						</p>
					</PolicyCard>

					<PolicyCard
						title="11. Changes to This Privacy Policy"
						icon={<RefreshCw size={24} />}
						delay={11}
					>
						<p>
							This Privacy Policy may be updated if extension features change.
						</p>
						<p>
							When updates occur, the &quot;Last Updated&quot; date at the top
							of this page will be revised.
						</p>
						<p>
							Continued use of the extension after updates indicates acceptance
							of the updated policy.
						</p>
					</PolicyCard>

					<PolicyCard title="12. Contact" icon={<Mail size={24} />} delay={12}>
						<p>
							If you have questions regarding this Privacy Policy, you can
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
							Pinny – The Keeper is built using a privacy-first design that
							prioritizes local storage and user control.
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
