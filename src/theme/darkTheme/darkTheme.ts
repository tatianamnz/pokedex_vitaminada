import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";
import { spaces } from "@/theme/foundations/spaces";
import { Theme } from "@/theme/theme";

export interface ThemeColors {
	mainColor: string;
	secondaryColor: string;
	textColor: string;
	hoverColor?: string;               // Propiedad opcional
	disabledColor?: string;            // Propiedad opcional
	errorBackgroundColor?: string;     // Propiedad opcional
	errorTextColor?: string;           // Propiedad opcional
	errorHoverColor?: string;          // Propiedad opcional
}

