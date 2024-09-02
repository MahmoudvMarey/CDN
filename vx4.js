// (function () {
//   window.addEventListener("load", () => {
//     console.log("✅");
//     Load();
//   });

//   let scriptTag = document.currentScript;

//   let id = scriptTag.getAttribute("id");

//   let name;
//   let AvatarSelected;
//   let widgetSelected;
//   let BackgroudColor;
//   let textColor;
//   let position;
//   let strokeColor;

//   let loaded = false;
//   let dataFetched = false;

//   let width = window.innerWidth;

//   // Define the breakpoints similar to Tailwind CSS
//   let sizeCategory;

//   let breakpoints = {
//     sm: 640, // Small screens
//     md: 768, // Medium screens
//     lg: 1024, // Large screens
//     xl: 1280, // Extra large screens
//   };

//   let url = "/api/customize"; // Update with the correct endpoint URL

//   let requestOptions = {
//     method: "GET",
//     headers: {
//       admin_id: id, // Replace with actual admin ID
//     },
//   };

//   async function fetchData() {
//     try {
//       let response = await fetch(url, requestOptions);
//       let data = await response.json();

//       name = data.result.name;
//       // AvatarSelected = data.result.AvatarSelected;
//       widgetSelected = data.result.widgetSelected;
//       BackgroudColor = data.result.BackgroudColor;
//       textColor = data.result.textColor;
//       position = data.result.position;
//       strokeColor = textColor === "dark" ? "black" : "white";
//       arrowColor = textColor === "dark" ? "white" : "black";
//       strokeColorLogo = textColor === "dark" ? "#000000" : "#ffffff";

//       if (widgetSelected.image) {
//         AvatarSelected = widgetSelected.image;
//       } else {
//         AvatarSelected =
//           "data:image/svg+xml," +
//           encodeURIComponent(
//             `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
//        <rect width="64" height="64" fill="${BackgroudColor}"/>
//        <path d="M49.4545 32C49.4551 34.8601 48.7529 37.6765 47.4097 40.2015C46.0664 42.7265 44.1232 44.8827 41.7511 46.4805C39.379 48.0783 36.6506 49.0687 33.8058 49.3646C30.9611 49.6605 28.0873 49.2528 25.4371 48.1774C25.0473 48.0204 24.8553 47.9447 24.6982 47.9069C24.559 47.8742 24.4164 47.8586 24.2734 47.8604C24.1134 47.8604 23.9389 47.8895 23.5869 47.9476L16.6894 49.0967C15.9651 49.2189 15.6043 49.2771 15.3425 49.1665C15.1137 49.0685 14.9314 48.8862 14.8334 48.6574C14.7229 48.3956 14.7811 48.0349 14.9033 47.3105L16.0523 40.4131C16.1105 40.064 16.1396 39.8895 16.1396 39.7265C16.1414 39.5836 16.1258 39.441 16.0931 39.3018C16.0582 39.1447 15.9767 38.9527 15.8225 38.5629C14.8558 36.1765 14.4289 33.6058 14.5726 31.035C14.7163 28.4643 15.427 25.9572 16.6537 23.6934C17.8804 21.4296 19.5927 19.4653 21.6679 17.9412C23.7432 16.417 26.1299 15.3709 28.657 14.8778C31.1841 14.3846 33.789 14.4567 36.285 15.0888C38.781 15.7209 41.1062 16.8974 43.094 18.5339C45.0818 20.1704 46.6829 22.2264 47.7825 24.5545C48.8822 26.8826 49.4532 29.4252 49.4545 32Z" stroke="${strokeColorLogo}" stroke-width="4.6875" stroke-linecap="round" stroke-linejoin="round"/>
//        <circle cx="32.2909" cy="31.7091" r="16.5818" fill="${strokeColorLogo}"/>
//        <path d="M17.7183 37.8896L25.3418 46.8156L13.7999 48.9547L17.7183 37.8896Z" fill="${strokeColorLogo}"/>
//      </svg>`
//           );
//       }

//       // Process the data
//       return "ok";
//     } catch (error) {
//       console.error("Error:", error);
//       return "null"; // Return null if there's an error
//     }
//   }

//   function main() {
//     let imageElement = document.createElement("img");

//     imageElement.style.width = "56px";
//     imageElement.src = AvatarSelected;
//     imageElement.alt = "virsay logo"; // Alt text

//     imageElement.style.height = "56px";
//     imageElement.style.zIndex = "999"; // z-[999]
//     imageElement.style.position = "fixed"; // Positioning
//     imageElement.style.bottom = "16px"; // Align to bottom
//     imageElement.style[position] = "16px"; // Align to right
//     imageElement.style.borderRadius = "99999px"; // rounded
//     imageElement.style.cursor = "pointer"; // hover

//     document.body.appendChild(imageElement);

