import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Button } from './Button';
import { Input } from './Input';

export interface ContactFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: (data: ContactFormData) => void;
  fields?: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    company?: boolean;
    subject?: boolean;
    message?: boolean;
  };
  variant?: 'default' | 'minimal' | 'bordered';
  submitText?: string;
  loading?: boolean;
}

export interface ContactFormData {
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  fields = {
    name: true,
    email: true,
    phone: false,
    company: false,
    subject: true,
    message: true,
  },
  variant = 'default',
  submitText = 'Send Message',
  loading = false,
  style,
  ...props
}) => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<Partial<ContactFormData>>({});

  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          backgroundColor: 'transparent',
          padding: 0,
        };
      case 'bordered':
        return {
          backgroundColor: currentTheme.colors.surfaces.background,
          border: `2px solid ${currentTheme.colors.border.primary}`,
          borderRadius: currentTheme.borderRadius.xl,
          padding: currentTheme.spacing[8],
        };
      default:
        return {
          backgroundColor: currentTheme.colors.surfaces.elevated,
          borderRadius: currentTheme.borderRadius.lg,
          padding: currentTheme.spacing[8],
          boxShadow: currentTheme.shadows.sm,
        };
    }
  };

  const formStyle = {
    ...getVariantStyles(),
    ...style,
  };

  const fieldGroupStyle = {
    marginBottom: currentTheme.spacing[6],
  };

  const labelStyle = {
    display: 'block',
    marginBottom: currentTheme.spacing[2],
    fontSize: currentTheme.typography.fontSize.sm,
    fontWeight: currentTheme.typography.fontWeight.medium,
    color: currentTheme.colors.text.primary,
  };

  const textareaStyle = {
    width: '100%',
    padding: `${currentTheme.spacing[3]} ${currentTheme.spacing[4]}`,
    backgroundColor: currentTheme.colors.surfaces.background,
    border: `1px solid ${currentTheme.colors.border.primary}`,
    borderRadius: currentTheme.borderRadius.md,
    fontSize: currentTheme.typography.fontSize.base,
    color: currentTheme.colors.text.primary,
    fontFamily: currentTheme.typography.fontFamily.primary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
    resize: 'vertical' as const,
    minHeight: '120px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const errorStyle = {
    fontSize: currentTheme.typography.fontSize.sm,
    color: currentTheme.colors.error[600],
    marginTop: currentTheme.spacing[1],
  };

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: currentTheme.spacing[4],
    marginBottom: currentTheme.spacing[6],
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (fields.name && !formData.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (fields.phone && formData.phone && !/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (fields.subject && !formData.subject?.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (fields.message && !formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && !loading) {
      onSubmit(formData);
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit} {...props}>
      {fields.name && fields.email && (
        <div style={rowStyle}>
          <div>
            <label style={labelStyle}>Name *</label>
            <Input
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Your name"
              error={errors.name}
              disabled={loading}
            />
            {errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="your@email.com"
              error={errors.email}
              disabled={loading}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>
        </div>
      )}

      {!fields.name && fields.email && (
        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Email *</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your@email.com"
            error={errors.email}
            disabled={loading}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>
      )}

      {(fields.phone || fields.company) && (
        <div style={rowStyle}>
          {fields.phone && (
            <div>
              <label style={labelStyle}>Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+1 (555) 000-0000"
                error={errors.phone}
                disabled={loading}
              />
              {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
            </div>
          )}
          {fields.company && (
            <div>
              <label style={labelStyle}>Company</label>
              <Input
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Your company"
                disabled={loading}
              />
            </div>
          )}
        </div>
      )}

      {fields.subject && (
        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Subject *</label>
          <Input
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder="How can we help you?"
            error={errors.subject}
            disabled={loading}
          />
          {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
        </div>
      )}

      {fields.message && (
        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Message *</label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us more about your project..."
            style={{
              ...textareaStyle,
              borderColor: errors.message ? currentTheme.colors.error[500] : textareaStyle.border,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = currentTheme.colors.border.focus;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.message 
                ? currentTheme.colors.error[500] 
                : currentTheme.colors.border.primary;
            }}
            disabled={loading}
          />
          {errors.message && <div style={errorStyle}>{errors.message}</div>}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        style={{ width: '100%' }}
      >
        {loading ? 'Sending...' : submitText}
      </Button>
    </form>
  );
};