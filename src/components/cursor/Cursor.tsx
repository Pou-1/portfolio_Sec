import ArrowLogo from "../../assets/logo/ArrowLogo";
import LaravelLogo from "../../assets/logo/LaravelLogo";
import MailLogo from "../../assets/logo/MailLogo";
import { useCursor } from "./CursorFunct";

const icons: { [key: string]: React.ElementType } = {
  mail: MailLogo,
  arrow: ArrowLogo,
  laravel: LaravelLogo,
};

const Cursor = () => {
  const {
    position,
    size,
    radius,
    isHovering,
    background,
    borderWidth,
    borderColor,
    iconName,
    text,
    textColor,
    textSize,
  } = useCursor();

  const IconComponent = iconName ? icons[iconName] : null;

  return (
    <div
      key="Cursor"
      className={`fixed top-0 left-0 pointer-events-none z-[100] gap-2 flex transition-all duration-300 ease-out
        ${background} ${borderColor} ${isHovering && ''} rounded-full flex items-center justify-center`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        borderTopLeftRadius: radius.topLeft,
        borderTopRightRadius: radius.topRight,
        borderBottomLeftRadius: radius.bottomLeft,
        borderBottomRightRadius: radius.bottomRight,
        borderWidth: borderWidth,
        borderStyle: "solid",
      }}
    >
      {IconComponent && <IconComponent size={20} className="text-white" />}
      {text && (
        <span className={`${textColor} ${textSize} truncate font-medium`}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Cursor;
