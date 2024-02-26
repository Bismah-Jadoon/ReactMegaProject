import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full ">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 runded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* select mn options dainy party options loop krny prty r options sy ik array hi milta hai agr array na lo to problem hoti hai is lia hm problem ko avoid krny k lia array lagaty hn */}
        {/* ho skta hai options mn value na ho to agr hm us py .map ya loop directly lgain gy to program crash kry ga is lia hm nay usy condition dy d k agr value us k andar hai loop krny layak to loop kro*/}
        {options?.map((option) => (
            <option key={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
