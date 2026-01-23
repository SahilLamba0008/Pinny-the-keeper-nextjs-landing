// --- Component: Nav Link with Progress Bar ---
export const NavLink = ({
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
