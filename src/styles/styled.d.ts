
import '../../client/node_modules/styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors?: {
      primary?: string;
      secundary: string;

      background?: string;
      // text: string;

      challegeBox: {
        background: string;
      },

      text: {
        color: string;
      },
      main: {
        background: string;
      },
      
      sidebar: {
        background: string;

        button: {
          color: string;
        }
      },
      logo: {
        color: string;
      }
    }
  }
}