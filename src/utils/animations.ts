export const fadeInUp = "animate-fadeInUp";
export const fadeInDown = "animate-fadeInDown";
export const fadeIn = "animate-fadeIn";
export const slideInLeft = "animate-slideInLeft";
export const slideInRight = "animate-slideInRight";
export const scaleIn = "animate-scaleIn";
export const pulseGlow = "animate-pulseGlow";
export const float = "animate-float";
export const shimmer = "animate-shimmer";
export const rotate3d = "animate-rotate3d";
export const bounce = "animate-bounce";
export const ripple = "animate-ripple";

export const staggerChildren = (index: number) => ({
  animationDelay: `${index * 100}ms`,
});

export const shimmerGradient = "bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:1000px_100%]";

export const rippleEffect = (event: React.MouseEvent<HTMLElement>) => {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};