import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Seeded random number generator
export class SeededRandom {
  private seed: number

  constructor(seed: number) {
    this.seed = seed
  }

  // Returns a random number between 0 and 1 with fixed precision
  random(precision: number = 4): number {
    const x = Math.sin(this.seed++) * 10000
    const value = x - Math.floor(x)
    return Number(value.toFixed(precision))
  }

  // Returns a random number between min and max
  range(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min
  }
}
