<script lang="ts">
  import type { VariantProps } from 'class-variance-authority';
  import { cn } from '../../utils/cn';
  import { titleVariants } from '.';

  let className: string | undefined | null = undefined;
  export { className as class };

  export let variant: VariantProps<typeof titleVariants>['variant'] = 'h4';

  type Props = {
    variant?: VariantProps<typeof titleVariants>['variant'];
  };
  type $$Props = Props;
</script>

<svelte:element
  this={variant}
  class={cn(titleVariants({ variant, className }))}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:mouseenter
  on:mouseleave
>
  <slot />
</svelte:element>
