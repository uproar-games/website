"use client";
export function ValButton({ children, onClick }) {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="border-t border-r border-border_dark border-l w-48 h-7 translate-y-5 pointer-events-none select-none" />
			<button
				type="button"
				className="relative w-44 h-12 font-bold font-din-w05 text-primary overflow-hidden group"
				onClick={onClick}
			>
				<div className="top-0 right-0 left-[0.2rem] absolute bg-accent h-[0.2rem]" />
				<div className="top-[0.2rem] right-0 bottom-0 left-0 absolute bg-accent" />
				<div className="top-0 -right-2 bottom-0 -left-2 z-0 absolute bg-secondary -skew-x-[10deg] transition-transform -translate-x-full group-hover:translate-x-0 duration-300 ease-out" />
				<div className="relative z-10 text-sm uppercase">{children}</div>
				<div className="group-hover:bg-primary right-0 bottom-0 absolute bg-secondary w-1 h-1 transition-colors duration-300" />
			</button>
			<div className="border-r border-b border-border_dark border-l w-48 h-7 -translate-y-5 pointer-events-none select-none" />
		</div>
	);
}
