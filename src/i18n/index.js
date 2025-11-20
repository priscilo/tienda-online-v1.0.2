import en from './en.json';
import es from './es.json';

const languages = {
    en,
    es
};

export const getTranslation = (lang = 'es') => {
    return languages[lang] || languages['es'];
};