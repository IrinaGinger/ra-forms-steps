export default function randomString(length: number): string {
    let randomStr = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i: number = 0; i <= length; i++) {
        randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomStr;
}