//     let iframe = document.createElement("iframe");
//     // iframe.src = "https://virsay.com";
//     // iframe.src = website;
//     iframe.src = `/embed/${id}`;
//     iframe.style.position = "fixed";
//     iframe.style[position] = "1rem"; // position value = "right"
//     iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
//     iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
//     // iframe.style.height = "675px"; // Equivalent to Tailwind's h-80
//     // iframe.style.height = `calc(100vh - 200px)`; // Equivalent to Tailwind's h-80
//     iframe.style.height = "-webkit-fill-available";
//     iframe.style.height = "fill-available";
//     iframe.style.maxHeight = "675px";
//     iframe.style.border = "none";
//     iframe.style.borderRadius = "0.75rem"; // Equivalent to the specified border radius
//     iframe.style.display = "none"; // Initial hidden state
//     iframe.style.zIndex = "999999";

//     // document.body.appendChild(iframe);

//     let arrow = `
// <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="${strokeColor}" viewBox="0 0 256 256">
//   <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
// </svg>`;

//     // Create a div container
//     let arrowContainer = document.createElement("div");
//     arrowContainer.innerHTML = arrow;

//     arrowContainer.style.zIndex = "9999999";
//     arrowContainer.style.cursor = "pointer";
//     arrowContainer.style.display = "none"; // Initial hidden state

//     document.body.appendChild(arrowContainer);

//     imageElement.addEventListener("click", function () {
//       if (iframe.style.display === "none") {
//         // If the iframe is not visible, show the original image
//         iframe.style.display = "block";
//         imageElement.style.color = `#${BackgroudColor}`;
//         imageElement.style.backgroundColor = `#${BackgroudColor}`;
//         imageElement.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" style="background-color:${encodeURIComponent(
//           BackgroudColor
//         )}" width="64" height="64" viewBox="0 0 64 64" fill="none"%3E%3Cpath d="M17 26L31.25 40.25L45.5 26" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E`;

//         return;
//       }

//       if (iframe.style.display === "block") {
//         iframe.style.display = "none";
//         imageElement.src = AvatarSelected;
//         return;
//       }
//     });

//     arrowContainer.addEventListener("click", function () {
//       if (iframe.style.display === "none") {
//         // If the iframe is not visible, show the original image
//         iframe.style.display = "block";
//         imageElement.style.color = `#${BackgroudColor}`;
//         imageElement.style.backgroundColor = `#${BackgroudColor}`;
//         imageElement.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" style="background-color:${encodeURIComponent(
//           BackgroudColor
//         )}" width="64" height="64" viewBox="0 0 64 64" fill="none"%3E%3Cpath d="M17 26L31.25 40.25L45.5 26" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E`;

//         return;
//       }

//       if (iframe.style.display === "block") {
//         iframe.style.display = "none";
//         imageElement.src = AvatarSelected;
//         return;
//       }
//     });

//     // Function to get the window size category

//     window.addEventListener("resize", getWindowSizeCategory);

//     getWindowSizeCategory();
//   }

//   function getWindowSizeCategory() {
//     width = window.innerWidth;

//     if (width < breakpoints.sm) {
//       sizeCategory = "xs"; // Extra small screens

//       arrowContainer.style.display = "block";
//       arrowContainer.style.position = "absolute";
//       arrowContainer.style.top = "28px";
//       arrowContainer.style.right = "28px";

//       // Remove the inline styles
//       iframe.style.removeProperty(position); // Remove position style
//       iframe.style.removeProperty("bottom"); // Remove bottom style
//       iframe.style.removeProperty("maxHeight"); // Remove maxHeight style
//       iframe.style.width = "-webkit-fill-available";
//       iframe.style.width = "fill-available";
//       iframe.style.maxHeight = "-webkit-fill-available";
//       iframe.style.maxHeight = "fill-available";
//     } else if (width < breakpoints.md) {
//       sizeCategory = "sm";
//       arrowContainer.style.display = "none";
//       iframe.style[position] = "1rem"; // Equivalent to Tailwind's right-4
//       iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
//       iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
//       iframe.style.maxHeight = "675px";
//     } else if (width < breakpoints.lg) {
//       sizeCategory = "md";
//       arrowContainer.style.display = "none";
//       iframe.style[position] = "1rem"; // Equivalent to Tailwind's right-4
//       iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
//       iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
//       iframe.style.maxHeight = "675px";
//     } else if (width < breakpoints.xl) {
//       sizeCategory = "lg";
//       arrowContainer.style.display = "none";
//       iframe.style[position] = "1rem"; // Equivalent to Tailwind's right-4
//       iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
//       iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
//       iframe.style.maxHeight = "675px";
//     } else {
//       sizeCategory = "xl";
//       arrowContainer.style.display = "none";
//       iframe.style[position] = "1rem"; // Equivalent to Tailwind's right-4
//       iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
//       iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
//       iframe.style.maxHeight = "675px";
//     }

