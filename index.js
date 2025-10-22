const fs = require("fs");
const http = require("http");
const url = require("url");

//FILES
////////////////////////////////
// Blocing, Synchronus Way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about avacado: ${textIn}.\n Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);

// // Non - blocking Asynchronus way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log(`Error ${err}`);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2} \n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file has been written");
//         }
//       );
//     });
//   });
// });

// console.log("\nReading the File...\n");
////////////////////////////////////////////////////

//SERVER

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{PRICE}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const tempOverView = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;
  // pathName === "/" ||

  //OVERVIEW PAGE
  if (pathName === "/overview") {
    res.writeHead(200, {
      "content-type": "text/html",
      "my-own-header": "This is overview",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverView.replace("{%PRODUCT_CARDS%}", cardsHtml);
    console.log(output);
    res.end(output);
  }

  //PRODUCT PAGE
  else if (pathName === "/product") {
    res.end("This is Product");
  } else if (pathName === "/") {
    res.end("Hello From the server which is created by Sudeep");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        const productData = JSON.parse(data);
        // console.log(productData);
        res.writeHead(200, {
          "content-type": "Application/json",
        });
        res.end(data);
      } catch (parseErr) {
        console.error("Invalid JSON:", parseErr);
      }
    });
    // res.writeHead(200, {
    //   "content-type": "a pplication/json",
    // });
    // res.end(JSON.stringify(dataObj));
    // res.end("API");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "Hello world",
    });
    res.end("<h1>Page not be found !</h1>");
  }
  // res.end("Hello From the server which is created by Sudeep");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
