function main() {

  let iframe = document.createElement("iframe");
  iframe.src = `https://virsay.com/embed/org_01JAGJXKSYWYHWTXP4FZ0DBCPP`;
  iframe.style.position = "fixed";
  iframe.style[position] = "1rem"; // position value = "right"
  iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
  iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
  iframe.style.height = "calc(100% - 5.25rem)";
  iframe.style.maxHeight = "675px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "0.75rem"; // Equivalent to the specified border radius
  iframe.style.display = "none"; // Initial hidden state
  iframe.style.zIndex = "999999";

  let arrow = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="${strokeColor}" viewBox="0 0 256 256">
  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
</svg>`;


  document.body.appendChild(iframe);


async function Load() {
  main();
}

Load();
