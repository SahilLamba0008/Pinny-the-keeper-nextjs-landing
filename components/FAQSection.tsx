"use client";
import React, { useState } from "react";
import { AccordionItem, Section, SectionHeader } from "./ui";

const FAQSection = () => {
	const [openAccordionId, setOpenAccordionId] = useState<number | null>(0);

	const toggleAccordion = (id: number) => {
		setOpenAccordionId(openAccordionId === id ? null : id);
	};
	return (
		<>
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
		</>
	);
};

export default FAQSection;
