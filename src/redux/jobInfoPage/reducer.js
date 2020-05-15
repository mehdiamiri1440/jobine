import actionTypes from './actionTypes';

const INITIAL_STATE = {
  job: {
     infoJob: [
        'خلاق، ایده پرداز، دارای تکنیک و توانائی خلق ایده های نو در زمینه طراحی رابط کاربری و گرافیک مرتبط با وب و فضای دیجیتال',
        'متخصص طراحی رابط کاربری  (UI) و توسعه دهنده تجربه کاربری (UX) وب سایت، اپلیکیشن و برنامه های کاربردی',
        'شناخت کامل رنگ، اشیا، ترکیب بندی و استفاده صحیح از عناصر بصری',
        'تسلط کامل بر Adobe Photoshop و Adobe Illustrator',
        'توانایی ساخت Sketch و Wireframe و Prototypeارائه نمونه کار در زمان ارسال رزومه الزامی میباشد.',
     ],
     chore: [
        'تسلط نسبی بر زبان انگلیسی',
        'توانایی تحقیق و فراگیری ترندهای جهانی',
        'انعطاف پذیری و اخلاق حرفه ای'
     ],
     makinge: {
        diploma: "لیسانس",
        experience: 'یک سال'
     },
     contact: {
        phone: '09031234567',
        address: 'تهران خیابان ولیعصر کوچه شهید قاسمی بن بست دوم ساختمان کاج واحد ۷'
     },
     wage: {
        min: '۲.۵۰۰.۰۰۰',
        max: '۳.۵۰۰.۰۰۰ '
     },
     kind: [
        'دورکاری', 'پاره وقت', 'پروژه'
     ],
     skills: [
        'HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'JQUERY', 'NEXT.JS', 'SASS'
     ],
     gender: 'مهم نیست',
     age: 24,
     city: [
        'همدان', 'تهران', 'اراک', 'زنجان'
     ],
     category: 'طراحی',
  },

}

export default (state = INITIAL_STATE, action) => {
   // switch (action.type) {
   //   case actionTypes.CHANGE_PASSWORD_SUCCESSFULLY: {
   //     return {
   //       ...state,
   //       changePasswordLoading: false,
   //       changePasswordFailed: false,
   //       changePasswordError: false,
   //       changePasswordMessage: null,
   //       changePasswordStatus: { ...action.payload }
   //     };
   //   };
   //   default:
       return state;
   // }
 };
 