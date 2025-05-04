import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";

type InputSearchProps = {
  array: string[];
  handleOnChange: Function;
  output: Function;
};

const InputSearch: React.FC<InputSearchProps> = ({
  array,
  handleOnChange,
  output,
}) => {
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
    output(value);
  };

  return (
    <AutoComplete
      style={{ width: 700 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search
        size="large"
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder="Search name..."
        enterButton
      />
    </AutoComplete>
  );
};

export default InputSearch;
