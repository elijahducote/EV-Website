import van from "vanjs-core";
import {reactive,list} from "vanjs-ext";
import {discography as json} from "./automation.json";

function frag(item) {
  return van.tags[item];
}

const sectionA = document.getElementsByClassName("home-thq-dropdown")[0];

function populate () {
let typo = [],
link = [],
img = [],
numbr = "",
cur = json.length,
ndx = -1,
diff,
affix,
nth,
item;
for (nth = cur;cur;--cur) {
  diff = nth - cur;
  typo[diff] = json[diff].name;
  link[diff] = json[diff].url;
  img[diff] = json[diff].cover;
}
const items = reactive(typo);
return list(frag("ul")({
  class:"home-dropdown-list",
  "data-thq":"thq-dropdown-list"
}), items, function (v) {
  ++ndx;
  if (ndx) numbr = ndx;
  affix = "0" + (ndx + 1);
  affix = affix.slice(-2);
  
  item = frag("div")({
    class:"home-dropdown-toggle" + affix,
    "data-thq":"thq-dropdown-toggle"
  },frag("a")({href:link[ndx],target:"_blank",rel:"noreferrer noopener"},typo[ndx]));
  
  if (ndx < 3) van.add(item,frag("svg")({viewBox:"0 0 1024 1024",class:"home-icon14"},frag("path")({d:"M874 598V384h-52v192h-48V426h-54v150h-48V384h-54v214q0 18 13 30t31 12h170q18 0 30-12t12-30zM576 438v-54H406v256h170v-54H470v-46h106v-54H470v-48h106zM362 640V384h-52v150L202 384h-52v256h52V490l110 150h50zm492-470q36 0 60 25t24 61v512q0 36-24 61t-60 25H170q-36 0-60-25t-24-61V256q0-36 24-61t60-25h684z"})));
  
  return frag("li")({
    class:"home-dropdown" + numbr + " list-item",
    "data-thq":"thq-dropdown"
  },item)
 });
}
van.add(sectionA,populate);