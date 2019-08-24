<script>
  export let subtitle;
  export let text;
</script>

<style>
  div {
    flex: 1;
    margin-right: 1rem;
    padding: 1rem;
    height: 5.5rem;
    background-color: #4d4545;
    border-radius: 0.25rem;
  }

  p {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1.2;
  }
</style>

<div>
  <h2>{subtitle}</h2>
  <p>{text}</p>
</div>
