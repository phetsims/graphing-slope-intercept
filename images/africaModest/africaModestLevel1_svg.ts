/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-2,.cls-3,.cls-4,.cls-5,.cls-8{stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px}.cls-10,.cls-2,.cls-3,.cls-4,.cls-5,.cls-8{stroke:#000}.cls-2{fill:#25566b}.cls-11{stroke-width:.2px}.cls-11,.cls-12{fill:#fff;stroke:#58595b}.cls-10,.cls-11,.cls-12{stroke-miterlimit:10}.cls-3{fill:#21272e}.cls-4{fill:#0a7a8f}.cls-5{fill:#a86c51}.cls-10,.cls-8{fill:none}.cls-13{stroke-width:0}</style></defs><g id="Grid"><path d="M30 29.3h241.5v241.5H30zm0 229.3h241.5M30 246.6h241.5M30 234.5h241.5M30 222.5h241.5M30 210.4h241.5M30 198.3h241.5M30 186.2h241.5M30 174.2h241.5M30 162.1h241.5" class="cls-11"/><path d="M30 150h241.5" class="cls-12"/><path d="M30 137.9h241.5M30 125.8h241.5M30 113.8h241.5M30 101.7h241.5M30 89.6h241.5M30 77.5h241.5M30 65.5h241.5M30 53.4h241.5M30 41.4h241.5m-12.1-12.1v241.4M247.3 29.3v241.4m-12-241.4v241.4M223.2 29.3v241.4M211.1 29.3v241.4M199 29.3v241.4M186.9 29.3v241.4m-12-241.4v241.4M162.8 29.3v241.4" class="cls-11"/><path d="M150.8 29.3v241.4" class="cls-12"/><path d="M138.7 29.3v241.4M126.6 29.3v241.4m-12-241.4v241.4M102.5 29.3v241.4M90.4 29.3v241.4M78.3 29.3v241.4M66.2 29.3v241.4m-12-241.4v241.4M42.1 29.3v241.4" class="cls-11"/><path d="M24.7 150h252.1" class="cls-10"/><path d="m25.4 152.5-4.3-2.5 4.3-2.5zm250.7 0 4.3-2.5-4.3-2.5z" class="cls-13"/><path d="M150.8 23.9v252.2" class="cls-10"/><path d="m148.3 24.7 2.5-4.3 2.4 4.3zm0 250.6 2.5 4.3 2.4-4.3z" class="cls-13"/></g><path id="Lines" d="m300 234.3-14.9-8.3v5.9H14.8V226l-15 8.3 15 8.3v-5.9h270.3v5.9z" style="stroke-width:0;fill:#27b04b"/><g id="Africa_Modest"><path d="M127.4 183.2c-2.8-12.6-5.1-17.3-8.5-24.9-.8-1.9-1.7-3.9-2.7-6.2-.2-.8-.4-1.7-.7-2.5-.6-2.2-1.1-4.6-1.6-7h0c-.9-4.5-1.5-9.3-1.9-14.3-.5-7.2-.4-14.8.6-22.6-1.6 1.3-4.2 1.5-6.2.8h-.1v.2c.8 6.6.4 13.5-1.3 20-1.5-1.2-3.1-2.4-4.6-3.6-.4-.3-.8-.6-1.1-1.1-.6-1-.3-2.4 0-3.6 1.4-6.1.6-12.6-2.2-18.1-3-1.8-6.3-2.9-9.8-3.3-1.2-.1-3.2 1.2-4.8 1.7-3.4 6.2-3.3 6.7-6.2 13.1-1.2 2.6-2.4 5.4-2.4 8.2 0 3.7 1.5 7.7 3.2 12.3 1 2.6 2.3 6.2 3.7 9.5-3.5 10.6-.2 28.3-1.8 42-7.9 15.7-11.2 30-14.5 36.7l.6.6c3.5 3.4 10.4 5.6 18.5 6.8 11.4 1.7 25.2 1.3 35.7-.4h0c5.4-.9 9.9-2.2 12.6-3.8-2.5-14.5-2.9-26-4.6-40.6Zm-32.3-25.1c-1.1 2.2-6.5 1.9-6.8.7-.6-3.7-1.3-5.5-1.9-9.2-1 .3-1.8.3-2.1-.2-.8-1.6-1.8-3.5-2.7-5.7 3.2.1 6.5-1.5 8.4-4.2.6 1.6 1.4 3.4 2.3 5.4.3.6-.4 1.5-1.4 2.3 3.8 3.9 6.6 6.1 4.2 11Z" class="cls-2"/><path d="M94.7 103.8c-3.5 5.8-6.8 11.5-10.4 17.4 2.2 7.2 2.8 11.2 5.7 18.3m-8.3 4.1c-.3-.6-.5-1.2-.8-1.8" class="cls-8"/><path d="M95.1 158.1c-1.1 2.2-6.5 1.9-6.8.7-.6-3.7-1.3-5.5-1.9-9.2 1.4-.4 3.3-1.4 4.5-2.4 3.8 3.9 6.6 6.1 4.2 11Z" class="cls-5"/><path d="M90.9 147.1c-1.3 1-3.1 2-4.5 2.4-1 .3-1.8.3-2.1-.2-.8-1.6-1.8-3.5-2.7-5.7 3.2.1 6.5-1.5 8.4-4.2.6 1.6 1.4 3.4 2.3 5.4.3.6-.4 1.5-1.4 2.3m28.8-1.8c-.3.5-.8 1-1.3 1.7-.8.9-1.8 1.9-2.7 2.5h-.1c-.6-2.2-1.1-4.5-1.6-7h0c.1 0 1.9-1.5 2.6-2.5.8 1.5 1.9 3.2 3.1 5.2Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#bebebe"/><path d="M116.6 140.1c-.7 1-2.5 2.4-2.6 2.4-.9-4.5-1.5-9.3-1.9-14.3h0c.8 3.1 0 3.9 4.5 11.8Z" class="cls-2"/><path d="M118.9 158.3c-.8-1.9-1.7-3.9-2.7-6.2-.2-.8-.4-1.7-.7-2.5h.1c.9-.7 1.9-1.6 2.7-2.6 7.2 11.3 1.3 11.6.5 11.3Z" class="cls-5"/><path d="M83.5 230.5c-.2.8-.9 1.3-1.7 1.6s-1.6.3-2.4.3c-4.6 0-9.3 0-13.7-1.3-1-.3-2.1-.8-2.5-1.8-.2-.6-.2-1.3 0-1.9.3-2.1 1-4.2 2-6.1h0c3.5 3.3 10.4 5.5 18.5 6.7.7.5.2 1.4-.1 2.5Z" class="cls-3"/><path d="M83.7 228s-.2-.1-.3-.2" class="cls-8"/><path d="M140.5 232.1c-3.5.1-17.6.6-18.9.3s-2.9-3.7-2.2-4.8h0c5.4-.9 9.9-2.2 12.6-3.8v.2c1.4.3 6.9 2 7.8 2.9.9 1 1.3 4.1.7 5.2" class="cls-3"/><path d="M115.5 58.7c-.2-.4-.4-.8-.6-1m.8 1.3v-.2" class="cls-8"/><path d="M117.4 73.8c-.5-.9-.9-1.5-1.7-3.7 1.2-4.9.9-8.8 0-11.1-1.8-2.6-7-1.7-8.8-.5s-3.8 3.9-4.5 6c-1.6 4.7-1.4 7.6-1.4 11.1 0 2.7 4.4 9.6 7.1 10.3 1.6.4 2.8.8 3.9.6 1.3-.3 2.3-1.5 2.9-4.9 0 .2-1.8 1.6-4.4-2.5 1.3.6 3.2.7 4.6.7.3-.2.3-1.5.4-2.3.8 0 1.5-.4 1.9-1 .5-.9.6-1.8.1-2.7Zm-4.7-.6c-.3 0-.5-.9-.5-1.9s.2-2 .5-2 .5.9.5 2-.2 1.9-.5 1.9m2.5-5.7c-.5.4-1.5-.2-2.4-.3-1.2-.1-1.9.5-3 .2.9-1.2 2.1-1.9 4.2-1.6 0 0 .1 0 .2.1q0 0 0 0t0 0c.4.2.7.4 1 .7s.3.7 0 1Z" class="cls-5"/><path d="M115.2 67.5c-.5.4-1.5-.2-2.4-.3-1.2-.1-1.9.5-3 .2.9-1.2 2.1-1.9 4.2-1.6-.4 0 0 0 .2.1q0 0 0 0t0 0c.4.2.7.4 1 .7s.3.7 0 1Z" style="fill:#2b2b2b;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M114.2 65.9s0 0 0 0m1.2 11.6h-.8" class="cls-8"/><path d="M113.2 71.3c0 1.1-.2 1.9-.5 1.9s-.5-.9-.5-1.9.2-2 .5-2 .5.9.5 2" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="m115 79.7-.3 1.8c0 .2-1.8 1.6-4.4-2.5 1.3.6 3.2.7 4.6.7Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#fff"/><path d="M102.3 64.5c-1.6 4.7-1.4 7.6-1.4 11.1 0 2.7 4.4 9.6 7.1 10.3 1.6.4 2.8.8 3.9.6h.9c.2 1 .2 2.4 0 3.7v.1c-.4 7.2 1.8 12.2 1.5 13.2-.2.9-.8 1.6-1.5 2.1-1.6 1.3-4.2 1.5-6.2.8h-.1c-2.8-1-5-3.3-7.5-5.1l-1.8-1.2c-3-1.8-6.3-2.9-9.8-3.3-1.2-.1-3.2 1.2-4.8 1.7-.7.2-1.4.3-1.8 0-1.4-1.2 1.7-8.9 2.3-10.7 3.3-9.9-3.7-21.3 1.9-30.2 2.9-4.7 6.8-8.4 16.8-8.3 8.7 0 10.9 2.4 13.8 9.4q0 0 0 0v.2c-1.8-2.6-7-1.7-8.8-.5s-3.8 3.9-4.5 6Z" class="cls-4"/><path d="M112.7 90.2v.1" class="cls-8"/><path d="M105.1 126.7c-1.5-1.2-3.1-2.4-4.6-3.6-.4-.3-.8-.6-1.1-1.1-.6-1-.3-2.4 0-3.6 1.4-6.1.6-12.6-2.2-18.1.6.4 1.2.7 1.8 1.2 2.5 1.8 4.7 4 7.5 5.1v.2c.8 6.6.4 13.5-1.3 20Z" class="cls-4"/><path d="M97.1 100.2s0 0 0 0m-1.1-34c-.9 9.9 2.8 23.2 8 31 1 1.5 2.4 3.1 4 2.9 1.2-.2 2.2-1.4 2.9-2.6.7-1.1 1.6-4.2 1.9-7.1m-22.7 48.9v.1m-8.4 4.2h-.2m32.5-1.1s0 0 0 0m2.7-2.5s0 0 0 0" class="cls-8"/></g></svg>')}`;
export default image;