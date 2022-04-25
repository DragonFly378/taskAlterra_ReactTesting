import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Form from "./FormCoding";

describe("Form", () => {
  test("Cek Elemen label", () => {
    render(<Form />);
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan/)
    ).toBeInTheDocument(); // cek struktur html
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan/)
    ).toBeInTheDocument();
  });

  test("Cek Inputan", () => {
    render(<Form />);

    // expect(screen.getByLabelText("Nama Lengkap:")).toBeInTheDocument();
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Apis" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "woy@capung.com" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "123490812793478" },
    });

    expect(screen.getByLabelText(/Email/)).toHaveValue("woy@capung.com");
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Apis");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123490812793478);
  });

  test("Cek Error", () => {
    render(<Form />);

    // expect(screen.getByLabelText("Nama Lengkap:")).toBeInTheDocument();
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "woy" },
    });
    expect(screen.getByLabelText(/Email/)).toHaveValue("woy");
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });
});
