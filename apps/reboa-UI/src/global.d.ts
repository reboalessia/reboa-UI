declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}

interface Navigator {
  clipboard: {
    writeText(text: string): Promise<void>;
  };
}

declare const navigator: Navigator;
