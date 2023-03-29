<script lang="ts">
  let isVisible = false;

  const handleToggle = () => {
    isVisible = !isVisible;
  };
</script>

<div class="hideable">
  {#if isVisible}
    <slot />
  {/if}
  <button class="tertiary" on:click={handleToggle}>
    {isVisible ? '- hide' : '+ show'} details
  </button>
</div>
