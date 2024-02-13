/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-3{stroke-miterlimit:10}.cls-4{fill:#414a61}.cls-10,.cls-12,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px}.cls-10,.cls-12,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke:#000}.cls-5{fill:#181817}.cls-7{fill:#8d352e}.cls-8{fill:#9bc7dd}.cls-9{fill:#684c45}.cls-10{fill:#7da8c6}.cls-12,.cls-3{fill:none}.cls-14{stroke-width:0}</style></defs><g id="Grid"><path d="M29.3 29.3h241.5v241.5H29.3zm0 229.3h241.4m-241.4-12h241.4M29.3 234.5h241.4m-241.4-12h241.4M29.3 210.4h241.4M29.3 198.3h241.4M29.3 186.2h241.4m-241.4-12h241.4M29.3 162.1h241.4M29.3 150h241.4M29.3 137.9h241.4M29.3 125.8h241.4m-241.4-12h241.4M29.3 101.7h241.4M29.3 89.6h241.4M29.3 77.5h241.4m-241.4-12h241.4M29.3 53.4h241.4m-241.4-12h241.4m-12.1-12.1v241.4m-12-241.4v241.4M234.5 29.3v241.4m-12-241.4v241.4M210.4 29.3v241.4M198.3 29.3v241.4M186.2 29.3v241.4m-12-241.4v241.4M162.1 29.3v241.4M150 29.3v241.4M137.9 29.3v241.4M125.8 29.3v241.4m-12-241.4v241.4M101.7 29.3v241.4M89.6 29.3v241.4M77.5 29.3v241.4m-12-241.4v241.4M53.4 29.3v241.4m-12-241.4v241.4" style="stroke:#58595b;stroke-width:.2px;fill:#fff;stroke-miterlimit:10"/><path d="M23.9 150h252.2" class="cls-3"/><path d="m24.7 152.5-4.3-2.5 4.3-2.5zm250.6 0 4.3-2.5-4.3-2.5z" class="cls-14"/><path d="M150 23.9v252.2" class="cls-3"/><path d="m147.5 24.7 2.5-4.3 2.5 4.3zm0 250.6 2.5 4.3 2.5-4.3z" class="cls-14"/></g><path id="Lines" d="m192.2 25.7 5.5 2.2-2.1-17-13.3 10.7 5.4 2.3L86.1 274.3l-5.4-2.2 2 17L96 278.4l-5.4-2.3z" style="stroke-width:0;fill:#27b04b"/><g id="Africa_Modest"><path d="M140.5 151.1c-.4 1.9-.8 3.8-2.1 5.3-1 1.2-2.6 1.1-4.2.8-.5-.1-.9-.2-1.3-.4-2.1-.7-6.8-6-6.8-6h0c.7-3.1.5-4.1 4-5.8 2 .2 2.9-.6 5-.7 2.1 0 3.1-.6 4.4.8 1.5 1.5 1.3 3.9.9 5.9Zm34.4-84.6c-.2 2-5.5 2.5-7.7 3.3-.2-1.4-1-2.2-2.6-3.2 1.7-2.2.3-3.6 2.4-5.5 1.2-1.1 5.6-1.1 6.9.5.8 1 1 3.7.8 4.9Z" class="cls-9"/><path d="m164.7 66.5-.1.1" class="cls-12"/><path d="M128.7 102.7v1.1c-.2 5.7-1.2 11.4-2.6 17.2-1.2 4.9-2.7 9.8-4.4 14.7h0c1.1 1.4 2.2 2.9 3.4 4.3-4.7 1.9-4.7 3.5-5.1 7.3-.8-.7-1.5-1.4-2.3-2.1q0 0 0 0c-1.8-1.8-3.4-3.5-4.3-4.9-.7-.7-1.3-1.4-1.9-2h0c-2.6-2.7-4.8-4.8-6.4-6.8h0c-2.2-2.5-3.7-4.8-4.6-7.7h0c-.1-.5-.2-.9-.4-1.4-.2-.9.2-4.3.9-8.6h-.1c1.3-9.2 1.9-12.9 3.7-17.5.6-1.5 1.3-3 2.2-4.9 1.7-3.1 4.4-4.9 10.7-4 3.2.5 8.1 8.9 11.2 15.4Z" class="cls-10"/><path d="M106.1 96c-2.2 5.1-4 12.2-5.1 17.8" class="cls-10"/><path d="M120 133.5c-4.6-6.1-6.9-9.5-7.4-12-.3-1.4 4.9-14.3 6.1-23" class="cls-12"/><path d="M128.7 99.5s0 0 0 0c-3.1-7-4-8.2-7.6-12.6 1 .7 5.5 1.2 5.7-1.4v.5h0c.8 3.2 1.4 6.4 1.6 9.6.1 1.3.2 2.6.2 3.9Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#f29a0f"/><path d="M105 131.5c-1.9-.9-3.6-1.4-5.5-2.2h0c0-.3.9-5.2.9-5.5h0s0 0 0 0c.9 2.9 2.4 5.2 4.6 7.7" class="cls-10"/><path d="M111.5 138.3c-4.9-1.5-8.7-2.7-13.6-4.2h-.1c.4-1.7.9-3.3 1.8-4.8h0c1.9.9 3.6 1.4 5.5 2.2h0c1.7 2 3.8 4.1 6.4 6.8" class="cls-8"/><path d="M124.8 172.8c0 .4-.2.8-.3 1.2-3.6 13.6-7.2 20.5-13 32.7h-.8c-4.1-.4-8.1-2.1-11.3-4.5-.3-.2-.7-.5-1-.8 2.6-12.2 9.3-18.3 11.2-30.5-1.7-7.5-5.7-12.7-9-19.6-2.6-5.4-4.1-11.5-2.8-17.1h.1c4.9 1.6 8.7 2.7 13.6 4.3h0c.6.6 1.2 1.3 1.9 2 1 1.4 2.5 3.1 4.3 4.9q0 0 0 0c1.5 4.8 3.2 10.8 4.6 16.5 1 4.1 1.8 8 2.4 11.1Z" class="cls-4"/><path d="M100.4 123.7s0 0 0 0m17.3 21.5v-.2" class="cls-12"/><path d="M110.6 206.8c-1 1.6-.2 9.2-.2 11s-1.3 2.1-3.1 2.8c-1.4.5-3 0-4.4-.5-1.2-.5-5.2-4.6-5.3-6.3-.5-4.8.5-7 1.7-11.6h0c3.2 2.5 7.2 4.1 11.3 4.5h0Z" class="cls-7"/><path d="M146.6 124.4c-1.2 5.4-5.8 15.3-7 20.7-1.4-1.5-2.3-.9-4.4-.8-2.1 0-3 .8-5 .7-1.4-1.1-2.8-2.4-4.1-3.8-.4-.4-.7-.8-1-1.2-1.2-1.4-2.3-2.8-3.4-4.2h0c1.7-4.9 3.2-9.8 4.4-14.7h0c1.9-2.9 12.6-10.9 16.1-10.7 1.8 0 4.4 3 5.4 4.4.8 1 0 6.7-1 9.7Z" class="cls-4"/><path d="M163.7 74c-7.2 5.7-16.3 11.8-19.2 13.7-2.3 1.5-9.8 3.2-15.9 7.9h0c-.3-3.2-.8-6.4-1.6-9.6h0v-.5h0c-.4-2-.4-1.8-.6-3 6.2-2.4 12.8-3.6 14.6-4.7 4.5-2.5 12.2-5.7 19.3-9.5 3.4.8 3.7 5.6 3.6 5.7Z" class="cls-10"/><path d="M163.7 74c.1-.1-.2-4.9-3.6-5.7 1.3-.7 2.7-1.4 4-2.2.2.1.4.3.6.4 1.6 1.1 2.3 1.9 2.6 3.2V71q-1.65 1.5-3.6 3" class="cls-8"/><path d="M120.3 49.4c-.9-1.4-3.4-2.1-7.7.8-3.8 2.6-4.9 4-5.9 6.7-.4 1.3.5 3 .9 4.3.5 1.3 1.5 3.7 1.6 4.3s-.1 1.6-.5 2.1-1.1.7-1.7.4-1.5-.1-2 .3-.7 1.1-.6 1.8c0 .6.3 1.3.7 1.8.6 1 2.7 2.5 3.8 2.7h1.2c.6 1.6 1.1 2.2.7 3.9h-.3q0 0 0 0c-4.3-.2-8.4-2.7-11.1-6.7h0c-3.3-4.5-3.9-5-5.3-7.5-1.1-2-1.6-5.6 0-7.4 4.3-5 8-9.2 15.6-13 1.3-.6 5.2-1.6 6.2-.6 2.1 2.1 3.2 4 4.6 6.2Z" class="cls-5"/><path d="m99.4 72.1-.2-.2" class="cls-12"/><path d="M130.2 145c-3.5 1.7-3.3 2.7-4 5.8 0 .4-.2.8-.3 1.3-1.6-1-3.8-2.8-5.9-4.7.4-3.8.4-5.4 5.1-7.3.3.4.7.8 1 1.2 1.3 1.4 2.6 2.7 4.1 3.8Z" class="cls-8"/><path d="M121.6 135.7c-.6-.7-1.1-1.5-1.6-2.2m-9-49.1c-.6.2-1.2.4-1.8.7" class="cls-12"/><path d="M129 62.5c-1-1.6-3.1-3-3.9-5.4-.1-.4-.2-.6-.3-.9-.3.3-.9.8-1.1.9-.6.3-2.1.7-2.3-.2 0-.6 1.8-2.1 2.4-2.2-.2-.3-.5-.6-.8-1-1.1-1.5-2-2.9-2.7-4.1q0 0 0 0c-.9-1.4-3.4-2.1-7.7.8-3.8 2.6-4.9 4-5.9 6.7-.4 1.3.5 3 .9 4.3.5 1.3 1.5 3.7 1.6 4.3s-.1 1.6-.5 2.1-1.1.7-1.7.4-1.5-.1-2 .3-.7 1.1-.6 1.8c0 .6.3 1.3.7 1.8.6 1 2.7 2.5 3.8 2.7h1.2c.6 1.6 1.1 2.2.7 3.9h-.3c.4.9.7 1.4.8 2 .2 1.1-.2 2-.3 3.9h0c3.6-1.1 7.3-.8 10.1 2.5 1 .7 5.5 1.2 5.7-1.4h0c-.4-2-.4-1.8-.6-3-.1-.7-.3-1.8-.6-4 2-.4 4.2-.7 5.3-3.9 1-3-.2-9.4-1.8-12.1Zm-14.9-.5c-.2-.3-.2-.8.1-1l2.5-1.8c.8-.7 2.1-.6 1.5.5-.5.9-3.6 2.7-3.8 2.7-.1 0-.3-.2-.4-.4Zm4.6 2.8c-.3.2-1-.2-1.4-1s-.6-1.5-.2-1.7c.3-.2 1 .2 1.4 1s.5 1.5.2 1.7m5.2-6.8c.3-.2.9.3 1.3 1 .4.8.6 1.5.3 1.7s-.9-.3-1.4-1.1c-.4-.8-.6-1.5-.3-1.7Zm3.5 14.4c-1.8 1.2-4.8-.7-4.9-1.1 1.7-.4 5.5-2.6 6.6-3.5.6.9.6 3.2-1.7 4.6" class="cls-9"/><path d="M116.4 78.4c1.7.4 7.5.4 9.2 0" class="cls-12"/><path d="M134.3 157.1c-.5 2.1-3.1 8.2-3.6 8.6-.7.6-1.8.4-2.7.2-2.6-.7-3.7-2.1-5.6-4.2-1.4-5.7-3.1-11.7-4.6-16.5.7.7 1.5 1.4 2.3 2.1 2.1 1.9 4.3 3.7 5.9 4.7.1-.5.2-.9.3-1.3h0s4.7 5.2 6.8 6c.4.1.9.3 1.3.4Z" class="cls-4"/><path d="M128.5 171.5c-.7 2.2-1.8 1.7-4.1 2.5h0l.3-1.2c-.6-3.1-1.4-7-2.4-11.1 1.9 2.1 3 3.5 5.6 4.2 1.4 1.8 1.3 3.4.6 5.6" class="cls-7"/><path d="M136.3 122.9c-3.4 7.2-5.7 10.8-10.2 18.4m.9-55.2V86m-21.9 45.5s0 0 0 0m20 8.5s0 0 0 0" class="cls-12"/><path d="M128.7 102.7c-3.1-6.5-8-14.9-11.2-15.4-6.3-.9-9 .9-10.7 4-.9 1.9-1.6 3.5-2.2 4.9h0c-.4.7-1.7.7-2.2 0-.6-.7-.6-1.8-.5-2.7.3-2.9 1-5.9 2.7-8.3s3.9-4.7 6.8-4.7c.2 1.1-.2 2-.3 3.9h0c3.6-1.1 7.3-.8 10.1 2.5 3.6 4.4 4.5 5.6 7.6 12.6h0v3.2Z" class="cls-8"/><path d="M128.8 102.7s0 0 0 0m-4.4-40c.9.6 2.1.7 2.8 2.2s-2.1 3.2-2.7 3.1" class="cls-12"/><path d="M118.7 64.8c-.3.2-1-.2-1.4-1s-.6-1.5-.2-1.7c.3-.2 1 .2 1.4 1s.5 1.5.2 1.7m6.8-4c-.3.2-.9-.3-1.4-1.1-.4-.8-.6-1.5-.3-1.7s.9.3 1.3 1c.4.8.6 1.5.3 1.7Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M127.4 72.4c-1.8 1.2-4.8-.7-4.9-1.1 1.7-.4 5.5-2.6 6.6-3.5.6.9.6 3.2-1.7 4.6" style="fill:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M118.3 59.7c-.5.9-3.6 2.7-3.8 2.7-.1 0-.3-.2-.4-.4-.2-.3-.2-.8.1-1l2.5-1.8c.8-.7 2.1-.6 1.5.5Z" class="cls-5"/><path d="M111.6 73.6c-.3.6-.8 1-1.5 1.1" class="cls-12"/><path d="M125 55.8s0 .2-.1.4c-.3.3-.9.8-1.1.9-.6.3-2.1.7-2.3-.2 0-.6 1.8-2.1 2.4-2.2h.1c.3 0 .9.9 1 1.2Z" class="cls-5"/><path d="M104.6 96.1v.2m6.8-15.7" class="cls-12"/><path d="M131.6 102.7c-.9.5-1.8.9-2.8 1.1h-.1v-4.3h0s0 0 0 0h0c.8 1.2 1.8 2.3 2.9 3.2" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#b1b1b1"/><path d="M128.9 103.6v.2" class="cls-12"/></g></svg>')}`;
export default image;