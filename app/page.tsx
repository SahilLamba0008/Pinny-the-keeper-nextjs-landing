import React from "react";
import {
	Navbar,
	ExploreDashboard,
	FAQSection,
	FinalCTA,
	Footer,
	HeroSection,
	MeetPinny,
	HowItWorks,
	PricingSection,
	StandOut,
} from "@/components";

const PinnyLandingPage = () => {
	console.log("logs :", {
		ExploreDashboard,
		FAQSection,
		FinalCTA,
		Footer,
		HeroSection,
		HowItWorks,
		MeetPinny,
		Navbar,
		PricingSection,
		StandOut,
	});
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
			<Navbar />
			{/* 2. HERO SECTION */}
			<HeroSection />
			{/* 3. HOW IT WORKS (3 STEPS) - No Parallax, Fixed Blob, Particles */}
			<HowItWorks />
			{/* 4. WHY PINNY STANDS OUT (Polished Grid) */}
			<StandOut />
			{/* 5. MEET PINNY (Polished Content) */}
			<MeetPinny />
			{/* 6. EXPLORE DASHBOARD SECTION */}
			<ExploreDashboard />
			{/* 7. PRICING SECTION */}
			<PricingSection />
			{/* 8. FAQ SECTION */}
			<FAQSection />
			{/* 9. FINAL CTA SECTION */}
			<FinalCTA />
			{/* 10. FOOTER (Split Layout) */}
			<Footer />
		</div>
	);
};

export default PinnyLandingPage;
