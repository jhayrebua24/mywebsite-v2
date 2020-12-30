const transition = { duration: 0.5 };

export const variants = {
  firstText: {
    animate: {
      y: 0,
      transition,
    },
    initial: { y: -200 },
  },
  secondText: {
    animate: {
      x: 0,
      transition,
    },
    initial: { x: 200 },
  },
  thirdText: {
    animate: {
      y: 0,
      transition,
    },
    initial: { y: 200 },
  },
  name: {
    animate: {
      y: 0,
      transition: { duration: 0.7 },
    },
    initial: { y: -200 },
  },
};
