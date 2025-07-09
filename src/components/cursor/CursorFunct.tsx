import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

type CursorContextType = {
	position: { x: number; y: number };
	size: { width: number; height: number };
	radius: {
		topLeft: string;
		topRight: string;
		bottomLeft: string;
		bottomRight: string;
	};
	isHovering: boolean;
	background: string;
	borderWidth: string;
	borderColor: string;
	iconName: string | null;
	text: string | null;
	textColor: string;
	textSize: string;
	handleHover: (
		element: HTMLElement | null,
		padding?: number,
		options?: {
			background?: string;
			borderWidth?: string;
			borderColor?: string;
			iconName?: string;
			text?: string;
			textColor?: string;
			textSize?: string;
		}
	) => void;
	resetCursor: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [size, setSize] = useState({ width: 40, height: 40 });
	const [radius, setRadius] = useState({
		topLeft: "100%",
		topRight: "100%",
		bottomLeft: "100%",
		bottomRight: "100%",
	});
	const [isHovering, setIsHovering] = useState(false);
	const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(
		null
	);

	const [background, setBackground] = useState("bg-customGreen");
	const [borderWidth, setBorderWidth] = useState("2px");
	const [borderColor, setBorderColor] = useState("border-customGreen");
	const [iconName, setIconName] = useState<string | null>(null);
	const [text, setText] = useState<string | null>(null);
	const [textColor, setTextColor] = useState("text-white");
	const [textSize, setTextSize] = useState("text-sm");

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			if (isHovering && hoveredElement) {
				const rect = hoveredElement.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				setPosition({ x: centerX, y: centerY });
			} else {
				setPosition({ x: e.clientX, y: e.clientY });
			}
		};

		document.addEventListener("mousemove", moveCursor);
		return () => document.removeEventListener("mousemove", moveCursor);
	}, [isHovering, hoveredElement]);

	const handleHover = (
		element: HTMLElement | null,
		padding: number = 0,
		options?: {
			background?: string;
			borderWidth?: string;
			borderColor?: string;
			iconName?: string;
			text?: string;
			textColor?: string;
			textSize?: string;
		}
	) => {
		if (element) {
			setIsHovering(true);
			setHoveredElement(element);

			const rect = element.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			setPosition({ x: centerX, y: centerY });

			setSize({
				width: rect.width + padding * 2,
				height: rect.height + padding * 2,
			});

			const style = getComputedStyle(element);
			const parseRadius = (r: string) => {
				const num = parseFloat(r);
				const unit = r.replace(num.toString(), "") || "px";
				return `${num + padding}${unit}`;
			};

			setRadius({
				topLeft: parseRadius(style.borderTopLeftRadius),
				topRight: parseRadius(style.borderTopRightRadius),
				bottomLeft: parseRadius(style.borderBottomLeftRadius),
				bottomRight: parseRadius(style.borderBottomRightRadius),
			});

			setBackground(options?.background || "bg-customGreen");
			setBorderWidth(options?.borderWidth || "2px");
			setBorderColor(options?.borderColor || "border-customGreen");
			setIconName(options?.iconName || null);
			setText(options?.text || null);
			setTextColor(options?.textColor || "text-white");
			setTextSize(options?.textSize || "text-sm");
		}
	};

	const resetCursor = () => {
		setSize({ width: 40, height: 40 });
		setRadius({
			topLeft: "100%",
			topRight: "100%",
			bottomLeft: "100%",
			bottomRight: "100%",
		});
		setIsHovering(false);
		setHoveredElement(null);
		setBackground("bg-customGreen");
		setBorderWidth("2px");
		setBorderColor("border-customGreen");
		setIconName(null);
		setText(null);
		setTextColor("text-white");
		setTextSize("text-sm");
	};

	return (
		<CursorContext.Provider
			value={{
				position,
				size,
				radius,
				isHovering,
				background,
				borderWidth,
				borderColor,
				iconName,
				text,
				textColor,
				textSize,
				handleHover,
				resetCursor,
			}}
		>
			{children}
		</CursorContext.Provider>
	);
};

export const useCursor = () => {
	const context = useContext(CursorContext);
	if (!context) {
		throw new Error("useCursor must be used within a CursorProvider");
	}
	return context;
};
