import InfiniteMarquee from 'vanilla-infinite-marquee';

new InfiniteMarquee({
  element: '.marquee-container',
  speed: 40000,
  smoothEdges: false,
  direction: 'left',

  fullContainer: true,
  spaceBetween: '28px',
});
