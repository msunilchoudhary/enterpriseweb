import React, { useEffect, useRef, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

function SelectCatDropDown({ data, placeholder }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listItems, setListItems] = useState(data);
  const [listItems2, setListItems2] = useState(data);

  const dropdownRef = useRef(null);

  const openDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleItemIndex = (index, name) => {
    setItemIndex(index);
    setIsDropDown(false);
    setSelectedItem(name);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listItems2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });
    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    setListItems(list2);
    // console.log(list2);
  };

  return (
    <div className="hdr-category-block" ref={dropdownRef}>
      <span onClick={openDropDown}>{selectedItem}</span>
      <TiArrowSortedDown />
      {isDropDown === true && (
        <div className="hdr-category-lists">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
            onChange={filterList}
          />
          <ul className="listbar">
            <li
              key={0}
              onClick={() => handleItemIndex(0, placeholder)}
              className={`${itemIndex === 0 ? "active" : ""}`}
            >
              {placeholder}
            </li>
            {listItems.map((item, index) => (
              <li
                key={index + 1}
                onClick={() => handleItemIndex(index + 1, item)}
                className={`${itemIndex === index + 1 ? "active" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectCatDropDown;
