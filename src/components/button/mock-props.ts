import { ButtonProps } from './button'

export const mockProps: Record<string, ButtonProps> = {
  primary: {
    variant: 'primary'
  },
  secondary: {
    variant: 'secondary'
  },
  primaryDestructive: {
    variant: 'primary',
    destructive: true
  },
  secondaryDestructive: {
    variant: 'secondary',
    destructive: true
  },
  primaryDisabled: {
    variant: 'primary',
    disabled: true
  },
  secondaryDisabled: {
    variant: 'secondary',
    disabled: true
  }
}
