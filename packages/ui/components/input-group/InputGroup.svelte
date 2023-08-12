<script lang="ts" context="module">
  let counter = 0;
</script>

<script lang="ts">
  import { cn } from '../../utils/cn';

  import { Input } from '../input';
  import { Label } from '../label';

  let eltId = 'input_' + counter++;
  export let type: string = 'text';
  let className: string | undefined | null = undefined;

  export { className as class };
  export let label: string;
  export let value: string = undefined;
  export let message: string = undefined;
  export let placeholder: string = undefined;
</script>

<div class={cn('grid w-full items-center gap-y-1', className)}>
  <Label elId={eltId} class="mb-1">{label}</Label>
  <Input
    class={className}
    {type}
    {eltId}
    {placeholder}
    bind:value
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
    {...$$restProps}
  />
  <div class="h-5">
    {#if message}
      <p class="text-sm text-destructive">{message}</p>
    {/if}
  </div>
</div>
