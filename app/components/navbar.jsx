"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
	const [openUGP, setOpenUGP] = useState(false);

	return (
		<>
			{/* Space placeholder */}
			<div className="h-20" />

			{/* Actual navbar */}
			<nav className="top-0 right-0 left-0 z-[100] fixed flex justify-between items-center border-[#1a1a1a] bg-[#111] px-8 border-b-2 h-20 text-white">
				{/* Left side */}
				<div className="flex justify-start items-center gap-8 h-full">
					<button
						type="button"
						className="flex items-center gap-2 hover:text-accent"
						onClick={() => setOpenUGP(!openUGP)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 554.18 594.63"
							fill="currentColor"
							width={24}
						>
							<g id="Layer_1-2" data-name="Layer 1">
								<polyline points="168.03 9.06 197.04 435.09 180.72 442.35 142.65 239.3 50.19 251.99 50.19 532.99 267.74 594.63 554.18 460.47 487.1 188.54 429.09 201.23 447.22 368.02 429.09 375.27 400.08 204.86 311.25 215.73 322.13 404.27 302.19 409.71 238.74 0" />
								<polygon points="32.88 310 0 322.37 0 411.21 33.29 501.26 33.29 406.86 32.88 310" />
							</g>
						</svg>
						<p className="[line-height:1] text-left uppercase">
							Uproar
							<br />
							Games
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
						</svg>
					</button>

					<Link href={"/"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 273.72 289"
							fill="currentColor"
							width={24}
						>
							<g>
								<path d="m39.58,289h113.19c.47,0,.93-.16,1.3-.46l118.87-95.92c.49-.39.77-.99.77-1.61v-91.67c0-1.74-2.02-2.71-3.38-1.61L38.28,285.31c-1.52,1.23-.65,3.69,1.3,3.69Z" />
								<path d="m193.72,121.75V33.98c0-.77-.35-1.5-.95-1.98L153.41.55c-.45-.36-1.01-.55-1.58-.55H41.63c-2.39,0-3.45,3.02-1.58,4.51l149.55,119.22c1.66,1.32,4.11.14,4.11-1.98Z" />
								<path d="m60.78,50.39L8.79,7.29C5.3,4.39,0,6.88,0,11.42v266.55c0,4.48,5.16,6.99,8.68,4.23l52.33-41c1.3-1.02,2.06-2.58,2.06-4.24l-.35-182.45c0-1.59-.71-3.1-1.94-4.12Z" />
							</g>
						</svg>
					</Link>
				</div>

				{/* Right side */}
				<div className="flex justify-end items-center gap-8">
					<button
						type="button"
						className="bg-gradient-to-tr from-[#ff3040] to-[#ff7d66] px-4 py-2 rounded-lg text-[#111] uppercase"
					>
						<p className="scale-y-[0.8] [line-height:16px]">Play now</p>
					</button>
				</div>
			</nav>
			<UproarGamesPopout visible={openUGP} onClose={() => setOpenUGP(false)} />
		</>
	);
}

function UproarGamesPopout({ visible, onClose }) {
	return (
		<>
			<div
				className="sm:block top-0 right-0 left-0 fixed hidden h-96 transition-transform duration-500 overflow-hidden"
				style={{ zIndex: 102, transform: visible ? "" : "translateY(-100%)" }}
			>
				{/* Background */}
				<div
					className="top-0 left-0 absolute bg-[#f9f9f9] dropdown-arrow-clip w-full h-[125%] transition-transform duration-500"
					style={{
						transform: visible ? "" : "translateY(-125%)",
					}}
				/>
				{/* Content */}
				<div
					className="top-0 left-0 absolute flex flex-col justify-start gap-4 p-8 w-full h-full transition-opacity duration-500"
					style={{ opacity: visible ? 1 : 0 }}
				>
					<button
						type="button"
						className="flex items-center gap-2 text-[#191919] hover:text-accent"
						onClick={onClose}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 554.18 594.63"
							fill="currentColor"
							width={24}
						>
							<g id="Layer_1-2" data-name="Layer 1">
								<polyline points="168.03 9.06 197.04 435.09 180.72 442.35 142.65 239.3 50.19 251.99 50.19 532.99 267.74 594.63 554.18 460.47 487.1 188.54 429.09 201.23 447.22 368.02 429.09 375.27 400.08 204.86 311.25 215.73 322.13 404.27 302.19 409.71 238.74 0" />
								<polygon points="32.88 310 0 322.37 0 411.21 33.29 501.26 33.29 406.86 32.88 310" />
							</g>
						</svg>
						<p className="[line-height:1] text-left uppercase">
							Uproar
							<br />
							Games
						</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
						</svg>
					</button>

					<div className="flex justify-start gap-4">
						<div className="flex flex-col justify-start gap-2">
							<h1 className="bg-[#f3f3f3] px-4 py-1 text-xl">
								Wait, what's this supposed to be again?
							</h1>
							<p className="px-4 font-din-w1g">
								Oh, right... that intern deleted everything
							</p>
						</div>

						<div className="md:flex flex-col justify-start gap-2 hidden">
							<h1 className="bg-[#f3f3f3] px-4 py-1 text-xl">Games??</h1>
							<p className="px-4 font-din-w1g">We don't even make games lol</p>
						</div>

						<div className="lg:flex flex-col justify-start gap-2 hidden w-56">
							<div className="flex justify-center items-center border-[#ddd] bg-[#f3f3f3] shadow border rounded-lg w-56 h-32">
								<p className="font-din-w1g">???</p>
							</div>
							<p className="font-din-w1g">
								Marketing team told me to add this (i think)
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="top-0 right-0 bottom-0 left-0 z-[101] fixed"
				onClick={onClose}
				style={{
					display: visible ? "block" : "none",
				}}
			/>
		</>
	);
}
