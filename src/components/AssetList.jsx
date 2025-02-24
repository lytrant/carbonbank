import React from "react";
import AssetCard from "./AssetCard";
import "./AssetList.scss";

import { useTranslation } from "react-i18next";

import services_img_4 from '../assets/services_img_4.png';
import services_img_5 from "../assets/services_img_5.png";
import services_img_6 from "../assets/services_img_6.png";


const AssetList = () => {

  const { t } = useTranslation();
  const assetData = [
    {
      image: services_img_4,
      title: t('servicesTitle3'),
      duration: t('servicesDuration1'),
      definition: t('servicesDesc1'),
      typeTitle: t('servicesType1'),
      types: t('servicesDesc1_1'),
    },
    {
      image: services_img_5,
      title: t('servicesTitle4'),
      duration: t('servicesDuration2'),
      definition: t('servicesDesc2'),
      typeTitle: t('servicesType2'),
      types: t('servicesDesc1_2'),
    },
    {
      image: services_img_6,
      title: t('servicesTitle5'),
      duration: t('servicesDuration1'),
      definition: t('servicesDesc3'),
      typeTitle: t('servicesType3'),
      types: t('servicesDesc1_3'),
    }
  ];

  return (
    <div className="asset-list">
      {assetData.map((asset, index) => (
        <AssetCard key={index} {...asset} />
      ))}
    </div>
  );
};

export default AssetList;
