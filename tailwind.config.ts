
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
				// Soft, easy-on-eyes colors with lighter greens
				'soft-mint': 'hsl(var(--soft-mint))',
				'soft-mint-light': 'hsl(var(--soft-mint-light))',
				'sage-green': 'hsl(var(--sage-green))',
				'sage-green-light': 'hsl(var(--sage-green-light))',
				'soft-lavender': 'hsl(var(--soft-lavender))',
				'soft-lavender-light': 'hsl(var(--soft-lavender-light))',
				'warm-cream': 'hsl(var(--warm-cream))',
				'warm-cream-light': 'hsl(var(--warm-cream-light))',
				'dusty-blue': 'hsl(var(--dusty-blue))',
				'dusty-blue-light': 'hsl(var(--dusty-blue-light))',
				'soft-coral': 'hsl(var(--soft-coral))',
				'soft-coral-light': 'hsl(var(--soft-coral-light))',
				'neutral-warm': 'hsl(var(--neutral-warm))',
				'neutral-warm-light': 'hsl(var(--neutral-warm-light))',
				'text-soft': 'hsl(var(--text-soft))',
				'surface-cream': 'hsl(var(--surface-cream))',
				'mint-bg': 'hsl(var(--mint-bg))',
				'mint-bg-light': 'hsl(var(--mint-bg-light))'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
