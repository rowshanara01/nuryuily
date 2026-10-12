"use client"
import type React from "react"
import { ShaderCanvas } from "@/components/nurui/shader-canvas"
import { RippleButton } from "@/components/nurui/multi-type-ripple-buttons"

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export interface PricingCardProps {
  planName: string
  description: string
  price: string
  features: string[]
  buttonText: string
  isPopular?: boolean
  buttonVariant?: "primary" | "secondary"
}

export const AnimatedPricingCard = ({
  planName,
  description,
  price,
  features,
  buttonText,
  isPopular = false,
  buttonVariant = "primary",
}: PricingCardProps) => {
  // Prevent runtime errors if `features` is undefined
  const safeFeatures = features ?? []
  const cardClasses = `
  backdrop-blur-[14px] bg-white/80 dark:bg-black/20 rounded-2xl shadow-xl 
  flex-1 max-w-sm w-full px-6 py-8 flex flex-col transition-all duration-300
  border border-gray-200/50 dark:border-white/10
  ${isPopular ? "scale-105 relative ring-2 ring-cyan-400/50 shadow-2xl bg-white/90 dark:bg-black/30" : "hover:scale-[1.02]"}
`
  const buttonClasses = `
  mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
  ${
    buttonVariant === "primary"
      ? "bg-cyan-400 hover:bg-cyan-300 text-foreground"
      : "bg-black/10 hover:bg-black/20 text-foreground border border-black/20 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20"
  }
`

  return (
    <div className={cardClasses.trim()}>
      {isPopular && (
        <div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-cyan-400 text-foreground dark:text-black">
          Most Popular
        </div>
      )}
      <div className="mb-3">
        <h2 className="text-[48px] font-extralight tracking-[-0.03em] text-foreground font-display">{planName}</h2>
        <p className="text-[16px] text-foreground/70 mt-1 font-sans">{description}</p>
      </div>
      <div className="my-6 flex items-baseline gap-2">
        <span className="text-[48px] font-extralight text-foreground font-display">${price}</span>
        <span className="text-[14px] text-foreground/70 font-sans">/mo</span>
      </div>
      <div className="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div>
      {/* use safeFeatures instead of features */}
      <ul className="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6 font-sans">
        {safeFeatures.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="text-cyan-400 w-4 h-4" /> {feature}
          </li>
        ))}
      </ul>
      <RippleButton className={buttonClasses.trim()}>{buttonText}</RippleButton>
    </div>
  )
}

interface ModernPricingPageProps {
  title: React.ReactNode
  subtitle: React.ReactNode
  plans: PricingCardProps[]
  showAnimatedBackground?: boolean
}

export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
  showAnimatedBackground = true,
}: ModernPricingPageProps) => {
  return (
    <div className="py-10 w-full overflow-x-hidden">
      <main className="relative w-full flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h1 className="text-[48px] md:text-[64px] font-extralight leading-tight tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-600 dark:from-white dark:via-cyan-300 dark:to-blue-400 font-display">
            {title}
          </h1>
          <p className="mt-3 text-[16px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto font-sans">{subtitle}</p>
        </div>

        <div className="relative w-full max-w-6xl">
          {showAnimatedBackground && (
            <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
              <ShaderCanvas />
            </div>
          )}
          <div className="relative z-10 flex flex-col lg:flex-row gap-6 justify-center items-stretch w-full px-4 py-10 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <AnimatedPricingCard key={plan.planName} {...plan} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}