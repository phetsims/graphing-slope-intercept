/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-2,.cls-3,.cls-4,.cls-7,.cls-8{stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px}.cls-2,.cls-3,.cls-4,.cls-7,.cls-8,.cls-9{stroke:#000}.cls-2{fill:#28221d}.cls-9{stroke-miterlimit:10}.cls-3{fill:#181817}.cls-4{fill:#8a5a37}.cls-7{fill:#e8eeef}.cls-8,.cls-9{fill:none}.cls-11{stroke-width:0}</style></defs><g id="Grid"><path d="M29.3 29.3h241.5v241.5H29.3zm0 229.3h241.4m-241.4-12h241.4M29.3 234.5h241.4m-241.4-12h241.4M29.3 210.4h241.4M29.3 198.3h241.4M29.3 186.2h241.4m-241.4-12h241.4M29.3 162.1h241.4M29.3 150h241.4M29.3 137.9h241.4M29.3 125.8h241.4m-241.4-12h241.4M29.3 101.7h241.4M29.3 89.6h241.4M29.3 77.5h241.4m-241.4-12h241.4M29.3 53.4h241.4m-241.4-12h241.4m-12.1-12.1v241.4m-12-241.4v241.4M234.5 29.3v241.4m-12-241.4v241.4M210.4 29.3v241.4M198.3 29.3v241.4M186.2 29.3v241.4m-12-241.4v241.4M162.1 29.3v241.4M150 29.3v241.4M137.9 29.3v241.4M125.8 29.3v241.4m-12-241.4v241.4M101.7 29.3v241.4M89.6 29.3v241.4M77.5 29.3v241.4m-12-241.4v241.4M53.4 29.3v241.4m-12-241.4v241.4" style="stroke:#58595b;stroke-width:.2px;fill:#fff;stroke-miterlimit:10"/><path d="M23.9 150h252.2" class="cls-9"/><path d="m24.7 152.5-4.3-2.5 4.3-2.5zm250.6 0 4.3-2.5-4.3-2.5z" class="cls-11"/><path d="M150 23.9v252.2" class="cls-9"/><path d="m147.5 24.7 2.5-4.3 2.5 4.3zm0 250.6 2.5 4.3 2.5-4.3z" class="cls-11"/></g><path id="Lines" d="m259.5 87.6 6.3-15.9-16.8 3.1 3.7 4.5-208.5 172-3.7-4.5-6.3 15.9 16.8-3.1-3.7-4.6L255.8 83z" style="stroke-width:0;fill:#27b04b"/><g id="Africa_Modest"><path d="M130.5 48.4c.5-.2 1.2-.2 1.8 0s1.1.3 1.7.5h.2v.3c.9-3.1 1.2-5.4.9-7.3-2.6-1.1-4.4-2.3-9.1-1.4-2 .4-4.5 6.4-6.5 12.2-.9.2-2.3-.3-2.5-1.2q-.3-1.35 0-2.7c-.4-.8-1.5-.9-2.4-.6-1.4.4-1.5 3.5-1.2 5.4h-.1c-3.7 0-5.3 7.4-7.2 3.7 0 2.9.2 5.7-1.5 7.9 5.7.4 8.9 8 10.3 9.7 1.1 1.5 3 2.9 2.8-1.2v-2.2c0-1.7 0-3.3.5-4.5 1.5 1.1 2.8 2.1 3.9 2.8.9-1.5 4.1-2.7 5.9-2.4.6-1.3 1.5-2.3 1.4-2.5 0-.3-.1-.4-.3-.4h-.5c-2.2-.5-4.2-2.2-5-4.4.3.2.6.4 1 .5 1.7.5 3.6 1.3 5.3 2.1.3.1.6.3.9.4.3-.8.4-1.5.9-3v-.2h.5c.9.1 1.3 0 2.1-1.1.1-.2-1-4.5-1-6.5.2-.7.5-1.3.7-1.9h-1.9c-.8 0-1.8 0-2.1-.7-.2-.5.2-1 .7-1.2Z" class="cls-4"/><path d="M140.9 118.8c-1.5 15.9-3.2 40.6-5.9 48.7 0 0-5.3 5-12.7 5-3.1-16.8 4-20 4-40v-.4c-8 2.1-17.2 3.6-25.5 6.2h0c-3.1 13.6-6.9 27.8-10.4 41.3-2.9 11-2.7 21.5-7.8 30.6-4 2.4-13.6.5-13.3 0-4.9-7.4 6.5-25.6 8.7-48.1 1.6-16.1 0-21-.2-32.3 0-.2.3-5.9 1.2-10.2 7.4 3.7 16.7 8.1 22.8 7.2 1-3.5 2.1-6.9 3.4-10.1 2.3-.8 5.6-1.2 9.3-1.4 5.2-.3 11.2-.1 16.1.4 5.3.6 9.4 1.6 10.3 2.9Z" style="fill:#474763;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M130.6 115.8c-5-.5-10.9-.7-16.1-.4-1.8-1.9-4.1-4.9-5.8-6.7 1.5-3.4 3-6.8 4.3-10.2 0-.2.1-.3.2-.5 1.4-3.6 2.4-5.3 3.3-7.8-6.6-1.6-13.1-3.7-19.2-6.5h0c-2.4.8-4.8 1.7-7 2.5-3.5 1.3-6.4 2.3-7.6 2.7.9 3.8 1.5 8.8 2.4 13.4h0c.4 2.1.9 4.2 1.5 5.9 0 .2-.2.4-.3.6-1.7 3.4-6.1 5.1-8.1 4.7-.6-.1-1-.4-1.1-.8-2.8-9.4-3.7-16.9-5.7-23.6-2.6-8.8 7-11.5 11.3-14.9 13.2-7 16-6.8 22-9.4 5.7.4 8.9 8 10.3 9.7 1.1 1.5 3 2.9 2.8-1.2v-2.2c2.2 2.1 3 5.2 3 8.9 0 8.5-4 19.6-3.5 25.8 2.7 2.4 10.2 8.5 13.5 9.9Z" class="cls-7"/><path d="M101.8 133.8c-.3 1.5-.7 3-1 4.6m31.5-8.2c-1.9.7-4 1.3-6.1 1.9m-21-15.2" class="cls-8"/><path d="M113 98.5c-1.3 3.4-2.8 6.8-4.3 10.2-1.2 2.7-2.3 5.4-3.4 8.1-1.3 3.2-2.5 6.6-3.4 10.1-6.1.9-15.4-3.6-22.8-7.2.1-.7.3-1.3.4-1.9 1.2 1.2 2.6 1.9 4.3 1.8 2.8-.3 5.2-1.5 5.4-4.3s-.4-5.5-3.1-6.3l.3-.6c-.6-1.8-1-3.8-1.5-5.9h0c.9-2.3 2.8-8.3 4.2-12.4 7.4 4.1 15.5 7 23.8 8.6Z" class="cls-7"/><path d="M116.6 90.3c-.9 2.5-2 4.1-3.3 7.8 0 .2-.1.3-.2.5-8.3-1.6-16.4-4.5-23.8-8.6.5-1.3.9-2.4 1.2-3.2l-.2-.5c2.2-.8 4.7-1.8 7-2.6h0c6.2 2.9 12.7 5.1 19.2 6.6Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#8dcdd8"/><path d="M118.7 80.2c-.7 5.2-1.3 8-2.1 10.1M108.5 79c-.3.3-5.5 2.4-11.2 4.6" class="cls-8"/><path d="M91 215.3c-2.4 2.4-8.3 6.5-11 7.2-5.4 1.4-8.5 2.4-9.9 1.2-5-4.4-2.5-11.4-.8-13.4-.3.5 9.3 2.4 13.3 0 10.7-2.8 13.2.1 8.4 5.1Z" class="cls-2"/><path d="M135.1 41.9c-2.6-1.1-4.4-2.3-9.1-1.4-2 .4-4.5 6.4-6.5 12.2-.9.2-2.3-.3-2.5-1.2q-.3-1.35 0-2.7c-.4-.8-1.5-.9-2.4-.6-1.4.4-1.5 3.5-1.2 5.4h-.1c-3.7 0-5.3 7.4-7.2 3.7-4-4.8-5.1-15.7-1.5-20.7s10.1-6.2 16.2-5.2c3.1.5 7.5 1.7 9.9 3.8s4 4 4.4 6.9Z" class="cls-3"/><path d="M129 64.4s0 0 0 0" class="cls-8"/><path d="M89.2 115.3c-.2 2.8-2.6 4-5.4 4.3-1.7.2-3.1-.6-4.3-1.8s-2-2.6-1.5-4.1c2 .4 6.5-1.3 8.1-4.7 2.6.8 3.3 3.5 3.1 6.3" class="cls-4"/><path d="M145.6 165.7c-.7 5.3-4.1 6.6-8.6 9.9-3.1 2.3-6.1 4.8-8.8 6-3.8 1.7-7-8.1-5.8-9.2 7.3 0 12.7-5 12.7-5 .6-2.1 11.1-5.3 10.6-1.8Z" class="cls-2"/><path d="M113.4 53.4c.1.7.3 1.2.5 1.4.8.7 1.2.7 2.1 1.4m13.5 3.1c.7 0 1.4.2 2.1.4" class="cls-8"/><path d="M129.7 62.5c-.2.5-.4 1-.7 1.8h-.5c-2.2-.5-4.2-2.2-5-4.4.3.2.6.4 1 .5 1.7.5 3.6 1.3 5.3 2.1Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#fff"/><path d="M127.9 67.2c-.2.5-.4 1-.4 1.5-.1 1.3-2.5 2.9-4.1 1.8-.4-.3-.8-.6-1.4-.9.9-1.5 4.1-2.7 5.9-2.4" class="cls-3"/><path d="M118.1 66.8c-1.1-.8-2.3-1.8-3.6-2.8" class="cls-8"/><path d="M131.6 54c-.2 1.1-.7 1.9-1.2 1.8-.5 0-.8-1-.6-2.1s.8-1.9 1.3-1.8c.5 0 .8 1 .6 2.1Z" class="cls-11"/><path d="m114.7 115.6-.2-.2" class="cls-8"/><path d="M134.2 49.2c-.1.4-.2.8-.4 1.1h-1.9c-.8 0-1.8 0-2.1-.7-.2-.5.2-1 .7-1.2s1.2-.2 1.8 0 1.1.3 1.7.5h.2z" class="cls-3"/><path d="M134 48.9h-.3m.5.3c0 .4 0 .8-.3 1.1h0m1.3-8.4h-.1m-18.5 48.4s0 0 0 0m-3.4 8.3h-.2M89.2 90s0 0 0 0" class="cls-8"/></g></svg>')}`;
export default image;