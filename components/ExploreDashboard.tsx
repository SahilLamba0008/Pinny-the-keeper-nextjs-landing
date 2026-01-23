"use client";
import React from "react";
import { Section, SectionHeader } from "./ui";
import { motion } from "framer-motion";
import Image from "next/image";

const ExploreDashboard = () => {
	return (
		<>
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
						<Image
							src="/pinsdashboard.png"
							alt="Dashboard UI"
							className="rounded-xl w-full h-auto shadow-2xl"
							height={1200}
							width={1200}
						/>
					</div>
				</div>
			</Section>
		</>
	);
};

export default ExploreDashboard;
