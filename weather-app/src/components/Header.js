import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import { EuiTitle, EuiPageHeader, EuiPageHeaderSection } from "@elastic/eui";

const Header = () => {
  return (
    <EuiPageHeader>
      <EuiPageHeaderSection>
        <EuiTitle size="l">
          <h1>Weather app for everyone</h1>
        </EuiTitle>
      </EuiPageHeaderSection>
      <EuiPageHeaderSection>
        It's always sunny in Barcelona
      </EuiPageHeaderSection>
    </EuiPageHeader>
  );
};

export default Header;
