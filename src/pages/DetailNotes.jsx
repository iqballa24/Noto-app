import React, { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { Button, MoreOptions } from "../components/UI";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import { buttonLang } from "../constant";

const DetailNote = () => {
  const { currentLanguage } = useContext(ThemeContext);
  `
  `;
  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Detail Notes" : "Detail Catatan"}
    >
      <section className="flex flex-col mt-5 p-5 pb-20 border border-gray-500">
        <div className="flex flex-row justify-between items-center">
          <Button type="button" text="back" title="back" isTransparant>
            <IoChevronBack />
            <p>{buttonLang.back[currentLanguage]}</p>
          </Button>
          <MoreOptions />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold py-5 capitalize">
          explore design system
        </h1>
        <p className="text-xs md:text-sm font-light ">Sunday, 24 March 2023</p>
        <p className="text-sm md:text-base pt-7  leading-7 indent-10">
          Dolor sit amet, consectetur adipiscing elit. Ut massa odio, imperdiet
          id efficitur eu, hendrerit a ex. Suspendisse mi augue, euismod eget
          semper ac, laoreet in elit. Vestibulum eget libero quis tortor
          placerat vestibulum. Aliquam consectetur pharetra orci. Morbi feugiat
          fermentum lectus. Sed efficitur risus in ligula facilisis, sed
          dignissim elit porttitor. Pellentesque molestie blandit posuere. Morbi
          suscipit arcu ac sem finibus luctus. Praesent nec convallis erat.
          Quisque ut quam ante. Aenean varius dui in ipsum eleifend, id
          ullamcorper mauris viverra. Nam condimentum sem vitae tincidunt
          consectetur. In sit amet diam tincidunt, pulvinar ante ut, pretium
          sapien. Nunc malesuada nisi sed sem posuere, sit amet bibendum mi
          scelerisque. Donec eu vestibulum magna. Phasellus vitae sapien vitae
          turpis placerat gravida. Quisque vel augue mi. Morbi maximus, nisi a
          gravida pharetra, sem massa accumsan ipsum, quis efficitur velit est
          sit amet eros. Proin sit amet massa tempus nisl venenatis tincidunt at
          quis nisl. Pellentesque varius porta nulla, vitae fringilla eros
          finibus at. Fusce rutrum lobortis eleifend. Aliquam ut sagittis quam.
          Donec pharetra mattis tortor ac rutrum. Cras vitae accumsan nibh.
          Phasellus tempor consequat sem, eu hendrerit lectus suscipit sit amet.
        </p>
      </section>
    </WrapperPages>
  );
};

export default DetailNote;
