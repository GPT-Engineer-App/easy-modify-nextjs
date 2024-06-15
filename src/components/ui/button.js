import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2", className)}
    {...props} />
));
Button.displayName = "Button";

export { Button };