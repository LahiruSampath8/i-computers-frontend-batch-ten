export default function ProductCard(props) {
    //console.log("Product card is being rendered");
    console.log(props.name); 
    return(
        <div className="bg-[#00FF00] text-white border border-b-green-900 w-[319px]">
          <h1 className="text-[#87CEEB] text-[40px]">{props.name}</h1 >
          <img src={props.image}  alt={"Picture of a "+props.name} />
          <p>Price: {props.price}</p>
          <button>Buy Now</button>
        </div>
    )
} 


// export default function ProductCard(props) {
//   return (
//     <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">

//       {/* Product Image */}
//       <div className="overflow-hidden">
//         <img
//           src={props.image}
//           alt={"Picture of " + props.name}
//           className="w-full h-60 object-cover hover:scale-110 transition duration-500"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="p-5">
//         <h1 className="text-xl font-semibold text-gray-800 mb-2">
//           {props.name}
//         </h1>

//         <p className="text-lg font-bold text-blue-600 mb-4">
//           ${props.price}
//         </p>

//         <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-medium">
//           Buy Now
//         </button>
//       </div>
      
//     </div>
//   );
// }