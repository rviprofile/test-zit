// emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      [key: string]: string;
    };
  }
}
