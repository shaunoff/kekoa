<!-- <script lang="ts" context="module">
  import { HTMLLabelAttributes } from 'svelte/elements';

  type MouseDownEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLLabelElement;
  };
  export type LabelRootProps = HTMLLabelAttributes & {
    onMouseDown?: (event: MouseDownEvent) => void;
    ref?: HTMLLabelElement | undefined;
  };
</script> -->

<script lang="ts">
  // type $$Props = LabelRootProps;

  // export let onMouseDown: $$Props['onMouseDown'] = undefined;
  export let ref: HTMLLabelElement = undefined;
  import { cn } from '../../utils/cn';
  import { cva } from 'class-variance-authority';

  const labelVariants = cva(
    'text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  );

  let className: string | undefined | null = undefined;
  export { className as class };
  export let elId: string;
</script>

<label class={cn(labelVariants(), className)} {...$$restProps} bind:this={ref} for={elId}>
  <slot />
</label>
