import { useTransform } from 'framer-motion';
import React, { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
  children: ReactNode;
  model: CarModel;
}

type SectionDimension = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({children, model}) => {

  const getSetctionDimensions = useCallback(() => {
      return {
        offsetTop: model.sectionRef.current?.offsetTop,
        offsetHeight: model.sectionRef.current?.offsetHeight,
      } as SectionDimension

  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimension>(getSetctionDimensions())

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSetctionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)

  }, []) // Hook Disparado com base no layout

  const { scrollY } = useWrapperScroll()

  const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

  const opacity = useTransform(
    sectionScrollProgress, 
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )

  const pointerEvents = useTransform(opacity, value => value > 0 ? 'auto' : 'none')

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>
}

export default ModelOverlay;