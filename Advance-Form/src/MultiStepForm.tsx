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

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault()
    if (validate()) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg space-y-5"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Step {step} of 3</h2>
          <p className="text-sm text-gray-500">Complete the form to continue</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="text-gray-700">
              <strong>Name:</strong> {formData.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {formData.email}
            </p>
          </div>
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Back
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="ml-auto px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
