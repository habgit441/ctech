// "use client";

// import React from "react";

// // Motion design / video projects
// const videoProjects = [
//   {
//     title: "Promo Video",
//     description: "Promo video for brand awareness and marketing campaigns",
//     src: "/Videos/vix.mp4",
//   },
//   {
//     title: "Explainer Video",
//     description: "Animated explainer for services and products",
//     src: "/Videos/Vix.mp4",
//   },
//   {
//     title: "Ad Video",
//     description: "Social media ad to boost engagement",
//     src: "/projects/motion/motion-3.mp4",
//   },
// ];

// const MotionDesignSection = () => {
//   return (
//     <div className="px-14 py-8">
//       <h3 className="text-2xl font-bold text-primary mb-6">
//         Motion Design Projects
//       </h3>

//       <div className="flex flex-col gap-8">
//         {videoProjects.map((video, index) => (
//           <div
//             key={index}
//             className="border rounded-lg shadow-sm overflow-hidden"
//           >
//             {/* Video Player */}
//             <video
//               src={video.src}
//               controls
//               className="w-full h-64 object-cover"
//             />

//             {/* Title & Description */}
//             <div className="p-4">
//               <h4 className="text-lg font-semibold text-primary">
//                 {video.title}
//               </h4>
//               <p className="text-sm text-muted-foreground">
//                 {video.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MotionDesignSection;
