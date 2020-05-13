import React from "react"
import './index.scss';

interface SiteTitle {
  siteTitle: string;
}

export default function Header(props: SiteTitle) {
  const { siteTitle } = props;

  return (
    <div className="mainTitle">
      <h1 className="mainTitleText underlineTitle">{siteTitle}</h1>
      <h4 id="credit">by Juliette Chevalier</h4>
      {/* <img src={require("../../images/admios.png")} alt="Admios" className="tintedLogo" /> */}
    </div>
  )
};