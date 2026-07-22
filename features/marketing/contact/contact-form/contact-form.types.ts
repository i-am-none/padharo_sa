export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  occasion?: string;
  message: string;
};

export type ContactFormContentModel = {
  id: string;
  headline: string;
  description: string;
};
