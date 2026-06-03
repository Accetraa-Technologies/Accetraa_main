// Thin React wrappers over the global container CSS classes.
// Use these instead of className="container" to keep markup semantic.

export const Container = ({ children, className = '', as: Tag = 'div', ...props }) => (
  <Tag className={`container${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </Tag>
);

export const NarrowContainer = ({ children, className = '', as: Tag = 'div', ...props }) => (
  <Tag className={`container--narrow${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </Tag>
);

export const WideContainer = ({ children, className = '', as: Tag = 'div', ...props }) => (
  <Tag className={`container--wide${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </Tag>
);

export const FullWidthContainer = ({ children, className = '', as: Tag = 'div', ...props }) => (
  <Tag className={`container--full${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </Tag>
);

export default Container;
