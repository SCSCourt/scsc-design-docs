var e=t=>`// import from the secondary entry point, not from '@scscourt/design'
import { ${t} } from '@scscourt/design/charts';
// The charts entry point needs two small peers for its scales, stacks and arcs (no charting
// library; the marks are HTML and SVG coloured by the theme's CSS variables):
//   npm i d3-scale d3-shape`;var o=[{keys:`Tab`,action:`Moves to the legend buttons, then the plot, then "Show data table".`},{keys:`→ / ↓ and ← / ↑`,action:`On the plot: next / previous category, point or segment; shows its tooltip and reads it aloud.`},{keys:`Home / End`,action:`First / last category, point or segment.`},{keys:`Escape`,action:`Hides the tooltip.`},{keys:`Enter / Space`,action:`On a legend button: hides or shows that series.`}];export{o as n,e as t};