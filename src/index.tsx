import { SurfaceBackground, SurfaceContext } from "azure-devops-ui/Surface";
import React from "react";
import ReactDOM from "react-dom";
import AllowedValues from "./allowedValues";
import LabelValues from "./labelValues";
import State from "./Fields/state";
import Identity from "./Fields/identity";
import Toggle from "./Fields/toggle";
import TextField from "./Fields/textField";
import "./iconFont.css";
import { Card, CardContent } from "azure-devops-ui/Card";
import { FocusZone } from "azure-devops-ui/FocusZone";
import { FocusGroup } from "azure-devops-ui/FocusGroup";
import { Panel } from "azure-devops-ui/Panel";
import { Button } from "azure-devops-ui/Button";
import { ContentSize } from "azure-devops-ui/Callout";

const Content = props => {
  return (
    <SurfaceContext.Provider value={{ background: SurfaceBackground.neutral }}>
      <div className={props.isPanel ? "flex-column" : "flex-row"}>
        <div className="flex-column main-content flex-stretch">
          <Card
            headerDescriptionProps={{
              text: "Description",
              className: "body-l font-weight-semibold"
            }}
            headerCommandBarItems={[
              {
                important: true,
                subtle: true,
                id: "edit",
                iconProps: {
                  iconName: "Edit"
                }
              }
            ]}
          >
            <CardContent contentPadding={false}>
              <div className="flex-column">
                <h3>They had a house of crystal pillars</h3>

                <p>
                  On the planet Mars by the edge of an empty sea, and every
                  morning you could see Mrs. K eating the golden fruits that
                  grew from the crystal walls, or cleaning the house with
                  handfuls of magnetic dust which, taking all dirt with it, blew
                  away on the hot wind. Afternoons, when the fossil sea was warm
                  and motionless, and the wine trees stood stiff in the yard,
                  and the little distant Martian bone town was all enclosed, and
                  no one drifted out their doors, you could see Mr. K himself in
                  his room, reading from a metal book with raised hieroglyphs
                  over which he brushed his hand, as one might play a harp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <FocusGroup>
            <State />
            <Identity />
            <AllowedValues />
            <AllowedValues />
            <TextField />
            <AllowedValues />
            <Toggle />
            <AllowedValues />
            <LabelValues />
          </FocusGroup>
        </div>
      </div>
    </SurfaceContext.Provider>
  );
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open panel</Button>

      <hr />

      {isOpen && (
        <Panel onDismiss={() => setIsOpen(false)} size={ContentSize.Large}>
          <Content isPanel={true} />
        </Panel>
      )}

      <Content />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
