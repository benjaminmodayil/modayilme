import React from 'react';
import { motion } from 'framer-motion';
import Link from './Link';
import useMedia from '../hooks/useMedia';

export default function ServiceSummary({
  onTap,
  isActiveCheck,
  // initialPosY,
  // finalPosY,
  initialPosX,
  finalPosX,
  Icon,
  iconRow,
  title,
  description,
  url,
  image,
  siteName,
  workDescription
}) {
  const size = useMedia(['(min-width: 1024px)', '(min-width: 0)'], ['lg', 'sm']);

  return (
    <motion.div
      className={`bg-white shadow-md rounded pt-4 lg-p-8 max-w-lg lg-max-w-2xl w-full lg-absolute top-0 mb-16 lg-mb-0 ${!isActiveCheck &&
        'cursor-pointer'} ${isActiveCheck ? 'z-10' : 'z-0'}`}
      initial={{ opacity: size !== 'sm' && 0.7, x: initialPosX }}
      animate={{
        x: size === 'sm' ? 0 : isActiveCheck ? finalPosX : initialPosX,
        opacity: isActiveCheck || size === 'sm' ? 1 : 0.7,
        scale: isActiveCheck || size === 'sm' ? 1 : 0.5
      }}
      onTap={onTap}
    >
      <h3 className="flex justify-center items-center text-2xl leading-none text-lg font-semibold font-special text-red-500">
        {/*        <Icon
          width="40"
          height="40"
          className="mr-2 stroke-current group-hover-text-white"
        /> */}
        {title}
      </h3>
      <div className="mt-6 flex justify-between items-center w-48 mx-auto">
        {iconRow.map((Icon, index) => {
          return Icon;
        })}
      </div>
      <p
        className="mt-4 leading-relaxed max-w-lg mx-auto text-base lg-text-lg px-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link
        isExternal="true"
        to={url}
        className={`shadow rounded flex max-w-lg mx-auto mt-12 ${!isActiveCheck &&
          'pointer-events-none'}`}
      >
        <span
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${image})`,
            width: '240px',
            height: 'auto'
          }}
        />
        <div className="p-4">
          <h4 className="font-semibold mb-2 text-purple-600">{siteName}</h4>
          <p className="mb-2 text-sm italic leading-normal">{workDescription}</p>

          <span className="text-sm text-purple-600 font-semibold self-end hover-underline">
            Visit
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
