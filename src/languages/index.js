
import {
    addLocaleData
} from 'react-intl';
import en_College from "./resources_college/en-US";
import en_School from "./resources_school/en-US";


const AppLocale = {
    en_College: en_College,
    en_School: en_School
};

addLocaleData(AppLocale.en_College.data);
addLocaleData(AppLocale.en_School.data);

export default AppLocale;
