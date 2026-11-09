import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Form from "./index";
import type { FormSetup } from "../../types";

const setup: FormSetup = {
  title: "Test form",
  generalErrorMessage: "Please complete the form.",
  colors: { primary: "#123456" },
  fields: [
    {
      kind: "text",
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Name",
      isRequired: true,
      regexPattern: /^.{3,}$/,
      errorMessage: "Enter at least three characters.",
    },
    {
      kind: "select",
      id: "country",
      name: "country",
      placeholder: "Country",
      isRequired: true,
      options: [{ text: "Canada", value: "ca" }],
    },
    {
      kind: "multi-select",
      id: "interests",
      name: "interests",
      placeholder: "Interests",
      options: [{ text: "Music", value: "music" }],
    },
    {
      kind: "option",
      id: "delivery",
      name: "delivery",
      title: "Delivery",
      options: [{ text: "Pickup", value: "pickup" }],
    },
    {
      kind: "button",
      id: "submit",
      caption: "Submit",
    },
  ],
};

afterEach(cleanup);

describe("Form", () => {
  it("uses configured colors and submits typed field values", () => {
    const submittedData = vi.fn();
    const { container } = render(
      <Form setup={setup} submittedData={submittedData} />,
    );

    expect(
      (container.firstChild as HTMLElement).style.getPropertyValue(
        "--form-primary",
      ),
    ).toBe("#123456");

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Morgan" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "ca" },
    });
    fireEvent.click(screen.getByRole("button", { name: /interests/i }));
    fireEvent.click(screen.getByLabelText("Music"));
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(submittedData).toHaveBeenCalledWith({
      name: "Morgan",
      country: "ca",
      interests: ["music"],
    });
  });

  it("prefills every field type and submits the initial values", () => {
    const submittedData = vi.fn();
    render(
      <Form
        setup={setup}
        initialValues={{
          name: "Morgan",
          country: "ca",
          interests: ["music"],
          delivery: "pickup",
        }}
        submittedData={submittedData}
      />,
    );

    expect(screen.getByPlaceholderText("Name")).toHaveProperty(
      "value",
      "Morgan",
    );
    fireEvent.click(screen.getByRole("button", { name: /interests/i }));
    expect(screen.getByLabelText("Music")).toHaveProperty("checked", true);
    expect(screen.getByLabelText("Pickup")).toHaveProperty("checked", true);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(submittedData).toHaveBeenCalledWith({
      name: "Morgan",
      country: "ca",
      interests: ["music"],
      delivery: "pickup",
    });
  });

  it("updates values when asynchronously loaded initial values change", () => {
    const submittedData = vi.fn();
    const { rerender } = render(
      <Form setup={setup} submittedData={submittedData} />,
    );

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Draft" },
    });
    rerender(
      <Form
        setup={setup}
        initialValues={{ name: "Morgan", country: "ca" }}
        submittedData={submittedData}
      />,
    );

    expect(screen.getByPlaceholderText("Name")).toHaveProperty(
      "value",
      "Morgan",
    );
    expect(screen.getByRole("combobox")).toHaveProperty("value", "ca");
  });

  it("shows field errors and does not submit invalid values", () => {
    const submittedData = vi.fn();
    render(<Form setup={setup} submittedData={submittedData} />);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("alert").textContent).toBe(
      "Please complete the form.",
    );
    expect(screen.getByText("Enter at least three characters.")).toBeTruthy();
    expect(submittedData).not.toHaveBeenCalled();
  });
});
