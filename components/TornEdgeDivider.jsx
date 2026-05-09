export default function TornEdgeDivider({ fill, className = "" }) {
  return (
    <svg className={`w-full h-8 md:h-12 block ${className}`} preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L1200,0 L1200,20 C1050,90 900,-20 600,40 C300,100 150,0 0,20 Z" fill={fill} />
    </svg>
  );
}
