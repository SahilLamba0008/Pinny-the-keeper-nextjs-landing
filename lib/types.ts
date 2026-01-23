export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "glass" | "outline";
	icon?: React.ReactNode;
}
