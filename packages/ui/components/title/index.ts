import { cva } from 'class-variance-authority';

export { default as Title } from './Title.svelte';

export const titleVariants = cva('scroll-m-20 text-foreground', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight'
    }
  },
  defaultVariants: {
    variant: 'h4'
  }
});
