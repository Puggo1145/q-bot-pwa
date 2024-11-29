import { AlertTriangleIcon } from "lucide-react";

interface AuthErrorProps {
  error?: string;
}

export function AuthError({ error }: AuthErrorProps) {
  if (!error) return null;
  
  return (
    <div className="p-3 bg-destructive/15 text-destructive text-sm rounded-md">
      <AlertTriangleIcon className="inline-block mr-2 size-4" />
      {error}
    </div>
  );
}
