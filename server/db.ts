import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'The most popular sport in the world.',
        answer: 'What is soccer?',
    },
    {
        points: 200,
        question:
            'This country is denoted by this flag.',
        imgSrc: " https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
        answer: 'What is Canada?',
    },
    
    {
        points: 300,
        question: 'A homemade is shown in this image.',
        imgSrc: 'https://res.cloudinary.com/mel-science/video/upload/fl_progressive:steep,q_auto:good,so_0,w_940/b1bh1lo8sdknn4wqljmt.jpg',
        answer: 'What is a lemon battery?',
    },
    {
        points: 400,
        question: 'This type of school follows the curriculum of public schools but is privately run.',
        answer: 'What is a charter school?',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,    
            question:
                'This is the game where the max hp of a player is 10% of this question\'s point value.',
            answer: 'What is Minecraft?',
        },
        {
            points: 100,
            question:'The safer version of sword fighting',
            answer: 'What is fencing?',
        },
        {
            points: 300,
            question: 'This programming language is commonly used for web development.',
            imgSrc: '/programming_language.png',
            answer: 'What is Javascript?',
        },
        {
            points: 400,
            question:
                'This Frizzleburg barber cuts the hair of all in Frizzleburg if they do not cut it themselves.',
            answer: 'Who is Barett?',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This club is a great way to start entrepreneurship,  in high school using computer science. ',
        answer: 'What is Startup and Services?',
    },
    {
        points: 200,
        question:
            'This is the predecessor to the Ryzen 7 9800x3d. ',
        answer: 'What is the Ryzen 7 7800x3d?',
    },
    {
        points: 300,
        question:
            'This Ivy League school is the third oldest institution of higher education in the United States?',
        answer: 'What is Yale University?',
    },
     {
        points: 400,
        question:
            'This version of the block game makes xbow carting more consistent but often falsely flags Grim Anticheat.',
        answer: 'What is 1.21?',
    },
    
]);


const categories = [
    {
        title: 'My Past',
        questions: pastQuestions
    },
    {
        title: 'My Present',
        questions: presentQuestions
    },
    {
        title: 'My Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}