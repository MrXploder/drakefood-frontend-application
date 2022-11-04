import{r as c,j as i,a as e,b as f,c as v,d as u,e as b,f as w,s as m,g,h as y}from"./index.3e148e9e.js";function C({title:t,titleId:a,...l},n){return i("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},l),children:[t?e("title",{id:a,children:t}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})]})}const S=c.exports.forwardRef(C),N=S;function F({title:t,titleId:a,...l},n){return i("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},l),children:[t?e("title",{id:a,children:t}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})]})}const k=c.exports.forwardRef(F),M=k;function P({title:t,titleId:a,...l},n){return i("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":a},l),children:[t?e("title",{id:a,children:t}):null,e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})]})}const T=c.exports.forwardRef(P),j=T,B=[{value:"0x00",text:"Super Smash Bros."},{value:"0x01",text:"Super Mario Bros."},{value:"0x02",text:"Chibi-Robo!"},{value:"0x03",text:"Yoshi's Woolly World"},{value:"0x04",text:"Splatoon"},{value:"0x05",text:"Animal Crossing"},{value:"0x06",text:"8-bit Mario"},{value:"0x07",text:"Skylanders"},{value:"0x09",text:"Legend Of Zelda"},{value:"0x0a",text:"Shovel Knight"},{value:"0x0c",text:"Kirby"},{value:"0x0d",text:"Pokemon"},{value:"0x0e",text:"Mario Sports Superstars"},{value:"0x0f",text:"Monster Hunter"},{value:"0x10",text:"BoxBoy!"},{value:"0x11",text:"Pikmin"},{value:"0x12",text:"Fire Emblem"},{value:"0x13",text:"Metroid"},{value:"0x14",text:"Others"},{value:"0x15",text:"Mega Man"},{value:"0x16",text:"Diablo"},{value:"0x17",text:"Power Pros"},{value:"0x18",text:"Monster Hunter Rise"},{value:"0x19",text:"Yu-Gi-Oh!"},{value:"0xff",text:"Super Nintendo World"}],L=[{value:"0x00",text:"Figure"},{value:"0x01",text:"Card"},{value:"0x02",text:"Yarn"}],O=({onQueryChange:t})=>{const[a,l]=c.exports.useState(""),n=o=>{o.preventDefault(),t(a)};return e("form",{onSubmit:o=>n(o),children:i("div",{className:"relative",children:[e("input",{type:"text",className:"block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-[99px] border border-[#dadada]",placeholder:"Search for Amiibo name",onChange:o=>l(o.target.value),value:a}),e("button",{type:"submit",className:"text-black absolute right-2.5 bottom-2.5 font-medium text-sm px-4 py-2",children:e(N,{className:"h-6 w-6"})})]})})},p=({value:t,label:a,options:l,onSelectChange:n})=>{const[o,d]=c.exports.useState(t);return c.exports.useEffect(()=>{d(t)},[t]),i("select",{id:a,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[99px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:o,onChange:r=>{const s=r.target.value;n(l.find(h=>h.value===s))},children:[i("option",{defaultValue:"",value:"",children:["Select ",a]}),l.map((r,s)=>e("option",{value:r.value,children:r.text},s))]})},E=()=>i("div",{role:"status",children:[i("svg",{className:"inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e("span",{className:"sr-only",children:"Loading..."})]}),G=({product:t})=>{const[a,l]=c.exports.useState(0),n=f();return i("section",{className:"flex justify-center mt-6",children:[e("input",{type:"number",className:"rounded-[99px] w-[60%] mr-4",min:"0",max:"99",value:a,onChange:d=>l(Number(d.target.value))}),i("button",{className:"rounded-[99px] w-[40%] bg-primary text-white flex items-center justify-center disabled:bg-slate-50 disabled:text-black transition-all",disabled:a===0,onClick:()=>{n(v({...t,qty:a})),l(0)},children:[e(M,{className:"h-6 w-6"}),e(j,{className:"h-6 w-6"})]})]})},R=({item:t})=>e("div",{className:"md:w-1/3 w-full p-3",children:i("a",{className:"flex flex-col items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 ",children:[e("img",{className:"h-96 rounded-t-lg ",src:t.image,alt:""}),i("div",{className:"flex flex-col justify-between p-4 leading-normal w-full",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900",children:t.name}),i("p",{children:["$",t.price.toLocaleString()]}),e(G,{product:t})]})]})}),A=()=>{const t=u(s=>s.amiibosFilters.search),a=u(s=>s.amiibosFilters.type),l=u(s=>s.amiibosFilters.gameseries),{data:n=[],isFetching:o,isSuccess:d,isError:x,refetch:r}=b({search:t,type:a,gameseries:l});return c.exports.useEffect(()=>{r()},[t,a,l]),o?e(E,{}):d&&n.length===0?e("div",{children:"Your search doesnt bring any data"}):x?e("div",{children:"There was an error trying to bring data, please retry"}):d&&n.length>0?e("div",{className:"flex flex-row flex-wrap",children:n.map((s,h)=>e(R,{item:s},h))}):e("div",{})},W=()=>{const[t]=w(),a=f(),l=u(r=>r.amiibosFilters.type),n=u(r=>r.amiibosFilters.gameseries);c.exports.useEffect(()=>{var r,s;a(m((r=t.get("type"))!=null?r:"")),a(g((s=t.get("gameseries"))!=null?s:""))},[t]);const o=r=>{a(y(r))},d=r=>{var s;a(m((s=r==null?void 0:r.value)!=null?s:""))},x=r=>{var s;a(g((s=r==null?void 0:r.value)!=null?s:""))};return i(c.exports.Fragment,{children:[i("section",{className:"px-1",children:[e(O,{onQueryChange:o}),i("div",{className:"flex flex-wrap mt-6",children:[e("div",{className:"w-full md:w-1/2 md:pr-1",children:e(p,{value:l,label:"Types",options:L,onSelectChange:d})}),e("div",{className:"w-full md:w-1/2 md:pl-1 mt-6 md:mt-0",children:e(p,{value:n,label:"GameSeries",options:B,onSelectChange:x})})]})]}),e("section",{className:"text-center mt-16",children:e(A,{})})]})};export{W as default};