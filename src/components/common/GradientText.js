function GradientText({ children, className = "" }) {
  return (
    <span className={`bg-gradient-to-r from-primary-600 to-secondary-700 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

export default GradientText; 