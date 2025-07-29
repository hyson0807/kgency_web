import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Testimonial } from './Testimonial';
import { Button } from './Button';
import { Grid } from './Layout';

export interface CustomerTestimonialsProps {
  testimonials: Array<{
    content: string;
    author: {
      name: string;
      role: string;
      company?: string;
    };
    rating?: number;
    avatar?: string;
  }>;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  variant?: 'grid' | 'carousel' | 'minimal';
  itemsPerPage?: number;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  testimonials,
  stats,
  variant = 'grid',
  itemsPerPage = 2
}) => {
  const { currentTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIdx, endIdx);
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: currentTheme.spacing[16]
      }}>
        <h2 style={{
          fontSize: currentTheme.typography.fontSize['3xl'],
          fontWeight: currentTheme.typography.fontWeight.bold,
          marginBottom: currentTheme.spacing[4],
          color: currentTheme.colors.text.primary
        }}>
          성공 사례
        </h2>
        <p style={{
          fontSize: currentTheme.typography.fontSize.lg,
          color: currentTheme.colors.text.secondary
        }}>
          실제 매칭 성공 스토리
        </p>
      </div>
      
      {variant === 'carousel' && (
        <div style={{ position: 'relative' }}>
          <Grid columns={itemsPerPage as 1 | 2 | 3 | 4 | 6 | 12} gap="8">
            {currentTestimonials.map((testimonial, index) => (
              <Testimonial
                key={startIdx + index}
                content={testimonial.content}
                author={{
                  ...testimonial.author,
                  avatar: testimonial.avatar
                }}
                rating={testimonial.rating}
                variant="featured"
              />
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: currentTheme.spacing[4],
              marginTop: currentTheme.spacing[8]
            }}>
              <Button
                variant="secondary"
                size="sm"
                onClick={handlePrev}
                style={{
                  padding: currentTheme.spacing[2],
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ←
              </Button>
              
              <div style={{
                display: 'flex',
                gap: currentTheme.spacing[2]
              }}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: i === currentPage 
                        ? currentTheme.colors.primary[500]
                        : currentTheme.colors.surfaces.elevated,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentPage(i)}
                  />
                ))}
              </div>
              
              <Button
                variant="secondary"
                size="sm"
                onClick={handleNext}
                style={{
                  padding: currentTheme.spacing[2],
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                →
              </Button>
            </div>
          )}
        </div>
      )}
      
      {variant === 'grid' && (
        <Grid columns={Math.min(testimonials.length, 3) as 1 | 2 | 3 | 4 | 6 | 12} gap="8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={{
                ...testimonial.author,
                avatar: testimonial.avatar
              }}
              rating={testimonial.rating}
              variant="default"
            />
          ))}
        </Grid>
      )}
      
      {variant === 'minimal' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: currentTheme.spacing[6]
        }}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={{
                ...testimonial.author,
                avatar: testimonial.avatar
              }}
              rating={testimonial.rating}
              variant="minimal"
            />
          ))}
        </div>
      )}
      
      {stats && (
        <div style={{ 
          marginTop: currentTheme.spacing[16],
          textAlign: 'center'
        }}>
          <Grid columns={Math.min(stats.length, 12) as 1 | 2 | 3 | 4 | 6 | 12} gap="8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['3xl'],
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.text.accent,
                  marginBottom: currentTheme.spacing[2]
                }}>
                  {stat.value}
                </div>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

