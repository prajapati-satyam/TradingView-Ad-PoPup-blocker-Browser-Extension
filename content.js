console.log("Trading View add pop up remover is running");

const run = () => {


const el = document.getElementById("adunit");
const el2  =document.getElementById("charting-ad")

if (el) {
  el.style.display = 'none'
  console.log("First element remove");
}
if (el2) {
   el2.style.display = 'none'
   console.log("second element remove");
}

}

run()

new MutationObserver(run).observe(document.body, {
  childList: true,
  subtree: true
});