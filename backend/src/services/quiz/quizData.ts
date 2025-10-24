/**
 * @summary
 * Quiz questions data bank
 *
 * @module services/quiz/quizData
 */

import { Question } from './quizTypes';
import { QUESTION_CATEGORIES } from '@/constants/quiz';

/**
 * @constant QUESTIONS_BANK
 * @description Bank of quiz questions about Adventure Time
 */
export const QUESTIONS_BANK: Question[] = [
  {
    id_pergunta: 'pergunta-001',
    texto_pergunta: 'Qual é o nome completo do protagonista Finn?',
    opcoes: [
      { texto: 'Finn Mertens', correta: true },
      { texto: 'Finn Campbell', correta: false },
      { texto: 'Finn Anderson', correta: false },
      { texto: 'Finn Williams', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-002',
    texto_pergunta: 'Qual é a espécie de Jake?',
    opcoes: [
      { texto: 'Cachorro mágico', correta: true },
      { texto: 'Gato mágico', correta: false },
      { texto: 'Lobo mágico', correta: false },
      { texto: 'Raposa mágica', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-003',
    texto_pergunta: 'Quem é a Princesa do Reino Doce?',
    opcoes: [
      { texto: 'Princesa Jujuba', correta: true },
      { texto: 'Princesa Caroço', correta: false },
      { texto: 'Princesa Chama', correta: false },
      { texto: 'Marceline', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-004',
    texto_pergunta: 'Qual é o nome do Rei Gelado antes de se tornar vilão?',
    opcoes: [
      { texto: 'Simon Petrikov', correta: true },
      { texto: 'Simon Williams', correta: false },
      { texto: 'Simon Anderson', correta: false },
      { texto: 'Simon Campbell', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-005',
    texto_pergunta: 'Marceline é uma rainha de quê?',
    opcoes: [
      { texto: 'Vampiros', correta: true },
      { texto: 'Demônios', correta: false },
      { texto: 'Bruxas', correta: false },
      { texto: 'Fantasmas', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-006',
    texto_pergunta: 'Qual é o nome do irmão de Finn?',
    opcoes: [
      { texto: 'Fern', correta: true },
      { texto: 'Martin', correta: false },
      { texto: 'Joshua', correta: false },
      { texto: 'Billy', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-007',
    texto_pergunta: 'Qual é o nome da espada de Finn?',
    opcoes: [
      { texto: 'Espada Dourada', correta: false },
      { texto: 'Espada de Grama', correta: true },
      { texto: 'Espada de Cristal', correta: false },
      { texto: 'Espada Demoníaca', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.TRIVIA,
  },
  {
    id_pergunta: 'pergunta-008',
    texto_pergunta: 'Quem é o pai de Jake?',
    opcoes: [
      { texto: 'Joshua', correta: true },
      { texto: 'Warren Ampersand', correta: false },
      { texto: 'Martin', correta: false },
      { texto: 'Billy', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-009',
    texto_pergunta: 'Qual é o nome do caracol que aparece em quase todos os episódios?',
    opcoes: [
      { texto: 'Caracol Ondulante', correta: true },
      { texto: 'Caracol Mágico', correta: false },
      { texto: 'Caracol Dourado', correta: false },
      { texto: 'Caracol Veloz', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.TRIVIA,
  },
  {
    id_pergunta: 'pergunta-010',
    texto_pergunta: 'Qual é o nome do reino governado pela Princesa Jujuba?',
    opcoes: [
      { texto: 'Reino Doce', correta: true },
      { texto: 'Reino de Açúcar', correta: false },
      { texto: 'Reino dos Doces', correta: false },
      { texto: 'Reino Caramelo', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.PLOT,
  },
  {
    id_pergunta: 'pergunta-011',
    texto_pergunta: 'Qual é o instrumento musical favorito de Marceline?',
    opcoes: [
      { texto: 'Baixo', correta: true },
      { texto: 'Guitarra', correta: false },
      { texto: 'Bateria', correta: false },
      { texto: 'Teclado', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-012',
    texto_pergunta: 'Qual é o nome do robô criado pela Princesa Jujuba?',
    opcoes: [
      { texto: 'BMO', correta: true },
      { texto: 'NEPTR', correta: false },
      { texto: 'Rattleballs', correta: false },
      { texto: 'Gumball Guardian', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-013',
    texto_pergunta: 'Qual é a cor do chapéu de Finn?',
    opcoes: [
      { texto: 'Branco', correta: true },
      { texto: 'Azul', correta: false },
      { texto: 'Verde', correta: false },
      { texto: 'Amarelo', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.TRIVIA,
  },
  {
    id_pergunta: 'pergunta-014',
    texto_pergunta: 'Quem é o vilão principal da série?',
    opcoes: [
      { texto: 'O Lich', correta: true },
      { texto: 'Rei Gelado', correta: false },
      { texto: 'Hunson Abadeer', correta: false },
      { texto: 'Magic Man', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.PLOT,
  },
  {
    id_pergunta: 'pergunta-015',
    texto_pergunta: 'Qual é o nome da namorada de Jake?',
    opcoes: [
      { texto: 'Lady Rainicorn', correta: true },
      { texto: 'Princesa Caroço', correta: false },
      { texto: 'Princesa Chama', correta: false },
      { texto: 'Turtle Princess', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-016',
    texto_pergunta: 'Quantos anos Finn tinha no início da série?',
    opcoes: [
      { texto: '12 anos', correta: true },
      { texto: '10 anos', correta: false },
      { texto: '14 anos', correta: false },
      { texto: '16 anos', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.TRIVIA,
  },
  {
    id_pergunta: 'pergunta-017',
    texto_pergunta: 'Qual é o nome do pai de Finn?',
    opcoes: [
      { texto: 'Martin', correta: true },
      { texto: 'Joshua', correta: false },
      { texto: 'Billy', correta: false },
      { texto: 'Simon', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-018',
    texto_pergunta: 'Qual é o poder especial de Jake?',
    opcoes: [
      { texto: 'Mudar de forma e tamanho', correta: true },
      { texto: 'Voar', correta: false },
      { texto: 'Invisibilidade', correta: false },
      { texto: 'Super força', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-019',
    texto_pergunta: 'Qual é o nome da mãe adotiva de Finn e Jake?',
    opcoes: [
      { texto: 'Margaret', correta: true },
      { texto: 'Minerva', correta: false },
      { texto: 'Martha', correta: false },
      { texto: 'Mary', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-020',
    texto_pergunta: 'Qual é o nome do reino de fogo?',
    opcoes: [
      { texto: 'Reino de Fogo', correta: true },
      { texto: 'Reino das Chamas', correta: false },
      { texto: 'Reino Flamejante', correta: false },
      { texto: 'Reino Ardente', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.PLOT,
  },
  {
    id_pergunta: 'pergunta-021',
    texto_pergunta: 'Quem é o melhor amigo de BMO?',
    opcoes: [
      { texto: 'Football', correta: true },
      { texto: 'NEPTR', correta: false },
      { texto: 'Finn', correta: false },
      { texto: 'Jake', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-022',
    texto_pergunta: 'Qual é o nome do urso que aparece frequentemente na série?',
    opcoes: [
      { texto: 'Urso Partido', correta: true },
      { texto: 'Urso Mágico', correta: false },
      { texto: 'Urso Doce', correta: false },
      { texto: 'Urso Gelado', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-023',
    texto_pergunta: 'Qual é o nome da dimensão alternativa visitada por Finn e Jake?',
    opcoes: [
      { texto: 'Nightosphere', correta: true },
      { texto: 'Darkworld', correta: false },
      { texto: 'Shadowrealm', correta: false },
      { texto: 'Underworld', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.PLOT,
  },
  {
    id_pergunta: 'pergunta-024',
    texto_pergunta: 'Qual é o nome do herói lendário que Finn admira?',
    opcoes: [
      { texto: 'Billy', correta: true },
      { texto: 'Bobby', correta: false },
      { texto: 'Barry', correta: false },
      { texto: 'Benny', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-025',
    texto_pergunta: 'Qual é o nome do pinguim que é amigo de Finn e Jake?',
    opcoes: [
      { texto: 'Gunter', correta: true },
      { texto: 'Gunther', correta: false },
      { texto: 'Gustav', correta: false },
      { texto: 'Gilbert', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-026',
    texto_pergunta: 'Qual é o nome da espada demoníaca de Finn?',
    opcoes: [
      { texto: 'Espada Noturna', correta: true },
      { texto: 'Espada das Trevas', correta: false },
      { texto: 'Espada Sombria', correta: false },
      { texto: 'Espada Maldita', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.TRIVIA,
  },
  {
    id_pergunta: 'pergunta-027',
    texto_pergunta: 'Qual é o nome do reino submarino?',
    opcoes: [
      { texto: 'Reino Oceânico', correta: true },
      { texto: 'Reino Aquático', correta: false },
      { texto: 'Reino Marinho', correta: false },
      { texto: 'Reino das Águas', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.PLOT,
  },
  {
    id_pergunta: 'pergunta-028',
    texto_pergunta: 'Qual é o nome do pai de Marceline?',
    opcoes: [
      { texto: 'Hunson Abadeer', correta: true },
      { texto: 'Hudson Abadeer', correta: false },
      { texto: 'Harrison Abadeer', correta: false },
      { texto: 'Henry Abadeer', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-029',
    texto_pergunta: 'Qual é o nome da princesa que tem poderes de fogo?',
    opcoes: [
      { texto: 'Princesa Chama', correta: true },
      { texto: 'Princesa Fogo', correta: false },
      { texto: 'Princesa Flamejante', correta: false },
      { texto: 'Princesa Ardente', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.CHARACTERS,
  },
  {
    id_pergunta: 'pergunta-030',
    texto_pergunta: 'Qual é o nome do episódio piloto da série?',
    opcoes: [
      { texto: 'Adventure Time', correta: true },
      { texto: 'Slumber Party Panic', correta: false },
      { texto: 'The Enchiridion', correta: false },
      { texto: 'Prisoners of Love', correta: false },
    ],
    categoria: QUESTION_CATEGORIES.EPISODES,
  },
];
