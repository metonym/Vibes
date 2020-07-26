<script>
  import Tabs from './components/Tabs.svelte';
  import Header from './components/Header.svelte';
  import Summary from './components/Summary.svelte';
  import Chart from './components/Chart.svelte';
  import Tile from './components/Tile.svelte';

  import { onMount } from 'svelte';

  let activeTabIndex = 0;
  let minutesSpent = 483;
  let wordsScanned = 34831;

  const tabItems = [
    { title: 'Today' },
    { title: 'Week' },
    { title: 'Month' },
    { title: 'All time' }
  ];

  onMount(() => {
    console.log('mount')
    chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setDOMInfo);
  });
  })  
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
    letter-spacing: 0.01rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(h2) {
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: lowercase;
  }

  .wrapper {
    width: 360px;
    height: 590px;
    padding: 1rem;
    background-color: #393232;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-right: -1rem;
  }
</style>

<div class="wrapper">
  <Tabs activeIndex={0} items={tabItems} />
  <Header />
  <main>
    <Summary />
    <Chart />
    <div class="row">
      <Tile subtitle="Minutes Spent" text={minutesSpent} />
      <Tile subtitle="Words Scanned" text={wordsScanned} />
    </div>
  </main>
</div>
