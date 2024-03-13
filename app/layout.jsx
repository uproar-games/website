import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* HTML Meta Tags */}
				<title>Valorant</title>
				<meta
					name="description"
					content="Oopsies! We're under maintenance because the new intern screwed up the production branch!"
				/>

				{/* Facebook Meta Tags */}
				<meta property="og:url" content="https://valorant.ca/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Valorant" />
				<meta
					property="og:description"
					content="Oopsies! We're under maintenance because the new intern screwed up the production branch!"
				/>
				<meta property="og:image" content="/og.png" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="valorant.ca" />
				<meta property="twitter:url" content="https://valorant.ca/" />
				<meta name="twitter:title" content="Valorant" />
				<meta
					name="twitter:description"
					content="Oopsies! We're under maintenance because the new intern screwed up the production branch!"
				/>
				<meta name="twitter:image" content="/og.png" />
			</head>
			<body className="font-din-w05 overflow-x-hidden">
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
