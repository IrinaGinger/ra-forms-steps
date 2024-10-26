export default function dateFormat(dateString: string): string {
    const date = new Date(dateString);

    return date.toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' });
}