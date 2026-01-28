import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type FormErrors = Partial<FormData>;

const initialData: FormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.includes("@"))
        newErrors.email = "Invalid email address";
    }

    if (step === 2) {
      if (formData.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";

      if (formData.confirmPassword !== formData.password)
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
        <h2 className="text-xl font-bold">Step {step}</h2>

        {step === 1 && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </>
        )}

        {step === 3 && (
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}

          {step < 3 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </>
  );
};

export default MultiStepForm;
