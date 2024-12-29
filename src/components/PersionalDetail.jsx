import React, { useState } from "react";
import { Building, IdCard, Mail, Phone, User } from "lucide-react";
import { InputFields, OptionInput } from "./smallcomponents";

const PersionalDetail = () => {
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      driverId: "",
      city: "",
      vendor: "",
  });

  const handleChange = (e) => {
    // Update the formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  const inputData = [
    {
      id: "first-name",
      label: "First Name",
      placeholder: "Enter First Name",
      type: "text",
      required: true,
      icon: User,
      name: "firstName",
    },
    {
      id: "last-name",
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
      required: true,
      icon: User,
      name: "lastName",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
      icon: Mail,
      name: "email",
    },
    {
      id: "phone-number",
      label: "Phone Number",
      placeholder: "Phone Number",
      type: "tel",
      required: false,
      icon: Phone,
      name: "phoneNumber",
    },
    {
      id: "driver-id",
      label: "Driver Id",
      placeholder: "Enter Driver Id",
      type: "text",
      required: false,
      icon: IdCard,
      name: "driverId",
    },
  ];

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];
  const vendors = ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4"];

  return (
    <form onSubmit={handleSubmit} className="h-fit">
      <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 gap-4 sm:grid-cols-2 sx:grid-cols-2  gap-4 p-3">
        {inputData.map((input) => (
          <InputFields
            key={input.id}
            id={input.id}
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
            required={input.required}
            Icon={input.icon}
            name={input.name}
            value={formData[input.name]}
            onChange={handleChange}
          />
        ))}

        <OptionInput
          options={cities}
          Icon={Building}
          def="Select City"
          required={true}
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <OptionInput
          options={vendors}
          Icon={Building}
          def="Select Vendor"
          required={true}
          label="Vendors"
          name="vendor"
          value={formData.vendor}
          onChange={handleChange}
        />
      </div>

      <div className="p-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PersionalDetail;
