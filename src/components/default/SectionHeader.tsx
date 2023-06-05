import React from "react";
import "@/css/index.css";

interface SectionHeaderProps {
	headerText: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ headerText }) => {
	return <h3 className="h3-header">{headerText}</h3>;
};
