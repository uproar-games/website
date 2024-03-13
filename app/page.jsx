import Image from "next/image";
import { ValButton } from "./components/button";

export default function Home() {
	return (
		<main className="relative bg-secondary w-screen min-h-screen">
			{/* Background text */}
			<div className="top-0 left-0 fixed flex flex-wrap justify-start items-start h-screen overflow-hidden pointer-events-none select-none">
				{[...Array(4)].map((e) => (
					<p
						key={e}
						className="m-0 font-bold font-din-w05 text-[20vw] [-webkit-text-stroke:1px_#fff2] uppercase [line-height:0.85] text-[#0000] [text-stroke:1px_#fff2]"
					>
						Oopsies!
					</p>
				))}
			</div>

			{/* Actual page */}
			<div className="flex flex-col justify-center items-center min-h-screen">
				{/* Maintainance notice */}
				<div className="flex flex-col justify-center items-center gap-4 bg-primary p-8 w-[calc(100vw-4rem)] max-w-[40rem] h-[calc(100vh-4rem)] max-h-[30rem] text-secondary bevel-tl-br">
					<h1 className="font-tungsten text-[6rem] [letter-spacing:0.25rem] [line-height:1] text-accent">
						Uh oh!
					</h1>
					<p className="font-din-w1g text-center text-lg">
						Sorry! We have massive skill issues and are currently unable to
						serve our players. Please wait while we discipline the new intern
						that pushed a refactoring commit to production.
					</p>
					<p className="font-din-w1g text-center text-lg">
						While you're waiting, check out our new update teaser!
					</p>
					<ValButton>Watch now</ValButton>
				</div>
			</div>
		</main>
	);
}
