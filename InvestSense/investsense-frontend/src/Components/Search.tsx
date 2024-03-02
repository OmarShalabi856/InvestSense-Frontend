import React, { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  function ClickButton(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <input value={search} onChange={(e) => onSearch(e)} />
      <button onClick={(e)=>ClickButton(e)}></button>
    </div>
  );
};

export default Search;
