import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";

type InputSearchProps = {
  array: string[];
};

const InputSearch: React.FC<InputSearchProps> = ({ array }) => {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const handleSearch = (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    const filtered = array
      .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      .map((item) => ({ value: item }));

    setOptions(filtered);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      style={{ width: 700 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large" placeholder="Search name..." enterButton />
    </AutoComplete>
  );
};

export default InputSearch;
