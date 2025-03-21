export default function hash(...args: any[]) {
  const FNV_OFFSET_BASIS = 0x811c9dc5;
  const FNV_32_PRIME = 0x01000193;

  let hash = FNV_OFFSET_BASIS;

  args.forEach((arg) => {
    const str = arg.toString();
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash *= FNV_32_PRIME;
      hash &= 0xffffffff;
    }
  });

  return hash.toString(16);
}
