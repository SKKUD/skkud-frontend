export default function getDayOfWeek(date) {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];

    return dayOfWeek;
}
