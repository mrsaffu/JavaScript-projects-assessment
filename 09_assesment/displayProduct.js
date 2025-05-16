
// export let product = [
//   {
//     id: 1,
//     name: "Galaxy S21",
//     color: "Phantom Black",
//     price: 799,
//     image: "https://m.media-amazon.com/images/I/61O45C5qASL._AC_SL1500_.jpg",
//   },
//   {
//     id: 2,
//     name: "iPhone 13",
//     color: "Midnight",
//     price: 999,
//     image: "https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg",
//   },
//   {
//     id: 3,
//     name: "Pixel 6",
//     color: "Sorta Seafoam",
//     price: 599,
//     image:
//       "https://images-cdn.ubuy.co.in/6622375ca73b3300b24d2faa-restored-google-pixel-6-pro-128gb.jpg",
//   },
//   {
//     id: 4,
//     name: "OnePlus 9",
//     color: "Astral Black",
//     price: 729,
//     image: "https://m.media-amazon.com/images/I/41uC6f6q+BL.jpg",
//   },
//   {
//     id: 5,
//     name: "Xperia 5 III",
//     color: "Black",
//     price: 999,
//     image:
//       "https://ss7.vzw.com/is/image/VerizonWireless/sony-xperia-5-iii-hero-unlocked-2021?wid=465&hei=465&fmt=webp",
//   },
//   {
//     id: 6,
//     name: "Moto G Power",
//     color: "Smoke Black",
//     price: 199,
//     image:
//       "https://cdn1.smartprix.com/rx-i4IQX0p0k-w420-h420/motorola-moto-g-powe.jpg",
//   },
//   {
//     id: 7,
//     name: "Galaxy Z Fold3",
//     color: "Phantom Silver",
//     price: 1799,
//     image:
//       "https://images.samsung.com/is/image/samsung/p6pim/levant/2108/gallery/levant-galaxy-z-fold3-f926-5g-sm-f926bzsdmea-477353638?$650_519_PNG$",
//   },
//   {
//     id: 8,
//     name: "iPhone SE (2022)",
//     color: "Red",
//     price: 429,
//     image:
//       "https://images-cdn.ubuy.co.in/64f3997ec02f48025d6d2288-walmart-family-mobile-apple-iphone-se.jpg",
//   },
//   {
//     id: 9,
//     name: "Redmi Note 10",
//     color: "Frost White",
//     price: 199,
//     image:
//       "https://cdn.dxomark.com/wp-content/uploads/medias/post-87173/Redmi-note-10-1024x1024.png",
//   },
//   {
//     id: 10,
//     name: "Realme GT",
//     color: "Racing Yellow",
//     price: 499,
//     image:
//       "https://www.gizmochina.com/wp-content/uploads/2021/02/ad9c48dc304440ea937f53ee43a87f0c.jpg",
//   },
//   {
//     id: 11,
//     name: "Vivo X70 Pro",
//     color: "Cosmic Black",
//     price: 899,
//     image:
//       "https://oldsold.in/pub/media/catalog/product/cache/105eab600b3fed1b00388dd9e1fb5893/v/i/vi126001_56.jpg",
//   },
//   {
//     id: 12,
//     name: "Oppo Reno6 Pro",
//     color: "Aurora",
//     price: 699,
//     image:
//       "https://rbzone.com/pub/media/catalog/product/cache/c61cefef0ce0f761ceeac296caee3536/r/e/reno_6_pro_12gb_256gb_cph2249_aurora.jpg",
//   },
//   {
//     id: 13,
//     name: "Asus ROG Phone 5",
//     color: "Phantom Black",
//     price: 999,
//     image:
//       "https://images.jdmagicbox.com/quickquotes/images_main/rog-phone-6-ram-12-gb-storage-256-gb-phantom-black-272357025-jw7bjy98.jpg",
//   },
//   {
//     id: 14,
//     name: "Nokia XR20",
//     color: "Ultra Blue",
//     price: 549,
//     image: "https://fdn2.gsmarena.com/vv/bigpic/nokia-xr20-ultra-blue.jpg",
//   },
//   {
//     id: 15,
//     name: "Samsung A52",
//     color: "Awesome Blue",
//     price: 349,
//     image:
//       "https://m.media-amazon.com/images/I/81-nNnxa6VS._AC_UF1000,1000_QL80_.jpg",
//   },
// ];
export function displayProduct(product){

    product.map((m) => {
        // console.log(m);
        table.innerHTML += `
              <tbody>
                  <tr>
                      <td>${m.id}</td>
                      <td>${m.name}</td>
                      <td>${m.color}</td>
                      <td>${m.price}</td>
                      <td><img src="${m.image}" alt="imag"   ></td>
                  </tr>
              </tbody>  
              
              `;
      });
      // return product;
      
}


// -----------------searchedProduct-------------------
