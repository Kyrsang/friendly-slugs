import { generateSlug } from '../src/main';

test('should return a slug with three parts', () => {
    const slug = generateSlug();
    const parts = slug.split('-');
    expect(parts.length).toBe(3);
    parts.forEach(part => expect(typeof part).toBe('string'));
});
