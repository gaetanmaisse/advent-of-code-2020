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

export function complexPasswordValidator(
  passport: Partial<Passport>,
): passport is Passport {
  return (
    validateDate(passport.byr, '1920', '2002') &&
    validateDate(passport.iyr, '2010', '2020') &&
    validateDate(passport.eyr, '2020', '2030') &&
    validateHeight(passport.hgt) &&
    validateHairColor(passport.hcl) &&
    validateEyeColor(passport.ecl) &&
    validatePasswordId(passport.pid)
  );
}

export function validateDate(
  inputDate: string | undefined,
  minDate: string,
  maxDate: string,
): boolean {
  if (!inputDate || inputDate.length !== 4) {
    return false;
  }
  return minDate <= inputDate && inputDate <= maxDate;
}

export function validateHairColor(input: string | undefined): boolean {
  return /#([0-9]|[a-f]){6}/.test(input ?? '');
}

export function validatePasswordId(input: string | undefined): boolean {
  return /^[0-9]{9}$/.test(input ?? '');
}

export function validateEyeColor(input: string | undefined): boolean {
  const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  return validEyeColors.includes(input ?? '');
}

export function validateHeight(input: string | undefined): boolean {
  if (!input) {
    return false;
  }

  if (input.includes('cm')) {
    const heightInCm = Number(input.split('cm')[0]);
    return 150 <= heightInCm && heightInCm <= 193;
  }

  if (input.includes('in')) {
    const heightInInches = Number(input.split('in')[0]);
    return 59 <= heightInInches && heightInInches <= 76;
  }
  return false;
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
