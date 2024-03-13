"use client";
import { ValButton } from "./components/button";

export default function Home() {
	return (
		<main className="relative bg-secondary w-full min-h-full">
			{/* Background text */}
			<div className="top-0 left-0 fixed flex flex-wrap justify-start items-start h-screen overflow-hidden pointer-events-none select-none">
				<div className="w-screen min-w-[60rem] h-full">
					{[...Array(10)].map((e, i) => (
						<p
							key={e}
							className="m-0 w-full font-bold font-din-w05 text-[#0000] text-[max(20vw,10rem)] [-webkit-text-stroke:1px_#fff2] [text-stroke:1px_#fff2] uppercase self-end [line-height:0.85]"
							style={{
								textAlign: i % 2 === 0 ? "left" : "right",
							}}
						>
							Oopsies!
						</p>
					))}
				</div>
			</div>

			{/* Actual page */}
			<div className="flex flex-col justify-center items-center min-h-screen">
				{/* Maintainance notice */}
				<div className="flex flex-col justify-center items-center gap-4 bg-primary p-8 w-[calc(100vw-4rem)] max-w-[40rem] h-[calc(100vh-4rem)] max-h-[30rem] text-secondary bevel-tl-br">
					<h1 className="font-tungsten text-[6rem] [letter-spacing:0.25rem] [line-height:1] text-accent">
						{/* Uh oh! */}
						{[85, 104, 32, 111, 104, 33].map((e) => String.fromCharCode(e))}
					</h1>
					<p className="font-din-w1g text-center text-lg">
						Sorry! We have massive skill issues and are currently unable to
						serve our players. Please wait while we discipline the new intern
						that pushed a refactoring commit to the production branch.
					</p>
					<p className="font-din-w1g text-center text-lg">
						While you're waiting, check out our new update teaser!
					</p>
					<ValButton
						onClick={() => {
							window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
						}}
					>
						Watch now
					</ValButton>
				</div>
			</div>
		</main>
	);
}
