import React from 'react';
import { motion } from 'framer-motion';
import Link from './Link';
import useMedia from '../hooks/useMedia';

export default function ServiceSummary({
  onTap,
  isActiveCheck,
  initialPosY,
  finalPosY,
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
      className={`bg-white shadow-md rounded p-4 lg-p-8 max-w-lg lg-max-w-2xl w-full absolute ${!isActiveCheck &&
        'cursor-pointer'} ${isActiveCheck ? 'z-10' : 'z-0'}`}
      initial={{ opacity: 0.7, x: initialPosX, y: initialPosY }}
      animate={{
        x: size === 'sm' ? 0 : isActiveCheck ? finalPosX : initialPosX,
        y: size === 'lg' ? 0 : isActiveCheck ? finalPosY : initialPosY,
        opacity: isActiveCheck ? 1 : 0.7,
        scale: isActiveCheck ? 1 : 0.5
      }}
      onTap={onTap}
    >
      <h3 className="flex justify-center items-center text-2xl leading-none text-lg font-semibold font-sans text-purple-600 -ml-12">
        <Icon
          width="52"
          height="52"
          className="mr-2 stroke-current group-hover-text-white"
        />
        {title}
      </h3>
      <div className="mt-6 flex justify-between w-48 mx-auto">
        {iconRow.map((Icon, index) => {
          return <Icon key={index} width="60" height="60" />;
        })}
      </div>
      <p className="mt-4 leading-normal max-w-lg mx-auto text-base lg-text-lg">
        {description}
      </p>
      <Link
        isExternal="true"
        to={url}
        className={`bg-white rounded flex block shadow-md max-w-lg mx-auto mt-12 ${!isActiveCheck &&
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
          <h4 className="font-semibold mb-2">{siteName}</h4>
          <p className="mb-2 text-sm italic leading-normal">{workDescription}</p>

          <span className="text-sm text-purple-600 font-semibold self-end hover-underline">
            Visit
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
