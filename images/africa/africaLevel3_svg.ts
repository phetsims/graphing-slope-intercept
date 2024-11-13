/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-2,.cls-3,.cls-6,.cls-7,.cls-8{stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px}.cls-10,.cls-2,.cls-3,.cls-6,.cls-7,.cls-8{stroke:#000}.cls-7{fill:#fff}.cls-10{stroke-miterlimit:10}.cls-2{fill:#c99070}.cls-3{fill:#064059}.cls-6{fill:#e6e6e6}.cls-10,.cls-8{fill:none}.cls-12{stroke-width:0}</style></defs><g id="Grid"><path d="M29.3 29.3h241.5v241.5H29.3zm0 229.3h241.4m-241.4-12h241.4M29.3 234.5h241.4m-241.4-12h241.4M29.3 210.4h241.4M29.3 198.3h241.4M29.3 186.2h241.4m-241.4-12h241.4M29.3 162.1h241.4M29.3 150h241.4M29.3 137.9h241.4M29.3 125.8h241.4m-241.4-12h241.4M29.3 101.7h241.4M29.3 89.6h241.4M29.3 77.5h241.4m-241.4-12h241.4M29.3 53.4h241.4m-241.4-12h241.4m-12.1-12.1v241.4m-12-241.4v241.4M234.5 29.3v241.4m-12-241.4v241.4M210.4 29.3v241.4M198.3 29.3v241.4M186.2 29.3v241.4m-12-241.4v241.4M162.1 29.3v241.4M150 29.3v241.4M137.9 29.3v241.4M125.8 29.3v241.4m-12-241.4v241.4M101.7 29.3v241.4M89.6 29.3v241.4M77.5 29.3v241.4m-12-241.4v241.4M53.4 29.3v241.4m-12-241.4v241.4" style="stroke:#58595b;stroke-width:.2px;fill:#fff;stroke-miterlimit:10"/><path d="M23.9 150h252.2" class="cls-10"/><path d="m24.7 152.5-4.3-2.5 4.3-2.5zm250.6 0 4.3-2.5-4.3-2.5z" class="cls-12"/><path d="M150 23.9v252.2" class="cls-10"/><path d="m147.5 24.7 2.5-4.3 2.5 4.3zm0 250.6 2.5 4.3 2.5-4.3z" class="cls-12"/></g><path id="Lines" d="m192.2 25.7 5.5 2.2-2.1-17-13.3 10.7 5.4 2.3L86.1 274.3l-5.4-2.2 2 17L96 278.4l-5.4-2.3z" style="stroke-width:0;fill:#27b04b"/><g id="Africa"><path d="M135.6 155.6c-.5 2.1-3 8.1-3.6 8.5-.7.5-.7-.7-2.6.2-2.1.9-2.6 1.6-3.8 4.2 0 1.3-.1 2.6-.2 3.8-1.2 15-5.3 23.8-10.8 35.2-1.1 0-2.4-.3-3.7-.6-3.8-1-8.1-3.1-10.9-5.2-.3-.2-.7-.5-.9-.8 3.7-19.6 5-37.2 1.7-49-1.9-6.7-1.2-19.4 1.4-30.4 1.4 6.5 15.6 21.8 24.5 30.5.2-1 .4-1.8.7-2.6h.4c0 .1 4.6 5.2 6.6 6 .4.1.9.3 1.3.4Zm12.1-32.1c-1.2 5.3-5.7 15-6.9 20.3-1.4-1.4-2.3-.9-4.4-.8-2 0-2.9.8-4.9.7-3.9-3.1-7.2-7.4-10-11.2-3.2-4.3-6.2-7.9-7.8-10.5 2.1.5 8.3 1.7 12.5.7.3-1.6.6-3.2.8-4.7h.2c1.8-2.8 12.6-8.4 16.1-8.2 1.7 0 4.3 3 5.3 4.3.8 1 0 6.6-1 9.5Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#064c72"/><path d="M141.7 149.6c-.3 1.8-.8 3.7-2 5.2-.9 1.2-2.5 1.1-4.1.7-.5-.1-.9-.2-1.3-.4-2.1-.7-6.6-5.9-6.6-5.9h-.4c.7-2.6 1.4-4.3 4.3-5.7 2 .1 2.8-.6 4.9-.7 2.1 0 3-.6 4.4.8 1.4 1.5 1.3 3.8.9 5.8Zm33.7-83c-.2 2-6 3.5-8.1 4.3h0c-.1-1.6-.5-3.1-1.9-4.2 1.7-2.2.3-3.6 2.4-5.4 1.2-1 5.5-1.1 6.8.5.8 1 1 3.6.8 4.9Z" class="cls-2"/><path d="M165.4 66.7v.1" class="cls-8"/><path d="M131.5 143.6c-2.9 1.4-3.7 3.1-4.3 5.6-.2.8-.4 1.7-.7 2.6-8.9-8.7-23.1-23.9-24.5-30.5-.4-1.9.4-6.8 2.5-15.3.3-1 .6-2.1.8-3.3q0 0 0 0c1.1-5.4 1.5-11.7 6.8-11.7s2.9.4 3.9 1c0 0 .2.1.3.2 0 0 .2.1.2.2 3.3 2.9.6 9.6.4 10.2-3.7 10.8-4.8 15.3-4.5 16.6.1.7.6 1.5 1.2 2.6 1.6 2.6 4.6 6.2 7.8 10.5 2.8 3.8 6 8.2 10 11.2Z" class="cls-6"/><path d="M105.5 102.4v.2" class="cls-8"/><path d="M129.1 106.2c-.6 3.3-1.3 7.3-2 11.7-.3 1.5-.5 3.1-.8 4.7-4.2 1-10.4-.3-12.5-.7-.6-1-1.1-1.9-1.2-2.6-.3-1.3.8-5.8 4.5-16.6.2-.7 2.9-7.3-.4-10.2 4.9 4.1 2.5 15.3 12.4 13.7" style="fill:#5095b1;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M110.9 217c0 1.8-1.2 2.1-3 2.8-1.4.5-3 0-4.3-.5-1.2-.5-5.1-4.5-5.2-6.2-.5-4.7.5-6.8 1.6-11.4h0c2.8 2 7.1 4.1 10.9 5.2-.6 2.3 0 8.6 0 10.2Z" class="cls-3"/><path d="M111 206.2c0 .1-.2.4-.2.6" class="cls-8"/><path d="M167.3 72.8c-7.3 6.3-18.3 12.5-21.8 14.7-2.3 1.5-8.4 2.4-14.9 5.8h0c-.6-2.8-1.2-5.9-1-10.8 5.9-1.7 12.8-3.5 14.6-4.5 5.3-3 12.7-7 20.6-11.7.2.1.4.3.5.4 1.4 1.1 1.8 2.7 1.9 4.2v1.9Z" class="cls-6"/><path d="M131.2 64.6c-1-1.5-3-2.9-3.8-5.3-.2-.7-.6-1.4-1-2q0 0 0 0c-.3-.4-.6-.8-1.1-1.4 0-.1-.2-.2-.2-.3q0 0 0 0l-.5-.5q0 0 0 0c-1.4-1.1-4.1-1.8-7.8-.3-4.3 1.8-4.4 9.2-2.2 14.1 3.4 7.7 5.9 11.9 9.3 11.8 1 .2 2.4 0 4.1-.3.6-.1 1.3-.3 2-.5 1.3-.4 2.5-1.3 3.2-3.3 1-3-.2-9.3-1.8-11.9Zm-3.7-3.3c.4.8.6 1.5.3 1.7s-.9-.3-1.3-1-.6-1.5-.3-1.6c.3-.2.9.3 1.3 1Zm-9.9 1.5c0 .2 0 .4-.2.6 0 .2-.2.4-.5.4-.2 0-.4 0-.6-.3-.1-.2-.2-.4-.2-.6 0-1.4 1.4-2.9 2.8-2.1s-1.1.9-1.5 1.9Zm3.5 4.2c-.3.2-1-.2-1.4-1-.4-.7-.5-1.5-.2-1.7s1 .2 1.4 1 .5 1.5.2 1.7m2.9-7.9c-.3 0-.5-.3-.6-.5-.2-1 1.8-2.4 2.5-1.4.3.5-.2.4-.6.7s-.7 1.2-1.3 1.2m5.6 15.3c-1.8 1.2-4.7-.7-4.8-1.1 1.6-.4 5.4-2.5 6.4-3.5.6.9.6 3.1-1.6 4.5Z" class="cls-2"/><path d="M127.4 59.4c-.3-.9-.5-1.4-1-2" class="cls-8"/><path d="M129.9 169.7c-.6 1.8-2.6 2.1-4.6 2.6 0-1.2.2-2.5.2-3.8 1.2-2.7 1.7-3.3 3.8-4.2 1.4 1.8 1.2 3.3.6 5.5Z" class="cls-3"/><path d="M126.6 64.9c.9.6 2.1.7 2.7 2.2s-2.1 3.1-2.7 3.1" class="cls-8"/><path d="M121.1 67c-.3.2-1-.2-1.4-1-.4-.7-.5-1.5-.2-1.7s1 .2 1.4 1 .5 1.5.2 1.7m6.7-4c-.3.2-.9-.3-1.3-1s-.6-1.5-.3-1.6c.3-.2.9.3 1.3 1 .4.8.6 1.5.3 1.7Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M129.6 74.4c-1.8 1.2-4.7-.7-4.8-1.1 1.6-.4 5.4-2.5 6.4-3.5.6.9.6 3.1-1.6 4.5Z" class="cls-7"/><path d="M125 55.6c-.1-.2-.3-.3-.5-.5m.3 99.7c1 2.9 1.9 8.5.8 13.7" class="cls-8"/><path d="M117.6 62.8c0 .2 0 .4-.2.6 0 .2-.2.4-.5.4-.2 0-.4 0-.6-.3-.1-.2-.2-.4-.2-.6 0-1.4 1.4-2.9 2.8-2.1s-1.1.9-1.5 1.9Zm7.7-4.9c-.4.3-.7 1.2-1.3 1.2-.3 0-.5-.3-.6-.5-.2-1 1.8-2.4 2.5-1.4.3.5-.2.4-.6.7" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#211f1e"/><path d="M129.1 106.2c-9.9 1.5-7.5-9.7-12.4-13.7 0 0-.2-.1-.2-.2 0 0-.2-.2-.3-.2-1-.7-2.2-1-3.9-1-5.3 0-5.8 6.3-6.8 11.7q0 0 0 0c-.3 1.2-.6 2.2-.8 3.3v.1c-3.7-1.4-4.8-13.2-4.8-21.8s-3.2-5.3-3-14.5c.2-7.9 8-16.6 15.7-17.7 5.2-.8 9.3.5 12.1 2.9-1.4-1.1-4.1-1.8-7.8-.3-4.3 1.8-4.4 9.2-2.2 14.1 3.4 7.7 5.9 11.9 9.3 11.8 1 .2 2.4 0 4.1-.3.6-.1 1.3-.3 2-.5 0 .9-.1 1.7-.2 2.5-.2 4.9.4 8 1 10.8.3 1.6.7 3 .9 4.7.7 5.8 0 8.3-2.5 8.3Z" class="cls-7"/><path d="M126.4 57.3c-.4-.6-.8-1.2-1.3-1.7m9.4 69.1c-3.1-.3-5.4-.8-8.2-2.1" class="cls-8"/></g></svg>')}`;
export default image;