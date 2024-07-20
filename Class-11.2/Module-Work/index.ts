//import a from './first.js'// default a 
import a, { job } from './first.js';//esm

console.log(a);//log 3.14
console.log(job);

console.log("--------------------------------");

import d from "./second.js";//default
import { multiply } from './second.js';
d();
console.log(multiply(4,3));//log multiply function

