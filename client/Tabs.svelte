<script>
  export let activeIndex = 0;
  export let items;
</script>

<style>
  ul {
    display: flex;
    list-style: none;
    height: 2rem;
  }

  li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #ed8d8d;
    cursor: pointer;

    border-left: 1px solid #ed8d8d;
    border-bottom: 1px solid #ed8d8d;
    border-top: 1px solid #ed8d8d;
  }

  li:first-of-type {
    border-left: 1px solid #ed8d8d;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  li:last-of-type {
    border-right: 1px solid #ed8d8d;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  li.active {
    background-color: #ed8d8d;
    color: #393232;
    font-weight: 700;
  }
</style>

<ul>
  {#each items as item, index}
    <li
      class:active={index === activeIndex}
      on:click={() => (activeIndex = index)}>
      {item.title}
    </li>
  {/each}
</ul>
