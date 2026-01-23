import { cn } from "@/lib/utils";

// --- Component: Section Wrapper ---
export const Section = ({
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
