import React from "react"
import './index.scss';

interface SiteTitle {
  siteTitle: string;
}

export default function Header(props: SiteTitle) {
  const {siteTitle} = props;

  return (
    <div className="mainTitle">
      <h1 className="mainTitleText">{siteTitle}></h1>
      <div className="underlineTitle" />
    </div>
  )
};