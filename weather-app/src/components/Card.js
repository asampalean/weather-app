import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
} from "@elastic/eui";

const wrappingExampleStyle = {
  width: 290,
  padding: 160,
  margin: 200,
  background: "rgba(254, 228, 181, 0.5)",
};
const Card = () => {
  return (
    <EuiFlexGroup gutterSize="s">
      <EuiFlexItem grow={false}>
        <div style={{ wrappingExampleStyle }}>
          <EuiTitle>
            <h2>How can I use CSS in here ?? So frustrating!!!</h2>
          </EuiTitle>
        </div>
        <EuiCard
          // layout="horizontal"

          icon={<EuiIcon size="xs" type={"logoBeats"} />}
          title={"Elastic Beats"}
          description="This card adds uses an 'xl' size icon which works well in a horizontal layout."
          onClick={() => window.alert("Card clicked")}
        />
      </EuiFlexItem>
      <span style={{ wrappingExampleStyle }}>Why???</span>
    </EuiFlexGroup>
  );
};

export default Card;
