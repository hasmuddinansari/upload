import "./styles.css";
import { ReactSpreadsheetImport, StepType } from "react-spreadsheet-import";
import { useState } from "react";

export default function App() {
  // Determines if modal is visible.
  const [isOpen, setIsOpen] = useState(false);

  // Called when flow is closed without reaching submit.
  function onClose() {
    console.log("onClose");
    setIsOpen(false);
  }
  // Called after user completes the flow. Provides data array, where data keys matches your field keys.
  function onSubmit(data: any) {
    console.log(data);
  }

  const fields = [
    {
      // Visible in table header and when matching columns.
      label: "Name",
      // This is the key used for this field when we call onSubmit.
      key: "name",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["first name", "first"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input",
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "Stephanie",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "Name is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error",
        },
      ],
    },
  ] as const;

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open</button>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  );
}
