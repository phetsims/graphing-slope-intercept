/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-10,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8{stroke-miterlimit:10}.cls-13,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8{stroke-width:.5px}.cls-13,.cls-4,.cls-6{stroke:#231f20}.cls-10,.cls-13{fill:none}.cls-3{fill:#ef3a37}.cls-10,.cls-3,.cls-5,.cls-8{stroke:#000}.cls-4{fill:#987447}.cls-5{fill:#ababab}.cls-6{fill:#ddbda2}.cls-8{fill:#cd3543}.cls-14{stroke-width:0}</style></defs><g id="Grid"><path d="M29.3 29.3h241.5v241.5H29.3zm0 229.3h241.4m-241.4-12h241.4M29.3 234.5h241.4m-241.4-12h241.4M29.3 210.4h241.4M29.3 198.3h241.4M29.3 186.2h241.4m-241.4-12h241.4M29.3 162.1h241.4M29.3 150h241.4M29.3 137.9h241.4M29.3 125.8h241.4m-241.4-12h241.4M29.3 101.7h241.4M29.3 89.6h241.4M29.3 77.5h241.4m-241.4-12h241.4M29.3 53.4h241.4m-241.4-12h241.4m-12.1-12.1v241.4m-12-241.4v241.4M234.5 29.3v241.4m-12-241.4v241.4M210.4 29.3v241.4M198.3 29.3v241.4M186.2 29.3v241.4m-12-241.4v241.4M162.1 29.3v241.4M150 29.3v241.4M137.9 29.3v241.4M125.8 29.3v241.4m-12-241.4v241.4M101.7 29.3v241.4M89.6 29.3v241.4M77.5 29.3v241.4m-12-241.4v241.4M53.4 29.3v241.4m-12-241.4v241.4" style="stroke:#58595b;stroke-width:.2px;stroke-miterlimit:10;fill:#fff"/><path d="M23.9 150h252.2" class="cls-10"/><path d="m24.7 152.5-4.3-2.5 4.3-2.5zm250.6 0 4.3-2.5-4.3-2.5z" class="cls-14"/><path d="M150 23.9v252.2" class="cls-10"/><path d="m147.5 24.7 2.5-4.3 2.5 4.3zm0 250.6 2.5 4.3 2.5-4.3z" class="cls-14"/></g><path id="Lines" d="m192.2 25.7 5.5 2.2-2.1-17-13.3 10.7 5.4 2.3L86.1 274.3l-5.4-2.2 2 17L96 278.4l-5.4-2.3z" style="stroke-width:0;fill:#27b04b"/><g id="USA"><path d="m134.6 104.8 5.9 14.2.3 2.7-5.3 1.5-6.7-11.2s-.3-9.3 5.8-7.3Z" class="cls-6"/><path d="M137.7 118.8s-1.1-3.6 2.6-3.8c3.8-.3 7.8-.3 7.8-.3s2.1-4.4 3.8-3.8c1.7.5.9 1.1.9 1.1l-2.4 2-1.4 5.9-12.1 2.9m19.7-9s-4.7 1.4-5 4.2 1.7 5.1 3.8 4 3.6-8 1.2-8.2Z" class="cls-6"/><path d="M96.6 178.9s.8-2.7-3.5-2.5c-4.3.3-5.4 5-3.8 16.7 0 0 1.3 2.7 4.1 2.6 2.8 0 6.7-.2 4.1-14l-.9-2.9Z" class="cls-3"/><path d="m126.9 157.2-.4 13.1s0 5.8-5.3 7.2-23.3 6.5-23.3 6.5-1.6 3.5-3.3 0c-1.7-3.6 1.1-6 1.1-6s11.8-4.7 13.7-6.1c1.9-1.5 6.2-4.8 10.2-3l-6.7-2.4 6.1-8.9 7.8-.3Z" class="cls-6"/><path d="M103.8 204s3.3 1.4 4.6.7 3.8-3.3 5.8-2.7 2.8 7.3-.7 10.1-3.9 2.5-3.9 2.5-9.9 1.7-13-1.3 1.2-8.9 3.3-8.6 3.8-.6 3.8-.6Z" class="cls-3"/><path d="M105.3 160.2s.3 17.9-1.5 20.4c0 0-3.1 6.8-3.3 8.7-.3 1.9-.9 14.9-1.3 16 0 0 .7 2.7 3.2 2.6 2.6 0 3.8-.3 4.1-1.4s-1.3-2-1.3-2 7.1-18.3 8.7-20.7c1.6-2.5 4.7-23 4.7-23s-11.5-6.3-13.3-.7Z" class="cls-6"/><path d="m120.3 140.9 8-3.4s-.2 19.3 1 20.1c0 0-4.2 6.1-9.2 3.6s.2-20.2.2-20.2Z" class="cls-5"/><path d="m104.2 137.6-2.6 21.5s6.3 6.8 11.4 6.2 7.6-3.6 7.6-3.6l1.9-21.2s-14.4-5.1-18.3-3Z" class="cls-5"/><path d="M124.4 139.9s-.9 8.7-2.5 8.9l.6-8.3zm-11.8 2.7s-2.4 5.6-4 21.3c0 0-1.4.3-1.5-.7-.2-.9 3.6-20.9 3.6-20.9l2 .3Z" style="stroke-miterlimit:10;stroke-width:.5px;stroke:#000;fill:#ccc"/><path d="M118.5 141.8s-2.7 8.8-8.1 9m14.8-10.9s.9 6.5 3.1 5.9" class="cls-13"/><path d="M137.3 105.4s-.7-.5-1.1-.3c0 0-.8-10.2-4.3-12.7s-6.5-3-6.5-3h-9.3s-7.8 3.2-9 4.8c-1.1 1.6-1.1 14.4-1.1 14.4l-4.2 28.2s.9 4.9 4.4 5.7 19.2.7 22.9-2.7c0 0 1.5-.8 1.7-1.8s-1-.2-1.1-.6c-.1-.3-.5-31.5 1.5-38.2 0 0-1.5 7.8-1 11 0 0 6.6-1.4 7.3-4.7Z" class="cls-8"/><path d="M116.2 84.6s-.2 4.8-.9 5.3c-.7.6 0 2.2 0 2.2s3.1 7.3 6.3 6.8 6.6-2.9 5.1-8c0 0 0-1.5-1.5-3.1-1.6-1.6-9-3.3-9-3.3Z" class="cls-6"/><path d="M115.2 89.9s1.6 8.5 6.9 8.3 4.7-7.3 4.3-9.1l1 1.1s1.4 9.8-5.5 9.3c-6.8-.5-7.8-9.4-7.8-9.4l1-.2Z" style="stroke-miterlimit:10;stroke-width:.5px;stroke:#000;fill:#83424f"/><path d="m114.8 114.2 10.2 9 16 7.9s2.6 6.1 7.3 4.6c4.8-1.5 4-6.8 2.2-7.2-1.8-.3-3.4.6-5.3-.4 0 0-.6-.9.5-2.6 0 0-1.6-1.3-2.9 1.2 0 0-6.1-5.1-9.3-6.6-3.2-1.4-3.4-.7-3.4-.7l-10.4-12.2s-7.7 0-5 6.8Z" class="cls-6"/><path d="m115.3 99.8.3 2 6.5 6.8s-6.7 1.8-6.3 8.4c0 0 .8.2 1-1 0 0-.2 3.2-2.7.7-2.6-2.6-13.4-11.8-7.3-22.2" class="cls-8"/><path d="M140.2 64.8s-5.1 10.4-1.6 24.8c0 0-7.1 1.6-19.4-2.2 0 0-20.5-13.7-4.6-32.2 0 0 17.7-1.9 25.6 9.6Z" class="cls-4"/><path d="M113.7 85.1s5.4 5 9 5 12.7-5.5 12.9-11.7c.2-6 0-5.4 0-5.4s1.4-5.3 1.1-6.6-.9-9.2-6.9-9.8c-5.9-.7-13.3-5.3-17.1 8.2s1.1 20.4.9 20.4Z" class="cls-6"/><path d="M143.4 70.2s-7.3-29.7-20.5-19.8c0 0-7.8-6.9-16.4 4.9-11 14.9-4.5 31.8-2.3 34.7 0 0 9.4.8 11-1.5 0 0-6.6-10-2.6-23.7h7.8c0 .1 2-4.2.5-7.1 0 0 2.7 3.1 2.2 7.4 0 0 9.1-.3 15.8 2.4 1.7.7 3.3 1.6 4.5 2.8Z" class="cls-4"/><path d="M113.6 54s-4.7 4-4 10.6h3.5" class="cls-13"/><path d="M131.1 74.2c-.7 0-1.2-.9-1.2-2.1s.5-2.1 1.2-2.1 1.2.9 1.2 2.1-.5 2.1-1.2 2.1m-12.9.2c-.7 0-1.2-.9-1.2-2.1s.5-2.1 1.2-2.1 1.2.9 1.2 2.1-.5 2.1-1.2 2.1" style="stroke-miterlimit:10;stroke-width:.5px;stroke:#231f20;fill:#010101"/><path d="M133.1 68.5s-.9-2-2.3-.5m-11.6.2s-1.3-2-2.7.3" class="cls-13"/><path d="M129.9 81.7s-3.3 1.2-11.2-.4c-1.7-.3 5.7 9.8 11.2.4Z" style="fill:#fff;stroke-width:.5px;stroke:#231f20"/><path d="M119 78.1c0 1.3-1.3 2.3-3 2.3s-3-1-3-2.3 1.3-2.3 3-2.3 3 1 3 2.3m15.1-.1c0 1.3-1.3 2.3-3 2.3s-3-1-3-2.3 1.3-2.3 3-2.3 3 1 3 2.3" style="stroke-width:0;fill:#dcb1a3"/><path d="M124.9 75.5s.6.9 1.3.9c0 0-.2.9-1.3 1.5" style="stroke-miterlimit:10;stroke-width:.5px;stroke:#231f20;fill:none"/></g></svg>')}`;
export default image;