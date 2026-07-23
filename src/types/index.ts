import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}
