import React from "react";
import Schematic from "./Schematic";

const B3 = {
  components: [
    {
      id: "B3",
      label: "Coolant Temperature sensor",
      category: "Sensor",
      shape: "rectangle",
      connectors: [
        {
          id: "XB3",
          label: "XB3",
        },
      ],
    },
    {
      id: "ICC",
      label: "Instrument Cluster Controller",
      category: "Transistor",
      shape: "rectangle",
      connectors: [
        {
          id: "XJ1",
          label: "XJ1",
        },
      ],
    },
  ],
  connections: [
    {
      color: "orange",
      from: {
        componentId: "B3",
        connectorId: "XB3",
        cavity: "1",
      },
      to: {
        componentId: "ICC",
        connectorId: "XJ1",
        cavity: "16",
      },
      label: "",
    },
  ],
};

const S4 = {
  components: [
    {
      id: "S4",
      label: "Seat Switch",
      category: "Switch",
      shape: "rectangle",
      connectors: [
        {
          id: "XS4",
          label: "XS4",
        },
      ],
    },
    {
      id: "SPL1",
      label: "Splice",
      category: "Splice",
      shape: "circle",
      connectors: [
        {
          id: "XSP_500",
          label: "XSP_500",
        },
      ],
    },
    {
      id: "ICC",
      label: "Instrument Cluster Controller",
      category: "Instrument",
      shape: "rectangle",
      connectors: [
        {
          id: "XJ2",
          label: "XJ2",
        },
      ],
    },
  ],
  connections: [
    {
      color: "yellow",
      from: {
        componentId: "S4",
        connectorId: "XS4",
        cavity: "2",
      },
      to: {
        componentId: "SPL1",
        connectorId: "XSP_500",
        cavity: "L",
      },
      label: "",
    },
    {
      color: "pink",
      from: {
        componentId: "ICC",
        connectorId: "XJ2",
        cavity: "3",
      },
      to: {
        componentId: "S4",
        connectorId: "XS4",
        cavity: "4",
      },
      label: "",
    },
  ],
};

const S9 = {
  components: [
    {
      id: "S9",
      label: "Light switch",
      category: "Switch",
      shape: "rectangle",
      connectors: [
        {
          id: "XS9",
          label: "XS9",
        },
      ],
    },
    {
      id: "SPL1",
      label: "Splice",
      category: "Splice",
      shape: "circle",
      connectors: [
        {
          id: "XSP_450",
          label: "XSP_450",
        },
      ],
    },
    {
      id: "ICC",
      label: "Instrument Cluster Controller",
      category: "Instrument",
      shape: "rectangle",
      connectors: [
        {
          id: "XJ1",
          label: "XJ1",
        },
      ],
    },
    {
      id: "LC",
      label: "Load Center",
      category: "Instrument",
      shape: "rectangle",
      connectors: [
        {
          id: "X90",
          label: "X90",
        },
      ],
    },
    {
      id: "HR",
      label: "Headlight relay",
      category: "Instrument",
      shape: "rectangle",
      connectors: [
        {
          id: "XK3",
          label: "XK3",
        },
      ],
    },
  ],
  connections: [
    {
      color: "yellow",
      from: {
        componentId: "S9",
        connectorId: "XS9",
        cavity: "B",
      },
      to: {
        componentId: "SPL1",
        connectorId: "XSP_450",
        cavity: "L",
      },
      label: "",
    },
    {
      color: "pink",
      from: {
        componentId: "ICC",
        connectorId: "XJ1",
        cavity: "12",
      },
      to: {
        componentId: "S9",
        connectorId: "XS9",
        cavity: "C",
      },
      label: "",
    },
    {
      color: "yellow",
      from: {
        componentId: "LC",
        connectorId: "X90",
        cavity: "47",
      },
      to: {
        componentId: "S9",
        connectorId: "XS9",
        cavity: "D",
      },
      label: "",
    },
    {
      color: "green",
      from: {
        componentId: "HR",
        connectorId: "XK3",
        cavity: "19",
      },
      to: {
        componentId: "S9",
        connectorId: "XS9",
        cavity: "1",
      },
      label: "",
    },
  ],
};

const S8 = {
  components: [
    {
      id: "S8",
      label: "Brake switch",
      category: "Switch",
      shape: "rectangle",
      connectors: [
        {
          id: "XS8",
          label: "XS8",
        },
      ],
    },
    {
      id: "SPL1",
      label: "Splice",
      category: "Splice",
      shape: "circle",
      connectors: [
        {
          id: "XSP_500",
          label: "XSP_500",
        },
        {
          id: "XSP_767",
          label: "XSP_767",
        },
      ],
    },
    {
      id: "ICC",
      label: "Instrument Cluster Controller",
      category: "Instrument",
      shape: "rectangle",
      connectors: [
        {
          id: "XJ2",
          label: "XJ2",
        },
      ],
    },
  ],
  connections: [
    {
      color: "yellow",
      from: {
        componentId: "S8",
        connectorId: "XS8",
        cavity: "5",
      },
      to: {
        componentId: "SPL1",
        connectorId: "XSP_500",
        cavity: "L",
      },
      label: "",
    },
    {
      color: "violet",
      from: {
        componentId: "S8",
        connectorId: "XS8",
        cavity: "1",
      },
      to: {
        componentId: "SPL1",
        connectorId: "XSP_767",
        cavity: "L",
      },
      label: "",
    },
    {
      color: "violet",
      from: {
        componentId: "ICC",
        connectorId: "XJ2",
        cavity: "3",
      },
      to: {
        componentId: "S8",
        connectorId: "XS8",
        cavity: "1",
      },
      label: "",
    },
  ],
};

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Schematic Viewer</h1>
      <Schematic data={S9} />
    </div>
  );
}