//     console.log(`Current window size category: ${sizeCategory}`);
//     return sizeCategory;
//   }

//   async function Load() {
//     let data = await fetchData(); // Wait for the fetch to complete
//     console.log("data ,", data);
//     if (data === "ok") {
//       main();
//     }
//   }
// })();

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Dom Loaded ✅");
// });

// console.log("7");

let scriptTag = document.currentScript;

let id = scriptTag.getAttribute("id");

let name;
let AvatarSelected;
let widgetSelected;
let BackgroudColor;
let textColor;
let position;
let strokeColor;

let loaded = false;
let dataFetched = false;

let width = window.innerWidth;

// Define the breakpoints similar to Tailwind CSS
let sizeCategory;

let breakpoints = {
  sm: 640, // Small screens
  md: 768, // Medium screens
  lg: 1024, // Large screens
  xl: 1280, // Extra large screens
};

let url = "/api/customize"; // Update with the correct endpoint URL

let requestOptions = {
  method: "GET",
  headers: {
    admin_id: id, // Replace with actual admin ID
  },
};

let getWindowSizeCategory;

async function fetchData() {
  try {
    let response = await fetch(url, requestOptions);
    let data = await response.json();

    name = data.result.name;
    // AvatarSelected = data.result.AvatarSelected;
    widgetSelected = data.result.widgetSelected;
    BackgroudColor = data.result.BackgroudColor;
    textColor = data.result.textColor;
    position = data.result.position;
    strokeColor = textColor === "dark" ? "black" : "white";
    arrowColor = textColor === "dark" ? "white" : "black";
    strokeColorLogo = textColor === "dark" ? "#000000" : "#ffffff";

    if (widgetSelected.image) {
      AvatarSelected = widgetSelected.image;
    } else {
      AvatarSelected =
        "data:image/svg+xml," +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
       <rect width="64" height="64" fill="${BackgroudColor}"/>
       <path d="M49.4545 32C49.4551 34.8601 48.7529 37.6765 47.4097 40.2015C46.0664 42.7265 44.1232 44.8827 41.7511 46.4805C39.379 48.0783 36.6506 49.0687 33.8058 49.3646C30.9611 49.6605 28.0873 49.2528 25.4371 48.1774C25.0473 48.0204 24.8553 47.9447 24.6982 47.9069C24.559 47.8742 24.4164 47.8586 24.2734 47.8604C24.1134 47.8604 23.9389 47.8895 23.5869 47.9476L16.6894 49.0967C15.9651 49.2189 15.6043 49.2771 15.3425 49.1665C15.1137 49.0685 14.9314 48.8862 14.8334 48.6574C14.7229 48.3956 14.7811 48.0349 14.9033 47.3105L16.0523 40.4131C16.1105 40.064 16.1396 39.8895 16.1396 39.7265C16.1414 39.5836 16.1258 39.441 16.0931 39.3018C16.0582 39.1447 15.9767 38.9527 15.8225 38.5629C14.8558 36.1765 14.4289 33.6058 14.5726 31.035C14.7163 28.4643 15.427 25.9572 16.6537 23.6934C17.8804 21.4296 19.5927 19.4653 21.6679 17.9412C23.7432 16.417 26.1299 15.3709 28.657 14.8778C31.1841 14.3846 33.789 14.4567 36.285 15.0888C38.781 15.7209 41.1062 16.8974 43.094 18.5339C45.0818 20.1704 46.6829 22.2264 47.7825 24.5545C48.8822 26.8826 49.4532 29.4252 49.4545 32Z" stroke="${strokeColorLogo}" stroke-width="4.6875" stroke-linecap="round" stroke-linejoin="round"/>
       <circle cx="32.2909" cy="31.7091" r="16.5818" fill="${strokeColorLogo}"/>
       <path d="M17.7183 37.8896L25.3418 46.8156L13.7999 48.9547L17.7183 37.8896Z" fill="${strokeColorLogo}"/>
     </svg>`
        );
    }

    // Process the data
    return "ok";
  } catch (error) {
    console.error("Error:", error);
    return "null"; // Return null if there's an error
  }
}

function main() {
  let imageElement = document.createElement("img");

  imageElement.style.width = "56px";
  imageElement.src = AvatarSelected;
  imageElement.alt = "virsay logo"; // Alt text

  imageElement.style.height = "56px";
  imageElement.style.zIndex = "999"; // z-[999]
  imageElement.style.position = "fixed"; // Positioning
  imageElement.style.bottom = "16px"; // Align to bottom
  imageElement.style[position] = "16px"; // Align to right
  imageElement.style.borderRadius = "99999px"; // rounded
  imageElement.style.cursor = "pointer"; // hover

  let iframe = document.createElement("iframe");
  // iframe.src = "https://virsay.com";
  // iframe.src = website;
  iframe.src = `/embed/${id}`;
  iframe.style.position = "fixed";
  iframe.style[position] = "1rem"; // position value = "right"
  iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
  iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
  // iframe.style.height = "675px"; // Equivalent to Tailwind's h-80
  // iframe.style.height = `calc(100vh - 200px)`; // Equivalent to Tailwind's h-80
  //   iframe.style.height = "-webkit-fill-available";
  //   iframe.style.height = "fill-available";
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

  // Create a div container
  let arrowContainer = document.createElement("div");
  arrowContainer.innerHTML = arrow;

  arrowContainer.style.position = "absolute";
  arrowContainer.style.top = "28px";
  arrowContainer.style.right = "28px";
  arrowContainer.style.zIndex = "9999999";
  arrowContainer.style.cursor = "pointer";

  arrowContainer.style.display = "none"; // Initial hidden state

  imageElement.addEventListener("click", function () {
    if (iframe.style.display === "none") {
      // If the iframe is not visible, show the original image
      iframe.style.display = "block";
      imageElement.style.color = `#${BackgroudColor}`;
      imageElement.style.backgroundColor = `#${BackgroudColor}`;
      imageElement.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" style="background-color:${encodeURIComponent(
        BackgroudColor
      )}" width="64" height="64" viewBox="0 0 64 64" fill="none"%3E%3Cpath d="M17 26L31.25 40.25L45.5 26" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E`;
      getWindowSizeCategory();
      return;
    }

    if (iframe.style.display === "block") {
      iframe.style.display = "none";
      imageElement.src = AvatarSelected;
      getWindowSizeCategory();
      return;
    }
  });

  arrowContainer.addEventListener("click", function () {
    if (iframe.style.display === "none") {
      // If the iframe is not visible, show the original image
      iframe.style.display = "block";
      imageElement.style.color = `#${BackgroudColor}`;
      imageElement.style.backgroundColor = `#${BackgroudColor}`;
      imageElement.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" style="background-color:${encodeURIComponent(
        BackgroudColor
      )}" width="64" height="64" viewBox="0 0 64 64" fill="none"%3E%3Cpath d="M17 26L31.25 40.25L45.5 26" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E`;
      getWindowSizeCategory();
      return;
    }

    if (iframe.style.display === "block") {
      iframe.style.display = "none";
      imageElement.src = AvatarSelected;
      getWindowSizeCategory();
      return;
    }
  });

  document.body.appendChild(imageElement);
  document.body.appendChild(iframe);
  document.body.appendChild(arrowContainer);

  // Function to get the window size category

  getWindowSizeCategory = function () {
    width = window.innerWidth;

    if (width < breakpoints.sm) {
      sizeCategory = "xs"; // Extra small screens

      //   if (iframe.style.display === "none") {
      //     arrowContainer.style.display = "none";
      //     document.body.style.overflow = "";
      //   }

      //   if (iframe.style.display === "block") {
      //     arrowContainer.style.display = "block";
      //     document.body.style.overflow = "hidden";
      //   }

      // Remove the inline styles
      //   iframe.style[position] = "0px"; // Equivalent to Tailwind's right-4
      //   iframe.style.removeProperty("bottom"); // Remove bottom style
      //   iframe.style.bottom = "0px"; // Equivalent to Tailwind's bottom-4
      //   iframe.style.top = "0px"; // Equivalent to Tailwind's bottom-4
      //   iframe.style.removeProperty("maxHeight"); // Remove maxHeight style
      //   iframe.style.width = "calc(-webkit-fill-available - 1rem)";
      //   iframe.style.width = "calc(fill-available - 1rem)";
      //   iframe.style.width = "-webkit-fill-available";
      //   iframe.style.width = "fill-available";
      iframe.style.width = "calc(100% - 1rem)";
      iframe.style.paddingLeft = "1rem";
      iframe.style.paddingTop = "1rem";
      iframe.style.maxHeight = "575px";
    } else {
      iframe.style.paddingLeft = "0px";
      iframe.style.paddingTop = "0px";
      iframe.style[position] = "1rem"; // Equivalent to Tailwind's right-4
      iframe.style.bottom = "5.25rem"; // Equivalent to Tailwind's bottom-4
      iframe.style.width = "382px"; // Equivalent to Tailwind's w-full
      iframe.style.maxHeight = "675px";
    }

    console.log(`Current window size category: ${sizeCategory}`);
    return sizeCategory;
  };

  getWindowSizeCategory();

  window.addEventListener("resize", getWindowSizeCategory);
}

async function Load() {
  let data = await fetchData(); // Wait for the fetch to complete
  console.log("data ,", data);
  if (data === "ok") {
    main();
  }
}

Load();
