import { twMerge } from "tailwind-merge";
import { Icons } from "./Icons";
import { Fragment } from "react";

export const IconItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex justify-center items-center", className)}>
      <div
        className={twMerge(
          "grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-8",
          itemsWrapperClassName
        )}
      >
        {items.map((item, index) => (
          <Fragment key={index}>
            <div className="flex flex-col items-center p-4">
              <Icons component={item.iconType} />
              <span className="font-semibold text-white"> {item.title} </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
