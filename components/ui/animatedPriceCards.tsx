"use client";
import { useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Component: Animated Counter for Pricing ---
export const AnimatedPrice = ({ value }: { value: number }) => {
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
