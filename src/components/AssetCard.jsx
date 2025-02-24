import React from "react";
import { useTranslation } from "react-i18next";

const AssetCard = ({ image, title, duration, definition, types, typeTitle }) => {
  const { t } = useTranslation();
  return (
    <div className="asset-card">
      <img src={image} alt={title} className="asset-image" />
      <h3 className="asset-title">{title}</h3>
      <p className="asset-duration"><strong>{duration}</strong></p>
      <p className="asset-definition"><em>{t('servicesDefinition')}</em> {definition}</p>
      <p className="asset-type-title"><strong>{typeTitle}:</strong></p>
      <p className="asset-types">{types}</p>
    </div>
  );
};

export default AssetCard;