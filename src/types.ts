export type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
};

export type LicenseType = {
  value: string;
  label: string;
};

export type FormValues = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

export type FormErrors = {
  [K in keyof FormValues]?: string;
};