import React from "react";
import { Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<footer className="py-24 bg-black border-t border-white/5">
				<div className="max-w-[1200px] mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
						{/* Left Column: Brand & Socials */}
						<div className="md:w-1/3">
							<div className="flex items-center gap-2 mb-6">
								<div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
									<img src="pin.png" alt="Pinny Logo" className="w-8 h-8" />
								</div>
								<span className="text-2xl font-bold text-white">Pinny</span>
							</div>
							<p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
								Transforming how you interact with AI. Save, organize, and
								recall your conversations effortlessly without leaving your chat
								window.
							</p>

							<div className="flex gap-4">
								<Link
									href="#"
									className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
								>
									<Twitter size={18} />
								</Link>
								<a
									href="#"
									className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
								>
									<Youtube size={18} />
								</a>
								<a
									href="#"
									className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
								>
									{/* Discord icon placeholder */}
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="9" cy="12" r="1" />
										<circle cx="15" cy="12" r="1" />
										<path d="M7.5 7.2c.3-.8 1-1.2 1.5-1.2.9 0 1.6.9 1.6.9s.7-.9 1.6-.9c.5 0 1.2.4 1.5 1.2.3-.3.9-1.2 2-1.2 2.3 0 4 3 4 7 0 2.2-1.3 4-3 4-1.3 0-2.3-.9-2.8-1.7-.5.8-1.5 1.7-2.8 1.7-1.3 0-2.3-.9-2.8-1.7-.5.8-1.5 1.7-2.8 1.7-1.7 0-3-1.8-3-4 0-4 1.7-7 4-7 1.1 0 1.7.9 2 1.2z" />
									</svg>
								</a>
							</div>
						</div>

						{/* Right Column: Links Grid */}
						<div className="md:w-fit grid grid-cols-2 sm:grid-cols-4 gap-8">
							<div>
								<h5 className="text-white font-semibold mb-6">Product</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<Link
											href="/#features"
											className="hover:text-orange-400 transition-colors"
										>
											Features
										</Link>
									</li>
									<li>
										<Link
											href="/#pricing"
											className="hover:text-orange-400 transition-colors"
										>
											Pricing
										</Link>
									</li>
									{/* <li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Changelog
										</Link>
									</li> */}
									<li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Extension
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<h5 className="text-white font-semibold mb-6">Company</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<Link
											href="/about"
											className="hover:text-orange-400 transition-colors"
										>
											About
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Blog
										</Link>
									</li>
									<li>
										<Link
											href="/contact"
											className="hover:text-orange-400 transition-colors"
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											href="/privacy"
											className="hover:text-orange-400 transition-colors"
										>
											Privacy
										</Link>
									</li>
								</ul>
							</div>

							{/* <div>
								<h5 className="text-white font-semibold mb-6">Resources</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Help Center
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Reports
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Status
										</Link>
									</li>
								</ul>
							</div> */}

							<div>
								<h5 className="text-white font-semibold mb-6">Support</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<Link
											href="/contact"
											className="hover:text-orange-400 transition-colors"
										>
											Feature Request
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Rate on Store
										</Link>
									</li>
									<li>
										<Link
											href="/contact"
											className="hover:text-orange-400 transition-colors"
										>
											Report Bug
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
						<p>© {new Date().getFullYear()} Pinny. All rights reserved.</p>
						<p className="mt-2 md:mt-0">Not affiliated with OpenAI.</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
