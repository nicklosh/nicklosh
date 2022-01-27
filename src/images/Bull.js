import React from 'react';
import BullSvg from './bull.svg';

export default function Bull({ className }) {
  return <img className={ className } src={ BullSvg } alt="the bull"/>
}
