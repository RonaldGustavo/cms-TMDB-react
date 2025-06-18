declare type ClassName = string
declare type ID = string
declare type Variant =  'secondary' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'light-primary' | 'light-info' | 'light-success' | 'light-warning' | 'light-error'
declare type Size = 'sm' | 'lg'
declare type IsDisabled = boolean

export interface ButtonType {
    id?: ID
    className?: ClassName
    variant?: Variant;
    text?: string;
    icon?: string;    
    size?: Size;
    position?: string;
    isDisabled?: IsDisabled
    onClick?: (e?: any) => void;
  }