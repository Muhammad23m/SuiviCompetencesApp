// shared/data.ts

export interface Category {
    id: number;
    name: string;
  }
  
  export interface Skill {
    id: number;
    categoryId: number;
    name: string;
  }
  
  export const categories: Category[] = [
    { id: 1, name: 'Langages de Programmation' },
    { id: 2, name: 'Bases de Données' },
    { id: 3, name: 'Frameworks Web' },
  ];
  
  export const skills: Skill[] = [
    { id: 1, categoryId: 1, name: 'JavaScript' },
    { id: 2, categoryId: 1, name: 'Python' },
    { id: 3, categoryId: 1, name: 'Java' },
    { id: 4, categoryId: 2, name: 'SQL' },
    { id: 5, categoryId: 2, name: 'NoSQL' },
    { id: 6, categoryId: 3, name: 'Angular' },
    { id: 7, categoryId: 3, name: 'React' },
    { id: 8, categoryId: 3, name: 'Vue.js' },
  ];
  