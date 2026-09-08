import * as React from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CustomCardProps extends Omit<
  React.ComponentProps<typeof Card>,
  'title'
> {
  icon?: LucideIcon
  title?: React.ReactNode
  subtitle?: React.ReactNode
  description?: React.ReactNode
  badges?: React.ReactNode[]
  action?: React.ReactNode
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
  iconClassName?: string
  iconWrapperClassName?: string
  backgroundIcon?: LucideIcon
}

export function CustomCard({
  icon: Icon,
  title,
  subtitle,
  description,
  badges,
  action,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  iconClassName,
  iconWrapperClassName,
  backgroundIcon: BackgroundIcon,
  children,
  ...props
}: CustomCardProps) {
  return (
    <Card
      className={cn(
        'transition-all duration-300 hover:shadow-md relative overflow-hidden',
        className,
      )}
      {...props}
    >
      {BackgroundIcon && (
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
          <BackgroundIcon className="size-24 text-primary" />
        </div>
      )}

      <CardHeader className={cn('pb-2', headerClassName)}>
        {(Icon || badges || subtitle) && (
          <div className="flex justify-between items-start mb-4">
            {Icon && (
              <div
                className={cn(
                  'size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center',
                  iconWrapperClassName,
                )}
              >
                <Icon className={cn('size-5', iconClassName)} />
              </div>
            )}
            {!Icon && subtitle && (
              <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                {subtitle}
              </div>
            )}
            {badges && (
              <div className="flex gap-2 flex-wrap justify-end">
                {badges.map((badge, index) => (
                  <React.Fragment key={index}>{badge}</React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}

        {Icon && subtitle && (
          <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2">
            {subtitle}
          </div>
        )}

        {title && (
          <CardTitle className="text-xl font-bold text-foreground">
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className="text-muted-foreground mt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {children && (
        <CardContent className={contentClassName}>{children}</CardContent>
      )}

      {action && <CardFooter className={footerClassName}>{action}</CardFooter>}
    </Card>
  )
}
