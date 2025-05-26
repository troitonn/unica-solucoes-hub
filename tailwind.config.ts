
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Nova paleta elegante e tecnológica
				brand: {
					navy: "#0F1B2E",      // Azul-marinho principal
					"navy-light": "#1E3A5F", // Azul-marinho claro
					"navy-dark": "#0A1221",   // Azul-marinho escuro
					white: "#FFFFFF",         // Branco puro
					gray: "#4A5568",          // Cinza grafite
					"gray-light": "#718096",  // Cinza claro
					"gray-dark": "#2D3748",   // Cinza escuro
					gold: "#D69E2E",          // Dourado elegante
					"gold-light": "#ECC94B",  // Dourado claro
					accent: "#3182CE",        // Azul de destaque
					"accent-light": "#63B3ED" // Azul claro de destaque
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(1deg)' }
				},
				'float-reverse': {
					'0%, 100%': { transform: 'translateY(-10px) rotate(0deg)' },
					'50%': { transform: 'translateY(10px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(209, 213, 219, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(214, 158, 46, 0.6)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-reverse': 'float-reverse 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite'
			},
			fontFamily: {
				sans: ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
				serif: ['"Playfair Display"', 'Georgia', 'serif'],
				display: ['"Playfair Display"', 'Georgia', 'serif'],
			},
			backgroundImage: {
				'elegant-gradient': 'linear-gradient(135deg, #0F1B2E 0%, #1E3A5F 50%, #0F1B2E 100%)',
				'gold-gradient': 'linear-gradient(135deg, #D69E2E 0%, #ECC94B 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
			},
			boxShadow: {
				'elegant': '0 10px 40px rgba(15, 27, 46, 0.15)',
				'elegant-lg': '0 20px 60px rgba(15, 27, 46, 0.2)',
				'gold-glow': '0 0 30px rgba(214, 158, 46, 0.3)',
				'float': '0 20px 40px rgba(0, 0, 0, 0.1)',
				'glass': '0 8px 32px rgba(15, 27, 46, 0.12)',
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
