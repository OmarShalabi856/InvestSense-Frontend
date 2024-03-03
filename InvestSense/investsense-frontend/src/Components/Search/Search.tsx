import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
  search: string | undefined;
}

const Search: React.FC<Props> = ({
  onSearch,
  onSearchSubmit,
  search,
}: Props): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full bg-slate-100">
      <div className="bg-blue-button w-1/2 h-28 rounded flex items-center justify-center m-3">
      <form className=" flex items-center justify-center w-full" onSubmit={onSearchSubmit}>
        <input
          className="bg-white w-2/3 rounded justify-center p-2 w-500 border-neutral-400 focus:border-neutral-600 focus:outline-zinc-500 shadow-md"
          value={search}
          onChange={onSearch}
        />
      </form>
    </div>
      </div>
     
  );
};

export default Search;
