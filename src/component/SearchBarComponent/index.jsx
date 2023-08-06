import HeaderSearch from "../../disk/image/HeaderSearch.png";
import { IconSearch } from "@tabler/icons-react";
import { Stack } from "@kiwicom/orbit-components/lib/";

export default function SearchBar({ search, handleSearch, searchHandle }) {
  // handleWhem user press enter
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchHandle();
    }
  };

  return (
    <>
      <div className="mb-[50px]">
        <img
          alt="header"
          loading="lazy"
          src={HeaderSearch}
          className="relative w-[100%] h-[148px] object-cover"
        />
        <div className="absolute top-0 m-5 w-[100%]">
          <Stack spacing="large" direction="column">
            <div className="relative search flex mt-[60px]" style={{
              maxWidth: "95%",
            }}>
              <input
                value={search}
                onChange={handleSearch}
                spellCheck={true}
                onKeyDown={handleEnter}
                className="input t-3 p-3 bg-white-100 rounded-full"
                placeholder="Cari tempat wisata"
              />
              <IconSearch
                onClick={searchHandle}
                className="text-black search-icon absolute right-5 top-3"
              />
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
}
