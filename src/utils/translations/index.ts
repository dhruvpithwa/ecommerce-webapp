import { enTranslations } from './en';

export const getTranslation = (key: string) => {
    return enTranslations[key];
}
