import { BorderRotate } from "@/components/nurui/animated-gradient-border";
import { Star, Zap, Shield } from "lucide-react";

export function FeatureCardDemo() {
  return (
    <div className="py-20">
      <BorderRotate
        className="p-8"
        animationSpeed={1}
        gradientColors={{
          primary: "#1f2937",
          secondary: "#4f46e5",
          accent: "#8b5cf6",
        }}
      >
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Enhanced Feature Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Lightning Speed</h3>
              <p className="text-gray-300 text-sm mb-3">
                Ultra-fast performance with optimized rendering
              </p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-xs">
                Try Now
              </button>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Secure & Safe</h3>
              <p className="text-gray-300 text-sm mb-3">
                Enterprise-grade security for your data
              </p>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors text-xs">
                Learn More
              </button>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Premium Quality</h3>
              <p className="text-gray-300 text-sm mb-3">
                Professional-grade animated components
              </p>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors text-xs">
                Upgrade
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </BorderRotate>
    </div>
  );
}
