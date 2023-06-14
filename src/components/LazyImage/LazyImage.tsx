import { useInView } from 'react-intersection-observer';
import { ComponentProps } from 'react';

export default function LazyImage({ src, ...props }: ComponentProps<'img'>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return <img ref={ref} src={inView ? src : undefined} {...props} />;
}
