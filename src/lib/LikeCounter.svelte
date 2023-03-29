<script lang="ts">
  export let likes: number;
</script>

<button class="secondary" on:click={() => likes++}>
  <span>👏</span>
  {likes}
</button>
