import { ButtonProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Button = ({
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
