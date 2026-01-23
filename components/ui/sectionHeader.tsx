"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// --- Component: Section Header ---
export const SectionHeader = ({
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
