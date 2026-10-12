'use client';
import React from 'react';
import { cn } from '@/lib/utils'; // You can replace with `clsx` if needed

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const squares = genRandomPattern();

	return (
		<div
			className={cn(
				'relative p-6 bg-white dark:bg-black overflow-hidden',
				'border-gray-200 dark:border-gray-700',
				className
			)}
			{...props}
		>
			{/* Background Grid Pattern */}
			<div className="absolute inset-0 z-0">
				<GridPattern
					width={20}
					height={20}
					x="0"
					y="0"
					squares={squares}
					className="text-gray-200 dark:text-gray-700"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10">
				<feature.icon className="text-gray-800 dark:text-gray-200 size-6" strokeWidth={1} />
				<h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h3>
				<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
			</div>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & {
	width: number;
	height: number;
	x: string;
	y: string;
	squares?: number[][];
}) {
	const patternId = React.useId().replace(/:/g, ''); // valid ID for svg

	return (
		<svg
			viewBox="0 0 100% 100%"
			className={cn('w-full h-full', props.className)}
			aria-hidden="true"
			preserveAspectRatio="none"
		>
			<defs>
				<pattern
					id={patternId}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path
						d={`M0 ${height} V0 H${width}`}
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill={`url(#${patternId})`} />

			{/* Optional squares */}
			{Array.isArray(squares) && (
				<g>
					{squares.map(([sx, sy], i) => (
						<rect
							key={i}
							x={sx * width}
							y={sy * height}
							width={width}
							height={height}
							fill="currentColor"
							className="opacity-20"
						/>
					))}
				</g>
			)}
		</svg>
	);
}

function genRandomPattern(length = 5): number[][] {
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 2,
		Math.floor(Math.random() * 4) + 2,
	]);
}
