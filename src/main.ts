const adjectives: string[] = ['brave', 'calm', 'bright', 'sneaky', 'loud'];
const nouns: string[] = ['ocean', 'forest', 'sky', 'mountain', 'river'];
const animals: string[] = ['fox', 'eagle', 'wolf', 'otter', 'bear'];

function getRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generateSlug(): string {
    return `${getRandom(adjectives)}-${getRandom(nouns)}-${getRandom(animals)}`;
}
