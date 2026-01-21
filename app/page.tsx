"use client";

import React, { useState, useRef, useEffect } from "react";
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
	useInView,
	useSpring,
	useMotionValue,
} from "framer-motion";
import {
	Chrome,
	CheckCircle,
	XCircle,
	Bookmark,
	Search,
	Shield,
	Zap,
	Code,
	PenTool,
	Briefcase,
	BookOpen,
	ChevronDown,
	PlayCircle,
	Menu,
	X,
	Sparkles,
	Twitter,
	Youtube,
	MessageCircle,
	Star,
	Lock,
	Cpu,
	MousePointer2,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility: standard Shadcn 'cn' function ---
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// --- Component: Nav Link with Progress Bar ---
const NavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		className="relative group py-1 text-sm font-medium text-white transition-colors"
	>
		<span className="relative z-10">{children}</span>
		<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out group-hover:w-full" />
	</a>
);

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

// --- Component: Animated Counter for Pricing ---
const AnimatedPrice = ({ value }: { value: number }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const springValue = useSpring(0, { duration: 1500, bounce: 0 });
	const [displayValue, setDisplayValue] = useState("0.00");

	useEffect(() => {
		if (isInView) {
			springValue.set(value);
		}
	}, [isInView, value, springValue]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			setDisplayValue(latest.toFixed(2));
		});
		return () => unsubscribe();
	}, [springValue]);

	return <span ref={ref}>{displayValue}</span>;
};

// --- Component: Section Wrapper ---
const Section = ({
	children,
	className,
	id,
	pattern = "none",
}: {
	children: React.ReactNode;
	className?: string;
	id?: string;
	pattern?: "none" | "dark-noise" | "dashed-grid";
}) => {
	let patternLayer = null;

	if (pattern === "dashed-grid") {
		patternLayer = (
			<div
				className="absolute inset-0 z-0 pointer-events-none opacity-20"
				style={{
					backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
					backgroundSize: "40px 40px",
					maskImage: `radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)`,
				}}
			/>
		);
	}

	return (
		<section
			id={id}
			className={cn(
				"relative w-full py-24 md:py-32 overflow-hidden bg-black",
				className,
			)}
		>
			{patternLayer}
			<div className="max-w-[1200px] mx-auto px-6 relative z-10">
				{children}
			</div>
		</section>
	);
};

// --- Component: Section Header ---
const SectionHeader = ({
	title,
	subtitle,
	centered = true,
	badge,
	className,
}: {
	title: string;
	subtitle?: string;
	centered?: boolean;
	badge?: string;
	className?: string;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6 }}
		className={cn("mb-20", centered ? "text-center" : "", className)}
	>
		{badge && (
			<span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-orange-950/30 border border-orange-500/20 text-xs font-bold text-orange-400 mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.1)]">
				<Sparkles size={12} /> {badge}
			</span>
		)}
		<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
			{title}
		</h2>
		{subtitle && (
			<p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
				{subtitle}
			</p>
		)}
	</motion.div>
);

// --- Component: Accordion Item ---
const AccordionItem = ({
	question,
	answer,
	isOpen,
	onClick,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}) => {
	return (
		<motion.div
			initial={false}
			animate={{
				backgroundColor: isOpen ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0)",
			}}
			className={cn(
				"border-b border-white/10 overflow-hidden transition-colors duration-300",
				isOpen ? "rounded-lg border-none" : "",
			)}
		>
			<button
				onClick={onClick}
				className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none group"
			>
				<span
					className={cn(
						"text-lg font-medium transition-colors duration-300",
						isOpen ? "text-orange-400" : "text-white group-hover:text-zinc-300",
					)}
				>
					{question}
				</span>
				<motion.span
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
					className={cn(
						"ml-6 flex-shrink-0",
						isOpen ? "text-orange-400" : "text-zinc-500",
					)}
				>
					<ChevronDown size={20} />
				</motion.span>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto", marginBottom: 24 },
							collapsed: { opacity: 0, height: 0, marginBottom: 0 },
						}}
						transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<p className="text-zinc-400 leading-relaxed px-6">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

