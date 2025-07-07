declare global {
  namespace JSX {
    interface IntrinsicElements {
      "alert-component": {
        title: string;
        subTitle: string;
        backgroundColor: string;
      };
    }
  }
}
export {};
