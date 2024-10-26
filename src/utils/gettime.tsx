export default function getTime(dateString: string): number {
    const date = new Date(dateString);

    return date.getTime();
}