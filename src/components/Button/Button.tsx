'use client';

export enum EButtonType {
  PRIMARY = 'PRIMARY',
  PRIMARY_INVERTED = 'PRIMARY_INVERTED',
  SUCCESS = 'SUCCESS',
  DISABLED = 'DISABLED',
  OUTLINE = 'OUTLINE',
  SECONDARY = 'SECONDARY',
}

export interface IButton {
  title: string;
  onClick: () => void;
  type?: EButtonType;
  className?: string;
}

export function Button({ title, type = EButtonType.PRIMARY, onClick, className, ...rest }: IButton): JSX.Element {
  return (
    <button
      data-testid='button'
      className={` border p-1 flex justify-center items-center w-full rounded-full font-bold transition duration-500 transform cursor-pointer hover:scale-105 ease-in-out ${getButtonTypeClassName(
        type
      )} ${className}`}
      onClick={onClick}
      disabled={type === EButtonType.DISABLED}
      {...rest}
    >
      <p className={type === EButtonType.OUTLINE ? 'm-0' : ''}>{title}</p>
    </button>
  );
}

export function getButtonTypeClassName(type: EButtonType): string {
  switch (type) {
    case EButtonType.SECONDARY:
      return 'bg-secondary hover:bg-secondaryHover text-white font-bold py-2 px-4 h-full focus:bg-secondaryFocus';
    case EButtonType.SUCCESS:
      return 'px-2 text-white bg-primary';
    case EButtonType.PRIMARY:
      return 'bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded h-full focus:bg-primaryFocus';
    case EButtonType.PRIMARY_INVERTED:
      return 'h-full bg-primary border-primary  text-white px-4 hover:text-primary hover:bg-white focus:text-primaryFocus focus:border-primaryFocus';
    case EButtonType.DISABLED:
      return 'bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded h-full hover:cursor-auto';
    case EButtonType.OUTLINE:
      return 'bg-transparent hover:bg-primary text-primary font-semibold hover:text-white px-4 border border-primary hover:border-transparent rounded';
  }
}