// --- Component: Contained Particles (For Workflow Cards) ---
const ContainedParticles = () => {
	const particles = Array.from({ length: 8 }).map((_, i) => ({
		id: i,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		duration: Math.random() * 5 + 5,
	}));

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
			{particles.map((p) => (
				<motion.div
					key={p.id}
					className="absolute w-1 h-1 bg-orange-400/30 rounded-full blur-[1px]"
					initial={{ top: p.top, left: p.left, opacity: 0 }}
					animate={{
						y: [0, -40, 0],
						x: [0, 20, 0],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: p.duration,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			))}
		</div>
	);
};

// --- Component: Blinking Particles (Global) ---
const BlinkingParticles = () => {
	const particles = Array.from({ length: 15 }).map((_, i) => ({
		id: i,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		delay: Math.random() * 5,
		duration: Math.random() * 3 + 2,
	}));

	return (
		<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
			{particles.map((p) => (
				<motion.div
					key={p.id}
					className="absolute w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
					style={{ top: p.top, left: p.left }}
					animate={{
						opacity: [0, 1, 0],
						scale: [0, 1.5, 0],
					}}
					transition={{
						duration: p.duration,
						repeat: Infinity,
						delay: p.delay,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
};
// --- Main Page Component ---
const PinnyLandingPage = () => {
	/* 1. Setup Motion Values (Place these before the return statement of your component) */
	const x = useMotionValue(0.44);
	const y = useMotionValue(-0.26);

	// Spring creates the smooth "floating" return effect
	const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
	const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

	// Transform map: When mouse goes down (+Y), card tilts up (-RotateX) to look like it's being pushed back
	const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
	const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;
		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openAccordionId, setOpenAccordionId] = useState<number | null>(0);
	const videoContainerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: videoContainerRef,
		offset: ["start end", "end start"],
	});

	const videoY = useTransform(scrollYProgress, [0, 1], [100, -50]);

	const toggleAccordion = (id: number) => {
		setOpenAccordionId(openAccordionId === id ? null : id);
	};

	return (
		<div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 selection:text-orange-100 overflow-x-hidden">
			{/* 1. Original Bottom-Right Gradient Blob (Kept as is) */}
			<div className="fixed left-[50%] -top-[50%] -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-orange-600/10 to-red-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

			{/* 2. NEW: Top-Left God Rays (Replaces the skewed div) */}
			<div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden pointer-events-none z-0">
				{/* Ray 1: Wide warm orange base glow */}
				<div className="absolute -top-[200px] -left-[100px] w-[800px] h-[1200px] bg-gradient-to-b from-orange-600/20 via-transparent to-transparent rotate-[35deg] blur-[80px] origin-top-left" />

				{/* Ray 2: Sharper yellow/orange beam */}
				<div className="absolute -top-[200px] -left-[100px] w-[400px] h-[1500px] bg-gradient-to-b from-orange-400/10 via-orange-900/5 to-transparent rotate-[45deg] blur-[40px] origin-top-left" />

				{/* Ray 3: Interactive Highlight (Reacts to hover like your old code) */}
				<div className="absolute -top-[200px] -left-[100px] w-[300px] h-[1500px] bg-gradient-to-b from-yellow-200/10 via-transparent to-transparent rotate-[50deg] blur-[30px] origin-top-left opacity-50 group-hover:opacity-100 group-hover:rotate-[52deg] transition-all duration-1000 ease-out" />
			</div>

			{/* 1. NAVBAR */}
			<nav className="fixed max-w-[1080px] mx-auto top-4 rounded-full border-1 border-white/10 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl">
				<div className="max-w-[1200px] mx-auto px-6">
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

						{/* Desktop Links with Progress Bar Hover */}
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

						{/* Centered CTA Button (Desktop) */}
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
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="text-zinc-300 hover:text-white p-2"
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
							className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
						>
							<div className="flex flex-col gap-4 text-center p-6">
								<a
									href="#features"
									className="text-zinc-300 py-2 hover:text-orange-400"
								>
									Features
								</a>
								<a
									href="#pricing"
									className="text-zinc-300 py-2 hover:text-orange-400"
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

			{/* 2. HERO SECTION */}
			<section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
				<BlinkingParticles />

				{/* Ambient Hero Gradient */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-orange-600/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

				{/* Hero Top "Pill" Badge */}
				<div className="relative z-10 flex justify-center mb-6">
					{" "}
					{/* Reduced margin from mb-10 */}
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
						className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]" // Reduced text size & margin
					>
						Never lose important <br className="hidden md:block" />
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-500 to-orange-900 animate-text drop-shadow-2xl">
							ChatGPT messages
						</span>{" "}
						again.
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed" // Reduced text size & margin
					>
						Turn your raw chats into a personal knowledge base. Pin, organize,
						and search instantly with Pinny.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4" // Reduced gap
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

					{/* Visual Product Placeholder */}
					<motion.div
						ref={videoContainerRef}
						style={{ y: videoY }}
						className="mt-12 relative max-w-[1000px] mx-auto rounded-t-2xl p-3 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border-t border-x border-white/10 shadow-2xl" // Drastically reduced margin (mt-32 -> mt-12)
					>
						<div className="absolute -inset-4 top-10 bg-gradient-to-r from-orange-600/30 via-red-600/30 to-yellow-600/20 blur-[100px] -z-10 rounded-[3rem] opacity-60"></div>
						<div className="relative rounded-t-xl overflow-hidden bg-zinc-950 aspect-[16/9] flex items-center justify-center border-b border-white/5">
							<div className="absolute inset-0 bg-[url('https://via.placeholder.com/1200x675/09090b/333?text=ChatGPT+Interface')] bg-cover bg-center opacity-40"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center space-y-4">
									<div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-orange-500/20">
										<Bookmark className="w-10 h-10 text-orange-500 fill-orange-500/20" />
									</div>
									<h3 className="text-2xl font-bold text-white">
										Pinny Dashboard
									</h3>
									<p className="text-zinc-500">Your AI second brain</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* 3. HOW IT WORKS (3 STEPS) - No Parallax, Fixed Blob, Particles */}
			<Section
				id="how-it-works"
				className="bg-zinc-950 relative border-t border-white/5"
			>
				<div className="relative">
					{/* Fixed Gradient Blob Background */}
					<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

					<SectionHeader
						title="Three Steps to Clarity"
						subtitle="Transform your screen recordings into conversion-focused demos."
						badge="Workflow"
						className="relative z-10"
					/>

					<div className="grid md:grid-cols-3 gap-8 relative z-10">
						{/* Connecting Lines (Desktop) */}
						<div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0 border-t border-dashed border-zinc-700 opacity-50"></div>

						{[
							{
								icon: <Bookmark />,
								title: "1. Pin",
								desc: "Click the pin icon that appears on any ChatGPT message.",
								step: "01",
							},
							{
								icon: <Zap />,
								title: "2. Organize",
								desc: "Smart auto-tags and custom collections applied automatically.",
								step: "02",
							},
							{
								icon: <Search />,
								title: "3. Recall",
								desc: "Search globally across all your AI conversations in milliseconds.",
								step: "03",
							},
						].map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="relative bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl group hover:border-orange-500/40 transition-all duration-500 overflow-hidden hover:-translate-y-2"
							>
								{/* Particles inside the card */}
								<ContainedParticles />

								<div className="relative z-10">
									<div className="absolute top-0 right-0 text-6xl font-bold text-white/5 select-none font-mono">
										{step.step}
									</div>

									<div className="w-14 h-14 bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
										<span className="text-orange-500 w-6 h-6 flex items-center justify-center">
											{step.icon}
										</span>
									</div>
									<h3 className="text-xl font-bold text-white mb-3">
										{step.title}
									</h3>
									<p className="text-zinc-400 text-sm leading-relaxed">
										{step.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Section>
			{/* 4. WHY PINNY STANDS OUT (Polished Grid) */}
			<Section id="features">
				<SectionHeader
					title="Why Pinny Stands Out"
					subtitle="Built differently to respect your privacy and flow."
					badge="Difference"
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							icon: <Lock className="text-green-400" />,
							title: "Privacy First",
							desc: "Your data never leaves your device. Everything is stored locally in your browser storage.",
						},
						{
							icon: <Cpu className="text-blue-400" />,
							title: "Lightning Fast",
							desc: "Built with zero bloat. Pinny loads instantly and doesn't slow down your chat interface.",
						},
						{
							icon: <MousePointer2 className="text-purple-400" />,
							title: "Zero Friction",
							desc: "Integrated directly into the ChatGPT UI. No context switching or tab jumping required.",
						},
						{
							icon: <Search className="text-yellow-400" />,
							title: "Global Search",
							desc: "Don't scroll through endless history. Find that one code snippet from 3 months ago in seconds.",
						},
						{
							icon: <MessageCircle className="text-pink-400" />,
							title: "Export Ready",
							desc: "Need to share? Export your pinned collections to Markdown, JSON, or PDF instantly.",
							badge: "On the Way", // Added Badge
						},
						{
							icon: <Star className="text-orange-400" />,
							title: "Favorites",
							desc: "Star your most critical pins for quick access in the sidebar.",
							badge: "On the Way", // Added Badge
						},
					].map((item, i) => (
						<motion.div
							key={i}
							whileHover={{ scale: 1.02 }}
							className="relative p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900/80 transition-all duration-300 group"
						>
							<div className="flex justify-between items-start mb-4">
								<div className="bg-zinc-800/50 w-fit p-3 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
									{item.icon}
								</div>

								{/* Badge Rendering Logic */}
								{item.badge && (
									<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
										{item.badge}
									</span>
								)}
							</div>

							<h3 className="text-lg font-bold text-white mb-2">
								{item.title}
							</h3>
							<p className="text-zinc-400 text-sm leading-relaxed">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
			</Section>

			{/* 5. MEET PINNY (Polished Content) */}
			<Section className="border-y border-white/5 bg-zinc-900/20">
				<SectionHeader
					title="Meet Pinny The Keeper"
					subtitle="Your quiet guardian inside the AI revolution."
					badge="Mascot"
				/>

				<div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1080px] mx-auto bg-zinc-900/60 border-2 border-orange-600/10 p-8 rounded-3xl">
					<BlinkingParticles />
					{/* Added 'perspective' to parent so 3D rotation looks correct */}
					<div
						className="lg:w-1/2 relative order-2 lg:order-1"
						style={{ perspective: 1000 }}
					>
						{/* Converted to motion.div and added tilt logic */}
						<motion.div
							style={{
								rotateX, // Calculated from yPct: -0.26
								rotateY, // Calculated from xPct: 0.44
								transformStyle: "preserve-3d", // Keeps children in 3D space
							}}
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							className="relative z-10 bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl cursor-pointer"
						>
							{/* Added subtle Z-translation to text so it 'floats' off the card surface */}
							<div style={{ transform: "translateZ(20px)" }}>
								<h3 className="text-2xl font-bold text-white mb-6">
									The Story
								</h3>
								<div className="space-y-4 text-zinc-400 leading-relaxed">
									<p>
										<strong className="text-orange-400">
											Pinny the Keeper
										</strong>{" "}
										is your quiet guardian inside ChatGPT. When conversations
										get long and important answers disappear into the endless
										scroll, Pinny steps in.
									</p>
									<p>
										With a single click, Pinny helps you pin, save, and protect
										the messages that matter, so you can come back to them
										anytime—instantly.
									</p>
									<p>
										Built for developers, writers, founders, and learners, Pinny
										doesn’t interrupt your flow. He simply keeps watch, holding
										onto your most valuable insights while you move forward. No
										accounts. No tracking. No noise.
									</p>
								</div>
								<div className="mt-8 flex gap-4">
									<div className="flex flex-col">
										<span className="text-2xl font-bold text-white">10k+</span>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">
											Messages Saved
										</span>
									</div>
									<div className="w-px bg-white/10 mx-2"></div>
									<div className="flex flex-col">
										<span className="text-2xl font-bold text-white">0s</span>
										<span className="text-xs text-zinc-500 uppercase tracking-wider">
											Cloud Latency
										</span>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Decorative background element moved slightly deeper in Z-space */}
						<div className="absolute top-10 -left-10 w-full h-full bg-orange-500/10 rounded-3xl -z-10 blur-xl transform translate-z-[-20px]"></div>
					</div>

					<div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
						<motion.img
							src="pinnywave.png"
							alt="Pinny"
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="rounded-3xl w-80 lg:w-96 drop-shadow-[0_0_50px_rgba(249,115,22,0.3)] scale-x-[-1]"
						/>
					</div>
				</div>
			</Section>

			{/* 6. EXPLORE DASHBOARD SECTION */}
			<Section id="dashboard" className="">
				<motion.div className="absolute left-30 -top-150 w-[800px] h-[800px] bg-gradient-to-tr from-orange-600/10 to-red-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

				<SectionHeader
					title="Explore Our Pins Dashboard"
					subtitle="Manage like a pro. Even if you have thousands of saved chats."
					badge="Interface"
				/>

				<div className="relative">
					{/* Main Dashboard Image with Glow */}
					<div className="relative rounded-2xl p-1 bg-gradient-to-br from-white/10 to-white/0 border border-white/10">
						<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl -z-10"></div>
						<img
							src="https://via.placeholder.com/1200x700/0f0f11/333?text=Pinny+Dashboard+UI"
							alt="Dashboard UI"
							className="rounded-xl w-full h-auto shadow-2xl"
						/>

						{/* Overlay Pointers */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="absolute top-[20%] left-[-40px] md:left-[-120px] hidden md:flex items-center gap-4"
						>
							<div className="text-right">
								<div className="text-white font-bold">Smart Search</div>
								<div className="text-xs text-zinc-400">
									Filter by date or tag
								</div>
							</div>
							<div className="w-16 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* 7. PRICING SECTION */}
			<Section id="pricing" pattern="dashed-grid">
				<BlinkingParticles />
				<SectionHeader
					title="Simple, Transparent Pricing"
					subtitle="No dark patterns. Choose the plan that fits your needs."
					badge="Pricing"
				/>

				<div className="grid md:grid-cols-3 gap-8 items-center relative max-w-[1000px] mx-auto">
					{/* Ambient Glow for Pricing */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-orange-600/5 blur-[100px] rounded-full -z-10"></div>

					{/* Free Plan */}
					<motion.div
						whileHover={{ y: -10 }}
						className="bg-zinc-950 p-8 rounded-[2rem] border border-white/10 relative z-10"
					>
						<h3 className="text-xl font-semibold text-white mb-6">Starter</h3>
						<div className="text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
							$<AnimatedPrice value={0} />{" "}
							<span className="text-lg font-normal text-zinc-500">/ mo</span>
						</div>
						<p className="text-zinc-500 mb-8 text-sm">For casual users.</p>
						<ul className="space-y-4 mb-10 text-zinc-400 text-sm">
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> 50 Pins
								limit
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Local
								storage
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Basic
								search
							</li>
						</ul>
						<Button variant="secondary" className="w-full">
							Add to Chrome
						</Button>
					</motion.div>

					{/* Lifetime Plan (Emphasized) */}
					<motion.div
						initial={{ scale: 0.95 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
						className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-orange-500/50 relative z-20 shadow-2xl shadow-orange-500/10 order-first md:order-none"
					>
						<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
							65% OFF Limited Time
						</div>
						<h3 className="text-xl font-semibold text-white mb-6">
							Lifetime Pro
						</h3>
						<div className="text-5xl font-bold text-white mb-2 flex items-baseline gap-1">
							$<AnimatedPrice value={27.99} />{" "}
							<span className="text-lg font-normal text-zinc-500">/ once</span>
						</div>
						<p className="text-orange-400 mb-8 text-sm font-medium line-through decoration-white/30 decoration-2">
							$79.99
						</p>

						<div className="h-px w-full bg-white/10 mb-8"></div>

						<ul className="space-y-4 mb-10 text-white text-sm">
							<li className="flex items-center gap-3">
								<CheckCircle
									className="text-orange-500 fill-orange-500/20"
									size={20}
								/>
								<span className="font-semibold">Unlimited Pins</span>
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle
									className="text-orange-500 fill-orange-500/20"
									size={20}
								/>
								Advanced Search & Filters
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle
									className="text-orange-500 fill-orange-500/20"
									size={20}
								/>
								Future Updates Included
							</li>
						</ul>
						<Button
							variant="primary"
							className="w-full py-4 text-lg shadow-lg shadow-orange-500/20"
						>
							Get Lifetime Access
						</Button>
					</motion.div>

					{/* Monthly Plan */}
					<motion.div
						whileHover={{ y: -10 }}
						className="bg-zinc-950 p-8 rounded-[2rem] border border-white/10 relative z-10"
					>
						<div className="absolute top-6 right-6 bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
							40% OFF
						</div>
						<h3 className="text-xl font-semibold text-white mb-6">Monthly</h3>
						<div className="text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
							$<AnimatedPrice value={6.66} />{" "}
							<span className="text-lg font-normal text-zinc-500">/ mo</span>
						</div>
						<p className="text-zinc-500 mb-8 text-sm line-through decoration-zinc-700">
							$11.99
						</p>
						<ul className="space-y-4 mb-10 text-zinc-400 text-sm">
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Unlimited
								Pins
							</li>
							<li className="flex items-center gap-3">
								<CheckCircle className="text-orange-500" size={18} /> Advanced
								Search
							</li>
							<li className="flex items-center gap-3 text-zinc-600">
								<XCircle size={18} /> No Priority Support
							</li>
						</ul>
						<Button variant="secondary" className="w-full">
							Start Monthly
						</Button>
					</motion.div>
				</div>
			</Section>

			{/* 8. FAQ SECTION */}
			<Section id="faq" className=" bg-black/40 border-t border-white/5">
				<SectionHeader
					title="Frequently Asked Questions"
					subtitle="Everything you need to know about Pinny."
					badge="FAQ"
				/>

				<div className="max-w-3xl mx-auto space-y-3">
					{[
						{
							q: "Is this made by OpenAI / official ChatGPT?",
							a: "No. Pinny is an independent Chrome extension built to enhance the ChatGPT experience. We are not affiliated with OpenAI.",
						},
						{
							q: "Is my data safe?",
							a: "Yes. Your pinned messages are stored locally on your computer within your browser's storage. We do not transmit your chat content to any servers.",
						},
						{
							q: "Does it work after ChatGPT updates?",
							a: "We actively monitor ChatGPT updates and push fixes quickly if their interface changes affect the extension.",
						},
						{
							q: "Will it slow down ChatGPT?",
							a: "Not at all. The extension is extremely lightweight and only runs code when you interact with the pin buttons or dashboard.",
						},
					].map((faq, i) => (
						<AccordionItem
							key={i}
							question={faq.q}
							answer={faq.a}
							isOpen={openAccordionId === i}
							onClick={() => toggleAccordion(i)}
						/>
					))}
				</div>
			</Section>

			{/* 9. FINAL CTA SECTION */}
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

			{/* 10. FOOTER (Split Layout) */}
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
								<a
									href="#"
									className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
								>
									<Twitter size={18} />
								</a>
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
						<div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
							<div>
								<h5 className="text-white font-semibold mb-6">Product</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Features
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Pricing
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Changelog
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Extension
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h5 className="text-white font-semibold mb-6">Company</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Contact
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Privacy
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h5 className="text-white font-semibold mb-6">Resources</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Help Center
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Reports
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Status
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h5 className="text-white font-semibold mb-6">Support</h5>
								<ul className="space-y-4 text-sm text-zinc-400">
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Feature Request
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Rate on Store
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-orange-400 transition-colors"
										>
											Report Bug
										</a>
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
		</div>
	);
};

export default PinnyLandingPage;
