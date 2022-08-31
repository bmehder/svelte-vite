<script>
  import Child from './Child.svelte'

  export let text = 'me'
</script>

<div>Hello <Child {text} /></div>

<style>
  div {
    color: tomato;
  }
</style>
