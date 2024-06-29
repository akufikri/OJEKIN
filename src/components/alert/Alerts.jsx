import {
      Alert,
      AlertDescription,
      AlertTitle,
} from "@/components/ui/alert"

// Definisikan prop types jika menggunakan TypeScript
/*
interface CustomAlertProps {
  icon?: LucideIcon;
  title?: string;
  description: string;
  variant?: "default" | "destructive";
}
*/

export function CustomAlert({ icon: Icon, title, description, variant = "default" }) {
      return (
            <Alert variant={variant}>
                  {Icon && <Icon className="h-4 w-4" />}
                  {title && <AlertTitle>{title}</AlertTitle>}
                  <AlertDescription>
                        {description}
                  </AlertDescription>
            </Alert>
      )
}