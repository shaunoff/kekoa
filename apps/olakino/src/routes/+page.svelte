<script lang="ts">
  import { Button, Title, Input, InputGroup } from '@kekoa/ui';

  function testy() {
    console.log('jgdjhfdgjfhgjh');
  }
</script>

<h1>Web</h1>
<div>
  <Button class="m-2" size="sm">Submit</Button>
  <Title variant="h4">WooHoo!</Title>
  <div class="bg-primary text-primary-foreground">hfkjdhfkj</div>
  <div class="m-2 gap-y-4 flex flex-col">
    <Input type="email" placeholder="email" label="First Name" on:change={testy} />
    <InputGroup type="email" placeholder="email" label="First Name" />
    <InputGroup
      type="email"
      placeholder="waaaaaaaaaa"
      label="Last Name"
      message="yasss"
      on:input={testy}
    />
  </div>
</div>

<p class="text-primary-background">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
