import React, { useState, useEffect, ReactElement } from "react";

interface SelectProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onChange?: Function;
}

export default function Select(props: SelectProps) {
  const { children, className, onChange } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showChildren, setShowChildren] = useState(false);

  const handleChildren = () => setShowChildren(!showChildren);
  const handleSelect = (index: number) => setSelectedIndex(index);

  useEffect(() => {
    const selectRef = document.getElementById("select");
    function handleClickOutside(event: any) {
      if (selectRef && !selectRef.contains(event.target)) {
        setShowChildren(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <button
      id="select"
      onClick={handleChildren}
      className={`relative flex h-10 appearance-none items-center justify-between gap-2 rounded-md bg-[color:#00BCE3] px-3 text-xs font-black uppercase tracking-tight text-white outline-0 ${className}`}
    >
      {React.Children.toArray(children)[selectedIndex]}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/angle-down-solid.svg?alt=media&token=43de6591-b5b9-460f-98ed-688c2948d90b"
        alt=""
        className="mr-2 h-3 w-3"
        style={{
          filter:
            "invert(100%) sepia(0%) saturate(2%) hue-rotate(186deg) brightness(104%) contrast(101%)",
        }}
      />
      {showChildren && (
        <div className="absolute top-10 left-0 flex h-fit w-fit flex-col items-start justify-center rounded-md border-2 bg-white">
          {React.Children.map(children, (child, key) => (
            <button
              key={key}
              onClick={() => {
                handleSelect(key);
                if (onChange) onChange(key);
              }}
              className="h-8 w-full px-3 text-left text-[color:#00BCE3] hover:bg-[color:#5B5B5B20]"
            >
              {child}
            </button>
          ))}
        </div>
      )}
    </button>
  );
}
