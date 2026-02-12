
import React from 'react';

export interface Service {
  title: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface Job {
  title: string;
  description: string;
  link: string;
}
