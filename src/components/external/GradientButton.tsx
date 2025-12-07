

interface Props {
  children: string,
}

export default function GradientButton({ children }: Props) {
  return (
      <button className="group relative px-8 py-4 bg-linear-to-r from-red-600 to-orange-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,69,0,0.6)] flex items-center gap-3">
        {children}
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </button>
  );
}