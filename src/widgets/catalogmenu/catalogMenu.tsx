import "./catalogmenu.css";
import { CatalogMenuFolder } from "../catalogmenufolder/catalogmenufolder";
import { useState } from "react";

export function CatalogMenu(props: any) {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <>
      <div className="menu">
        {props.categories.map((category: string, index: number) => {
          return (
            <div
              onMouseEnter={() => {
                setIsActive(index);
              }}
            >
              <CatalogMenuFolder
                category={category}
                // podcategories={category.slice(-(category.length - 1))}
                // isActive={isActive}
              />
            </div>
          );
        })}
        {/*{props.categories[isActive].index}*/}
      </div>
    </>
  );
}
