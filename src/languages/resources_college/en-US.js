import appLocaleData from 'react-intl/locale-data/en';

const collegeLocales = {
    "heading" : " Internationalize React app for College",
    "title" : "College Form",
    "name" : "Name of College Student"
};


const EnLang_College = {
    messages: {
        ...collegeLocales
    },
    locale: 'en-US',
    data: appLocaleData
};
export default EnLang_College;