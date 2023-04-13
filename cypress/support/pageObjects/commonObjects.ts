export var link: number;
export function activeLink(activeLink: string) {
  switch (activeLink) {
    case "Home":
      link = 0;
      break;
    case "Menu":
      link = 1;
      break;
    case "Gallery":
      link = 2;
      break;
    case "Contact":
      link = 3;
      break;
    case "About":
      link = 4;
      break;
    default:
      link = 0;
  }
}
