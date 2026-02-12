
import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Settings, 
  ShieldCheck, 
  Layout, 
  Layers, 
  HardHat, 
  Grid
} from 'lucide-react';
import { Service, Product, Review, Job } from './types';

export const SERVICES: Service[] = [
  {
    title: "Recruitment & Talent Acquisition",
    description: "Expert sourcing and selection of top-tier talent tailored to your organizational needs, ensuring a perfect fit for every role."
  },
  {
    title: "Workforce Consulting & Solutions",
    description: "Strategic planning and manpower solutions to optimize your operational capacity and scale your workforce efficiently."
  },
  {
    title: "HR Operations & Support",
    description: "Comprehensive administrative and operational HR support to streamline your backend processes and compliance."
  },
  {
    title: "Employer Branding & Strategy",
    description: "Developing robust talent strategies and employer brands that attract and retain the industry's best professionals."
  },
  {
    title: "Industry Specific Support",
    description: "Dedicated workforce solutions specifically designed for the construction and building materials industry ecosystem."
  }
];

export const PRODUCTS: Product[] = [
  {
    name: "Bricks",
    description: "Premium clay bricks known for durability, thermal performance, and timeless aesthetic appeal.",
    icon: <Grid className="w-6 h-6 text-[#d35400]" />
  },
  {
    name: "Pavers",
    description: "Versatile and robust paving solutions for commercial and residential landscaping projects.",
    icon: <Layers className="w-6 h-6 text-[#d35400]" />
  },
  {
    name: "Roofing Solutions",
    description: "High-quality terracotta and concrete roofing tiles engineered for the Australian climate.",
    icon: <Layout className="w-6 h-6 text-[#d35400]" />
  },
  {
    name: "Masonry & Materials",
    description: "Specialized building materials and masonry products for foundational strength and architectural detail.",
    icon: <Building2 className="w-6 h-6 text-[#d35400]" />
  }
];

export const REVIEWS: Review[] = [
  {
    name: "James T.",
    text: "The recruitment process was incredibly smooth. They understood my background in construction and placed me in a role that fits perfectly.",
    rating: 5
  },
  {
    name: "Olivia M.",
    text: "Reliable payment systems and great support from the coordination team. I've felt valued as a worker from day one.",
    rating: 5
  },
  {
    name: "Daniel R.",
    text: "Brickworks Agency offers the flexible working arrangements I needed. Their communication is clear and professional.",
    rating: 4
  },
  {
    name: "Sophie L.",
    text: "Highly supportive team. They manage the administrative side of things efficiently so I can focus on my work.",
    rating: 5
  }
];

export const JOBS: Job[] = [
  {
    title: "Manpower Resource Consultant",
    description: "Manage end-to-end recruitment cycles for industrial and construction clients. Requires strong communication and networking skills within the Australian market.",
    link: "https://form.jotform.com/brickworksagency/job-form-application-mrc"
  },
  {
    title: "Human Resource Operations Analyst",
    description: "Support our operational workforce with data-driven HR insights and administrative excellence. Ideal for detail-oriented professionals with a focus on compliance.",
    link: "https://form.jotform.com/brickworksagency/job-form-application-hroa"
  },
  {
    title: "Talent Acquisition Partner",
    description: "Strategic role focusing on long-term talent pipelines for the building materials sector. Drive our employer branding and talent strategy forward.",
    link: "https://form.jotform.com/brickworksagency/job-form-application-tap"
  }
];
