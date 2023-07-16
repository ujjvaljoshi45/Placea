import React from "react";

const sizeClasses = {
  txtSourceSansProBold14WhiteA700bf: "font-bold font-sourcesanspro",
  txtSourceSansProBold24Black900: "font-bold font-sourcesanspro",
  txtSourceSansProBold128: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold40: "font-semibold font-sourcesanspro",
  txtSourceSansProBold48: "font-bold font-sourcesanspro",
  txtSourceSansProRegular20: "font-normal font-sourcesanspro",
  txtSourceSansProSemiBold14: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold13: "font-semibold font-sourcesanspro",
  txtSourceSansProBold40: "font-bold font-sourcesanspro",
  txtSourceSansProBold24Black90001: "font-bold font-sourcesanspro",
  txtInterRegular24: "font-inter font-normal",
  txtSourceSansProBold20: "font-bold font-sourcesanspro",
  txtLexendTeraBold48: "font-bold font-lexendtera",
  txtSourceSansProBold24: "font-bold font-sourcesanspro",
  txtSourceSansProBold14Black900bf: "font-bold font-sourcesanspro",
  txtSourceSansProBold70: "font-bold font-sourcesanspro",
  txtKarlaRegular23: "font-karla font-normal",
  txtLexendTeraBold48Black900: "font-bold font-lexendtera",
  txtSourceSansProBold16: "font-bold font-sourcesanspro",
  txtSourceSansProBold15: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold22: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold64: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold24: "font-semibold font-sourcesanspro",
  txtSourceSansProBold32: "font-bold font-sourcesanspro",
  txtSourceSansProBold12: "font-bold font-sourcesanspro",
  txtSourceSansProBold14Red900: "font-bold font-sourcesanspro",
  txtSourceSansProBold15Black900: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold24Black900a0: "font-semibold font-sourcesanspro",
  txtSourceSansProBold14: "font-bold font-sourcesanspro",
  txtSourceSansProBold13: "font-bold font-sourcesanspro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
