import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const SkeletonLoader = () => (
  <div className="aspect-square rounded-xl bg-Border animate-pulse absolute inset-0"></div>
);


const GridItem = ({ item }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div
      layout
      layoutId={item.id}
      initial={{ opacity: 0.5, }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.4 }}
      className="aspect-square rounded-xl bg-Nav pb-2">
      <div className="mx-4 mt-4 aspect-square rounded-xl bg-Bg transition-all duration-500 ease-in-out relative">
        {!isImageLoaded && <SkeletonLoader />}
        <img
          className={`h-full w-full rounded-xl ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={item?.imageUrl}
          alt={item?.name}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(false)}
          loading="lazy"
      
        />
      </div>
      <div className="mx-4 mt-2 flex items-center justify-between">
        <h1 className="font-semibold text-white">{item?.ComponentName}</h1>
        <button className="rounded-md bg-Border p-1 text-Logo">
          <Link to={item.isUploaded ? `/gallery/PreviewPage/${item?.ComponentName}` : "/ComponentNotFound404"}>
            <Code strokeWidth="3" />
          </Link>
        </button>
      </div>
    </motion.div>
  );
};
const GalleryGrids = ({ Data }) => {
  return (
    <motion.div

      className="mt-6 grid w-full max-w-[1200px] grid-cols-1 place-content-center gap-6 md:grid-cols-2 lg:grid-cols-3" layout>

      <AnimatePresence>
        {Data?.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </AnimatePresence>

    </motion.div>
  );
};


export default GalleryGrids;
