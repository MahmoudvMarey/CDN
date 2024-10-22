function main() {

  let iframe = document.createElement("iframe");
  iframe.src = `https://virsay.com/embed/org_01JAGJXKSYWYHWTXP4FZ0DBCPP`;
  iframe.style.position = "fixed";
  iframe.style.right = "1rem"; // Correctly setting right position
  iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
  iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
  iframe.style.height = "calc(100% - 5.25rem)";
  iframe.style.maxHeight = "675px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "0.75rem"; // Equivalent to the specified border radius
  iframe.style.display = "block";
  iframe.style.zIndex = "999999";

  document.body.appendChild(iframe);


async function Load() {
  main();
}

Load();
