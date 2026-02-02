
import React from 'react';

export interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ConsultationMessage {
  role: 'user' | 'assistant';
  content: string;
}