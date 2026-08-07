content = '''@import "tailwindcss";

@theme {
  --color-primary-bg: #050816;
  --color-secondary-bg: #0B1120;
  --color-card-bg: #111827;
  --color-primary-text: #F8FAFC;
  --color-secondary-text: #94A3B8;
  --color-accent-purple: #8B5CF6;
  --color-accent-blue: #3B82F6;
  
  --font-sans: "Inter", system-ui, sans-serif;
  --font-heading: "Poppins", system-ui, sans-serif;
}

@layer base {
  :root {
    color-scheme: dark;
  }
  body {
    @apply bg-primary-bg text-primary-text font-sans antialiased overflow-x-hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading tracking-tight;
  }
}

@layer utilities {
  .glass-panel {
    @apply bg-card-bg/60 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)];
  }
  
  .glass-card {
    @apply bg-card-bg/40 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-300;
  }
  
  .glass-card:hover {
    @apply border-white/20 shadow-[0_8px_30px_rgba(59,130,246,0.15)] -translate-y-1;
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-blue;
  }

  .cursor-glow {
    @apply relative overflow-hidden;
  }
  
  .cursor-glow::before {
    content: "";
    @apply absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none;
    border-radius: inherit;
    background: radial-gradient(
      800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255,255,255,0.06),
      transparent 40%
    );
  }
  
  .cursor-glow:hover::before {
    @apply opacity-100;
  }
}

/* Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out 3s infinite;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #050816;
}
::-webkit-scrollbar-thumb {
  background: #111827;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3B82F6;
}
'''
with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(content)
