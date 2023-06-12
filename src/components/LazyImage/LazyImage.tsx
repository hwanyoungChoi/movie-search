import { useInView } from 'react-intersection-observer';
import { HTMLProps } from 'react';

export default function LazyImage({
  src,
  ...props
}: HTMLProps<HTMLImageElement>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return <img ref={ref} src={inView ? src : undefined} {...props} />;
}
