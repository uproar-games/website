import "./globals.css";

export const metadata = {
	title: "Valorant",
	description: "Oopsies! We're under maintainance!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-din-w05">{children}</body>
		</html>
	);
}
