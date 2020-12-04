export function getNbOfValidPassport(
  input: string,
  predicate: (passport: Partial<Passport>) => passport is Passport,
): number {
  return input
    .split('\n\n')
    .map(row => row.replace(/\n/g, ' '))
    .map(stringPassport => {
      const attributes = stringPassport.split(' ');

      return attributes.reduce((acc, attribute) => {
        const [key, value] = attribute.split(':');
        acc[key as keyof Passport] = value;
        return acc;
      }, {} as Partial<Passport>);
    })
    .filter(predicate).length;
}

export function simplePasswordValidator(
  passport: Partial<Passport>,
): passport is Passport {
  return (
    !!passport.byr &&
    !!passport.iyr &&
    !!passport.eyr &&
    !!passport.hgt &&
    !!passport.hcl &&
    !!passport.ecl &&
    !!passport.pid
  );
}

interface Passport {
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
  cid?: string;
}
