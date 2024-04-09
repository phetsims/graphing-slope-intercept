/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-2{fill:#fff}.cls-3{stroke-miterlimit:10}.cls-2,.cls-5,.cls-7,.cls-8,.cls-9{stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px}.cls-2,.cls-3,.cls-5,.cls-7,.cls-8,.cls-9{stroke:#000}.cls-5{fill:#deb796}.cls-7{fill:#65483a}.cls-3,.cls-8{fill:none}.cls-10{stroke-width:0}</style></defs><g id="Grid"><path d="M29.3 29.3h241.5v241.5H29.3zm0 229.3h241.4m-241.4-12h241.4M29.3 234.5h241.4m-241.4-12h241.4M29.3 210.4h241.4M29.3 198.3h241.4M29.3 186.2h241.4m-241.4-12h241.4M29.3 162.1h241.4M29.3 150h241.4M29.3 137.9h241.4M29.3 125.8h241.4m-241.4-12h241.4M29.3 101.7h241.4M29.3 89.6h241.4M29.3 77.5h241.4m-241.4-12h241.4M29.3 53.4h241.4m-241.4-12h241.4m-12.1-12.1v241.4m-12-241.4v241.4M234.5 29.3v241.4m-12-241.4v241.4M210.4 29.3v241.4M198.3 29.3v241.4M186.2 29.3v241.4m-12-241.4v241.4M162.1 29.3v241.4M150 29.3v241.4M137.9 29.3v241.4M125.8 29.3v241.4m-12-241.4v241.4M101.7 29.3v241.4M89.6 29.3v241.4M77.5 29.3v241.4m-12-241.4v241.4M53.4 29.3v241.4m-12-241.4v241.4" style="stroke:#58595b;stroke-width:.2px;fill:#fff;stroke-miterlimit:10"/><path d="M23.9 150h252.2" class="cls-3"/><path d="m24.7 152.5-4.3-2.5 4.3-2.5zm250.6 0 4.3-2.5-4.3-2.5z" class="cls-10"/><path d="M150 23.9v252.2" class="cls-3"/><path d="m147.5 24.7 2.5-4.3 2.5 4.3zm0 250.6 2.5 4.3 2.5-4.3z" class="cls-10"/></g><path id="Lines" d="m300.1 54.9-15-8.3v5.9H14.9v-5.9L0 54.9l14.9 8.3v-5.8h270.2v5.8z" style="stroke-width:0;fill:#27b04b"/><g id="Asia"><path d="M152.4 238.5c-.2 0-.5 0-.9.1-2.2.3-6.8.7-9.6.6-.9 0-1.7 0-2.1-.3-1.9-14.2-1.5-30.5-2-39.1-.7-11.5 0-16.9-2.6-27.8-1.4 9.6-1.9 20-2.6 28.3-.8 10.2.2 24.2-2.4 38.1H128c-2.5 0-6.4-.3-8.8-.4h-2c.5-9.4-4.3-29.3-.8-37.8 2.4-5.9-1.6-18.1-.4-24.9h0c3.1.2 6.1.5 9.2.7 3.1-15.1 4.5-18.2 5.1-27.2 3.8 1.2 6.9 1.5 9.4 1.5h1.7c3.4-.2 5.4-1.2 6.6-1.4 0 9.2.7 14.1 2 26 1.7.1 3.4-.1 4.9-.8 1 6.6-2 19.3-.2 25.8 2.2 8.4-2.5 28.5-2.1 38.5Z" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000;fill:#b3cfd2"/><path d="M150.8 89c-1.8 0-3.2 0-4.8-.1-1.1 0-2.4-1-2.5-2.1 0-.8-.2-1.5-.2-2.2h0c-1.1 0-1.4 0-3.7-.1h0c0 .8-.2 1.5-.2 2.3-.1 1.1-1.4 2-2.5 2.1-1.6 0-3 .1-4.8.1s-3.3-1.3-3.4-3c0-.6 0-1.3-.1-1.8v1.2c.4 4.4.9 11.7 4.1 14.5 9.6 7.5 12.5 2.6 15.8-1.6 2.3-2.9 3.1-6.4 3.2-9.2h-.6Zm-9.3 8.4c-1.2.2-2.7 0-4.1-.5-1-.3-1.6-1-2.4-2.3-.2-.2 0-.5.3-.4 2.1.8 7.1 1.6 9.9.4-.9 1.6-1.8 2.5-3.8 2.8Z" class="cls-5"/><path d="M147.9 148.9h.3m-8.8 16c-1.3 1.2-3.1 3.4-3.8 4.1m14.9-89.9c0-.2-.2-.3-.4-.4m-18.1-.1c-1 .2-1.8.6-1.9.9m1.9-.9c2-.5 4.9-.7 5.7 0m7.1 11.5c-1 1.9-2.3 1.9-5.6 1.4m-3.6 77.6c-.2 1-.3 2-.4 3m0-.1v-.2" class="cls-8"/><path d="M156.8 173c-.6.5-1.4.8-2.1 1.1-1.5.6-3.2.9-4.9.8-1.2-12-1.9-16.8-2-26v-7.8h-.1c1.3-3.7 2.3-8.1 3-12.2l.7.2c-.4 2.3-.6 4-.7 4.7 0 6.7.1 6.9.2 13.2 1.9 11.4 1.7 8.8 5.8 26.1Z" class="cls-7"/><path d="M153.1 94.6c-3.3 13.8-.2 12.7-.6 20 0 1.4-.5 7.5-1.6 14.2-.7 4.1-1.7 8.4-3 12.1-1.6 4.4-3.8 7.9-6.7 8.8-.5.2-1 .2-1.5.2h-.5c-2.6-.2-5.7-6.4-8.5-13.6-3.2-8.3-6.1-17.9-7.3-21.2-1.8-4.9-2-4.1-2.3-5.6-1.2-5.1-3.8-18.6.7-33.4.7-2.5 1.7-4.9 2.9-7.4 2.7-5.8 14.5-7.9 20.2-4.8 4.6 2.5 6.8 6.4 8.3 11.3.3 1.2.6 2.6.8 4.2l-1.4-.4c-.8-.2-1.6-.4-2.4-.5h0c-.1 0-.3-.2-.5-.2-2.1-5.3-7.3-9.7-10.4-7.6-2.7 1.8-6.6 4.4-8.9 8-.6.1-1.2.3-1.9.4h-.5v.4c0 .6.3 2.2.4 4.4v1.2c.4 4.4.9 11.7 4.1 14.5 9.6 7.5 12.5 2.6 15.8-1.6 2.3-2.9 3.1-6.4 3.2-9.2 1.2-.2 2.2-1 2.6-2.1-.1 2.9-.4 5.8-.9 7.8Z" style="fill:#c5a479;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;stroke:#000"/><path d="M139 79c-2.3-.5-4.7-.7-7-.4h0c-.6 0-1.1.2-1.7.3s-1.2.3-1.9.4h-.5v.4c0 .6.3 2.2.4 4.4 0 .6 0 1.2.1 1.8.1 1.7 1.6 3 3.4 3s3.2 0 4.8-.1c1.1 0 2.4-1 2.5-2.1 0-.8.2-1.6.2-2.3 0-.8.2-1.7.2-2.6 0-.8.1-1.7.2-2.7l-.8-.2Zm-1.1 7.2c0 .8-.8 1.4-1.6 1.4-1.6 0-3 .1-4.8 0-1.1 0-2-.8-2.1-1.8-.1-1.9-.2-4.5-.3-5 3.8-1.1 7.5-.9 9.3-.4-.2 2.4-.4 3.9-.6 5.7Z" class="cls-9"/><path d="M149.6 78.5c-1.7-.6-5.2-.2-5.7.4 2-.4 4.1-.5 6.2-.2-.1 0-.3-.2-.5-.2" class="cls-8"/><path d="M149.6 78.5c-1.7-.6-5.2-.2-5.7.4l-1.1.3c0 1 .1 1.9.2 2.7h-3.2 0c0-.8.1-1.7.2-2.7l-.8-.2c-2.3-.5-4.7-.7-7-.4h0c-.6 0-1.1.2-1.7.3 2.3-3.6 6.2-6.3 8.9-8 3.1-2 8.3 2.4 10.4 7.6Z" class="cls-5"/><path d="M129.2 80.9c0 .5.1 3.1.3 5 0 1 1 1.8 2.1 1.8h4.8c.8 0 1.5-.6 1.6-1.4.2-1.9.4-3.4.6-5.7-1.8-.4-5.5-.7-9.3.4Zm5.6 4.3c-.4 0-.8-.6-.8-1.5s.4-1.5.8-1.5.8.7.8 1.5-.4 1.5-.8 1.5" class="cls-2"/><path d="M153.4 80.9q0-.1 0 0" class="cls-8"/><path d="M145.3 94.6c-.9 1.6-1.8 2.5-3.8 2.8-1.2.2-2.7 0-4.1-.5-1-.3-1.6-1-2.4-2.3-.2-.2 0-.5.3-.4 2.1.8 7.1 1.6 9.9.4Z" class="cls-2"/><path d="M141.3 150c.7 3.7.6 7.6-.3 11.3m-2.7-9.1c.6 1.7.7 3.6.2 5.3M125.6 107c3 .8 5.3 3.3 7.3 5.6 2.1 2.3 4.4 4.7 7.5 5.3s6.8-1.8 6.3-4.9m-11.5 14.9c.3 3.5 4.9 5.9 7.9 4.2" class="cls-8"/><path d="M143.2 84.6c-1.1 0-1.4 0-3.7-.1h0c0-.8.2-1.7.2-2.6h3.2c0 .9.2 1.8.2 2.7Zm-7.6-.9c0 .8-.4 1.5-.8 1.5s-.8-.6-.8-1.5.4-1.5.8-1.5.8.7.8 1.5" class="cls-9"/><path d="M129.2 80.9s0 0 0 0" class="cls-8"/><path d="M160.4 69.8c-2.5.2-5.1.2-7.6 0-.3-3.7-.7-7.9-.7-10.5h.5c2.1.1 4.1 0 6.1-.4h.4c.5 3.7 1 7.3 1.2 10.9Z" class="cls-7"/><path d="m153.8 79.5-1.4-.4c-.8-.2-1.6-.4-2.4-.5h0c-2.1-.3-4.1-.2-6.2.2l-1.1.3c0 1 .1 1.9.2 2.7 0 1 .2 1.8.2 2.7 0 .7.2 1.4.2 2.2.1 1.1 1.4 2 2.5 2.1 1.6 0 3 .1 4.8.1h.6c1.2-.2 2.2-1 2.6-2.1 0-.3.2-.6.2-.9.2-3 .4-5.3.5-6.2l-.9-.2Zm-.4 1.4c0 .4-.1 3.1-.2 5 0 1-1 1.8-2.1 1.8h-4.8c-.8 0-1.5-.6-1.6-1.4-.2-1.9-.4-3.4-.6-5.7 1.6-.4 6.1-.4 9.3.4q0 0 0 0h0Z" class="cls-9"/><path d="M144.1 80.5c.2 2.4.4 3.9.6 5.7 0 .8.8 1.4 1.6 1.4 1.6 0 3 .1 4.8 0 1.1 0 2-.8 2.1-1.8.1-1.9.2-4.6.2-5-3.2-.9-7.7-.8-9.3-.4Zm4.3 5c-.4 0-.7-.7-.7-1.5s.3-1.5.7-1.5.7.7.7 1.5-.3 1.5-.7 1.5" class="cls-2"/><path d="M149.2 84c0 .8-.3 1.5-.7 1.5s-.7-.7-.7-1.5.3-1.5.7-1.5.7.7.7 1.5" class="cls-9"/><path d="M159.4 99c-.6 4.7-4.2 10.1-5 15.2-1.2 5.6-2.2 11.1-2.9 14.9l-.7-.2c1.1-6.8 1.5-12.9 1.6-14.2.4-7.3-2.6-6.2.6-20 .5-2 .8-4.8.9-7.8 0-.3.2-.6.2-.9.2-3 .4-5.3.5-6.2l-.9-.2c-.2-1.6-.4-3.1-.8-4.2 0-1.4 0-3.3-.2-5.5 2.5.2 5.1.2 7.6 0 .7 8.7.5 17.5-1 29.1Z" class="cls-7"/><path d="M159.2 59v-.2" class="cls-8"/><path d="M148 141.1c0 3-.1 5.6 0 7.8-1.2.2-3.2 1.1-6.6 1.4h-1.7v-.3c.5 0 1.1 0 1.6-.2 2.9-.9 5-4.4 6.7-8.8h.1Zm-8.4 8.9v.3c-2.5 0-5.6-.4-9.4-1.5.2-3.1.3-7 .4-12.4h0c2.8 7.2 5.9 13.4 8.5 13.6z" class="cls-9"/><path d="M130.6 136.4c0 5.4-.2 9.2-.4 12.4-.6 9-2 12.2-5.1 27.2-3.1-.2-6.1-.5-9.2-.7-.7 0-1.4 0-2.1-.1.5-6.1 4.4-23 4.9-29 1.8-7.4 2.3-16.2.3-24.9-1.1-5.4-2.2-12-3.7-17-1.1-3.6-2.5-14.1-2.4-17.5.2-5.6.4-11.1 1-17.4 2.4.6 5 .6 7.4 0h.2v6.8h0c-4.5 14.8-1.9 28.3-.7 33.4.4 1.5.5.7 2.3 5.6 1.2 3.3 4.1 12.9 7.3 21.2Z" class="cls-7"/><path d="M121.9 60.1c0 2-.2 5.6-.3 9.2h-.2c-2.4.5-5 .5-7.4 0 .3-3.2.6-6.6 1.1-10.3 2.1.8 4.4 1.2 6.7 1.1Z" class="cls-7"/><path d="M152.1 59v.3" class="cls-8"/><path d="M121.9 60.1c-2.3 0-4.6-.3-6.7-1.1q0 0 0 0v-.2c-.6-.9-.7-6.1-.8-7.2-.1-1 .2-2.2 1.1-2.8.6-.4 1.3-.4 2-.4 1.6 0 2.8-.4 4.1.4 1.1.7 1.8 1.9 1.9 3.2s-.6 7.1-1.5 8Zm36.9-1.1c-2 .4-4.1.5-6.1.4h0c-1.4-1-2.4-7.3-1.4-8.6s2.8-1.8 4.5-1.7c1.1.1 2.3.6 2.9 1.5.9 1.3 1 7.1.2 8.4Z" class="cls-5"/><path d="M158.8 59s0 0 0 0" class="cls-8"/><path d="M129.1 251.4c-1 5.1-7.5 5.7-11.5 2.1-1.2-1 .6-11 .8-12.4.1-.7.4-1.9.7-3 2.4 0 6.3.3 8.8.4.6 4.5 1.3 12 1.1 13Z" class="cls-2"/><path d="M119.2 238s0 0 0 0" class="cls-8"/><path d="M153.3 254.4c-4.4 3.6-11.5 3-12.7-2.1-.2-1 .6-8.6 1.3-13.1h0c2.8 0 7.4-.4 9.6-.6.4 1.2.8 2.6.9 3.4.3 1.3 2.2 11.3.9 12.4" class="cls-2"/></g></svg>')}`;
export default image;