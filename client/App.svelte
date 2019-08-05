<script>
  import Tabs from './Tabs.svelte';

  let activeTabIndex = 0;

  const tabItems = [
    {
      title: 'Today'
    },
    {
      title: 'Week'
    },
    {
      title: 'Month'
    },
    {
      title: 'All time'
    }
  ];
</script>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 16px;
    line-height: 1.3;
  }

  :global(body) {
    font-family: 'Source Sans Pro', sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .wrapper {
    width: 360px;
    height: 590px;
    padding: 1rem;
    background-color: #393232;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  .text-body {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
  }

  header {
    position: relative;
    padding: 2rem 0;
    margin-bottom: 2rem;
  }

  header:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
</style>

<div class="wrapper">
  <Tabs activeIndex={0} items={tabItems} />
  <header>
    <h1>Right on, good vibes 😎</h1>
    <p class="text-body">
      Based on your browser activity, it seems like you’ve been looking at
      content that gives off good vibes.
    </p>
  </header>
  <div>content</div>
</div>
