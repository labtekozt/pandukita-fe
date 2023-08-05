import React, { useContext, useEffect, useRef, useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { StepperContext } from "./StepperContext";
import { srcImage } from "../../helpers/url";

function Informasi() {
  const { data, handleChange, handleImageArray } = useContext(StepperContext);

  const removeTags = (indexToRemove) => {
    const newTags = [
      ...data.category.filter((_, index) => index !== indexToRemove),
    ];
    handleChange({
      target: {
        id: "category",
        value: newTags,
      },
    });
  };

  const addTags = (event) => {
    if (event.target.value !== "") {
      const newTags = [...data.category, event.target.value];
      handleChange({
        target: {
          id: "category",
          value: newTags,
        },
      });
      event.target.value = "";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTags(event);
    }
    if (event.key === "Backspace" && !event.target.value) {
      removeTags(data.category.length - 1);
    }
    // if tab key is pressed
    if (event.key === "Tab") {
      addTags(event);
    }
  };

  const removeImages = (indexToRemove) => {
    const newImages = [
      ...data.image.filter((_, index) => index !== indexToRemove),
    ];
    handleChange({
      target: {
        id: "image",
        value: newImages,
      },
    });
  };

  return (
    <div>
      <div className="m-5">
        <div className="mt-5 mb-6">
          <h1 className="text-md mb-1">Nama tempat wisata</h1>
          <div className="flex mt-1">
            <input
              style={{ padding: "10px" }}
              name="tujuan"
              id="name"
              onChange={handleChange}
              className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
              placeholder="Ekowisata Cukunyinyi Mangrove..."
              type="text"
              value={data.name}
            />
          </div>
        </div>

        <div className="mt-5 mb-6">
          <h1 className="text-md mb-1">
            Foto wisata{" "}
            <span
              style={{
                textAnchor: "middle",
                fontSize: 12,
                color: "green",
              }}
            >
              *max 4 image
            </span>
          </h1>
          <div className="flex flex-wrap max-w-sm">
            {/* max data.image > 4 */}
            {data.image.length < 4 && (
              <label className="ml-1 mt-2 cursor-pointer bg-[#f5f8fa] flex flex-col text-gray justify-center rounded-md border-dotted border-2 border-[gray] items-center w-[100px] h-[170px]">
                <span>
                  <IconPlus width={20} />
                </span>
                <span className="text-sm">Add Image </span>
                <input
                  type="file"
                  name="images"
                  multiple
                  id="image"
                  accept="image/png image/jpeg"
                  onChange={handleImageArray}
                  style={{ display: "none", visibility: "none" }}
                />
              </label>
            )}
            {data.image &&
              data.image.map((image, index) => {
                return (
                  <div className="ml-2 mt-2" key={index}>
                    <img
                      src={srcImage(image)}
                      onClick={() => removeImages(index)}
                      alt="image"
                      placeholder="image"
                      loading="lazy"
                      className="w-[100px] cursor-pointer h-[170px] rounded-md object-cover"
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mt-3">
          <h1 className="mb-1 text-md">Deskripsi tempat wisata</h1>
          <textarea
            id="description"
            onChange={handleChange}
            value={data.description}
            className="w-full h-[100px] bg-[#e8edf1]  p-2 rounded-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
            placeholder="Deskripsi Tempat Wisata...."
            name="catatan"
          ></textarea>
        </div>
      </div>

      {/* Kategori */}
      <div className="m-5 mb-[30%]">
        <div className="mt-5 mb-3">
          <h1 className="text-md mb-1">Kategori</h1>
          <div className="flex mt-1">
            <input
              style={{ padding: "10px" }}
              name="category"
              className="w-full placeholder:text-sm placeholder:text-slate-400 block bg-[#e8edf1] rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-none focus:ring-[#f0ecec] focus:ring-1 md:text-md"
              placeholder="Mangrove *click enter/tab to add tags"
              type="text"
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className="wrapper ">
          {data.category.map((tag, index) => (
            <div
              key={index}
              // add style when click keyboard tab add tags value
              className="ml-1 flex bg-[#F2F2F2] px-3 py-1 shadow-lg rounded-full"
              // get random color base  on index
              style={{
                borderColor: `#${Math.floor(Math.random() * 16777215).toString(
                  16
                )}`,
                borderWidth: "1px",
              }}
            >
              <p
                onClick={() => removeTags(index)}
                className="mr-2 text-gray-400 text-md cursor-pointer"
              >
                X
              </p>
              <h1 className="text-md text-gray-600 ml-1">{tag}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Informasi;
