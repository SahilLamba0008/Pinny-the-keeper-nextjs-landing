"use client";
import React, { useState } from "react";
import { Button, NavLink } from "./ui";
import { Chrome, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<>
			{/* 1. NAVBAR */}
			<nav className="fixed top-4 inset-x-4 mx-auto max-w-[1080px] rounded-full border border-white/10 bg-black/60 backdrop-blur-xl z-50">
				<div className="max-w-[1080px] mx-auto px-6">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
							<div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden transition-colors">
								<img src="pin.png" alt="Pinny Logo" className="w-8 h-8" />
							</div>
							<span className="text-xl uppercase font-bold text-white tracking-wide">
								Pinny
							</span>
						</div>

						{/* Desktop Links */}
						<div className="hidden md:flex items-center gap-8">
							{["Features", "Dashboard", "Pricing", "FAQ"].map((item) => (
								<NavLink
									key={item}
									href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
								>
									{item}
								</NavLink>
							))}
						</div>

						{/* Desktop CTA */}
						<div className="hidden md:flex">
							<Button
								variant="primary"
								icon={<Chrome size={18} />}
								className="scale-90 shadow-none hover:shadow-lg"
							>
								Add Extension
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button
								onClick={() => setIsMobileMenuOpen((prev) => !prev)}
								className="text-zinc-300 hover:text-white p-2"
								aria-label="Toggle menu"
							>
								{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.25, ease: "easeOut" }}
							className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 overflow-hidden rounded-b-2xl"
						>
							<div className="flex flex-col gap-4 text-center p-6">
								<a
									href="#features"
									className="text-zinc-300 py-2 hover:text-orange-400"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Features
								</a>
								<a
									href="#pricing"
									className="text-zinc-300 py-2 hover:text-orange-400"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Pricing
								</a>
								<Button
									variant="primary"
									icon={<Chrome size={18} />}
									className="w-full justify-center"
								>
									Add Extension
								</Button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
};

export default Navbar;
