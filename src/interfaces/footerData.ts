interface contactData {
  name: string;
  data: string;
}

interface linkData {
  name: string;
  route: string;
}

interface socialData extends linkData {
  icon: string;
}

export interface footerData {
  contact: contactData[];
  links: linkData[];
  terms: linkData[];
  social: socialData[];
}
