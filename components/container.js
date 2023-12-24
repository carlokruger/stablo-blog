import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "bg-container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className,
        "w-screen"
      )}>
      {props.children}
    </div>
  );
}
